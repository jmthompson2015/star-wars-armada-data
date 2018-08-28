[
    {
        name: "Imperial II-class Star Destroyer",
        size: "large",
        faction: "Galactic Empire",
        hull: 11,
        __comment: "dice array is [red, blue, black] counts",
        "squadron-attack": [0, 2, 0],
        command: 3,
        squadron: 4,
        engineering: 4,
        attack: {
            front: [4, 4, 0],
            right: [2, 2, 0],
            left: [2, 2, 0],
            rear: [1, 2, 0]
        },
        shield: {
            front: 4,
            right: 3,
            left: 3,
            rear: 2
        },
        "defense-tokens": ["Brace", "Redirect", "Redirect", "Contain"],
        "speed-chart": {
            "1": ["|"],
            "2": ["|", "|"],
            "3": ["-", "|", "|"]
        },
        slots: [
            "Officer",
            "Weapons Team",
            "Offensive Retrofit",
            "Defensive Retrofit",
            "Ion Cannons",
            "Turbolasers"
        ],
        points: 120,
        "ship-image": "ship/galactic-empire/imperial-class-star-destroyer.png",
        image: "ship-card/galactic-empire/imperial-ii-class-star-destroyer.png"
    }
];
