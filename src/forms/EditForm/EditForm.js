import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { fetchDetailPerikanan } from '../../store/action';
import './style.scss'


export default function EditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (id && dispatch(fetchDetailPerikanan(id)));
  },[id, dispatch])

  const onSubmit = () => {}
  return (
    <> 
      <Navbar />
      <form onSubmit={onSubmit}>
        <label for="commodity">Commodity</label>
        <input type="text" id="commodity" name="commodity" placeholder="Enter Commodity..."/>

        <label for="province">Province</label>
        <input type="text" id="province" name="province" placeholder="Enter Province..."/>

        <label for="country">City</label>
        <input type="text" id="country" name="country" placeholder="Enter City..."/>

        <label for="total">Total</label>
        <input type="text" id="total" name="total" placeholder="Enter Total..."/>

        <label for="price">Price</label>
        <input type="text" id="price" name="price" placeholder="Enter Price..."/>

        <label for="date">Publish Date</label>
        <input type="text" id="date" name="date" placeholder="Enter Date..."/>
      
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
}
