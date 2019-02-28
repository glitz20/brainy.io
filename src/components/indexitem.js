import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ItemService from './ItemService';
import axios from 'axios';
import ItemRow from './itemrow';

class IndexItem extends Component {

    constructor(props) {
        super(props);

        this.state = { value: '', items: '', category: " " };
      
    }
    componentWillMount() {
        axios.get('/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);

            })
    }


    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <ItemRow obj={object} key={i} />;
            })

        }
    }

    render() {
        return (
            <div className="container">               
                    
                        {this.tabRow()}
                  
            </div>
        );
    }
}

export default IndexItem;
