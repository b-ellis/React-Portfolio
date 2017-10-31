exports.DATABASE_URL = 'mongodb://b-ellis:Marshall18@ds129004.mlab.com:29004/fluffhead' ||
						global.DATABASE_URL || 
						(process.env.NODE_ENV === 'production' ?
							'mongodb://localhost/portfolio' :
							'mongodb://localhost/portfolio-dev');
exports.PORT = process.env.PORT || 8080