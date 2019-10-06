import axios from 'axios';
let apiAddress =`http://localhost:5000`;



function postLogin(config){
  if(config.url === undefined) return console.warn('url is not defined');
  config.url = apiAddress + config.url;
  config.method = 'post';
  return axios(config)
}


export  {
  postLogin,
}