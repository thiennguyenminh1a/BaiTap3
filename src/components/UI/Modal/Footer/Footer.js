import React from 'react';
import {ModalFooter,Button} from 'reactstrap';



const Footer = (props) => {


    return(
        <ModalFooter>
            <Button color="success" onClick={props.onSave} >Save</Button>{' '}
            <Button color="secondary" onClick={props.onCancel}>Cancel</Button>
        </ModalFooter>
    )
    }

export default Footer;