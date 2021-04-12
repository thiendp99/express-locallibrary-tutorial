const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const GenrySchema = new Schema(
 	{
 		name: {type: String, required: true, minlenght: 3, maxlenght: 100},
	}
)

GenrySchema
.virtual('url')
.get(function () {
  return '/catalog/genry/' + this._id;
});

module.exports = mongoose.model('Genry', GenrySchema)