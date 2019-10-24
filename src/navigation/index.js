import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../Components/Header';
import { Parent } from '../Components/Parent';
import { Profile } from '../Components/Profile';
import { News } from '../Components/News';
import { Unknown } from '../Components/Unknown';
import { book } from './book';

export const Routes = () => (
    <>
        <Route
            component = { Header }
            path = { book.root }
        />
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
                component = { Unknown }
                path = { book.unknown }
            />
            <Redirect to = { book.unknown } />
        </Switch>
    </>
)