import { observable, action} from 'mobx';

export default class AuthStore{
  @observable isLoggedin = false;
  @observable profile ={};

  constructor(root){
    this.root = root;
  }
  @action login =(data) =>{
    console.log('in auth mobx');
    console.log(data);
    this.profile = data;
    this.isLoggedin = true;
  }

  @action logout =() =>{
    this.isLoggedin = false;
    this.profile = {};
  }

  
}