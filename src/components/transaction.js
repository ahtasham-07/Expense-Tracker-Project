import React from 'react';
import {GlobalState} from '../context/golbalstate';

//FUNCTIONAL PART
export default function Transaction(){
    
    let [text,settext] = React.useState("");
    let [amount,setamount] = React.useState(0);
    let {NewTransaction} = React.useContext(GlobalState);

    function newtransaction(e){
        e.preventDefault();
        amount=Number(amount);
        const newobject = {
            text:text,
            amount:amount
        }
        NewTransaction(newobject)
    }

//RETURN PART
    return (
        <div>
            <form onSubmit={(e)=> { newtransaction(e) } }>
            <table className="transaction" width="300">
                <tr>
                    <td style={{textAlign:"left"}}><b>Add Transaction</b></td>
                </tr>
                <tr>
                <td style={{textAlign:"left",fontSize:"17px"}}><br/>Enter Detail:</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={(e)=>{ settext(e.target.value) }} style={{width:"98%", height:"25px"}} placeholder="Enter detail of transaction..." required/></td>
                </tr>
                <tr>
                <td style={{textAlign:"left",fontSize:"17px"}}>Enter Amount:<span style={{fontSize:"13px"}}> (+ for income, - for expense)</span></td>
                </tr>
                <tr>
                    <td><input type="number" onChange={(e)=>{ setamount(e.target.value) }} style={{width:"98%", height:"25px"}} placeholder="Enter amount of transaction..." required/></td>
                </tr>
                <tr>
                    <td><button className="btn" type="submit">Add Transaction</button></td>
                </tr>
            </table>
            </form>
        </div>
    );
}