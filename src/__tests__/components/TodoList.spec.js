import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import { Creators as TodosActions } from '../../store/ducks/todos';
import TodoList from '../../TodoList';

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { data: ['Fazer café', 'Estudar React'] },
};

const store = mockStore(INITIAL_STATE);

it('should render the list ', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>,
  );

  expect(wrapper.find('li').length).toBe(2);
});

it('should be able to add news todos ', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>,
  );

  wrapper.find('TodoList').setState({ newTodo: 'Novo todo' });
  wrapper.find('button').simulate('click');

  expect(store.getActions()).toContainEqual(TodosActions.addTodo('Novo todo'));
});

// it('should be to add new todo', () => {
//   const wrapper = mount(<TodoList />);

//   wrapper.find("input[name='todo']").simulate('change', {
//     target: { value: 'Novo todo' },
//   });

//   wrapper.find('button').simulate('click');

//   expect(wrapper.find('ul').contains(<li>Novo todo</li>)).toBe(true);
// });

// it('should add new todos to local storage', () => {
//   const setItemMock = jest.fn();

//   global.localStorage.__proto__.getItem = jest.fn().mockReturnValue(JSON.stringify([]));
//   global.localStorage.__proto__.setItem = setItemMock;

//   const wrapper = mount(<TodoList />);

//   wrapper.setState({ newTodo: 'New todo' });
//   wrapper.instance().handleAddTodo();

//   expect(setItemMock).toHaveBeenLastCalledWith('todos', JSON.stringify(['New todo']));
// });

// it('should load todos in componentDidMount ', () => {
//   const getItemMock = jest.fn().mockReturnValue(JSON.stringify(['Fazer café']));

//   global.localStorage.__proto__.getItem = getItemMock;

//   const wrapper = mount(<TodoList />);

//   expect(wrapper.state('todos')).toEqual(['Fazer café']);
// });
