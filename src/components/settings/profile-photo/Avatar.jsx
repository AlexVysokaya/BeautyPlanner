import React from 'react';
import style from './Avatar.module.css';
import avatar from '../../../img/avatar.png'


const Avatar = ({ photo }) => {

  const changePhoto = (elem) => {
    //изменение фото
    console.log('добавили фото');
  }

  return <div className={style.wrapper_avatar}>
    <div className={style.profile_photo}>
      <img src={photo || avatar} />
    </div>
    <div className={style.add_avatar}>
      <input type='file' onChange={changePhoto} />
    </div>
  </div>

}

export default Avatar;