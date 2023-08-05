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
    for (let i =0; i< 300; i++){
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
                coordinates: [
                  cities[random1000].longitude,
                  cities[random1000].latitude
                ]
            },
            image: [
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690356382/YelpCamp/qf1xile11yfg4z15rokh.jpg',
                  filename: 'YelpCamp/hp9bsfz6byrdhluvxwqy',
                },
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690357373/YelpCamp/fwav7efx8cukwpa8fj5z.jpg',
                  filename: 'YelpCamp/c4cgdjm3hbi7s7jepxtr',
                },
                {
                  url: 'https://res.cloudinary.com/dp0t9pzdk/image/upload/v1690313026/YelpCamp/tqx6ighyyjy7pd5tflta.jpg',
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
