import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './tablerow';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
        this.addItemService = new ItemService();
       
    }

    componentDidMount() {
        axios.get('/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    /*
     
     handleClick(e) {
        <Redirect to="/add-item" />;
    }
     */ 
    


    tabRow() {
        if (this.state.items instanceof Array) {
            
                return this.state.items.map(function (object, i) {
                    return <TableRow obj={object} key={i} />;
                })
            }
        }
    

    render() {
        return (

            <div className="container">

                 <Link to="/add-item" className="btn btn-primary">Add New</Link>
               

                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
            
          );
    }
}

export default Admin;