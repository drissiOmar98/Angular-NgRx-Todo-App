// Import the Task model, which defines the structure of an individual task
import { Task } from "../models/task.model";

/**
 * Represents the shape of the task state managed by NgRx Store.
 * - `tasks`: an array of Task objects.
 */
export interface taskState {
  tasks : Task[];
  loading  : boolean;
  error : any
}

/**
 * The initial state of the task store.
 * Starts with an empty array of tasks.
 */
export const initialState : taskState = {
  tasks : [],
  loading  : false,
  error : null
}
