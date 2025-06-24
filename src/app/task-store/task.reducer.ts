// NgRx functions to build a reducer and handle actions
import {createReducer, on} from '@ngrx/store';

// Import initial state and actions
import {initialState} from './task.state';
import {addTask, loadTasks, loadTasksFailure, loadTasksSuccess, removeTask, toggleTaskCompletion} from './task.actions';


/**
 * Reducer function for the Task feature.
 * It listens to specific actions and returns a new state accordingly.
 */
export const taskReducer = createReducer(
  initialState,

  /**
   * Handles the 'addTask' action.
   * Adds the new task to the current task array.
   */
  on(addTask, (state, {task}) => {
    //
    return {
      ...state,
      tasks : [...state.tasks, task]
    }
  }),


  /**
   * Handles the 'removeTask' action.
   * Removes the task with the specified ID from the state.
   */
  on(removeTask, (state, {taskId}) => {
    return {
      ...state,
      tasks : state.tasks.filter(task => task.id !== taskId)
    };
  }),

  /**
   * Handles the 'toggleTaskCompletion' action.
   * Flips the 'completed' status of the task with the specified ID.
   */
  on(toggleTaskCompletion, (state, {taskId}) => {
    return {
      ...state,
      tasks : state.tasks.map(task =>
        task.id === taskId ? {...task, completed : !task.completed} : task
      ),
    };
  }),


  on(loadTasks, (state) => ({
    ...state,
    loading : true,
    error : null
  })),

  on(loadTasksSuccess, (state, {tasks}) => ({
    ...state,
    tasks : tasks,
    loading : false,
    error : null
  })),

  on(loadTasksFailure, (state, {error}) => ({
    ...state,
    loading : false,
    error : error
  }))

  // You can add more actions here in the future (e.g., editTask, clearCompleted, etc.)
)
