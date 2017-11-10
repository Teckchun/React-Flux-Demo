import Dispatcher from '../dispatcher';
import Types from '../constant';

class ItemAction{
  addItem(item){
    Dispatcher.dispatch({
      actionType:Types.ADD_ITEM,
      payload:item
    })
  }
}

export default new ItemAction();
