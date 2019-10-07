import { observable, action} from 'mobx';

export default class AuthStore{
  @observable isLoggedin = false;
  @observable profile ={};

  constructor(root){
    this.root = root;
  }
  @action login =(data) =>{
    this.profile = data;
    this.isLoggedin = true;
    localStorage.setItem('login',data)
    console.log(localStorage);
  }

  @action logout =() =>{
    this.isLoggedin = false;
    this.profile = {};
    localStorage.removeItem('login')
    console.log(localStorage);
  }

  
}