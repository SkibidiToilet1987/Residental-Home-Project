var express = require('express');
var router = express.Router();
var crypto = require('crypto-js');
const { MongoClient } = require('mongodb');
const { generatreAccessToken} = require('./functions');
var url = "mongodb://localhost:27017/";

router.post("/", async function (req, res) {
    try{
        var email = req.body.email;
        var password = cryptojs.SHA256(req.body.password).toString();

        var client = new MongoClient(url);
        var database = client.db("ISL");
        var collection = database.collection("users");

        var user = await collection.countDocuments({
            email, password
        })

        if(user === 1)
        {
            var token = generatreAccessToken({email});
            res.json({token});
        }else{
            res.status(401).json({message:"Invalid credentials (Login Details)"});
        }

    }catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
    
});

module.exports = router;