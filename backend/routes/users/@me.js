const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017/";
var AuthFunctions = require("../authentification/functions");

async function GetMe(req,res)
{
    try{
        var token = req.headers("authorization");
        if(AuthFunctions.authenticateToken(token))
        {
            var email = AuthFunctions.getEmailFromAuth(token);
            var client = new MongoClient(url);
            var database = client.db("ISL");
            var collection = database.collection("users");
            var me = await collection.findOne({email});
            delete me.password;

            res.json(me);

        }else{
            res.status(403).json({message:"You are not signed in", loggedIn:false})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error", loggedIn:false});
    }
}

module.exports = {GetMe}