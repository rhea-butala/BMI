const { Engine } = require('json-rules-engine');


const runJsonRulesEngine = (rules, inputForRules) => {
	return new Promise(async (resolve, reject) => {
		try {
			const ruleEngine = new Engine();
			ruleEngine.on('success', (event, almanac, ruleResult) => {
				return resolve(ruleResult)
			});
			ruleEngine.on('failure', async (event, almanac, ruleResult) => {
				return resolve(ruleResult)
			});
			ruleEngine.addRule(rules);
			await ruleEngine.run(inputForRules);
		} catch (ex) {
			return reject(ex);
		}
	});
}

module.exports = {
    runJRE: (params, configs) => {
		return new Promise(async (resolve, reject) => {
			try {
				let facts = JSON.parse(JSON.stringify(params));
				const promises = configs.map(c => runJsonRulesEngine(c, facts));
				const res = await Promise.all(promises);
				let result = res.filter(function (r) { return r.result === true;})
				let response = result[0].event.params.message;

				return resolve(response)


			} catch (error) {
				return reject(error);
			}
		})
	}
}