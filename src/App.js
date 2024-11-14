import logo from './logo.svg';
import './App.css';
// import ChatViewContainer from './components/Containers/ChatViewContainer';
import ChatViewContainer from './ChatViewContainer';
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store'
function App() {

  return <Provider store={store}>
  <ChatViewContainer/>
  </Provider>
}

export default App;
