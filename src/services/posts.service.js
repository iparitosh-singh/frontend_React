import axios from 'axios'

const allPostAPI = () => {
    return axios.get('http://localhost:4000/api/posts/addPost')
        .then(res => res.data)
        .catch(err => err)
}

const getUserPosts = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return axios.get('http://localhost:4000/api/posts/yourpost',
        requestOptions
    )
        .then(res => res.data)
        .catch(err => err)
}


const postService = {
    allPostAPI,
    getUserPosts
}

export default postService
