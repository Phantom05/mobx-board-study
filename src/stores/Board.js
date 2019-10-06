import { observable, action } from 'mobx';


class BoardStore{
  @observable number=10;

  constructor(root){
    this.root = root;
  }

  @action increase = () =>{

  }
}

export default BoardStore;