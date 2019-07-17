import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Navbar from '../components/Navbar'

class Favourites extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            favs: null,
            isfavs: false
        };
    }


    async componentDidMount() {
        const res = await Fetch('http://localhost:3000/api/favourites');
        const data = await res.json();
        this.setState({favs: data.message, loading:false})
    }

    removeFav(id) {  
        Fetch('http://localhost:3000/delete', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
        })
        window.location.reload();
    }
    
    
    render() {
        if (this.state.loading){
            return <div>loading...</div>
        }
        
        if(this.state.favs.length == 0){
            return (
                <div className="mainContainer">
                  <div className="header">
                    <img className="icon2"src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg"/>
                  </div>
                  <div className="phoneScreen">
                      
                    No Favourites!
                  </div> 
                    <Navbar/>
                    <style>{`
                        html{
                          height:100%;
                          width:100%;
                        }
                        
                        @import url('https://fonts.googleapis.com/css?family=Roboto');
                        
                        *{
                          font-family: 'Roboto', sans-serif;
                        }
                  
                        .mainContainer {
                          width: 400px;
                          background-color: white;
                          display: flex;
                          flex-direction: column;
                        }
                  
                        .titlePrice{
                          padding-left: 0.5%;
                          color: white;
                        }
                        .phoneScreen{
                          height: 523px;
                          overflow: scroll;
                          overflow-x: hidden;
                          display: flex;
                          flex-direction:column;
                          
                        }
                       
                        .subBody{
                          background: black;
                        }
                        .icon1{
                          width:8%;
                        }
                        .icon2{
                          width:25%;
                          margin: auto;
                        }
                        .icon3{
                          width:8%;
                        }
                        .maindisplay{
                          border-bottom: 2px solid #a4a4a496;
                          display:flex;
                          flex-direction:column;
                          height:100%;
                          box-shadow: 0 2px 5px 0px #ddd;
                        }
                        .namedisplay{
                          display: flex;
                          align-items:center;
                          padding:0px 10px;
                          justify-content:space-between;
                        }
                        .name{
                          display: flex;
                          justify-content:flex-start;
                        }
                        .mainName{
                          display: flex;
                          justify-content:flex-start;
                          padding-top: 4px;
                        padding-bottom: 4px;
                        }
                        .pfp{
                          border-collapse: separate;
                          border-radius:50%;
                          width:10%;
                          height:10%;
                        
                        }
                        .username{
                          padding-left:5px;
                          font-weight:bold;
                          font-size:0.8em;
                        }
                        .title{
                          font-size: 1.0em;
                        }
                        .icon3circ{
                          width:5%;
                        }
                        .imagepost{
                          text-align: center;
                        }
                        .actualimage{
                          max-height: 300px;
                        }
                        .likesrow{
                          display:flex;
                          flex-direction:row;
                          align-items:center;
                          padding: 5px 5px;
                        }
                        .icon5{
                          width:8%;
                          padding-right:5px;
                        }
                        .icon6{
                          width:8%;
                          padding-right:5px;
                        }
                        .icon7{
                          width:8%;
                        }
                        .icon8{
                          width: 22px;
                        }
                        .likescounter{
                          margin-top: -1%;
                          display: flex;
                          align-items:center;
                          padding-right:10px;
                        }
                        
                        .likesdisplay{
                          padding-top: 1%;
                          width: 100%;
                          font-size:1.0em;
                          margin-left:5px;
                          font-weight:bold;
                        }
                  
                        .likeButton{
                          text-align: right;
                          border: none;
                          background: transparent;
                        } 
                        
                        .bold{
                          font-weight:bold;
                        }
                        .priceContainer{
                          padding-bottom: 5px;
                          margin-top: -12px;
                          font-size: 0.7em;
                          margin-left: 10px;
                        }
                        
                        .price{
                          font-weight: bold;
                          font-size: 1.5em;
                        }
                        .captioncounter{
                          display:flex;
                          align-items:center;
                          padding-right:10px;
                          margin-top:-15px;
                        }
                        .captiondisplay{
                          font-size: 0.7em;
                        }
                        .sub2 {
                          margin-left:10px;
                        }
                        .commentcounter{
                          display:flex;
                          align-items:center;
                          padding-right:10px;
                          margin-top:-15px;
                        }
                        .commentdisplay{
                          font-size: 0.7em;
                          
                          color: grey;
                        }
                  
                        .header{
                          display:flex;
                          align-items:flex-start;
                          flex-direction: row;;
                          padding:10px 10px;
                          justify-content:space-between;
                          background-color: #eaeaea;
                          box-shadow:0 2px 5px 0px #ddd;
                        }
                  
                        .footer{
                          display:flex;
                          align-items:flex-end;
                          padding:10px 10px;
                          justify-content:space-between;
                          background-color: #eaeaea;
                          box-shadow:0 -2px 5px 0px #ddd;
                        
                        }
                        
                        .bottomicons{
                          opacity: 0.2;
                          width:8%;
                        }
                        .bottomicon1{
                          opacity:1;
                          width:20px;
                        }
                    `}</style>
                </div>
            );
        }
        

        
        const favList = this.state.favs.map(fav => {
            return(
                <div className="maindisplay">
                 
                    <div className="namedisplay">
                        <div className="mainName">
                            <img src={fav.userImage} width="10%" height="10%" className="pfp"/>
                            <p className="username">{fav.userName}</p>
                        </div>
                        <img className="icon3circ" src="https://image.flaticon.com/icons/svg/149/149947.svg"/>
                    </div>
                    <div className="subBody">
                      <div className="imagepost">
                          <img className="actualimage"src={fav.coverImage} />
                      </div>
                    
                      <div className="titlePrice">
                        <div className="namedisplay">
                          <div className="name">
                            <p className="title">{fav.title}</p>
                          </div>
                            <button onClick={
                                () => this.removeFav(fav.id)
                            }>Remove</button>
                        </div>
                        
                          <div className="priceContainer"><span className="price">AED {fav.price}</span></div>  
                        
                      </div>
                    </div>
                    <div className="sub2">
                      <div className="likescounter">
                        <img className="icon3circ" src="https://image.flaticon.com/icons/svg/60/60993.svg"/>  
                        <p className="likesdisplay">{fav.likes} Likes</p>
                      </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>{fav.description}</p>  
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>{fav.tags}</p>  
                    </div>
                    <div className="commentcounter">
                        <p className="commentdisplay"> View all 200 comments </p> 
                    </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="mainContainer">
              <div className="header">
                <img className="icon2"src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg"/>
              </div>
              <div className="phoneScreen">
                  
                {favList}
              </div> 
                <Navbar/>
                <style>{`
       
             
          
       html{
        height:100%;
        width:100%;
      }
      
      
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      
      *{
        font-family: 'Roboto', sans-serif;
      }

      .mainContainer {
        width: 400px;
        background-color: white;
        display: flex;
        flex-direction: column;
      }

      .titlePrice{
        padding-left: 0.5%;
        color: white;
      }
      .phoneScreen{
        height: 523px;
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction:column;
         
      }
      

      .subBody{
        background: black;
      }
      .icon1{
        width:8%;
      }
      .icon2{
        width:25%;
        margin: auto;
      }
      .icon3{
        width:8%;
      }
      .maindisplay{
        border-bottom: 2px solid #a4a4a496;
        display:flex;
        flex-direction:column;
        height:100%;
        box-shadow: 0 2px 5px 0px #ddd;
      }
      .namedisplay{
        display: flex;
        align-items:center;
        padding:0px 10px;
        justify-content:space-between;
      }
      .name{
        display: flex;
        justify-content:flex-start;
      }

      .mainName{
        display: flex;
        justify-content:flex-start;
        padding-top: 4px;
      padding-bottom: 4px;
      }
      
      
      .pfp{
        border-collapse: separate;
        border-radius:50%;
        width:10%;
        height:10%;
       
      }
      .username{
        padding-left:5px;
        font-weight:bold;
        font-size:0.8em;
      }
      .title{
        font-size: 1.0em;
        
        
      }
      .icon3circ{
        width:5%;
        
      }
      .imagepost{
        text-align: center;
        
      }
      .actualimage{
        max-height: 300px;
        
      }
      .likesrow{
        display:flex;
        flex-direction:row;
        align-items:center;
        padding: 5px 5px;
      }
      .icon5{
        width:8%;
        padding-right:5px;
      }
      .icon6{
        width:8%;
        padding-right:5px;
      }
      .icon7{
        width:8%;
      }
      .icon8{
        width: 22px;
      }
      .likescounter{
        margin-top: -1%;
        display: flex;
        align-items:center;
        padding-right:10px;
      }
      
      .likesdisplay{
        padding-top: 1%;
        width: 100%;
        font-size:1.0em;
        margin-left:5px;
        font-weight:bold;
      }

      .likeButton{
        text-align: right;
        border: none;
        background: transparent;
      } 
      
      .bold{
        font-weight:bold;
      }
      .priceContainer{
        padding-bottom: 5px;
        margin-top: -12px;
        font-size: 0.7em;
        margin-left: 10px;
      }
      
      .price{
        font-weight: bold;
        font-size: 1.5em;
      }
      .captioncounter{
        display:flex;
        align-items:center;
        padding-right:10px;
        margin-top:-15px;
      }
      .captiondisplay{
        font-size: 0.7em;
        
        
      }
      .sub2 {
        margin-left:10px;
      }
      .commentcounter{
        display:flex;
        align-items:center;
        padding-right:10px;
        margin-top:-15px;
      }
      .commentdisplay{
        font-size: 0.7em;
        
        color: grey;
        
      }

      .header{
        display:flex;
        align-items:flex-start;
        flex-direction: row;;
        padding:10px 10px;
        justify-content:space-between;
        background-color: #eaeaea;
        box-shadow:0 2px 5px 0px #ddd;
      }

      .footer{
        display:flex;
        align-items:flex-end;
        padding:10px 10px;
        justify-content:space-between;
        background-color: #eaeaea;
        box-shadow:0 -2px 5px 0px #ddd;
      
      }
      
      .bottomicons{
        opacity: 0.2;
        width:8%;
      }
      .bottomicon1{
        opacity:1;
        width:20px;
      }
      
      
          
          
  `}</style>
                </div>
        );
    }
}

export default Favourites;