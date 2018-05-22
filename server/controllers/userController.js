const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


exports.signin = (req,res,next) => {
  res.json({
  	data: {
  		id: 'user_001',
  		name: 'Franklin',
  	},
  	status: 'SUCCESS'
  })
}

exports.register = (req,res,next) => {
  res.json({
  	data: {
  		id: 'user_001',
  		name: 'Franklin',
  	},
  	status: 'SUCCESS'
  })
}

exports.users = (req,res,next) => {
  axios
  .get(`https://api.androidhive.info/contacts`)
  .then(val => res.send({
    status: 'SUCCESS',
    data: val.data.contacts.map(user => ({name: user.name, gender: user.gender, phone: user.phone}))
  }))
  .catch(error => console.log(error));
}