// NgRx utility functions for creating actions and attaching payload properties
import {createAction, props} from '@ngrx/store';

// Import Task model used for typing the payload
import { Task } from '../models/task.model';

/**
 * Action to add a new task to the store.
 * Dispatched when the user creates a task.
 *
 * Payload:
 * - task: the Task object to be added
 */
export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: Task }>()
);

/**
 * Action to toggle the completion status of a task.
 * Dispatched when the user checks/unchecks a task.
 *
 * Payload:
 * - taskId: the unique ID of the task to toggle
 */
export const toggleTaskCompletion = createAction(
  '[Task] Toggle Task Completion',
  props<{ taskId: string }>()
);

/**
 * Action to remove a task from the store.
 * Dispatched when the user deletes a task.
 *
 * Payload:
 * - taskId: the unique ID of the task to remove
 */
export const removeTask = createAction(
  '[Task] Remove Task',
  props<{ taskId: string }>()
);

/**
 * Initiates loading of tasks from an external source (API).
 *
 * Dispatched when the app is initialized or refreshed.
 */
export const loadTasks = createAction(
  '[Task] Load Tasks'
);

/**
 * Indicates successful loading of tasks from the API.
 *
 * Dispatched after successfully fetching and mapping data.
 *
 * @payload tasks - Array of Task objects retrieved from the backend.
 */
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);


/**
 * Indicates failure when trying to load tasks from the API.
 *
 * Dispatched when an HTTP request or mapping fails.
 *
 * @payload error - The error object or message returned during the failure.
 */
export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: any }>()
);
