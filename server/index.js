import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

// add type under main for express and start scripts should read : nodemon index.js
// you can also create start-frontend and start-backend, and then run both of them on different terminals. 

const app = express();
dotenv.config()
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}))
app.use(cors());
// always add routes after adding cors
app.use('/posts', postRoutes);

app.get('/', (req,res) => { 
    res.send("HELLO, TO MY MEMORIES PROJECT")
})

const CONNECTION_URL = 'mongodb+srv://anirudh:anirudh123@cluster0.vydrq.mongodb.net/?retryWrites=true&w=majority'
// process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true  })
.then(()=> app.listen(PORT, ()=> console.log(`Server Running on port : ${PORT}`)))
.catch((error)=> console.log(error.message) )

