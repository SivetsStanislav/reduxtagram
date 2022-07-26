import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
    render() {
        return (
            <div className='photo-grid'>
                {this.props.posts.map((post, i) =>
                    <Photo {...this.props} key={i} post={post} index={i}/>
                )}
            </div>
        );
    }
}

export default PhotoGrid;
