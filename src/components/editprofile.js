import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import axios from 'axios';
import ProfileService from './profileservice';
import Upload from './upload';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editProfileService = new ProfileService();
        this.state = {  age: '', school: '', major: '', lookingfor: '', graduationdate: '' ,url:''};
    }

    componentDidMount() {
        axios.get('/profile/' + this.props.match.params.username)


            .then(response => {
                console.log(response.data[0].school)
                this.setState({
                    age: response.data[0].age,
                    school: response.data[0].school,
                    major: response.data[0].major,
                    lookingfor: response.data[0].lookingfor,
                    graduationdate: response.data[0].graduationdate,
                    url: response.data[0].url,

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
        this.editProfileService.updateProfile(this.state.age, this.state.school, this.state.major, this.state.lookingfor, this.state.graduationdate, this.props.match.params.username,);
    }

    render() {
        let uploadstatus;
        if (this.state.url === "") {
            uploadstatus = <Upload idnt={this.props.match.params.username}/>
        }


        return (
            <div className="container">
                {uploadstatus}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Edit Age:
                <input name="age" type="text" value={this.state.age} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit School:
                <input name="school" type="text" value={this.state.school} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit Major:
                <input name="major" type="text" value={this.state.major} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit LookingFor:
                <input name="lookingfor" type="text" value={this.state.lookingfor} onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <label>
                        Edit GraduationDate:
                <input name="graduationdate" type="text" value={this.state.graduationdate} onChange={this.handleChange} className="form-control" />
                    </label><br />


                    <input type="submit" value="Update" className="btn btn-primary" />
                </form>

            </div>
        );

    }

}

export default withRouter(EditProfile);