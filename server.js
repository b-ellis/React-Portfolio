import express from 'express';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import fs from 'fs';
import config from './config';
import Flickr from 'flickrapi';

import Photo from './models/photos';

const flickrOptions = {
	api_key: 'cbc1f051a509d2fdbd86e0ae93822c4c',
	secret: '6fa00ae31c97b055',
	user_id: '156408398@N03',
	access_token: '72157665461564149-2668821b48e89fcc',
	access_token_secret: 'cd152835c871747e'
}


const app = express();

const jsonParser = bodyParser.json();

app.use(express.static('build'));
app.use(jsonParser);

let mon = new MongoClient();

mongoose.promise = require('bluebird');


const runServer = (callback) => {
	mongoose.connect(config.DATABASE_URL, (err) => {
		if(err && callback){
			console.log(err)
			return callback(err)
		}

		app.listen(config.PORT, () => {
			console.log('Listening on Localhost:' + config.PORT);
			if(callback){
				callback();
			}
		});
	}, {useMongoClient: true});
}

if(require.main === module){
	runServer((err) => {
		if(err){
			console.log(err);
		} else {
			console.log('Server up and running');
		}
	});
}

app.get('/photos', (req, res) => {

	let photos = [];
	Flickr.authenticate(flickrOptions, (error, flickr) => {
		if(!error){
			flickr.people.getPhotos({
				user_id: '156408398@N03',
				authenticated: true,
				page: 1,
				per_page: 100
			}, (err, results) => {
				results.photos.photo.forEach((photo) => {
					const farm = photo.farm; 
					const server = photo.server;
					const id = photo.id;
					const secret = photo.secret;
					const imgURL = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';

					photos.push(imgURL);
				});
				res.json(photos);
			});
		}
	});
});
	



