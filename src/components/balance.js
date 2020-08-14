import React from 'react';
import {GlobalState} from '../context/golbalstate';

export default function Balance(){

    let {state} = React.useContext(GlobalState);
    let arraylength = state.transactions.length;
    let amount=0;
    for(var i=0;i<arraylength;i++){
        amount = amount+state.transactions[i].amount;
    }

    return(
        <div>
            <table className="balance" width="300">
                <tr>
                    <td style={{textAlign:"left"}}><b>Current Balance</b><br/> ${amount}</td>
                </tr>
            </table>
        </div>
    );
}