import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
	img: {
		data: Buffer,
		contentType: String,
		name: String
	}
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;