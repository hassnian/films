import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
        <div className="container ">
                <form action="">
                  <label htmlFor="title">Title: </label><input type="text" name="title" id="title"/> <br/>
                  <label htmlFor="desc">Description: </label><input type="text" name="desc" id="desc"/> <br/>
                  <label htmlFor="img">Img</label><input type="text" name="img" id="img"/><br/>
                  
                  <input type="submit" value="Enviar" className="btn btn-primary"/>
                </form>
            </div>
    )
  }
}

export default Form
