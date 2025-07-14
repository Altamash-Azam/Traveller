import mongoose ,{Schema} from "mongoose";

const UserSchema = new Schema({
    authId : {type:String, index:true},
    username: {type:String, unique:true},
    homeCountry: String,
    savedItineraries: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Itinerary"
        }]
    }
}, { timestamps: true, autoIndex: process.env.NODE_ENV !== "production"});

export default mongoose.models.User || mongoose.model("User", UserSchema);