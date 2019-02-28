import React, { Component } from 'react';
import { Redirect} from 'react-router'
import { BrowseRouter, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ItemService from './ItemService'; 
import '../App.css';


class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

            company: '',
            deadline: '',
            tag1: '',
            tag2: '',
            tag3: '',
            status:'',
            title: '',
            prize: '',
            introduction: '',
            question: '',
            survey1: '',
            survey2: '',
            survey3: '',
            survey4: '',
            survey5: '',
            image: '',
            completed:0
        };
        this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

  


    handleSubmit(event) {
        event.preventDefault();
        const { company, deadline, tag1, tag2, tag3, status, title, prize, introduction, question, survey1, survey2, survey3, survey4, survey5, image, completed } = this.state;
        this.addItemService.sendData({
          
            company, deadline, tag1, tag2, tag3, status, title, prize, introduction, question, survey1, survey2, survey3, survey4, survey5, image,completed

        })
        this.props.history.push('/admin'); 
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="editform">
                    <label>
                        Company:
              <input name='company' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                    <label>
                        Deadline:
              <input name='deadline' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                     <label>
                        Tag1:
              <input name='tag1' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                    <label>
                        Tag2:
              <input name='tag2' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                    <label>
                        Tag3:
              <input name='tag3' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                    <label>
                        Status:<br/>
              
                        <select value={this.state.status} onChange={this.handleChange} name="status">
                            <option value="new">New</option>
                            <option value="trending">Trending</option>
                            <option value="completed">Completed</option>
                            <option value="ongoing">Ongoing</option>
                        </select>
                    </label><br />

                    <label>
                        Title:
              <textarea name='title' type="text" onChange={this.handleChange} className="form-control " />
                    </label><br />

                    <label>
                        Prize:
              <textarea name='prize' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Introduction:
              <textarea name='introduction' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Question:
              <textarea name='question' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey1:
              <textarea name='survey1' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey2:
              <textarea name='survey2' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                       Survey3:
              <textarea name='survey3' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey4:
              <textarea name='survey4' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey5:
              <textarea name='survey5' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Image:
              <textarea name='image' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                   
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default withRouter(AddItem);