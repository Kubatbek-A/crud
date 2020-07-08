import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../redux/actions/app-action';

class AddContact extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }

    handleInputVal = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleAdd = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: ''
        })
    };

    render() {
        return (
            <div className="form-wrapper">
                <form  onSubmit={this.handleAdd}>
                    <div>
                        <label>Имя*</label>
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <div>
                        <label>Фамилия*</label>
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <div>
                        <label>Телефон*</label>
                        <input
                            name="phoneNumber"
                            type="number"
                            value={this.state.phoneNumber}
                            onChange={this.handleInputVal}
                            required
                        />
                    </div>
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addContact: (contact) => dispatch(addContact(contact))
})

export default connect(null, mapDispatchToProps)(AddContact);