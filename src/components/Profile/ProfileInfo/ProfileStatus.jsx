import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return !this.state.editMode
            ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'User haven\'t set status yet'}
                        </span>
            </div>
            : <div>
                <input name={'status'} autoFocus={true} onChange={this.onStatusChange} value={this.state.status}
                       onBlur={this.deactivateEditMode}
                />
            </div>
    }
}

export default ProfileStatus