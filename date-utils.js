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