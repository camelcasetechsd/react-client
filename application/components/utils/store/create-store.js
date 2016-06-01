// we use a promise middleware solution that will allow us to handle asynchronous action creators and
// to do some nice real time updates on our UI (could also do some optimistic updates).
// This middleware was discussed here: https://github.com/rackt/redux/issues/99 and it is used
// in this very good react-redux-universal-example: https://github.com/erikras/react-redux-universal-hot-example
// that I strongly suggest you get a look at (later, not right now ;)).

import { createStore, applyMiddleware, combineReducers } from 'redux'
// You can go and see the code for this middleware, it's not very complicated and makes a good
// exercise to sharpen your understanding on middlewares.
import promiseMiddleware from './promise-middleware'
// We'll just have one reducer in this application but the ES6 import notation below is
// pretty interesting to import and produce a reducers hash in one go. Have a look in
// ./reducers.js to see what our reducer actually do (no magic there).
import * as reducers from './reducers'

// The data parameter that we see here is used to initialize our redux store with data. We didn't
// talk about this yet for simplicity but thanks to it your reducers can be initialized
// with real data if you already have some. For example in an isomorphic/universal app where you
// fetch data server-side, serialize and pass it to the client, your Redux store can be
// initialized with that data.
// We're not passing any data here but it's good to know about this createStore's ability.
export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}
