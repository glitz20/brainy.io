import React, { Component } from 'react';


import axios from 'axios';



class CommentService {

    updateComment(a, b, c, d,id) {
        axios.post('/responses/updatecomment/' + id, {
            comment: a,
            unique: b,
            relevance: c,
            clarity: d,
           
           
        })

            .then(res => this.setState({
                answer: res.data[0].answer,
                comment: res.data[0].comment,
                clarity: res.data[0].clarity,
                unique: res.data[0].unique,
                relevance: res.data[0].relevance
            }))
            .catch(err => console.log(err))
    }
}

export default CommentService;
