var mongoose = require("mongoose")

// Save a reference to the Schema Constructor
var Schema = mongoose.Schema;

// Creates the new Schema by using the Schema contructor
var articleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    link:{
        type: String,
        required: true
    },

    note:{
        type:Schema.Types.ObjectId,
        ref: "Note"
    }


});

// Creates the model from the schema
var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article