import React from 'react';
import AuthRouter from './src/pages/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux';

const App = () => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <AuthRouter />
    </Provider>
  );
};

export default App;
