import React from 'react';
import { Form, Input,ModalBody } from 'reactstrap';
import FormGroupControl from '../Form/FormGroupControl';

const Body = (props) => {
    


    return (

    <ModalBody>
        <Form>
            <FormGroupControl labelName='Name'>
                <Input value={props.nameValue} name='name' onChange={props.handleChanged}></Input>
                
            </FormGroupControl>
            <FormGroupControl labelName='Date'>
                <Input type='date' name='date' value={props.dateValue} onChange={props.handleChanged}></Input>
            </FormGroupControl>
            <FormGroupControl labelName='Assignne'>
                <Input value={props.assignneValue} name='assignne' onChange={props.handleChanged}></Input>
            </FormGroupControl>
            <FormGroupControl labelName='Status'>
                <Input type='select' name='status' onChange={props.handleChanged}>
                    <option value="In Process">In Process</option>
                    <option value="Done">Done</option>
                    <option value="Cancel">Cancel</option>
                </Input>
            </FormGroupControl>
        </Form>
     </ModalBody>   
    )
}

export default Body;