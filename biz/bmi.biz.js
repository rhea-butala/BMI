const JREBiz = require('../biz/jre.biz');
const HealthRiskRules = require('../rules/health-risk.rules.json');
const CateogoryRules = require('../rules/category.rules.json');
class BmiBiz {
	constructor() {}

	evaluate(data) {
		return new Promise(async (resolve, reject) => {
			try {
				let bmiDataPromise = [];
				for (let eachData of data) {
					let heightm = parseFloat((eachData.HeightCm / 100).toFixed(2));
					bmiDataPromise.push(this.calculateAndCateogorize(eachData, heightm));
				}

				let result = await Promise.all(bmiDataPromise);
				let overweightCount = result.filter(function (r) { return r.Cateogory == 'Overweight';}).length;
				resolve({result, overweightCount});
			} catch(error){
				return reject(error);
			}
		});
	}
	calculateAndCateogorize(bmiData, heightm) {
		return new Promise(async (resolve, reject) => {
			try {
				bmiData['Bmi'] = parseFloat((bmiData.WeightKg / (heightm * heightm)).toFixed(1));
				bmiData['Risk'] = await JREBiz.runJRE(bmiData, HealthRiskRules.risk);
				bmiData['Cateogory'] = await JREBiz.runJRE(bmiData, CateogoryRules.category);
				
				return resolve(bmiData);
			} catch(error){
				return reject(error);
			}
		});
	}

	
}


module.exports = BmiBiz;
