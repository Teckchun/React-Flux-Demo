import React from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';

export default class App extends React.Component{

  render(){
    return(
      <div>
        <AddItem />
        <ItemList />
      </div>
    )
  }

}