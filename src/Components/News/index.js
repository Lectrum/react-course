import React from 'react';
import { Button } from '../../Assets/Button';
import { List } from '../../Assets/List';
import { useParams, useHistory, useLocation } from 'react-router-dom';
// import { history } from '../../navigation/history';
import { book } from '../../navigation/book';

const db = [
    {
        id: 'H23GF4F4',
        title: 'Hot news 1'
    },
    {
        id: 'H23GF4F1',
        title: 'Hot news 2'
    },
    {
        id: 'H23GF4F8',
        title: 'Hot news 3'
    }
]

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const News = () => {
  const history = useHistory();
  const { id } = useParams();

  if (Number(id) === 666) {
    history.push(book.root);
  }

  const location = useLocation();
  console.log(location);

  const query = useQuery();
  console.log(query.get('name'));

  const articles = db.map(({title, id}) => (
    <li key={ id }>{title}</li>
  ));

  return (
    <>
        <h2>News</h2>
        <h3>ID: { id }</h3>
        <ul>
          { articles }
        </ul>
        <Button title = 'Send' disabled type='test' />
        <Button type='test' />
        <Button type='test'>Send</Button>
        <ul>
          <List>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </List>
          <List>
            Hi
          </List>
        </ul>
    </>
  )
};