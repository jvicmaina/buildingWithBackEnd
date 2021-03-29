const express=require ('express');
const app = express ();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
require ( 'dotenv/config');
app.use (bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//middlewares : for certain purposes such as authentification ie use auth in the password region.
//import routes
const postsRoute = require ('./Routes/posts');
app.use ('/posts', postsRoute ,() =>{
    console.log ('this is a middleware running');
});
app.use ('/posts', postsRoute );
app.use ('/specific' , postsRoute);
//app.use ('/' , ()=>{
//
//});
 //routes :
 app.get ('/',  (req ,res)=>{ 
      res.send ( 'we are on home ');
  });

 //app.use ('/posts', postsRoute ,() =>{
  //   console.log ('did this import routes really ? let us find out' )
 //});
 //app.use(express.static(__dirname));

//there might pop up an error and hence you might wanna add useNewUrlParser and useUnifiedTopology check github all and that ,cheers.
//Now we wanna connect to DB.
mongoose.connect(
    process.env.DB_MainaThings,
   { useNewUrlParser : true ,useUnifiedTopology: true , useCreateIndex: true} ,
    () =>{ console.log ('everything is okay db is connected ')

});
// How to start listening to the server 
app.listen (3000) ;