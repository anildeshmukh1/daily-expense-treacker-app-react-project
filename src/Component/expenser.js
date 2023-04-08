import Expenseitem from "./expenseitem.js";
import React from 'react';
let Expenser = (props) => {
  return (

       
       props.item.map(expense=>{
        return(
        <Expenseitem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
       )})
       
       




    
  );
};

export default Expenser;
