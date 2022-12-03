const express = require('express');
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller');

//better version with render.js under serivces file below
// route.get('/', (req,res)=>{ //i believe this means / should open index.ejs
//     // res.send("Crud Application");
//     res.render('index');
// }) 
// route.get('/add-user', (req,res)=>{ //i believe this means /add-user should open add_user.ejs
//     // res.send("Crud Application");
//     res.render('add_user');
// }) 
// route.get('/update-user', (req,res)=>{//i believe this means /update-user should open update_user.ejs
//     res.render('update_user');
// }) 

/**Documentation
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes);

/**Documentation
 * @description add users
 * @method GET/add-user
 */
route.get('/add-user',services.add_user);

/**Documentation
 * @description update users
 * @method GET/update-user
 */
route.get('/update-user',services.update_user);
route.get('/login', services.login);
route.get('/student', services.student);

// API route
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



//export
module.exports = route