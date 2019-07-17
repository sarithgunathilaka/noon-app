const express = require ('express')
const next = require ('next')
const mongoose = require('mongoose')
const Fav = require('./models/User');
api = require('./routes/index')
const bodyParser = require('body-parser');
//Index = require('./routes/index')

//DB Config
const db = require('./config/keys').mongoURI;


const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !=='production'
const app = next({ dev })
const handle = app.getRequestHandler();



app
    .prepare()
    .then(() => {
        const server = express();
        server.use('/api', api)

        //Bodyparser
        server.use(bodyParser.urlencoded({ extended: false }))
        server.use(bodyParser.json());

        // @route   POST api/delete
        // @desc    Delete favourite
        // @access  Private  
        server.post('/delete', (req,res) => {
          const { body } = req;
          const id = body;
          
          Fav.deleteOne(id, function(err) {
            
            return res.status(202).send(id)
            
           
          })
          
        })

        // @route   POST api/favourites
        // @desc    Create favourite
        // @access  Private 
        server.post('/favourites', (req, res) => {
            const { body } = req;
            const {
                id,
                userName,
                userImage,
                coverImage,
                title,
                price,
                description,
                likes,
                tags
                
            } = body;


            Fav.find({
                id: id
              }, (err, previousPost) => {
                if (err) {
                  return res.send('Error: Server error');
                } else if (previousPost.length > 0) {
                  return res.send('Error: Account already exist');
                  
                }
              })  
        
            
        const newFav = new Fav();
        
              newFav.id = id;
              newFav.userName = userName;
              newFav.userImage = userImage;
              newFav.coverImage = coverImage;
              newFav.title = title;
              newFav.price = price;
              newFav.description = description;
              newFav.likes = likes;
              newFav.tags = tags;
              
              
              
              
              newFav.save((err, user) => {
              return res.send({
                success: true,
                message: 'Account created', user
                
              })
            })
        });

        server.get("*", (req, res) => {
            return handle(req,res);
        })

        server.listen(PORT, err => {
            if (err) throw err,
            console.log(`> Ready on ${PORT}`);
        })

       
        //Connect to MongoDB
        mongoose
        .connect(db, { useNewUrlParser: true })
        .then(() => console.error('Connected to Mongoose Atlas'))
        .catch(err => console.log(err))

        
        .catch(ex => {
            console.error(ex.stack);
            process.exit(1);
        })
    })

  
