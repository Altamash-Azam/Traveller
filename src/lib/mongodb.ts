import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI){
    throw new Error("MongoDB URI missing");
}

interface CachedConn{
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongooseCache: CachedConn;
}

var cached = global.mongooseCache || (global.mongooseCache = { conn: null, promise: null}) ;

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;

}