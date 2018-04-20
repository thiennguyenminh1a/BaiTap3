import React from 'react';
import { Table, Input } from 'reactstrap';
import '../ListControl.css';
import PaginationControl from './Pagination/PaginationControl';
import Aux from '../../../hoc/Aux';

class TableControl extends React.Component {

    state = {
        isOrder: true,
        orderType: '',
        search: '',
        currentPage: 1,
        tasksPerPage: 10

    }

    handleOrder = (event) => {
        this.setState({
            isOrder: !this.state.isOrder,
            orderType: event.target.id
        })
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    handleSwitchPage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {

        const data = this.props.data;
        const columns = this.props.columns;
        const orderType = this.state.orderType;
        const isOrder = this.state.isOrder;
        const indexOfLast = this.state.currentPage * this.state.tasksPerPage;
        const indexOfFirst = indexOfLast - this.state.tasksPerPage;


        const head = columns.map(c => {
            let classes = 'default';
            if (c.key === orderType) {
                isOrder ? classes = 'down' : classes = 'up'
            }
            return (
                <th key={c.key} id={c.key} className={classes} onClick={(event) => this.handleOrder(event)}> {c.title}</th>
            )
        }


        )


        // const filteredTable = data.filter(task => task.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)

        const orderList = data.sort((a, b) => {
            return (
                isOrder ? a[orderType] > b[orderType] : a[orderType] < b[orderType] ? 1 : -1)

        });


        const currentTasks = orderList.slice(indexOfFirst, indexOfLast);


        const body = currentTasks.map(d => {
            return (
                <tr key={d.id}>
                    {columns.map(c => {
                        return (
                            <td key={d[c.key]}>{c.render(d[c.key])}</td>
                        )

                    })}
                </tr>
            )
        })

        return (
            <Aux>
                <Input className='input-search' placeholder='Search Name' onChange={this.updateSearch} value={this.state.search}></Input>
                <div class='Table'>
                    <Table hover>
                        <thead>
                            <tr>
                                {head}
                            </tr>
                        </thead>
                        <tbody>
                            {body}
                        </tbody>
                    </Table>
                    <PaginationControl data={this.props.data} tasksPerPage={this.state.tasksPerPage} onClick={(event) => this.handleSwitchPage(event)} />
                </div>
            </Aux>
        )
    }
}

export default TableControl;