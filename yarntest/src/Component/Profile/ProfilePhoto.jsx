import React from 'react';
import pic from '../../assets/me.jpg'
const ProfilePhoto = () => {
    return (
        <div>
            <img style={{width:"300px" , height:"300px"  }} src={pic} alt="mypic" />
        </div>
    );
}

export default ProfilePhoto;
