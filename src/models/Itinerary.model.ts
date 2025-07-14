import mongoose, {Schema} from "mongoose";

const dayItemSchema = new Schema({
    title: String,
    type: {type: String, enum:['place', 'transport', 'note']},
    geo: {type: {type: String}, coordinates:[Number]},
    cost: Number,
    startTime: Date,
    endTime: Date
},
{
    _id:false
})

const ItinerarySchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User", index:true},
    title: {type:String},
    destination: String,
    description: String,
    visibility: {type:String, enum:['public', 'private'], index: true},
    startDate: Date,
    endDate: Date,
    days: {date: Date, items: [dayItemSchema]},
}, {timestamps: true}).index({title: 'text'});

export default mongoose.models.Itinerary || mongoose.model("Itinerary", ItinerarySchema);