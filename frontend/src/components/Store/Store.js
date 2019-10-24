import React from 'react'
import './Store.css'

const Store = (props) => {
  const storeList = props.data
  const list = storeList.map((store) =>
    <div key={store.toString()}>
      <li>{store.name}</li>
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