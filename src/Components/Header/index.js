import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import { book } from '../../navigation/book';

export const Header = () => {
  return (
    <>
      <h1 className="title">Header</h1>
      <NavLink to = { book.profile } activeClassName="selected">Profile</NavLink>
      <NavLink to = { book.news } activeClassName="selected">News</NavLink>
    </>
  )
};