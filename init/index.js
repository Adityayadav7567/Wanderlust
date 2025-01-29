const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'

main().then(()=>{
    console.log("connected");
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner:'675d816ea652293e08115fac'}));
    await Listing.insertMany(initData.data);
}

initDB();