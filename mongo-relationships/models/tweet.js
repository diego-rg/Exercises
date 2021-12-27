const mongoose = require("mongoose");//req mongoose

mongoose.connect('mongodb://localhost:27017/mongoRelat', { useNewUrlParser: true, useUnifiedTopology: true })//cnect mongoose
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
   
const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ name: "Pepe", age: 61 });
//     const user = await User.findOne({ name: "Pepe" });
//     const tweet2 = new Tweet ({ text: "aaaaaaaaaaaahhhhhhhhhh", likes: 342 });
//     tweet2.user = user;
//     // user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => {//Sin populate solo ten a referencia a ID de user, con el aparecen todos os datos de user. con ("user", "name") manda solo o name
    const tw = await Tweet.findOne({})
        .populate("user", "name");
    console.log(tw);
};

findTweet();