import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { browserHistory } from 'react-router';
import ItemService from './ItemService';

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.addItemService = new ItemService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickb = this.handleClickb.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteData(this.props.obj._id);
    }



    handleClick(e) {
        e.preventDefault();
        console.log(this.props.history)
        redirectTo: '/edit/' + this.props.obj._id;
        //this.props.history.push('/edit/' + this.props.obj._id);
    }

    handleClickb(e) {
        e.preventDefault();
        this.props.history.push('/admin/' + this.props.obj._id);
        //redirectTo: '/admin/' + this.props.obj._id;
    }


    render() {
        return (
            <tr  >
                <td onClick={this.handleClickb}>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td onClick={this.handleClick}>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-danger" />
                    </form>
                </td>
            </tr>
        );
    }
}

export default withRouter(TableRow);