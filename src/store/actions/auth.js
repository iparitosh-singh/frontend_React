import * as actionsTypes from './actionsTypes'
import userService from '../../services/user_service'

const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    }
}

const authSuccess = (accessToken) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        accessToken
    }
}

const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error,
    }
}

const authLogout = () => {
    return {
        type: actionsTypes.AUTH_LOGOUT
    }
}

const checkAuthLogin = (expirtationTime = 600) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(refresh())
        },expirtationTime*1000)
    }
}

export const signIn= (email ,password) => {
    return dispatch => {
        dispatch(authStart())
        userService.loginAPI(email, password)
            .then(data => {
                localStorage.setItem('accessToken',data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                dispatch(authSuccess(data.accessToken))
                dispatch(checkAuthLogin(600))
            })
            .catch(err => dispatch(authFail(err)))
    }
}

export const signUp = (email, username, password) => {
    return dispatch => {
        dispatch(authStart())
        userService.signUpAPI(email, username, password)
            .then(data => {
                localStorage.setItem('accessToken',data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                dispatch(authSuccess(data.accessToken))
                dispatch(checkAuthLogin(1))
            })
            .catch(err => dispatch(authFail(err)))
    }
}

export const logout = () => {
    return dispatch => {
        console.log("here")
        userService.logoutAPI()
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        dispatch(authLogout())
    }
}

export const refresh = () => {
    return dispatch => {
        const refreshToken = localStorage.getItem('refreshToken')
        if(localStorage.getItem('refreshToken') === null){
            dispatch(authLogout())
        }
        else {
            console.log('refreshing')
            userService.refreshAPI(refreshToken)
                .then(res => {
                    localStorage.setItem('accessToken', res.accessToken)
                })
                .catch(dispatch(logout))
            dispatch(checkAuthLogin(600))
        }
    }
}
