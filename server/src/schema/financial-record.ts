import mongoose from "mongoose";
interface FinancialRecord{
    userId:string;
    date:Date;
    description:string;
    amount:number;
    category:string;
    paymentMethod:string;
}
const financialrecordschema=new mongoose.Schema({
    userId:{type:String,required:true},
    date:{type:Date,required:true},
    description:{type:String,required:true},
    amount:{type:Number,required:true},
    category:{type:String,required:true},
    paymentMethod:{type:String,required:true}
})

const FinancialRecordModel=mongoose.model<FinancialRecord>(
    'Financialrecord',financialrecordschema
)
export default FinancialRecordModel;