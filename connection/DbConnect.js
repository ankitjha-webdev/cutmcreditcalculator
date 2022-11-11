const mongoose = require('mongoose');

//  connect to the mongoDB atlas database and use the 'test' database (if it doesn't exist it will be created) and use the 'test' collection (if it doesn't exist it will be created) to store the data

const dbConnect = async () => {
 try {
    const connect = mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.info('Connected to MongoDB Atlas successfully 🎉 🎉 🎉 ');
    }).catch(err =>{
        console.error('Error connecting to MongoDB Atlas:', err.message);
    })
    
 } catch (error) {
    console.error(error + 'Error connecting to MongoDB Atlas:');
 }
}
    module.exports = dbConnect;