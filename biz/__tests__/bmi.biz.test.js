const BmiBiz = require('../bmi.biz');

test('test for BmiBiz.evaluate()', async () => {
    let data = [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85
        },
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77
        },
        {
            "Gender": "Female",
            "HeightCm": 166,
            "WeightKg": 62
        },
        {
            "Gender": "Female",
            "HeightCm": 150,
            "WeightKg": 70
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82
        }
    ]
    await expect(new BmiBiz().evaluate(data)).resolves.toBeTruthy();
});

test('test for BmiBiz.calculateAndCateogorize()', async () => {
    let data = 
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96
        }
    await expect(new BmiBiz().calculateAndCateogorize(data, 32.8)).resolves.toBeTruthy();
});