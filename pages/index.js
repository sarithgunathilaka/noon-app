import React, { Component } from 'react'
import Fetch from 'isomorphic-unfetch';
import Favourite from './favourites'
import Link from 'next/Link'
import Navbar from '../components/Navbar'
import Head from 'next/head'


class Index extends Component{

  

    constructor(props) {

      
        super(props);
    
        this.state = {
            data: [
                {
                  id: 1,
                  userName: "appleInc",
                  userImage: "https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png",
                  coverImage: "https://www.att.com/catalog/en/idse/Apple/Apple%20Watch%20Series%204%20-%2040mm/Space%20Gray%20Aluminum%20-%20Black%20Sport%20Band-hero-zoom.png",
                  title: "Apple Watch 4",
                  price: 400,
                  description: "Space Black Stainless Steel Case with Black Sport Band",
                  likes: 300,
                  tags: "#Apple #AppleWatch #luxury #fitness",
                  comments: "ben"
                },

                {
                    id: 2,
                    userName: "microsoft",
                    userImage: "https://cdn3.iconfinder.com/data/icons/picons-social/57/57-windows-512.png",
                    coverImage: "https://c.s-microsoft.com/en-us/CMSImages/SurfaceHome_HL_ImagePanel_1_V4.png?version=64622b0d-b501-b3e0-08d1-1038b35a9e3c",
                    title: "Surface Pro 6",
                    price: 800,
                    description: "ben",
                    likes: 300,
                    tags: "#tag1 #tag2 #tag3 #tag4",
                    comments: "ben"
                },
              ]
        };
    }

    favourited(prop, userName, userImage, coverImage, title, price, description, likes, tags, comments) {
        

        Fetch('http://localhost:3000/favourites', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: prop, 
            userImage: userName,
            coverImage: coverImage,
            title: title,
            price: price,
            description: description,
            likes: likes,
            tags: tags,
            comments: comments
        })
        })
    }
    

    render() {
      
        
       
        const dataList = this.state.data.map(data => {
            return(
              
                
                <div className="maindisplay">
                 
                    <div className="namedisplay">
                        <div className="mainName">
                            <img src={data.userImage} width="10%" height="10%" className="pfp"/>
                            <p className="username">{data.userName}</p>
                        </div>
                        <img className="icon3circ" src="https://image.flaticon.com/icons/svg/149/149947.svg"/>
                    </div>
                    <div className="subBody">
                      <div className="imagepost">
                          <img className="actualimage"src={data.coverImage} />
                      </div>
                    
                      <div className="titlePrice">
                        <div className="namedisplay">
                          <div className="name">
                            <p className="title">{data.title}</p>
                          </div>
                            <button onClick = {() => this.favourited(
                                data.id,
                                data.userName,
                                data.userImage,
                                data.coverImage,
                                data.title,
                                data.price,
                                data.description,
                                data.likes,
                                data.tags,
                                data.comments
                            )}><img className="icon3circ" src="https://image.flaticon.com/icons/svg/149/149947.svg"/></button>
                        </div>
                        
                          <div className="priceContainer"><span className="price">AED {data.price}</span></div>  
                        
                      </div>
                    </div>
                    <div className="sub2">
                      <div class="likescounter">
                        <img className="icon3circ" src="https://image.flaticon.com/icons/svg/60/60993.svg"/>  
                        <p class="likesdisplay">{data.likes} Likes</p>
                      </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>{data.description}</p>  
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>{data.tags}</p>  
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
                {dataList}
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
        background-color: white;
        box-shadow:0 2px 5px 0px #ddd;
      }

      .footer{
        display:flex;
        align-items:flex-end;
        padding:10px 10px;
        justify-content:space-between;
        background-color:#F57280;
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

export default Index;