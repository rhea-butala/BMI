const JREBiz = require('../jre.biz');
const Rules = require('../../rules/health-risk.rules.json');

test('test for JREBiz.runJRE()', async () => {
    let data = 
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "Bmi":34.2
        }
    await expect(JREBiz.runJRE(data, Rules.risk)).resolves.toBeTruthy();
});