import "./App.css";
import React from 'react';
import Header from "./Component/header.js";
import Footer from "./Component/footer.js";
import Sidebar from "./Component/sidebar.js";
import About from "./Pages/about.js";
import Service from "./Pages/service.js";
import Home from "./Pages/home.js";
import Contact from "./Pages/contact.js";
import Expenser from "./Component/expenser.js";
import Addexpenses from"./Component/addexpenses.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenseform from "./Component/expenseform";
import { useState } from "react";


let Dummy_data = [
  {
    id: "1",
    title: "school fee",
    date: new Date(2021, 3, 28),
    amount: 200,
  },
  {
    id: "2",
    title: "food",
    date: new Date(2021, 8, 25),       
    amount: 500,
  },
  {
    id: "3",
    title: "light bill ",
    date: new Date(2028, 6, 9),
    amount: 289,
  },
  {
    id: "4",
    title: "recharge",
    date: new Date(2020, 9, 12),
    amount: 562,
  }
];


function App() {
  
const [expense , Setexpense ] = useState(Dummy_data);


fetch('https://api.sampleapis.com/wines/reds')
  .then(resp => resp.json())
  .then(data =>{
   
console.log(data);
    
  } );




 let expensedataonapp=(AllexpenseData)=>{
  
  Setexpense( [ AllexpenseData,  ...expense ] );
  
  console.log( AllexpenseData );
 }

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About us />} />
        <Route path="contact" element={<Contact us />} />
        <Route path="service" element={<Service />} />
      </Routes>
      <Sidebar></Sidebar>

      <Addexpenses expensenew={expensedataonapp}/>
      <Expenser item={expense }/>
      <Footer />
    </div>
  );
}

export default App;
