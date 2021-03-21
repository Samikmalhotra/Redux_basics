import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider> 
  );
}

export default App;
