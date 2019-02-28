import axios from 'axios';

class ItemService {

    sendData(data) {
        axios.post('/items/add/post', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    updateData(com,a, b,c,d,e,f,g,h,i,j,k,l,m,n,o,id) {
        axios.post('/items/update/' + id, {
            company: com,
            title: a,
            prize:b,
            introduction:c,
            question: d,
            survey1: e,
            survey2:f,
            survey3: g,
            survey4:h ,
            survey5: i,
           
            deadline: j,
            tag1: k,
            tag2: l,
            tag3: m,
            status: n,
            image:o


        })
            .then(res => this.setState({ title: res.data.title, prize: res.data.prize, introduction: res.data.introduction, question: res.data.question, Survey1: res.data.survey1, Survey2: res.data.survey2, Survey3: res.data.survey3, Survey4: res.data.survey4, Survey5: res.data.survey5, image:res.data.image }))
            .catch(err => console.log(err))
    }

    updatecompleted(a, id) {
        axios.post('/items/updatecompleted/' + id, {

            
            completed: a


        })
            .then(res => this.setState({completed: res.data.completed }))
            .catch(err => console.log(err))
    }

    deleteData(id) {
        axios.get('/items/delete/' + id)
            .then().catch(err => console.log(err))
    }


}

export default ItemService;