import React, { Component } from 'react';


import axios from 'axios';



class ProfileService {

    updateProfile(a, b, c, d, e,username ) {
        axios.post('/profile/update/' + username, {
            age: a,
            school: b,
            major: c,
            lookingfor: d,
            graduationdate: e
            

        })
        
            .then(res => this.setState({
                
                age: res.data[0].age,
                school: res.data[0].school,
                major: res.data[0].major,
                lookingfor: res.data[0].lookingfor,
                graduationdate: res.data[0].graduationdate
              
            }))
            .catch(err=>console.log(err))
    }


    updateComplete(a, username) {
        axios.post('/profile/updatecomplete/' + username, {
            completed:a

        })
            .then(function(response) {
                console.log(response);
            })
            .catch(err => console.log(err))

    }

    updateUrl(a, username) {
        axios.post('/profile/updateurl/' + username, {
            url: a

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err))

    }
}

export default ProfileService;
