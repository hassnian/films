import React, { Component } from 'react'
import axios from 'axios';

export class Stats extends Component {
    constructor(){
        super();
        this.state={
            films:[]
        }
    }

componentWillMount(){
    axios.get('/api/film').then(response=>{
        this.setState({
            films:response.data
        })
    })
    .then(error=>{
        console.log("Error is :" +error)
    })
    
}

  render() {
    return (
      <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <td></td>
                    <td>Title</td>
                    <td><i className="fas fa-yen-sign"></i></td>
                    <td><i className="fas fa-ticket-alt"></i></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img className="film-table" src="http://t2.gstatic.com/images?q=tbn:ANd9GcTBHgLHLjhCNTwZp-MYfvMOyI7Iu7PLcR2rgLZek0WwrDM7DjMG" alt=""/></td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td><button className="btn btn-danger">Cancel movie</button></td>
                </tr>
                <tr>
                    <td><img className="film-table" src="http://t2.gstatic.com/images?q=tbn:ANd9GcTBHgLHLjhCNTwZp-MYfvMOyI7Iu7PLcR2rgLZek0WwrDM7DjMG" alt=""/></td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td><button className="btn btn-danger">Cancel movie</button></td>
                </tr>
                <tr>
                    <td><img className="film-table" src="http://t2.gstatic.com/images?q=tbn:ANd9GcTBHgLHLjhCNTwZp-MYfvMOyI7Iu7PLcR2rgLZek0WwrDM7DjMG" alt=""/></td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td>transformers</td>
                    <td><button className="btn btn-danger">Cancel movie</button></td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Stats
