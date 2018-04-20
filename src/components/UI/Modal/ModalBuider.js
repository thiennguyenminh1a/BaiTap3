import React,{Component} from 'react';
import { Modal } from 'reactstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import './Modal.css'


class ModalBuider extends Component {

    render(){
        let validateContent = null;
        let footer = <Footer onCancel={this.props.onToggle} />;
        if (this.props.nameValue === '') {
            validateContent = <p>Please input name</p>
        } else if (this.props.dateValue === '') {
            validateContent = <p>Please input date</p>
        } else if (this.props.assignneValue === '') {
            validateContent = <p>Please input assignne</p>
        } else {
            footer = <Footer onCancel={this.props.onToggle} onSave={()=>{this.props.onSave();this.props.onToggle()}} />
        }
    
    return (
        <Modal isOpen={this.props.modal} toggle={this.props.onToggle}>

            <Header value='TODO-LIST FORM' />

            <div className='validation-form'>
                {validateContent}
            </div>

            <Body nameValue={this.props.nameValue}
                dateValue={this.props.dateValue}
                assignneValue={this.props.assignneValue}
                handleChanged={this.props.handleChange}
            />

            {footer}

        </Modal>
    )
    }
}

export default ModalBuider;