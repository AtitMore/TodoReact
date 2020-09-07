import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '../../helpers';
import AddBucket from '../../pages/bucket/add/index';
import AddTodoList from '../../pages/bucket/add/index';
import TodoList from '../../pages/todoList/list/index';
import BuckletList from '../../pages/bucket/list/index';

class AppRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/bucket-list' component={BuckletList} />
                    <Route path='/bucket/add' component={AddBucket} />
                    <Route path='/bucket/edit/:id' component={AddBucket} />
                    <Route exact path='/todo-list' component={TodoList} />
                    <Route path='/todo/add' component={AddTodoList} />
                    <Route path='/todo/add/edit/:id' component={AddTodoList} />
                    {/* <Route path='/shortlist' component={AllCities} />
                    <Route path='/cities/add' component={AddCities} /> */}
                </Switch>
            </Router>
        )
    }
}

export { AppRouter };