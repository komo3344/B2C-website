import React from 'react'
import './StoreList.css'
import Store from '../Store/Store'

const StoreList = (props) => {
  const data = props.data
  return (
    <div>
      <Store data={data}/>
    </div>
  );
}

export default StoreList;