import React, { Component } from 'react'
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts :[]
        }
    }
    async componentWillMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        this.setState({posts: json});
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