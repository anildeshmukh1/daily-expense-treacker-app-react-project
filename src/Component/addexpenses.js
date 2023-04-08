

import Expenseform from './expenseform.js';

let Addexpenses=(props)=>{

    const ExpenseDataSaver=(EnterNewExpense)=>{
     let Expensedata={
        ...EnterNewExpense
     }
console.log(Expensedata);
props.expensenew(Expensedata);
    }

    return(
        <div>
        <Expenseform DataSaver={ExpenseDataSaver}/>
        </div>
    );
};

export default Addexpenses;