import { useState } from 'react';
import './App.css';
import CardItem from './component/CardItem';
import Form from './component/Form';
import { useDispatch } from 'react-redux';

function App() {
  const [searchUser, setSearchUser] = useState('');
  
  const dispatch = useDispatch();

  const searchingUser = () => {
    dispatch({
      type:'SEARCH_USER',
      payload: {
        searchUser
      }
    })
  };

  return (
    <div className='d-flex container'>
      <p className='title'>Phone Book</p>
      <div className='d-flex content-wrap'>
        <div className='w-50 h-50'>
          <Form />
        </div>
        <div className='d-flex w-50 h-50 right-menu'>
          <div className='d-flex search-user-wrap'>
            <input 
              type='text' 
              placeholder='Search User Name' 
              onChange={(event) => setSearchUser(event.target.value)}
            />
            <button onClick={searchingUser}>Search</button>
          </div>
          <CardItem />
        </div>
      </div>
    </div>
  );
}

export default App;
