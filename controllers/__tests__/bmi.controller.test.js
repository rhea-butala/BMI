const request = require('supertest');
const app = require('../../index');

test('Calculate BMI 1', async () => {
    const reqBody = [
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
    const res = await request(app).post('/v1/calculate/bmi').send(reqBody);
    const body = res.body;
    console.log(body);
    expect(typeof body).toBe('object');
    expect(body).toHaveProperty('success');
    expect(body.success).toEqual(true);
    expect(body).toHaveProperty('message');
    expect(body).toHaveProperty('data');
    const data = body.data;
    expect(typeof data).toBe('object');

});

test('Calculate BMI', async () => {
    const reqBody = [
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
            "Ge": "Female",
            "HeightCm": 167,
            "WeightKg": 82
        }
    ]
    const res = await request(app).post('/v1/calculate/bmi').send(reqBody);
    const body = res.body;
    console.log(body);
    expect(typeof body).toBe('object');
    expect(body).toHaveProperty('success');
    expect(body.success).toEqual(true);
    expect(body).toHaveProperty('message');
    expect(body).toHaveProperty('data');

});