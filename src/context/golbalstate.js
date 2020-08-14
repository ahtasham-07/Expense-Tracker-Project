import React from 'react';

const initialState = {
    transactions: [
]
};

export const GlobalState = React.createContext(initialState);

export default function ContextFunction({children}){
    let [state,setstate] = React.useState(initialState);
    function NewTransaction(transaction){
        transaction = [transaction];
        let concat = state.transactions.concat(transaction);
        setstate({transactions:concat});
    }
    function DeleteTransaction(index){
        let deletearrayitem = state.transactions.splice(index,1);
        setstate({transactions:state.transactions});
    }
    
    return (
        <GlobalState.Provider value={{state,NewTransaction,DeleteTransaction}}>
            {children}
        </GlobalState.Provider>
    )
}