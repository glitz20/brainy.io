import React, { Component } from "react";
import axios from "axios";
import ProfileService from './profileservice';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: null,
            url:''
        };
        this.editProfileService = new ProfileService();
    }

    

    handleUploadFile = event => {
        console.log(event.target.files[0]);
        const data = new FormData();
        data.append("file", event.target.files[0]);
        axios.post("/file", data).then(res => {
            console.log(res.data.fileUrl);
            this.setState({
                url: res.data.fileUrl

            });
            this.editProfileService.updateUrl(this.state.url,this.props.idnt);
            
        });
    };

    render() {
        return (
            <div>
                <img width="320px" src={this.state.imageUrl} />
                <div>
                    <input type="file" onChange={this.handleUploadFile} />
                </div>
            </div>
        );
    }
}

export default Upload;