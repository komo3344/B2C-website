import React from 'react'
import './Store.css'
import { Link } from 'react-router-dom'

const Store = (props) => {
  const storeList = props.data
  const list = storeList.map((store) =>
    <div key={store.id} id='store'>
      
      <li><Link to={"/store/"+store.id}>{store.name}</Link></li>
      <li>{store.content}</li>
      <p>__________________</p>
    </div>
  );
  return (
    <div>
      {list}
    </div>
  );
}

export default Store;