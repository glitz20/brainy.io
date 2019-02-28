import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
import { withRouter } from 'react-router';

class EditItem extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
           company:'', title: '', prize: '', introduction: '', question: '', Survey1: '', Survey2: '', Survey3: '', Survey4: '', Survey5: '', company: '',deadline: '',tag1: '',tag2: '',tag3: '',status: '',image:''};
    }

    componentDidMount() {
        axios.get('/items/edit/' + this.props.match.params.id)
            .then(response => {
                console.log(response.data)
                this.setState({
                    company:response.data.company,
                    title: response.data.title,
                    prize: response.data.prize,
                    introduction: response.data.introduction,
                    question: response.data.question,
                    Survey1: response.data.survey1,
                    Survey2: response.data.survey2,
                    Survey3: response.data.survey3,
                    Survey4: response.data.survey4,
                    Survey5: response.data.survey5,
                    company: response.data.company,
                    deadline: response.data.deadline,
                    tag1: response.data.tag1,
                    tag2: response.data.tag2,
                    tag3: response.data.tag3,
                    status: response.data.status,
                    image: response.data.image
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { company,title, prize, introduction, question, Survey1, Survey2, Survey3, Survey4, Survey5, deadline, tag1, tag2, tag3, status, image} = this.state;
        this.addItemService.updateData(company,title, prize, introduction, question, Survey1, Survey2, Survey3, Survey4, Survey5, deadline, tag1, tag2, tag3, status,image,this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container" >
                <form onSubmit={this.handleSubmit} className="editform">

                    <label>
                        Company:
              <textarea name='company' type="text" onChange={this.handleChange} value={this.state.company} className="form-control " />
                    </label><br />

                    <label>
                        Deadline:
              <textarea name='deadline' type="text" onChange={this.handleChange} value={this.state.deadline} className="form-control " />
                    </label><br />

                    <label>
                        Tag1:
              <textarea name='tag1' type="text" onChange={this.handleChange} value={this.state.tag1} className="form-control " />
                    </label><br />

                    <label>
                        Tag2:
              <textarea name='tag2' type="text" onChange={this.handleChange} value={this.state.tag2} className="form-control " />
                    </label><br />

                    <label>
                        Tag3:
              <textarea name='tag3' type="text" onChange={this.handleChange} value={this.state.tag3} className="form-control " />
                    </label><br />

                    <label>
                        Status:<br />

                        <select value={this.state.status} onChange={this.handleChange} name="status">
                            <option value="New">New</option>
                            <option value="Trending">Trending</option>
                            <option value="Completed">Completed</option>
                            <option value="Ongoing">Ongoing</option>
                        </select>
                    </label><br />

                    <label>
                        Edit Title:
                <textarea name="title" type="text" value={this.state.title} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit Prize:
                <input name="prize" type="text" value={this.state.prize} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit Introduction:
                <textarea name="introduction" type="text" value={this.state.introduction} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit Question:
                <textarea name="question" type="text" value={this.state.question} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Survey1:
              <textarea name='Survey1' type="text" value={this.state.Survey1} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey2:
              <textarea name='Survey2' type="text" value={this.state.Survey2} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey3:
              <textarea name='Survey3' type="text" value={this.state.Survey3} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey4:
              <textarea name='Survey4' type="text" value={this.state.Survey4} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Survey5:
              <textarea name='Survey5' type="text" value={this.state.Survey5} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Image:
              <textarea name='image' type="text" value={this.state.image} onChange={this.handleChange} className="form-control" />
                    </label><br/>

                    <input type="submit" value="Update" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default withRouter(EditItem);

