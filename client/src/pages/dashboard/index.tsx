import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css"
export const Dashboard = () =>{
    const { user }=useUser();
    return <div className="dashboard-container">
        {" "}
        <h1>WELCOME {user?.firstName}! Here Are your Finances!</h1>
        <FinancialRecordForm></FinancialRecordForm>
        <FinancialRecordList></FinancialRecordList>
    </div>
}