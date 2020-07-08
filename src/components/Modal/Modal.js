import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal, saveEdit } from '../../redux/actions/edit-action';
import './Modal.css';

class Modal extends Component {
    state = {
        currentContact: null
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props !== nextProps) {
    //         this.setState({ currentContact: nextProps.currentContact })
    //     };
    //     return false;
    // }

    static getDerivedStateFromProps(props, state) {
        if (props.currentContact !== state.currentContact) {
          return {
            currentContact: props.currentContact,
          };
        }
        return null;
    }

    handleInputVal = (e) => {
        const {currentContact} = {...this.state}
        currentContact[e.target.name] = e.target.value;
        this.setState({ currentContact })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.saveEdit(this.state.currentContact);
        this.props.closeModal();
    }
    
    render() {

        const contact = this.state.currentContact;
        
        return this.props.currentContact ? (
            <div className="modal-wrapper">
                <form onSubmit={this.handleClick}>
                    <div>
                        <label>Имя</label>
                        <input
                            name="firstName"
                            type="text"
                            value={contact.firstName}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <div>
                        <label>Фамилия</label>
                        <input
                            name="lastName"
                            type="text"
                            value={contact.lastName}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <div>
                        <label>Телефон</label>
                        <input
                            name="phoneNumber"
                            type="number"
                            value={contact.phoneNumber}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <button type="button" onClick={this.props.closeModal}>cancel</button>
                    <button type="submit">save</button>
                </form>
            </div>
        ) : null
    }
}

const mapStateToProps = (state) => state.EditReducer;

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    saveEdit: (contact) => dispatch(saveEdit(contact))
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal);