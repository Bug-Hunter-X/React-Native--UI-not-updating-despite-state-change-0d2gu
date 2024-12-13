# React Native: UI not Updating Despite State Change

This repository demonstrates a common error in React Native where the UI fails to update even though the state variable appears to change. The issue stems from improper usage of the `useState` hook, a crucial part of React's state management system.

## Problem

The `bug.js` file shows a function component where a state variable is incremented, but the UI does not reflect this change. This happens because the `count` variable is declared directly and not using `useState`, so React's reconciliation process doesn't detect the change.

## Solution

The `bugSolution.js` file provides the corrected version. By using `useState`, the component now correctly re-renders whenever the `count` state variable changes, reflecting the update in the UI.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your emulator or device.  Observe the difference in behavior between the buggy and fixed versions. 