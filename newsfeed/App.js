import NewsNavigator from './navigation/NewsNavigator';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import newsReducer from './store/reducers/news';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NewsNavigator />
    </Provider>
  );
}
