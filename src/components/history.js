import React from 'react';
import {GlobalState} from '../context/golbalstate';

export default function History(){
    let {state} = React.useContext(GlobalState);
    let {DeleteTransaction} = React.useContext(GlobalState);
    let arraylength = state.transactions.length;
    let List = <div></div>;
    for(var i=0;i<arraylength;i++){
        let text = state.transactions[i].text;
        let amount = state.transactions[i].amount;
        List = <div>{List}<Elements text={text} amount={amount} index={i} deleteindex={DeleteTransaction}/></div>
    }



    //Return Part
    return (
        <div className="history" style={arraylength!==0?{display:"block"}:{display:"none"}}>
            <p><b>Histroy</b></p>
            {List}
            <span style={{fontSize:"13px"}}>(Click to remove histroy)</span>
            <hr/>
        </div>
    );
}

function Elements(props){
    let color = props.amount<0?"#F80103":"#02F702";
    let num = props.amount<0?-1:1;
    return(
        <div>
        <button onClick={()=>{  props.deleteindex(props.index);  }} style={{width:"100%",backgroundColor:"white",border:"0px"}}>
        <table className="history-table" width="300">
            <tr>
                <td style={{textAlign:"left"}}>{props.text}</td>
                <td style={{textAlign:"right"}}><span style={{color:color}}>$</span>{props.amount*num}</td>
            </tr>
        </table>
        </button>


        </div>
    );
}