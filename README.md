# 🚀 NgRx Productivity App


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?logo=angular)](https://angular.io/)
[![NgRx](https://img.shields.io/badge/NgRx-16+-BA55D3?logo=ngrx)](https://ngrx.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.0+-B7178C?logo=rxjs)](https://rxjs.dev/)

<img src="https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png" alt="NgRx Architecture" width="600">

A modern **Task Management** application built with Angular's reactive state management powered by NgRx, featuring secure authentication and real-time weather integration.



## 🌟 Key Features

### 🧠 Core Functionality
- ✅ **Complete Task Management** (Add, Remove, Toggle Completion)
- 🔐 **JWT Authentication Flow** (Login/Logout)
- 🌦️ **Real-time Weather Dashboard** (OpenWeatherMap API)

### ⚡ State Management
- 🏗️ **NgRx Store** - Centralized application state  
- ✨ **Actions** - Events describing state changes (login, addTask, loadWeather)  
- 🔄 **Effects** - Side effect model for API calls  
- 🎯 **Selectors** - Efficient, memoized access to specific parts of the state
- ✨ **Reducers** - Immutable state transitions  

### 🎨 UI/UX
- 🧩 **Standalone Components** - Modern Angular architecture
- 🏎️ **Reactive Templates** - Async pipe patterns
- 🎭 **Animations** - Smooth UI transitions
- 📱 **Fully Responsive** - Mobile-first design

## 🛠️ Tech Stack

### 🧱 Core Frameworks

| Technology | Purpose | Version |
|------------|---------|---------|
| <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20"/> Angular | Frontend Framework | 17+ |
| <img src="https://ngrx.io/assets/images/badge.svg" width="20"/> NgRx | State Management | 16+ |
| <img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" width="20"/> RxJS | Reactive Programming | 7+ |

### 🧰 Key Libraries

| Technology | Purpose |
|------------|---------|
| <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="20"/> TypeScript | Type Safety |
| <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png" width="20"/> OpenWeather | Weather API |

## 📂 Project Structure

```text
src/
├── app/
│   ├── auth/               # Authentication
│   ├── task-store/         # Task management
│   ├── weather-store/      # Weather data
│   └── app.state.ts        # Root state
├── assets/                # Static files
└── environments/          # Configuration