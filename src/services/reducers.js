import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// import ApolloClientSingleton from '../network/apollo-client'
// import { alerts } from '../modules/alert/alertReducer'
// import { auth } from '../modules/auth/authReducer'
// import user from '../modules/user/userReducer'

const rootReducer = combineReducers({
  // alerts,
  // auth,
  // apollo: ApolloClientSingleton.reducer(),
  form: formReducer,
  router: routerReducer,
  // user,
})

export default rootReducer