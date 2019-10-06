import { observable, action} from 'mobx';

export default class AuthStore{
  @observable isLogin = false;
  @observable userInfo ={};

  constructor(root){
    this.root = root;
  }
  @action hello =() =>{
    
  }

  
}