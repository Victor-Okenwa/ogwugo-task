import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css';
import './css/Style.css';
import { StoreProvider } from 'easy-peasy'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
)
