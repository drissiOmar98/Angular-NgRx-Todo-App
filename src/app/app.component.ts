import {Component, OnInit} from '@angular/core';
import {distinctUntilChanged, filter, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  selectAllTasks,
  selectIcompleteTasksCount,
  selectTaskError,
  selectTasksLoading
} from './task-store/task.selectors';
import { Task } from './models/task.model';
import {addTask, loadTasks, removeTask, toggleTaskCompletion} from './task-store/task.actions';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {AppState} from './app.state';
import {selectIsAuthenticated, selectUsername} from './auth/auth.selectors';
import {login, logout} from './auth/auth.actions';

import {FooterComponent} from './layout/footer/footer.component';
import {Weather} from './models/weather.model';
import {selectError, selectLoading, selectWeather} from './weather-store/weather.selectors';
import {loadWeather} from './weather-store/weather.actions';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [FormsModule, AsyncPipe, NgIf, FooterComponent, NgForOf, DatePipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
/**
 * AppComponent - Main shell for the Task Manager app.
 *
 * ✅ Integrates with NgRx store
 * ✅ Loads tasks from API via Effects
 * ✅ Displays authentication state
 * ✅ Handles user interactions like add, remove, toggle
 */
export class AppComponent implements OnInit{
  title = 'task-manager';

  currentDate: Date = new Date(); // Initialize with current date

  // Bound to the input field via [(ngModel)]
  newTaskDescription = '';


  // Observable of all tasks (used with async pipe in template)
  allTasks$! : Observable<Task[]>;

  // Observable of the count of incomplete tasks
  incompleteTasksCount$! : Observable<number>;

  /** Observable for checking if user is logged in */
  isAuthenticated$!  : Observable<boolean>;
  username$! : Observable<string | null>;

  /** Indicates if tasks are currently being loaded */
  tasksLoading$! : Observable<boolean>;

  /** Holds any error that occurred during task loading */
  tasksErrors$! : Observable<any>;

  weather$!: Observable<Weather | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  city = '';

  /**
   * Injects the NgRx store and subscribes to selectors.
   * Data flows reactively from the store to the UI.
   */
  // constructor(private store : Store){
  //   this.allTasks$ = this.store.select(selectAllTasks);
  //   this.incompleteTasksCount$ = this.store.select(selectIcompleteTasksCount);
  // }

  /**
   * Injects the global AppState store
   * @param store - NgRx Store typed with AppState
   */
  constructor(private store : Store<AppState>){

  }

  /**
   * Initializes observables from the store and dispatches loadTasks
   * Called automatically by Angular when component is initialized
   */
  ngOnInit(): void {
    this.allTasks$ = this.store.select(selectAllTasks);
    this.incompleteTasksCount$ = this.store.select(selectIcompleteTasksCount);

    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);

    this.tasksLoading$ = this.store.select(selectTasksLoading);
    this.tasksErrors$ = this.store.select(selectTaskError);

    // Weather-related
    this.weather$ = this.store.select(selectWeather);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);



    // Dispatch action to trigger effect and fetch tasks from API
    this.store.dispatch(loadTasks());
  }




  getWeather(){
    this.store.dispatch(loadWeather({city : this.city}));
  }


  /**
   * Prompts user for a username and dispatches login action
   */
  loginUser(){
    const name = prompt("Enter your username : ")
    if(name){
      this.store.dispatch(login({username : name.trim()}));
    }
  }

  /**
   * Dispatches logout action to reset authentication state
   */
  logoutUser(){
    this.store.dispatch(logout());
  }

  /**
   * Dispatches the 'addTask' action to add a new task.
   * The task ID is generated using the current timestamp.
   */
  addTask(){
    const newTask : Task = {
      id : Date.now().toString(),
      description : this.newTaskDescription,
      completed : false
    }
    this.store.dispatch(addTask({task : newTask}));
    this.newTaskDescription = ''; // Clear input field after adding
  }

  /**
   * Dispatches the 'removeTask' action to delete a task.
   * @param taskId - ID of the task to remove
   */
  removeTask(taskId : string){
    this.store.dispatch(removeTask({taskId}));
  }

  /**
   * Dispatches the 'toggleTaskCompletion' action to toggle task status.
   * @param taskId - ID of the task to toggle
   */
  toggleCompletion(taskId : string){
    this.store.dispatch(toggleTaskCompletion({taskId}))
  }




}
