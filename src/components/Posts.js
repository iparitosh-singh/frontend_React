import React, {useEffect, useState} from 'react'
import postService from '../services/posts.service'

const Posts = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        postService.getUserPosts()
            .then(res => {
                setPosts([...posts, ...data])
            })
            .catch(err => console.log(err))
    }, [posts])

    const postList = posts.map(post => (
        <div key = {post.id}>
            <div className = "postTitle">{post.title}</div>
            <div className = "postContent">{post.text}</div>
        </div>
    ))

    return (
        <div>
        {postList}
        </div>
    )
}

export default Posts
