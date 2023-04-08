
import React, { useState } from 'react';
import '../Component/Expense.css';



let Expenseform = (props) => {

  const [title1, settitle] = useState("");
  const [amount1, setamount] = useState("");
  const [date1, setdate] = useState("");
   
  const titlechangehandler=(event)=>
  {
    settitle(event.target.value);

  }
const amountchangehandler=(event)=>
  {
    setamount(event.target.value);
  }
  const datechangehandler=(event)=>
  {
    setdate(event.target.value);
  }
   let submithandler=(event)=>
   {
    event.preventDefault();
     let setdata={
      title:title1,
      amount:amount1,
      date:new Date(date1),
     }
 console.log(setdata);
  settitle('');
  setamount('');
  setdate('');

  props.DataSaver(setdata);


   }
  return (

    <div>


      <div className="container-fluid expenser">
        <form onSubmit={submithandler}>
          <div className="row">

            <div className="col">
              <label for="re" className="form-label">Title:</label>
              <input type="text"  value={title1} onChange={titlechangehandler} className="form-control" placeholder="title" aria-label="First name" id="re" />
            </div>
            <div className="col">
              <label for="re1" className="form-label">amount:</label>
              <input type="number" value={amount1} onChange={amountchangehandler}  className="form-control" placeholder="amount" aria-label="Last name" id="re1" />
            </div>
            <div className="col">
              <label for="re2" className="form-label">Date:</label>
              <input type="date" value={date1} onChange={datechangehandler}  className="form-control" aria-label="Last name" id="re2" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>



  );
};
export default Expenseform;
