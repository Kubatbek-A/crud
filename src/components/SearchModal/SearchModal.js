import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../List/Card';
import { openModal } from '../../redux/actions/edit-action';
import { deleteContact } from '../../redux/actions/app-action';
import { closeSearchModal } from '../../redux/actions/search-action';

class SearchModal extends Component {
    handleEdit = (contact) => {
        this.props.openModal(contact);
        this.props.closeSearchModal();
    }

    handleDelete = (id) => {
        this.props.deleteContact(id);
        this.props.closeSearchModal();
    }

    render() {
        return this.props.data.length ? (
            <div className="modal-wrapper list">
              <ul>
                {this.props.data.map(contact => (
                  <Card
                    key={contact.id}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phoneNumber={contact.phoneNumber}
                    openModal={() => this.handleEdit(contact)}
                    onDelete={() => this.handleDelete(contact.id)}
                  />
                ))}
              </ul>
              <button onClick={this.props.closeSearchModal} className="btn-close">close</button>
            </div>
        ): false

    }
};

const mapStateToProps = (state) => state.SearchReducer;

const mapDispatchToProps = (dispatch) => ({
    openModal: (contact) => dispatch(openModal(contact)),
    deleteContact: (id) => dispatch(deleteContact(id)),
    closeSearchModal: () => dispatch(closeSearchModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchModal);