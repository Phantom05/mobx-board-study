import BoardStore from './Board';
import AuthStore from './Auth';

class RootStore{
  constructor(){
    this.board = new BoardStore(this);
    this.auth = new AuthStore(this);
  }
}

export default RootStore;