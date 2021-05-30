import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Name.module.css';


const Name = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState(props.name)

  useEffect( ()=>{
    setName(props.name);
  }, [props.name] )

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.setProfileName(name)
  }

  const onStatusChange = (elem) => {
    setName(elem.currentTarget.value)
  }

  return (
    <div className={style.profile_name}>
      {!editMode &&
        <div onClick={activateEditMode}>
          {props.name || "No name"}
        </div>}

      {editMode &&
        <div className={style.profile_input_name}>
          <input onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={name} />
        </div>
      }
    </div>
  )
}

export default Name;