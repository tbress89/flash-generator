const teamConfig = [
    // Dames
    { teamId: "364085", internalName: "Dames 1", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "8"
    }, cabinesAfter13h: { 
        cabineHome: "11", cabineAway: "8"
    }},

    { teamId: "364085", internalName: "Dames 1", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "8"
    }, cabinesAfter13h: { 
        cabineHome: "11", cabineAway: "8"
    }},
    { teamId: "364484", internalName: "Dames 2", cabinesBefore13h: { 
        cabineHome: "6", cabineAway: "2"
    }, cabinesAfter13h: { 
        cabineHome: "6", cabineAway: "2"
    }},

    // Meisjes
    { teamId: "380702", internalName: "MU20 Barcelona Girls", cabinesBefore13h: { 
        cabineHome: "-", cabineAway: "-"
    }, cabinesAfter13h: { 
        cabineHome: "-", cabineAway: "-"
    }},
    { teamId: "380706", internalName: "MU13 Ajax Girls", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "5"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "5"
    }},

    // Senioren Heren
    // Heren 1 always uses cabines 1+2 (home) and 5+6 (away), so these are not editable in the UI.
    { teamId: "364477", internalName: "Heren 1", cabinesEditable: false, cabinesBefore13h: { 
        cabineHome: "1 + 2", cabineAway: "5 + 6"
    }, cabinesAfter13h: { 
        cabineHome: "1 + 2", cabineAway: "5 + 6"
    }},
    { teamId: "364485", internalName: "Heren 2", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "8"
    }, cabinesAfter13h: { 
        cabineHome: "11", cabineAway: "8"
    }},
    { teamId: "367644", internalName: "Heren 3", cabinesBefore13h: { 
        cabineHome: "2", cabineAway: "6"
    }, cabinesAfter13h: { 
        cabineHome: "2", cabineAway: "6"
    }},
    { teamId: "367646", internalName: "Heren 4", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "8"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "7"
    }},
    { teamId: "367645", internalName: "Heren 5", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "7"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "7"
    }},
    { teamId: "367649", internalName: "Heren 6", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "4"
    }},
    { teamId: "367647", internalName: "Heren 7", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "7"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "7"
    }},
    { teamId: "364486", internalName: "Heren 8", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "6"
    }, cabinesAfter13h: { 
        cabineHome: "11", cabineAway: "6"
    }},
    { teamId: "380941", internalName: "Heren 9", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "7"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "7"
    }},
    { teamId: "367648", internalName: "Heren 10", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "8"
    }, cabinesAfter13h: { 
        cabineHome: "2", cabineAway: "6"
    }},

    // Vets
    { teamId: "364487", internalName: "Veteranen", cabinesBefore13h: { 
        cabineHome: "2", cabineAway: "6"
    }, cabinesAfter13h: { 
        cabineHome: "2", cabineAway: "6"
    }},

    // Jeugd
    { teamId: "364488", internalName: "U21 BD", cabinesBefore13h: { 
        cabineHome: "8", cabineAway: "2"
    }, cabinesAfter13h: { 
        cabineHome: "8", cabineAway: "2"
    }},
    { teamId: "378984", internalName: "U19 PSG", cabinesBefore13h: { 
        cabineHome: "8", cabineAway: "2"
    }, cabinesAfter13h: { 
        cabineHome: "8", cabineAway: "2"
    }},
    { teamId: "378983", internalName: "U19 St Etienne", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378982", internalName: "U17 Lazio Roma", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "5"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "5"
    }},
    { teamId: "378985", internalName: "U17 AS Fiorentina", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "378981", internalName: "U16 Benfica", cabinesBefore13h: { 
        cabineHome: "-", cabineAway: "-"
    }, cabinesAfter13h: { 
        cabineHome: "-", cabineAway: "-"
    }},
    { teamId: "378980", internalName: "U15 Celta Paars", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "5"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "5"
    }},
    { teamId: "378986", internalName: "U15 Celta Wit", cabinesBefore13h: { 
        cabineHome: "8", cabineAway: "2"
    }, cabinesAfter13h: { 
        cabineHome: "8", cabineAway: "2"
    }},
    { teamId: "379377", internalName: "U15 Getafe", cabinesBefore13h: { 
        cabineHome: "-", cabineAway: "-"
    }, cabinesAfter13h: { 
        cabineHome: "-", cabineAway: "-"
    }},
    { teamId: "378979", internalName: "U14 Madrid", cabinesBefore13h: { 
        cabineHome: "11", cabineAway: "6"
    }, cabinesAfter13h: { 
        cabineHome: "11", cabineAway: "6"
    }},
    { teamId: "378976", internalName: "U13 Man City", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378977", internalName: "U13 Man United", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "378974", internalName: "U12 Napoli", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "378975", internalName: "U12 Sampdoria", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "379974", internalName: "U12 Inter Milaan", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378972", internalName: "U11 Celtic", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378973", internalName: "U11 Rangers", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "378967", internalName: "U10 Arsenal", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378966", internalName: "U10 Chelsea", cabinesBefore13h: { 
        cabineHome: "9", cabineAway: "1"
    }, cabinesAfter13h: { 
        cabineHome: "9", cabineAway: "1"
    }},
    { teamId: "378965", internalName: "U10 Liverpool", cabinesBefore13h: { 
        cabineHome: "7", cabineAway: "4"
    }, cabinesAfter13h: { 
        cabineHome: "7", cabineAway: "4"
    }},
    { teamId: "378964", internalName: "U9 Bayer Leverkusen", cabinesBefore13h: { 
        cabineHome: "-", cabineAway: "-"
    }, cabinesAfter13h: { 
        cabineHome: "-", cabineAway: "-"
    }},
    { teamId: "378963", internalName: "U9 Bayern München", cabinesBefore13h: { 
        cabineHome: "10", cabineAway: "5"
    }, cabinesAfter13h: { 
        cabineHome: "10", cabineAway: "5"
    }},
    { teamId: "378962", internalName: "U9 Eintr. Frankfurt", cabinesBefore13h: { 
        cabineHome: "-", cabineAway: "-"
    }, cabinesAfter13h: { 
        cabineHome: "-", cabineAway: "-"
    }},
    { teamId: "378960", internalName: "U8 Porto", cabinesBefore13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }, cabinesAfter13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }},
    { teamId: "378959", internalName: "U8 Sporting", cabinesBefore13h: { 
        cabineHome: "11L", cabineAway: "6L"
    }, cabinesAfter13h: { 
        cabineHome: "11L", cabineAway: "6L"
    }},
    { teamId: "378958", internalName: "U8 Braga", cabinesBefore13h: { 
        cabineHome: "11R", cabineAway: "6R"
    }, cabinesAfter13h: { 
        cabineHome: "11R", cabineAway: "6R"
    }},
    { teamId: "378955", internalName: "U7 PSV", cabinesBefore13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }, cabinesAfter13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }},
    { teamId: "378957", internalName: "U7 Feyenoord", cabinesBefore13h: { 
        cabineHome: "8R", cabineAway: "2R"
    }, cabinesAfter13h: { 
        cabineHome: "8R", cabineAway: "2R"
    }},
    { teamId: "378953", internalName: "U6 FC Kopenhagen", cabinesBefore13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }, cabinesAfter13h: { 
        cabineHome: "8L", cabineAway: "2L"
    }},
    { teamId: "378954", internalName: "U6 Brondby", cabinesBefore13h: { 
        cabineHome: "11R", cabineAway: "6R"
    }, cabinesAfter13h: { 
        cabineHome: "11R", cabineAway: "6R"
    }},
];

