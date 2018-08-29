[
    {
        name: "MC30c Scout Frigate",
        size: "small",
        faction: "Rebel Alliance",
        hull: 4,
        __comment: "dice array is [red, blue, black] counts",
        "squadron-attack": [0, 1, 0],
        command: 2,
        squadron: 1,
        engineering: 3,
        "defense-tokens": ["Evade", "Evade", "Redirect", "Redirect"],
        attack: {
            front: [1, 0, 2],
            right: [2, 0, 3],
            left: [2, 0, 3],
            rear: [1, 0, 1]
        },
        shield: {
            front: 3,
            right: 3,
            left: 3,
            rear: 2
        },
        "speed-chart": {
            "1": ["|"],
            "2": ["|", "|"],
            "3": ["-", "|", "||"],
            "4": ["-", "|", "|", "-"]
        },
        slots: [
            "Officer",
            "Weapons Team",
            "Defensive Retrofit",
            "Ordnance",
            "Turbolasers"
        ],
        points: 69,
        "ship-image": "ship/rebel-alliance/mc30c-scout-frigate.png",
        image: "ship-card/rebel-alliance/mc30c-scout-frigate.png"
    }
];
