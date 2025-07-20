import mongoose ,{Schema} from "mongoose";

const UserSchema = new Schema({
    email : {type:String, required:true},
    hashedPassword: {type:String, required:true},
    username: {type:String, unique:true},
    homeCountry: {type: String},
    bio : String,
    savedItineraries: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Itinerary"
        }]
    }
}, { timestamps: true, autoIndex: process.env.NODE_ENV !== "production"});

export default mongoose.models.User || mongoose.model("User", UserSchema);