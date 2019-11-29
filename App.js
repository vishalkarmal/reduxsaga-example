// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Imports: Screens
import AppNavigator from './src/navigation/AppNavigator';

// Imports: Redux Store
import { store } from './src/store/store';

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
