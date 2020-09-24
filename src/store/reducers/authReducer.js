import * as actionsTypes from '../actions/actionsTypes'
import updateState from '../utility'

const initialState = {
    loading: false,
    error: null,
    accessToken: null
}

const authStart = (state, action) => {
    return updateState(state, {
        loading: true
    })
}

const authSuccess = (state, action) => {
    return updateState(state, {
        loading: false,
        accessToken: action.accessToken
    })
}
const authFail = (state, action) => {
    return updateState(state, {
        loading: false,
        error: action.error
    })
}

const authLogout = (state, action) => {
    return updateState(state, {
        accessToken: null
    })
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTH_START: return authStart(state, action)
        case actionsTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionsTypes.AUTH_FAIL: return authFail(state, action)
        case actionsTypes.AUTH_LOGOUT: return authLogout(state, action)
        default:
            return state
    }
}
export default authReducer
