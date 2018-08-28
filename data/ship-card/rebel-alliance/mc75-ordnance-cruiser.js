[
    {
        name: "MC75 Ordnance Cruiser",
        size: "large",
        faction: "Rebel Alliance",
        hull: 9,
        __comment: "dice array is [red, blue, black] counts",
        "squadron-attack": [0, 0, 1],
        command: 3,
        squadron: 2,
        engineering: 4,
        "defense-tokens": ["Brace", "Redirect", "Contain", "Contain"],
        attack: {
            front: [0, 2, 3],
            right: [3, 0, 2],
            left: [3, 0, 2],
            rear: [0, 0, 2]
        },
        shield: {
            front: 4,
            right: 3,
            left: 3,
            rear: 3
        },
        "speed-chart": {
            "1": ["||"],
            "2": ["|", "|"],
            "3": ["-", "|", "|"]
        },
        slots: [
            "Officer",
            "Weapons Team",
            "Offensive Retrofit",
            "Defensive Retrofit",
            "Ordnance",
            "Ordnance"
        ],
        points: 100,
        "ship-image": "ship/rebel-alliance/mc75-ordnance-cruiser.png",
        image: "ship-card/rebel-alliance/mc75-ordnance-cruiser.png"
    }
];
