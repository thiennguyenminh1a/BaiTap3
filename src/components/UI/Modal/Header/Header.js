import React from 'react';
import { ModalHeader } from 'reactstrap';


const Header = (props) => {
    return (
        <ModalHeader>{props.value}</ModalHeader>
    )
}

export default Header;