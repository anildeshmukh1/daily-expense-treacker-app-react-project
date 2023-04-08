
import React ,{useState} from 'react';

let Expenseitem = (props) => {
  return (
    <div>
      <div className="container bg-secondary " >
        <div className="row expenseitem">
          <div className="col-4"> <h2>date={props.date.toISOString()}</h2></div>
          <div className="col-4"><h2>title={props.title}</h2></div>
          
          <div className="col-4"> <h2>amount=${props.amount}</h2></div>
      
         
          </div>
        </div>
      </div>
    
  );
};
export default Expenseitem;
