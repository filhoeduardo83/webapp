import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import Home from '../components/home/Home'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>

