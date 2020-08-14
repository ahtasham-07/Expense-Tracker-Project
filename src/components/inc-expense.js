import React from 'react';
import {GlobalState} from '../context/golbalstate';

export default function Expense(){

    let {state} = React.useContext(GlobalState);
    let arraylength = state.transactions.length;
    let inc=0;
    let exp=0;
    for(var i=0;i<arraylength;i++){
        if (state.transactions[i].amount>0){
            inc = inc + state.transactions[i].amount;
        }
        else{
            exp = exp + state.transactions[i].amount;
        }
    }

    return (
        <div className="expense">
            <table className="expense-table" width="300">
                <tr>
                    <th>
                        <b>Income</b>
                    </th>
                    <th>
                        <b>Expense</b>
                    </th>
                </tr>
                <tr>
                    <td className="expense-td">
                        <p style={{color: '#02F702'}}>$<span style={{color:"white"}}>{inc}</span></p>
                    </td>
                    <td className="expense-td">
                        <p style={{color: '#F80103'}}>$<span style={{color:"white"}}>{exp*-1}</span></p>
                    </td>
                </tr>
            </table>
            <hr/>
        </div>
    );
}