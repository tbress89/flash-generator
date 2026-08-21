// Converts a Date into "minutes from midnight" (e.g. 10:00 AM -> 600) for the given IANA
// timezone. Working in minutes-from-midnight makes it trivial to check whether two time
// blocks overlap (simple integer comparisons) without fighting Date objects, DST, etc.
function getMinutesFromMidnight(date, timeZone = 'Europe/Brussels') {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).formatToParts(date);

    const hour = Number(parts.find(part => part.type === 'hour').value);
    const minute = Number(parts.find(part => part.type === 'minute').value);
    return hour * 60 + minute;
}

// Splits a cabine string like "1 + 2" into individual cabine tokens (e.g. ["1", "2"]).
// Unassigned cabines ("-", empty, etc.) resolve to an empty array.
function parseCabineTokens(cabineStr) {
    if (!cabineStr || cabineStr.trim() === '-') return [];
    return cabineStr.split('+')
        .map(token => token.trim())
        .filter(token => token && token !== '-');
}

// On Saturdays, overrides the cabine assignment for matches that fall into one of the fixed
// field + kickoff-time slots defined in SATURDAY_CABINE_OVERRIDES, replacing whatever cabine
// preference the team itself has configured. Does nothing on any other day of the week.
function applySaturdayCabineOverrides(dateGroup) {
    const matchesForDate = Object.values(dateGroup.fields).flat();
    if (matchesForDate.length === 0) return;

    const isSaturday = new Date(matchesForDate[0].startTime).getDay() === 6;
    if (!isSaturday) return;

    SATURDAY_CABINE_OVERRIDES.forEach(override => {
        const matchesInField = dateGroup.fields[override.fieldName];
        if (!matchesInField) return;

        const matchesInSlot = matchesInField.filter(match => match.startMinutes === override.startMinutes);

        matchesInSlot.forEach((match, index) => {
            const cabinePair = override.cabinePairs[index];
            if (!cabinePair) return;

            match.cabineHome = cabinePair.cabineHome;
            match.cabineAway = cabinePair.cabineAway;
        });
    });
}

// Given a flat list of cabine usage entries (each with at least a `cabine`, `startMinutes`
// and `endMinutes`), finds every pair of entries that use the same cabine at overlapping
// times.
//
// Greedy algorithm: group usages by cabine, sort each group by start time, then sweep
// through once while tracking the "current" (still-open) interval. If the next usage starts
// before the current interval ends, it's a conflict; we then keep whichever of the two ends
// later, since that's the interval that could still overlap with what comes after it. This
// is the same greedy strategy behind classic interval-scheduling problems, applied here to
// detect overlaps in a single O(n log n) pass per cabine instead of comparing every pair.
function findCabineConflicts(usages) {
    const conflicts = [];
    const usagesByCabine = {};

    usages.forEach(usage => {
        if (!usagesByCabine[usage.cabine]) usagesByCabine[usage.cabine] = [];
        usagesByCabine[usage.cabine].push(usage);
    });

    Object.values(usagesByCabine).forEach(cabineUsages => {
        const sorted = cabineUsages.slice().sort((a, b) => a.startMinutes - b.startMinutes);

        let current = sorted[0];
        for (let i = 1; i < sorted.length; i++) {
            const next = sorted[i];

            if (next.startMinutes < current.endMinutes) {
                conflicts.push({ cabine: next.cabine, first: current, second: next });
                current = next.endMinutes > current.endMinutes ? next : current;
            } else {
                current = next;
            }
        }
    });

    return conflicts;
}

// Formats dates for the server request
function formatDateForServer(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getMostRecentMonday() {
    const today = new Date();
    const day = today.getDay();
    // Calculate days to subtract to get to Monday (0 is Sunday, so if 0 subtract 6, else subtract day - 1)
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(today.setDate(diff));
}

// Fills the dropdown menu with weeks, each split into 4 entries:
// Midweek Flash (Mon-Thu), Vrijdag Flash, Zaterdag Flash, Zondag Flash
function generateWeeks() {
    const selector = document.getElementById('week-selector');
    let currentMonday = getMostRecentMonday();
    const shortOptions = { month: 'short', day: 'numeric' };

    for (let i = 0; i < 20; i++) {
        const monday = new Date(currentMonday);

        const thursday = new Date(monday);
        thursday.setDate(monday.getDate() + 3);

        const friday = new Date(monday);
        friday.setDate(monday.getDate() + 4);

        const saturday = new Date(monday);
        saturday.setDate(monday.getDate() + 5);

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);

        const optgroup = document.createElement('optgroup');
        optgroup.label = `${monday.toLocaleDateString('nl-BE', shortOptions)} - ${sunday.toLocaleDateString('nl-BE', shortOptions)}`;

        const entries = [
            { label: `Midweek Flash (${monday.toLocaleDateString('nl-BE', shortOptions)} - ${thursday.toLocaleDateString('nl-BE', shortOptions)})`, start: monday, end: thursday },
            { label: `Vrijdag Flash (${friday.toLocaleDateString('nl-BE', shortOptions)})`, start: friday, end: friday },
            { label: `Zaterdag Flash (${saturday.toLocaleDateString('nl-BE', shortOptions)})`, start: saturday, end: saturday },
            { label: `Zondag Flash (${sunday.toLocaleDateString('nl-BE', shortOptions)})`, start: sunday, end: sunday },
        ];

        entries.forEach(entry => {
            const optionElement = document.createElement('option');
            optionElement.value = `${formatDateForServer(entry.start)}|${formatDateForServer(entry.end)}`;
            optionElement.text = entry.label;
            optgroup.appendChild(optionElement);
        });

        selector.appendChild(optgroup);

        currentMonday.setDate(currentMonday.getDate() + 7);
    }
}