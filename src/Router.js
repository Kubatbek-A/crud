import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import AddContact from './components/AddContact/AddContact';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import SearchModal from './components/SearchModal/SearchModal';

const Router = () => {
    const All = () => (
        <>
            <AddContact />
            <List />
        </>
    )

    return (
        <div className="container">
            <BrowserRouter>
                <NavBar />
                <Route path="/list" exact component={() => <List />} />
                <Route path="/add" component={() => <AddContact page="ADD" />} />
                <Route path="/all" component={() => <All />} />
                <Modal />
                <SearchModal />
            </BrowserRouter>
        </div>
    )
}

export default Router;