import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (        
          <div className={s.item}>
            <img src='https://mobimg.b-cdn.net/v3/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg'/>
            {props.massage}
            <div>
              <span >Like</span> {props.likesCount}
            </div>
          </div>
          
         
    );
};

export default Post;