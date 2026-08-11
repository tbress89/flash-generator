const teamConfig = [
    // Dames
    { teamId: "364085", internalName: "Dames 1", cabineHome: "11", cabineAway: "8"},
    { teamId: "364484", internalName: "Dames 2", cabineHome: "6", cabineAway: "2"},

    // Meisjes
    { teamId: "380702", internalName: "MU20 Barcelona Girls", cabineHome: "-", cabineAway: "-"},
    { teamId: "380706", internalName: "MU13 Ajax Girls", cabineHome: "-", cabineAway: "-"},

    // Senioren Heren
    { teamId: "364477", internalName: "Heren 1", cabineHome: "1 + 2", cabineAway: "5 + 6"},
    { teamId: "364485", internalName: "Heren 2", cabineHome: "-", cabineAway: "-"},
    { teamId: "367644", internalName: "Heren 3", cabineHome: "-", cabineAway: "-"},
    { teamId: "367646", internalName: "Heren 4", cabineHome: "11", cabineAway: "8"},
    { teamId: "367645", internalName: "Heren 5", cabineHome: "10", cabineAway: "7"},
    { teamId: "367649", internalName: "Heren 6", cabineHome: "9", cabineAway: "4"},
    { teamId: "367647", internalName: "Heren 7", cabineHome: "-", cabineAway: "-"},
    { teamId: "364486", internalName: "Heren 8", cabineHome: "-", cabineAway: "-"},
    { teamId: "380941", internalName: "Heren 9", cabineHome: "-", cabineAway: "-"},
    { teamId: "367648", internalName: "Heren 10", cabineHome: "-", cabineAway: "-"},

    // Vets
    { teamId: "364487", internalName: "Veteranen", cabineHome: "2", cabineAway: "6"},

    // Jeugd
    { teamId: "364488", internalName: "U21 BD", cabineHome: "-", cabineAway: "-"},
    { teamId: "378984", internalName: "U19 PSG", cabineHome: "-", cabineAway: "-"},
    { teamId: "378983", internalName: "U19 St Etienne", cabineHome: "-", cabineAway: "-"},
    { teamId: "378982", internalName: "U17 Lazio Roma", cabineHome: "-", cabineAway: "-"},
    { teamId: "378985", internalName: "U17 AS Fiorentina", cabineHome: "-", cabineAway: "-"},
    { teamId: "378981", internalName: "U16 Benfica", cabineHome: "-", cabineAway: "-"},
    { teamId: "378980", internalName: "U15 Celta Paars", cabineHome: "-", cabineAway: "-"},
    { teamId: "378986", internalName: "U15 Celta Wit", cabineHome: "-", cabineAway: "-"},
    { teamId: "379377", internalName: "U15 Getafe", cabineHome: "-", cabineAway: "-"},
    { teamId: "378979", internalName: "U14 Madrid", cabineHome: "-", cabineAway: "-"},
    { teamId: "378976", internalName: "U13 Man City", cabineHome: "-", cabineAway: "-"},
    { teamId: "378977", internalName: "U13 Man United", cabineHome: "-", cabineAway: "-"},
    { teamId: "378974", internalName: "U12 Napoli", cabineHome: "-", cabineAway: "-"},
    { teamId: "378975", internalName: "U12 Sampdoria", cabineHome: "-", cabineAway: "-"},
    { teamId: "379974", internalName: "U12 Inter Milaan", cabineHome: "-", cabineAway: "-"},
    { teamId: "378972", internalName: "U11 Celtic", cabineHome: "-", cabineAway: "-"},
    { teamId: "378973", internalName: "U11 Rangers", cabineHome: "-", cabineAway: "-"},
    { teamId: "378967", internalName: "U10 Arsenal", cabineHome: "-", cabineAway: "-"},
    { teamId: "378966", internalName: "U10 Chelsea", cabineHome: "-", cabineAway: "-"},
    { teamId: "378965", internalName: "U10 Liverpool", cabineHome: "-", cabineAway: "-"},
    { teamId: "378964", internalName: "U9 Bayer Leverkusen", cabineHome: "-", cabineAway: "-"},
    { teamId: "378963", internalName: "U9 Bayern München", cabineHome: "-", cabineAway: "-"},
    { teamId: "378962", internalName: "U9 Eintr. Frankfurt", cabineHome: "-", cabineAway: "-"},
    { teamId: "378960", internalName: "U8 Porto", cabineHome: "-", cabineAway: "-"},
    { teamId: "378959", internalName: "U8 Sporting", cabineHome: "-", cabineAway: "-"},
    { teamId: "378958", internalName: "U8 Braga", cabineHome: "-", cabineAway: "-"},
    { teamId: "378955", internalName: "U7 PSV", cabineHome: "-", cabineAway: "-"},
    { teamId: "378957", internalName: "U7 Feyenoord", cabineHome: "-", cabineAway: "-"},
    { teamId: "378953", internalName: "U6 FC Kopenhagen", cabineHome: "-", cabineAway: "-"},
    { teamId: "378954", internalName: "U6 Brondby", cabineHome: "-", cabineAway: "-"},
];

const barServiceConfig = [
    {
        date: "05/09/2026",
        playerShifts: [
            { startTime: "12:00", endTime: "15:00", team: "Dames 1", player: "Alice" },
            { startTime: "15:00", endTime: "18:00", team: "Heren 1", player: "Bob" },
            { startTime: "18:00", endTime: "21:00", team: "Veteranen", player: "John" }
        ],
        teamShifts: [
            { startTime: "08:30", endTime: "11:00", team: "U11 Rangers", amountOfParents: 3 },
            { startTime: "11:00", endTime: "14:00", team: "U14 Madrid", amountOfParents: 3 }

        ]
    },
    {
        date: "06/09/2026",
        playerShifts: [
            { startTime: "12:00", endTime: "15:00", team: "Dames 1", player: "Alice" },
            { startTime: "15:00", endTime: "18:00", team: "Heren 1", player: "Bob" }
        ],
        teamShifts: []
    },
    {
        date: "19/09/2026",
        playerShifts: [],
        teamShifts: [
            { startTime: "08:30", endTime: "11:00", team: "U11 Rangers", amountOfParents: 3 },
            { startTime: "11:00", endTime: "14:00", team: "U14 Madrid", amountOfParents: 3 }

        ]
    },
];

const cabineCleaningConfig = [
    { date: "05/09/2026", time: "09:00", cabine: "11+8+2+6", team: "U9 Porto" },
    { date: "05/09/2026", time: "09:30", cabine: "10+5", team: "U15 Celta Paars" },
    { date: "05/09/2026", time: "09:30", cabine: "7+4+9+1", team: "U11 Rangers" },
    { date: "05/09/2026", time: "10:15", cabine: "11+6", team: "U7 PSV" },
    { date: "05/09/2026", time: "12:30", cabine: "7+4+9+1", team: "U15 Getafe" },
];
