import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/store.js"
ReactDOM.render(<Provider store={store} ><App /></Provider >, document.getElementById('root'));


serviceWorker.unregister();
