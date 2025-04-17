export const errors = [
    {
        "solution": { "en": "Turn off the power and then newly turn it on.\nIf the error recurs frequently, consult Panasonic representatives." },
        "cause": { "en": "Servo power voltage degreased to 100 V or lower." },
        "message": { "en": "Servo power down" },
        "id": "A7051"
    },
    {

        "solution": { "en": "Remove the cause of interference." },
        "cause": { "en": "Safety holder is activated due to interference etc." },
        "message": { "en": "Safety-holder working" },
        "id": "E4010"
    },
    {
        "solution": { "en": "Turn ON the target independent E-axis servo power, and then restart." },
        "cause": { "en": "The target independent E-axis servo power is OFF." },
        "message": { "en": "Please turn on Servo(**) **is Axis name." },
        "id": "E3100"
    },
    {
        "solution": { "en": "001:Remove cause of interference and restart.\n002:Execute warm-up operation." },
        "cause": { "en": "001:Collision is detected.\n002:If it occurs on the initial start-up operation of the day in cold climates, grease may not be warm enough." },
        "message": { "en": "Collision detected" },
        "id": "E7001"
    },
    {
        "solution": { "en": "Check the program architecture." },
        "cause": { "en": "HOLD command was executed." },
        "message": { "en": "(User defined message)" },
        "id": "E1900"
    },
    {
        "solution": {
            "en": "Change robot orientation data.",
            "cs": "Změnit naučený bod, nebo změnit interpolaci(MOVEL na MOVEP)."
        },
        "cause": {
            "en": "Robot cannot make the orientation taught in the program.",
            "cs": "Robot nemůže provést naučený pohyb."
        },
        "message": {
            "en": "Position does not match",
            "cs": "Nelze dosáhnout pozice"
        },
        "id": "E1050"
    },
    {
        "solution": { "en": "Check the wire feed path." },
        "cause": { "en": "Wire feeder motor locked." },
        "message": { "en": "Wire feeder lock detected" },
        "id": "W1610"
    }
]