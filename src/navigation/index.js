import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Parent } from '../Components/Parent';
import { Profile } from '../Components/Profile';
import { News } from '../Components/News';
import { User } from '../Components/User';
import { Unknown } from '../Components/Unknown';
import { book } from './book';
import { Customer } from '../Components/Customer';
import { Starships } from '../Components/Starships';
import { Planets } from '../Components/Planets';
import { Swapi } from '../Components/Swapi';

export const Routes = () => (
    <>
        <Switch>
            <Route
                exact
                component = { Parent }
                path = { book.root }
            />
            <Route
                exact
                component = { Profile }
                path = { book.profile }
            />
            <Route
                exact
                component = { News }
                path = { book.news }
            />
            <Route
                exact
                component = { Customer }
                path = { book.customer }
            />
            <Route
                exact
                component = { User }
                path = { book.user }
            />
            <Route
                exact
                component = { Starships }
                path = { book.starships }
            />
            <Route
                exact
                component = { Planets }
                path = { book.planets }
            />
            <Route
                exact
                component = { Swapi }
                path = { book.swapi }
            />
            <Route
                exact
                component = { Unknown }
                path = { book.unknown }
            />
            <Redirect to = { book.unknown } />
        </Switch>
    </>
)