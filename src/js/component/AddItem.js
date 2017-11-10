import React from 'react';
import ItemAction from '../action/ItemAction'


export default class AddItem extends React.Component{

  constructor(){
    super();
    this.state={
      item:{
        description: '',
        amount: ''
      }
    }
  }


  addItem(event){
    event.preventDefault();
    this.setState({
      item:{
        description:this.state.item.description || '-',
        amount:this.state.item.amount || '0'
      }
    });
    ItemAction.addItem(this.state.item);


  }
  _updateState(event){
    let field = event.target.name;
    let value = event.target.value;

    this.state.item[field] = value ;
    this.setState({
      item: this.state.item
    })
  }

  render(){
    return(
      <form onSubmit={this.addItem.bind(this)}>
        <input name="description" type="text" value={this.state.item.description}
        onChange={this._updateState.bind(this)}/>
        <button type="submit" className="btn btn-primary add">Add</button>
      </form>

    )
  }
}