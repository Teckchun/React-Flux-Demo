import Dispatcher from '../dispatcher';
import ActionTypes from '../constant';
import {EventEmitter} from 'events';

let myItem = [];
class ItemStore extends EventEmitter{

  constructor(){
    super();
    Dispatcher.register(this.registerAction.bind(this));
  }

  registerAction(action){
    switch (action.actionType) {
      case ActionTypes.ADD_ITEM:
          this.addItem(action.payload);
        break;
    }
  }


  addItem(item){
    item.id = myItem.length;
    myItem.push(item);
    this.emit("CHANGE");
  }

  getAllItem(){
    return myItem;
  }

  // create listner
  addChangeListener(callback){
    this.on('CHANGE',callback);
  }

  removeChangeListner(callback){
    this.removeChangeListner('CHANGE',callback);
  }
}

export default new ItemStore();