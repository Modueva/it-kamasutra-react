import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
          <div>
            <div>
              <img src='https://storge.pic2.me/cm/5120x2880/704/585847e883b48.jpg' width={1000} height={300}/>
            </div>
            <div>
              ava+discription
            </div>
            <MyPosts/>
          </div>
      
    );
};

export default Profile;