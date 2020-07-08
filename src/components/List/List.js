import React, { Component } from 'react';
import { connect } from 'react-redux';

import './List.css';
import Card from './Card';
import { getContactData, deleteContact, newPage } from '../../redux/actions/app-action';
import { openModal } from '../../redux/actions/edit-action';

class List extends Component {
  componentDidMount = () => this.props.getContactList();

  handleChangePage = (page) => {
    this.props.newPage(page);
    this.props.getContactList();
  }

  render() {

    const { data, currentPage, maxPage } = this.props;

    return data.length ? (
      <div className="list">
        <ul>
          {data.map(contact => (
            <Card
              key={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phoneNumber={contact.phoneNumber}
              openModal={() => this.props.openModal(contact)}
              onDelete={() => this.props.deleteContact(contact.id)}
            />
          ))}
        </ul>
        {maxPage > 1 && (
          <>
            <div className="pagination">
              {currentPage !== 1 && <button onClick={() => this.handleChangePage(currentPage-1)}>prev</button>}
              {currentPage !== maxPage && <button onClick={() => this.handleChangePage(currentPage+1)}>next</button>}
            </div>
            <span><strong>стр: {currentPage}</strong></span>
          </>
        )}
      </div>
    ) : (<div className="empty-list"><h2>Список контактов пуст!</h2></div>);
  }
}

const mapStateToProps = (state) => state.AppReducer;

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(getContactData()),
  deleteContact: (id) => dispatch(deleteContact(id)),
  openModal: (contact) => dispatch(openModal(contact)),
  newPage: (page) => dispatch(newPage(page))
})

export default connect(mapStateToProps,mapDispatchToProps)(List);