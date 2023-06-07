const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
    console.log("CONNECTION OPEN!!!")
 })
 .catch(err=>{
    console.log("OH NO ERROR!!!!!")
    console.log(err)
 })

 const personSchema = new mongoose.Schema({
    first: String,
    last: String
 })

 //Loading a file in node environment:
// node -i -e "$(< person.js)"

 personSchema.virtual("fullName").get(function(){
    return `${this.first} ${this.last}`
 })

 personSchema.pre("save", async function(){
    this.first = "YO";
    this.last = "MAMA";
    console.log("ABOUT TO SAVE!!!")
 })

 personSchema.post("save", async function(){
    console.log("JUST SAVED!!!")
 })

 const Person = mongoose.model("Person", personSchema);

