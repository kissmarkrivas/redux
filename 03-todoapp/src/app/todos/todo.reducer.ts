import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial:Todo[] = [
  new Todo('Salvemos al mundo'),
  new Todo('vencer a tanos'),
  new Todo('Comprar traje airomen'),
  new Todo('Salvemos a tanos'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state,new Todo(texto)]),
);

export function todoReducer(state:any,action:any){
  return _todoReducer(state,action)
}

