const mongo = require('mongoose');

const dataSchema = new mongo.Schema({

  article_title: {
    type: String,
    required: true
  },
  article_img: {
    type: String,
    required: true
  },
  article_desc: {
    type: String,
    required: true
  },
  article_category: {
    type: String,
    required: true
  },
  article_detail: {
    type: String,
    required: true
  }

}, { collection: 'Article_Data' });



const getarticle = mongo.model('Article_Data', dataSchema);

module.exports = getarticle;