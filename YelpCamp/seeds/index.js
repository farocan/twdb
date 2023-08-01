const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=> {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() *array.length)];

const seedDB = async()=> {
    await Campground.deleteMany({});
    for (let i =0; i< 50; i++){
        const random1000 = Math.floor(Math.random()* 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '64ba20b34e842698d3a651ad',
            location: `${cities[random1000].city}, ${cities[random1000].state} `,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem similique suscipit minus necessitatibus voluptatem illo fugiat excepturi earum labore obcaecati praesentium facere exercitationem, error ut laboriosam at reiciendis assumenda deserunt.',
            price,
            geometry: { 
                type: "Point",
                coordinates: [-113.1331, 47.0202]
            },
            image: [
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690354742/YelpCamp/hp9bsfz6byrdhluvxwqy.jpg',
                  filename: 'YelpCamp/hp9bsfz6byrdhluvxwqy',
                },
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690354742/YelpCamp/c4cgdjm3hbi7s7jepxtr.jpg',
                  filename: 'YelpCamp/c4cgdjm3hbi7s7jepxtr',
                },
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690354742/YelpCamp/zdciwp7cehk8sekzg35i.jpg',
                  filename: 'YelpCamp/zdciwp7cehk8sekzg35i',
                }
              ]              
        })
        await camp.save();
    }
}

seedDB().then(()=> {
    mongoose.connection.close();
})
