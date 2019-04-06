import React, { Component } from 'react'

export class FilmInfo extends Component {
    constructor () {
        super()
        this.state = {
            film:undefined, 
            filmid:undefined, 
            filmhtml:undefined,
            
        }
    }
    
    componentWillMount(){
        axios.get("/api/film")
        .then(response=>{
          
           this.setState({
               filmid:this.props.match.params.idfilm   
           })
           this.setState({
            film:response.data
            .filter(film=>{
                return(film.id==this.state.filmid)
            })[0]
          })
          this.renderHtml();
          })        
        }  
      renderHtml(){
        this.setState({
            filmhtml:
                  <div className="film-info">
                      <img className="" src={this.state.film.img} alt=""/>
                      <h1>{this.state.film.title}</h1>
                      <p>{this.state.film.description}</p>
                      <p><strong>{this.state.film.tickets}</strong> tickets available</p>
                      <p><strong>${this.state.film.amount}</strong>  movie grossing</p>
                      <button className="btn btn-primary" onClick={this.buyTicket.bind(this)}>Buy a ticket</button><br/>
                      <button className="btn btn-outline-danger">Delete</button>

                  </div>
              
          })
      }
      buyTicket(){
          const film=this.state.film;
          film.amount+=10;
          film.tickets-=1;
         this.setState({
             film:film
         })
         this.renderHtml();
      }
  render() {
    return (
      <div className="container">
            {this.state.filmhtml}
      </div>
    )
  }
}

export default FilmInfo
