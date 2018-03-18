import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as todosAction from './todos.actions';

export interface TodoState {
  datas: Todo[];
}

const initialState = {
  datas: [
    {
      message: 'manger une pizza',
      done: false
    }
  ]
};


export function todosReducer( state: TodoState = initialState, action: todosAction.TodosActionType ): TodoState {
  console.log(state);
  switch (action.type)  {
    case todosAction.TODO_CREATE :
      return {
        ...state,
        datas: [...state.datas, action.payload]
      };
    case todosAction.TODO_DELETE :
      return {
        ...state,
        datas: state.datas.filter( (t, i) => i !== action.payload )
      };
    case todosAction.TODO_TOGGLE :
      const selectedTodo = state.datas[action.payload];
      selectedTodo.done = !selectedTodo.done;
      const newTodos = [ ...state.datas ];
      newTodos[action.payload] = selectedTodo;
      return {
        ...state,
        datas: newTodos
      };
    default:
      return state;
  }

}

