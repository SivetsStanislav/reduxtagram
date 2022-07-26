import React, { Component } from 'react';
import Comments from './Comments';
import Photo from './Photo';

class Single extends Component {
    render() {
        const { postId } = this.props.params;

        const index = this.props.posts.findIndex((post) =>
            post.code === postId
        );
        const post = this.props.posts[index];

        const postComments = this.props.comments[postId] || [];

        return (
            <div className='single-photo'>
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    }
}

export default Single;
