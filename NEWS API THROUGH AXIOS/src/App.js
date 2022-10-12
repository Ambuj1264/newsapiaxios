import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
//   newState={userNews:[]}

state = { userData:[] }
 
    componentDidMount() {


        // const URL = "https://jsonplaceholder.typicode.com/posts";
        // axios.get(URL)
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({userData:res.data})
        //     })

        //     .catch((err => console.log(err.message)))


                const URL1="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8054cbf260c34c07b069dc7f331ec4bd";

                axios.get(URL1)
                .then(res=>{
                    console.log(res.data.articles)
                    this.setState({userData:res.data.articles})
                }).catch((e=>console.log(e.message)))
                
               
            }



     render() {
        return (
            <>
               
            </>
        )
    }
}

export default App;