const barServiceConfig = [];
// const barServiceConfig = [
//     {
//         date: "05/09/2026",
//         playerShifts: [
//             { startTime: "12:00", endTime: "15:00", team: "Dames 1", player: "Alice" },
//             { startTime: "15:00", endTime: "18:00", team: "Heren 1", player: "Bob" },
//             { startTime: "18:00", endTime: "21:00", team: "Veteranen", player: "John" }
//         ],
//         teamShifts: [
//             { startTime: "08:30", endTime: "11:00", team: "U11 Rangers", amountOfParents: 3 },
//             { startTime: "11:00", endTime: "14:00", team: "U14 Madrid", amountOfParents: 3 }

//         ]
//     },
//     {
//         date: "06/09/2026",
//         playerShifts: [
//             { startTime: "12:00", endTime: "15:00", team: "Dames 1", player: "Alice" },
//             { startTime: "15:00", endTime: "18:00", team: "Heren 1", player: "Bob" }
//         ],
//         teamShifts: []
//     },
//     {
//         date: "19/09/2026",
//         playerShifts: [],
//         teamShifts: [
//             { startTime: "08:30", endTime: "11:00", team: "U11 Rangers", amountOfParents: 3 },
//             { startTime: "11:00", endTime: "14:00", team: "U14 Madrid", amountOfParents: 3 }

//         ]
//     },
// ];

const cabineCleaningConfig = [];
// const cabineCleaningConfig = [
//     { date: "05/09/2026", time: "09:00", cabine: "11+8+2+6", team: "U9 Porto" },
//     { date: "05/09/2026", time: "09:30", cabine: "10+5", team: "U15 Celta Paars" },
//     { date: "05/09/2026", time: "09:30", cabine: "7+4+9+1", team: "U11 Rangers" },
//     { date: "05/09/2026", time: "10:15", cabine: "11+6", team: "U7 PSV" },
//     { date: "05/09/2026", time: "12:30", cabine: "7+4+9+1", team: "U15 Getafe" },
// ];

// Maps RBFA pitch codes to our internal field names
const pitchCodeToFieldName = {
    1: 'A-KGV',
    2: 'B-KGV',
    3: 'C',
};

// The RBFA calendar only gives us a match's start time, not its duration, so we assume
// every match (and therefore its cabine usage) occupies this many minutes. Used to detect
// cabine usage conflicts between teams whose matches overlap in time.
const CABINE_USAGE_DURATION_MINUTES = 120;

// U6, U7, U8 and U9 teams play shorter matches, so their cabine usage is shorter too.
const CABINE_USAGE_DURATION_MINUTES_YOUNGEST = 75;
const YOUNGEST_TEAM_AGE_PREFIXES = ["U6", "U7", "U8", "U9", "U10", "U11", "MU13"];

// Returns the cabine usage duration (in minutes) for a given team's internal name,
// using the shorter duration for U6/U7/U8/U9 teams and the default for everyone else.
function getCabineUsageDurationMinutes(internalName) {
    const isYoungestTeam = YOUNGEST_TEAM_AGE_PREFIXES.some(prefix =>
        internalName && internalName.startsWith(prefix + " ")
    );
    return isYoungestTeam ? CABINE_USAGE_DURATION_MINUTES_YOUNGEST : CABINE_USAGE_DURATION_MINUTES;
}

// A cabine must already be free this many minutes before a match starts (e.g. so the team
// can get ready), so this is subtracted from a match's start time when checking for cabine
// usage conflicts with the preceding match.
const CABINE_FREE_BEFORE_MATCH_MINUTES = 15;

// The valid cabine numbers that can be picked from the editable cabine dropdowns (there is no cabine 3).
const CABINE_DROPDOWN_OPTIONS = ["1", "2", "2L", "2R", "4", "5", "6", "6L", "6R", "7", "8", "8L", "8R", "9", "10", "11", "11L", "11R", "tennis"];
