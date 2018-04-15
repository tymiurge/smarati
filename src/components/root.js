import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cosmos from './cosmos'

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Cosmos} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Root
