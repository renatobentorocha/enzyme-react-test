export const Types = {
  ADD_TODO: 'add/TODO',
  COMPLETE_TODO: 'complete/TODO',
  REMOVE_TODO: 'remove/TODO',
};

const INITIAL_STATE = {
  data: [],
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return { data: [...state.data, action.payload.todo] };

    case Types.COMPLETE_TODO:
      return { data: state.data.filter(todo => todo !== action.payload.todo) };

    default:
      return state;
  }
}

export const Creators = {
  addTodo: todo => ({ type: Types.ADD_TODO, payload: { todo } }),
  completeTodo: todo => ({ type: Types.COMPLETE_TODO, payload: { todo } }),
};
