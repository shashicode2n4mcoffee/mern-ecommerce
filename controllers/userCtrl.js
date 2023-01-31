const { User } = require('../models/index')


const createUser = (req, res)=>{
 console.log('USER : ', req.body)
}


module.exports = {createUser}