import React from 'react';
import Core from 'components/Base/Core';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Signin from 'pages/Signin'
import SignUp from 'pages/Signup'
import Mypage from 'pages/Mypage';
import Board from 'pages/Board';
import 'antd/dist/antd.css';
// import { Helmet } from 'react-helmet';

const App = () => (
  <div>
    {/* <Helmet>
      <title>Hello, React</title>
    </Helmet> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/board" component={Board} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/mypage" component={Mypage} />
    </Switch>
    <Core />
  </div>
);

export default App;
