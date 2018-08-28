[
    {
        name: "Gozanti-class Assault Carriers",
        size: "small",
        faction: "Galactic Empire",
        hull: 3,
        __comment: "dice array is [red, blue, black] counts",
        "squadron-attack": [0, 1, 0],
        command: 1,
        squadron: 2,
        engineering: 2,
        "defense-tokens": ["Scatter", "Evade"],
        attack: {
            front: [1, 0, 0],
            right: [0, 1, 0],
            left: [0, 1, 0],
            rear: [0, 0, 0]
        },
        shield: {
            front: 1,
            right: 1,
            left: 1,
            rear: 1
        },
        "speed-chart": {
            "1": ["||"],
            "2": ["|", "|"],
            "3": ["|", "|", "-"]
        },
        slots: ["Officer", "Fleet Support", "Offensive Retrofit"],
        points: 28,
        "ship-image": "ship/galactic-empire/gozanti-class-carriers.png",
        image: "ship-card/galactic-empire/gozanti-class-assault-carriers.png"
    }
];
