const axios = require('axios');


exports.homeRoutes = (req, res)=>{
    //make a get request to
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data});

    })
    .catch(err=>{
        res.send(err);
    })


}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.login = (req,res)=>{
    res.render('login');
}

exports.student = (req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render("index2",{users:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}