import React, {Component} from "react";

export default class NewsFeed extends Component{
    render(){
        const posts = this.props.posts;
        return  (
            <div>
                {posts.map((post) => (
                    <div>
                        <span>{post.title}</span>
                        <span>{post.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}