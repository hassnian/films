import React, { Component } from 'react'
import axios from 'axios';

export class Form extends Component {

  constructor(){
    super();
    this.state={
      title:'',
      desc:'',
      img:'',
      amount:'',
      tickets:''

    }
  }
  handleTitleChange(e){
    console.log("asdas");
    this.setState({
      title:e.target.value
    })
  }
  handleDescChange(e){
    console.log("asdas");
    this.setState({
      desc:e.target.value
    })
  }
  handleImgChange(e){
    console.log("asdas");
    this.setState({
      img:e.target.value
    })
  }
  handleAmountChange(e){
    console.log("asdas");
    this.setState({
      amount:e.target.value
    })
  }
  handleTicketsChange(e){
    console.log("asdas");
    this.setState({
      tickets:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('/api/film',this.state).then(response=>{
      console.log(response);
    }).then(error=>{
      console.log(error);
    })

  }
  render() {
    return (
        <div className="container ">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <label htmlFor="title">Title: </label><input onChange={this.handleTitleChange.bind(this)} type="text" name="title" id="title"/> <br/>
                  <label htmlFor="desc">Description: </label><input onChange={this.handleDescChange.bind(this)} type="text" name="desc" id="desc"/> <br/>
                  <label htmlFor="img">Img</label><input onChange={this.handleImgChange.bind(this)} type="text" name="img" id="img"/><br/>
                  <label htmlFor="amount">Initial amount of grossing</label><input onChange={this.handleAmountChange.bind(this)} type="text" name="amount" id="amount"/><br/>
                  <label htmlFor="tickets">Tickets</label><input onChange={this.handleTicketsChange.bind(this)} type="text" name="tickets" id="tickets"/><br/>
                  
                  <input type="submit" value="Enviar" className="btn btn-primary"/>
                </form>
            </div>
    )
  }
}

export default Form
