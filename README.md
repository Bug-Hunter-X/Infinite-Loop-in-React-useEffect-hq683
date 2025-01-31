# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by improperly updating state within a `useEffect` hook.

## Bug Description

The `MyComponent` component uses the `useEffect` hook to increment a counter. However, this causes an infinite loop because the state update within `useEffect` triggers a re-render, leading to another `useEffect` call.

## Solution

The solution involves correctly managing the state update using a dependency array in `useEffect` to prevent unnecessary re-renders.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console.

## How to Solve

The solution is provided in the `bugSolution.js` file.