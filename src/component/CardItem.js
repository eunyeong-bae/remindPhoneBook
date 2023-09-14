import React from 'react'
import { useSelector } from 'react-redux'

const CardItem = () => {
    let contactList = useSelector(state => state.contactList);
    const searchUser = useSelector(state => state.searchUser);
    if(searchUser !== ''){
        contactList = contactList.filter(item => item.name === searchUser);
    }
    const count = useSelector(state => state.count);

  return (
    <div className='d-flex card-container'>
        <p>num : {searchUser !=='' ? contactList.length : count}</p>
       { 
            contactList.map(item => {
            return (
                <div className='d-flex card-wrap'>
                    <div className='img'>
                        <img src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze' width={100} height={100}/>
                    </div>
                    <div className='info'>
                        <h3>{item.name}</h3>
                        <p>{item.phone}</p>
                    </div>
                </div>
            )})
        }
    </div>
  )
}

export default CardItem
