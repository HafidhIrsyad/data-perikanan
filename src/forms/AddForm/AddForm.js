import React from 'react'
import Navbar from '../../components/Navbar';
import './style.scss'

export default function AddForm() {

  const onSubmit = () => {}
  return (
    <> 
      <Navbar />
      <p className="title">Form Create List</p>
      <form onSubmit={onSubmit}>
        <label for="fname">Commodity</label>
        <input type="text" id="fname" name="firstname" placeholder="Enter Commodity..."/>

        <label for="lname">Province</label>
        <input type="text" id="lname" name="lastname" placeholder="Enter Province..."/>

        <label for="country">City</label>
        <input type="text" id="lname" name="lastname" placeholder="Enter City..."/>

        <label for="country">Total</label>
        <input type="text" id="lname" name="lastname" placeholder="Enter Total..."/>

        <label for="country">Price</label>
        <input type="text" id="lname" name="lastname" placeholder="Enter Price..."/>

        <label for="country">Publish Date</label>
        <input type="text" id="lname" name="lastname" placeholder="Enter Date..."/>
      
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
}
