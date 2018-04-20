import React, { Component } from 'react';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import ModalBuider from '../../components/UI/Modal/ModalBuider';
import Aux from '../../hoc/Aux';
import ListControl from '../../components/List/ListControl';


class TodoBuilder extends Component {
    state = {
        tasks: [
            { id: 1, name: 'Learn HTML/CSS', date: '2018-04-23', assignne: 'A', status: 'Done' },
            { id: 2, name: 'Learn Javascript', date: '2018-05-11', assignne: 'C', status: 'Done' },
            { id: 3, name: 'Learn React', date: '2018-02-17', assignne: 'E', status: 'In process' },
            { id: 4, name: 'Do to-do app', date: '2018-03-15', assignne: 'B', status: 'In process' },
            { id: 5, name: 'Draw prototype', date: '2018-04-01', assignne: 'D', status: 'Cancel' },
            { id: 6, name: 'Draw app workflow', date: '2018-04-05', assignne: 'G', status: 'Cancel' },
            { id: 7, name: 'Code function', date: '2018-03-28', assignne: 'K', status: 'Done' },
            { id: 8, name: 'Code function', date: '2018-03-28', assignne: 'I', status: 'Done' },
            { id: 9, name: 'Code function', date: '2018-03-28', assignne: 'O', status: 'Done' },
            { id: 10, name: 'Code function', date: '2018-03-28', assignne: 'S', status: 'Done' },
           
            
    
        ],
        name: '',
        date: '',
        assignne: '',
        status: 'In process',
        modal: false,
        update: false,
        currentId: '',
        search: '',
    }

    
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            update: false,
            name: '',
            date: '',
            assignne: '',
            status: 'In process',
        })
    }

    deleteHandler = (id) => {
        const tasks = [...this.state.tasks];
        const taskIndex =  this.state.tasks.findIndex(p=>p.id === id);
        tasks.splice(taskIndex, 1);
        this.setState({
            tasks: tasks
        })
    }

    saveHandler = () => {
        const tasks = [...this.state.tasks];
       
       
        if (this.state.update === false) {
           
            const name = this.state.name;
            const date = this.state.date;
            const id = new Date();
            const assignne = this.state.assignne;
            const status = this.state.status;
            tasks.push({ id: id.toString(), name: name, date: date, assignne: assignne, status: status });
        }
        
       
        
        else {
            const taskIndex = this.state.tasks.findIndex(p => p.id === this.state.currentId);
            const task = this.state.tasks[taskIndex];
            task.name = this.state.name;
            task.date = this.state.date;
            task.assignne = this.state.assignne;
            task.status = this.state.status;
            tasks[taskIndex] = task;

        }
 
        this.setState({
            tasks: tasks,
            name: '',
            date: '',
            assignne: '',
            status: 'In Process',
            update: false,
           
        })

       
        
    }

    getUpdateValue = (id) => {
        const taskIndex = this.state.tasks.findIndex(p => p.id === id);
        const task = this.state.tasks[taskIndex];
        this.setState({
            modal: !this.state.modal,
            name: task.name,
            date: task.date,
            assignne: task.assignne,
            status: task.status,
            update: true,
            currentId: id
        })
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
        console.log([event.target.name])
      }

    render() {

        return (
            <Aux>
                <CreateButton onClick={() => this.toggle()}/>

                <ModalBuider modal={this.state.modal}
                    onToggle={() => this.toggle()}
                    onSave={() => this.saveHandler()}
                    nameValue={this.state.name}
                    dateValue={this.state.date}
                    assignneValue={this.state.assignne}
                    handleChange ={(event)=>this.handleChange(event)}
                />

                <ListControl onUpdate={this.getUpdateValue} onDelete={this.deleteHandler} state={this.state}/>
                
            </Aux>

        );
    }
}

export default TodoBuilder; 