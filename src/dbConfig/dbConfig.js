import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection;


        connection.on('connected', () => {
            console.log('MongoDB Connaced Successfully')
        })
        

        connection.on('error', (err) => {
            console.log('MongoDB Connact Error,')
            console.log(err)
            process.exit()
        })
    } catch (error) {
        console.log('Mongodb connact faild')
        console.log(error)
    }
}