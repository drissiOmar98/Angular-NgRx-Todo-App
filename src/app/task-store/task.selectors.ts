// Import NgRx functions for defining selectors
import { createFeatureSelector, createSelector } from "@ngrx/store";

// Import the task state interface
import { taskState } from "./task.state";

/**
 * Selects the entire task feature state slice from the global store.
 * 'tasks' here refers to the feature key registered in `provideStore({ tasks: taskReducer })`.
 */
export const selectTasksState = createFeatureSelector<taskState>('tasks');



/**
 * Selects the full list of tasks from the task state.
 * Returns: Task[]
 */
export const selectAllTasks = createSelector(
  selectTasksState,
  (state : taskState) => state.tasks /// tasks array
)

/**
 * Selects the number of incomplete tasks.
 * Useful for UI counters like: "You have X tasks remaining".
 * Returns: number
 */
export const selectIcompleteTasksCount = createSelector(
  selectAllTasks,
  tasks => tasks.filter(t => !t.completed).length
);

/**
 * Selector: retrieves the loading status of tasks.
 *
 * Useful for showing spinners or disabling UI during fetch.
 *
 * Returns: boolean
 */
export const selectTasksLoading = createSelector(
  selectTasksState,
  (state : taskState) => state.loading
)


/**
 * Selector: retrieves any error that occurred during task operations (e.g., fetch failure).
 *
 * Useful for displaying error messages or retry prompts.
 *
 * Returns: any (error object or message)
 */
export const selectTaskError = createSelector(
  selectTasksState,
  (state : taskState) => state.error
);
