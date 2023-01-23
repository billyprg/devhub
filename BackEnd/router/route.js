const express = require("express");
const router = express.Router();
const mongo = require("mongoose");

require('../db/connect');

const getarticle = require("../modal/dataSchema");

router.get('/api', async (req, res) => {

  const getData = await getarticle.find({});
  res.send(getData);
  console.log("APII", getData);



})

router.get('/api/:category', async (req, res) => {

  let data;
  let category = req.params.category;

  console.log("category",category);

 data = await getarticle.find({ article_category: category });

  res.send(data);
  console.log("category Data", data);

})



router.get('/api/id/:id', async (req, res) => {

  let id = req.params.id;

  const data = await getarticle.find({ _id: id });

  res.send(data);
  console.log("category Data", data);

})

module.exports = router;