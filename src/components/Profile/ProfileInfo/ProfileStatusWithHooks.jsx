import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>{
        !editMode
            ? <span
                onDoubleClick={activeEditMode}
            >
                {props.status || 'User haven\'t set status yet'}
                </span>
            : <input name={'status'} autoFocus={true}
                     onBlur={deactiveEditMode} onChange={onStatusChange}
                     value={status}
            />
    }

    </div>
}

export default ProfileStatusWithHooks