//password:cCigI1cG1u6KteTo
import express, {Express} from "express"
import mongoose from "mongoose"
import financialRecordRouter from './routes/fianancial-record'
import cors from "cors"
const app: Express = express()
const port=process.env.PORT || 3001

app.use(express.json())
app.use(cors())
const mongoURI: string = "mongodb+srv://rashmiraj2626:cCigI1cG1u6KteTo@budgetbuddy.ygkpzno.mongodb.net/"
mongoose.connect(mongoURI).then(()=>console.log("connected to MONGODB!")).catch((err)=>console.error("failed to connect to MONGODB",err))
app.use("/financial-records", financialRecordRouter);
app.listen(port,() => {
    console.log(`server running on port ${port}`)
})