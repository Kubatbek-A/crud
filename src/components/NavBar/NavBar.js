import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css'
import { searchItem } from '../../redux/actions/search-action';

class NavBar extends Component {
  state = {
    search: ''
  }

  handleInputVal = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.searchItem(this.state.search);
    this.setState({ search: '' })
  }

  render() {

    const styles = { backgroundColor: 'darkgray' };
    const count = this.props.AppReducer.quantity;
    
    return (
      <div className="navbar">
          <ul>
              <li><NavLink to="/list" activeStyle={{...styles}}>List</NavLink></li>
              <li><NavLink to="/add" activeStyle={{...styles}}>Add</NavLink></li>
              <li><NavLink to="/all" activeStyle={{...styles}}>All</NavLink></li>
              <Redirect to="/list" />
          </ul>
          {count ? (<div><strong>Кол-во контактов: {count}</strong></div>) : ''}
          <form className="search" onSubmit={this.handleSearch}>
            <input
              placeholder="Поиск..."
              value={this.state.search}
              onChange={this.handleInputVal}
            />
            <button type="submit">search</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  searchItem: (search) => dispatch(searchItem(search))
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);