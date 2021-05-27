import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../config/Router';
import './Content.styles.scss';

const Content = () => {
    return (
        <div className="content">
            <Switch>
                {routes.map((route) => (
                    <Route key={`route-${route.title}`} exact={route.exact} path={route.path}>
                        {route.component()}
                    </Route>
                ))}
            </Switch>
        </div>
    )
}

export default Content
