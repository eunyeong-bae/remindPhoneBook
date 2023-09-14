import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);

  const dispatch = useDispatch();

  const createUser = (e) => {
    e.preventDefault();

    dispatch({
      type:"CREATE_USER",
      payload: { name, phone}
    })
  };

  return (
    <form className='d-flex form-wrap' onSubmit={(event)=>createUser(event)}>
        <div className='d-flex'>
            <label for="name">Name</label>
            <input type='text' id='name' placeholder='Enter Name' onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className='d-flex'>
            <label for="name">Phone Number</label>
            <input type='text' id='phone' placeholder='Phone Number' onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button type='submit'>Create</button>
    </form>
  )
}

export default Form
