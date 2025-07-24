import mongoose, {Schema} from "mongoose";

const dayItemSchema = new Schema({
    title: String,
    description: String,
    type: {type: String, enum:['place', 'transport','accomodation','activity', 'note'], required:true},
    location: {name: String, address:String, coordinates: {lat: Number, lon: Number}},
    cost: {amount:Number, currency:{type: String, default: 'USD'}},
    startTime: Date,
    endTime: Date,
    // images: [String],
    // notes: String
},
{
    _id:false
})

const ItinerarySchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User", index:true, required:true},
    title: {type:String, required:true},
    destination: String,
    description: String,
    visibility: {type:String, enum:['public', 'private'],default :'private', index: true},
    startDate: {type: Date, required:true},
    endDate: {type: Date, required:true},
    views: Number,
    totalCost: {amount:Number, currency:{type: String, default: 'USD'}},
    days: [{date: Date, items: [dayItemSchema]}],
}, {timestamps: true}).index({title: 'text', description:'text', tags:'text'});

export default mongoose.models.Itinerary || mongoose.model("Itinerary", ItinerarySchema);