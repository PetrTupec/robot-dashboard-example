export const errors = [
    {
        "solution": {
            "en": "Power cycle the system by turning it off and on again.",
            "cs": "Vypněte a znovu zapněte napájení systému."
        },
        "cause": {
            "en": "Voltage to the servo dropped below 100 V.",
            "cs": "Napětí serva kleslo pod 100 V."
        },
        "message": {
            "en": "Servo power failure",
            "cs": "Výpadek napájení serva"
        },
        "id": "AX051"
    },
    {
        "solution": {
            "en": "Eliminate the source of the obstruction.",
            "cs": "Odstraňte zdroj překážky."
        },
        "cause": {
            "en": "The safety mechanism was triggered by an obstruction.",
            "cs": "Bezpečnostní mechanismus byl aktivován kvůli překážce."
        },
        "message": {
            "en": "Safety mechanism active",
            "cs": "Bezpečnostní mechanismus aktivní"
        },
        "id": "EX410"
    },
    {
        "solution": {
            "en": "Activate the E-axis servo power and reboot the system.",
            "cs": "Zapněte napájení E-osy a restartujte systém."
        },
        "cause": {
            "en": "The servo power for the E-axis is currently disabled.",
            "cs": "Napájení serva pro E-osu je vypnuté."
        },
        "message": {
            "en": "E-axis servo is off",
            "cs": "Servo E-osy je vypnuté"
        },
        "id": "EX310"
    },
    {
        "solution": {
            "en": "1. Resolve the obstruction and restart.\n2. Run warm-up sequence.",
            "cs": "1. Odstraňte překážku a restartujte.\n2. Spusťte zahřívací sekvenci."
        },
        "cause": {
            "en": "1. A collision was detected.\n2. In cold conditions, insufficient grease temperature at startup.",
            "cs": "1. Byla detekována kolize.\n2. Při nízkých teplotách může být tuk při spuštění příliš tuhý."
        },
        "message": {
            "en": "Obstacle or cold start issue - axis",
            "cs": "Překážka nebo problém při studeném startu - osa"
        },
        "id": "EX701"
    },
    {
        "solution": {
            "en": "Inspect the program flow or structure.",
            "cs": "Zkontrolujte strukturu nebo průběh programu."
        },
        "cause": {
            "en": "Execution reached a HOLD command.",
            "cs": "Byl vykonán příkaz HOLD."
        },
        "message": {
            "en": "Custom user message",
            "cs": "Uživatelsky definovaná zpráva"
        },
        "id": "EX190"
    },
    {
        "solution": {
            "en": "Modify the robot's orientation data.",
            "cs": "Změňte data orientace robota nebo upravte typ interpolace."
        },
        "cause": {
            "en": "The robot is unable to reproduce the taught orientation.",
            "cs": "Robot nedokáže zopakovat naučenou orientaci."
        },
        "message": {
            "en": "Orientation mismatch",
            "cs": "Neshoda v orientaci"
        },
        "id": "EX150"
    },
    {
        "solution": {
            "en": "Inspect the wire feed system for blockages.",
            "cs": "Zkontrolujte podávání drátu kvůli možné blokaci."
        },
        "cause": {
            "en": "The motor in the wire feeder has become jammed.",
            "cs": "Motor podavače drátu je zablokovaný."
        },
        "message": {
            "en": "Wire feed jammed",
            "cs": "Zablokování podavače drátu"
        },
        "id": "WX610"
    }
];
