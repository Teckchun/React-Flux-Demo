import React from 'react';
import ItemStore from '../store/ItemStore'


export default class ItemList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item: ItemStore.getAllItem()
  };

  this.onChange = this.onChange.bind(this);
  }


  onChange(){
    this.setState({
      item: ItemStore.getAllItem()
    })
  }
  componentWillMount(){
    ItemStore.addChangeListener(this.onChange);
  }

  componentWillUnMount(){
    ItemStore.removeChangeListener(this.onChange);
  }
  render(){
    return(
      <ul>
      {this.state.item.map((itemDetails)=>{
        let amountType = parseFloat(itemDetails.amount)>0?'positive':'negative';
        return (<li key={itemDetails.id}>{itemDetails.description}
           </li>);
      })}
      </ul>

    )
  }
}