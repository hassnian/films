import React, { Component } from 'react'
import axios from 'axios';
import {Route,Router,BrowserRouter,Link} from 'react-router-dom';


export class Film extends Component {
  constructor () {
    super()
    this.state = {
      films: [],
      list:undefined  
          
    }

   
  }

  componentWillMount(){
    axios.get("/api/film")
    .then(response=>{
      this.setState({
        films:response.data
      }) 
      this.setState({
        list:response.data.map(film=>{
          return(
            <Link to={"./films/"+film.id} key={film.id}>
          
            <div className="film" >
              <img src={film.img}/>
              <p className="title">{film.title}</p>
              
            </div>
            </Link>
          )
        })
      })
      
    })   
  }
 
  


  render() {
    return (
      <div className="container flex">
        {this.state.list}
      </div>
    )
  }
}

export default Film
