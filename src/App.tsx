import React from 'react';
import './App.css';
import TrainingInputPage from './components/TrainingInputPage';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./components/store/store";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <TrainingInputPage/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
