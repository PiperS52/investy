import './App.css';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { InvestmentsPage } from './pages/InvestmentsPage';
import { Navigate, Route, Routes } from 'react-router';

const store = setupStore();
setupListeners(store.dispatch);

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/investments" />}
          ></Route>
          <Route path="investments" element={<InvestmentsPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
