import axios from 'axios'
import {authHeader} from '../helpers/authHeaders'

const loginAPI = (email, password) => {
    return axios.post('http://localhost:6969/auth/login', {
        email,
        password
    })
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}

const signUpAPI = (email, username, password) => {
    return axios.post('http://localhost:6969/auth/signup', {
        email,
        username,
        password
    })
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}

const refreshAPI = (refreshToken) => {
    return axios.post('http://localhost:6969/auth/token', {
        refreshToken
    })
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}

const getUserPosts = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return axios.get('http://localhost:4000/api/posts/yourpost',
        requestOptions
    )
        .then(res => res)
        .catch(err => err)
}


const logoutAPI = (refreshToken) => {
    return axios.delete('http://localhost:6969/auth/token', {
        refreshToken
    })
        .catch(err => {
            throw err
        })
}

const userService = {
    loginAPI,
    signUpAPI,
    refreshAPI,
    logoutAPI,
    getUserPosts
}

export default userService
