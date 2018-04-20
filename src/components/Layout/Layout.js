import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <Aux>

            <Header value='TO-DO LIST' />

            <main className="App">
                {props.children}
            </main>

        </Aux>
    )

}

export default Layout;