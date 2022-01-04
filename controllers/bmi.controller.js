
const Joi = require('joi');
const BmiBiz = require('../biz/bmi.biz');

class BmiController {
	register(app) {
		app.route('/v1/calculate/bmi')
		.post(async (request, response, next) => {
			try {
				const schema = Joi.array().min(1).items(Joi.object({
					Gender:Joi.string().valid('Male', 'Female').required(),
					HeightCm:Joi.number().required(),
					WeightKg:Joi.number().required()
				}).unknown()).required()

				const { error } = schema.validate(request.body);
				if(error) {
					return response.status(400).send({
						success: true,
						message: 'Done',
						data : error
						
					});
				}
				const bmiBiz = new BmiBiz();
				const result = await bmiBiz.evaluate(request.body);
				if(result.result) {
					response.status(200).send({
						success: true,
						message: 'Done',
						data : result
						
					});
				} else {
					response.status(400).send({
						success: false,
						message: 'Done',
						data : result.message
					});
				}
			} catch (error) {
				next(error);
			}
		})
	}
}

module.exports = BmiController;
