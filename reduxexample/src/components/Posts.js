import React, { Component } from 'react'
class Posts extends Component {

    async componentWillMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(json);
     }

    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}


export default Posts;