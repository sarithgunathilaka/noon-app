import React, { Component } from 'react'
import Fetch from 'isomorphic-unfetch';
import Favourite from './favourites'
import Link from 'next/Link'
import Navbar from '../components/Navbar'

class Index extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            data: [
                {
                  id: 1,
                  userName: "gunsnroses",
                  userImage: "https://1000logos.net/wp-content/uploads/2017/11/Logo-Guns-N%E2%80%99-Roses-Logo-png.png",
                  coverImage: "http://athenaposters.ca/wp-content/uploads/2018/10/RP16255-Guns-N-Roses-Stacked-Logo.jpg",
                  title: "Appetite For Destruction",
                  price: 80,
                  description: "ben",
                  likes: 300,
                  tags: "#tag1 #tag2 #tag3 #tag4",
                  comments: "ben"
                },

                {
                    id: 2,
                    userName: "bobmarley",
                    userImage: "ben",
                    coverImage: "ben",
                    title: "Legend",
                    price: 60,
                    description: "ben",
                    likes: 300,
                    tags: "#tag1 #tag2 #tag3 #tag4",
                    comments: "ben"
                },

                {
                    id: 3,
                    userName: "acdcofficial",
                    userImage: "ben",
                    coverImage: "ben",
                    title: "Back In Black",
                    price: 50,
                    description: "ben",
                    likes: 200,
                    tags: "#tag1 #tag2 #tag3 #tag4",
                    comments: "ben"
                }

                
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
                        <div className="name">
                            <img src={data.userImage} width="10%" height="10%" className="pfp"/>
                            <p className="username">{data.userName}</p>
                        </div>
                        <img className="icon3circ" src="https://image.flaticon.com/icons/svg/149/149947.svg"/>
                    </div>
                    <div className="imagepost">
                        <img className="actualimage"src={data.coverImage} />
                    </div>
                    
                    <div>
                    <div className="likescounter">
                        <p className="likesdisplay">{data.title}</p>
                        <button className="likeButton"><img className="icon8"src="https://image.flaticon.com/icons/svg/25/25424.svg"/></button>
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold">{data.price}</span></p>  
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><img className="icon8"src="https://image.flaticon.com/icons/svg/25/25424.svg"/><span className="bold">Likes</span></p>  
                    </div>
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>{data.description}</p>  
                    </div>
                    <div className="captioncounter">
                        <p className="captiondisplay"><span className="bold"></span>#instaLife #baewatch</p>  
                    </div>
                    <div className="commentcounter">
                        <p className="commentdisplay"> View all 200 comments </p> 
                    </div>
                </div>

            )
        })

        return (
            
            <div className="container">
                
                 <body>
                <div className="phoneScreen">
                <div className="header">
                    <img className="icon1"src="https://image.flaticon.com/icons/svg/25/25315.svg" />
                <img className="icon2"src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg"/>
                <img className="icon3"src="https://image.flaticon.com/icons/svg/20/20402.svg"/>
                </div>
                    {dataList}
                <div className="footer">
                <button className="likeButton"><img className="bottomicon1"src="https://image.flaticon.com/icons/svg/20/20176.svg" /></button>
                <button className="likeButton"><img className="bottomicon1"src="https://image.flaticon.com/icons/svg/60/60993.svg" /></button>
                
                </div>
            </div> 
  </body>
  <style>{`
       
             
          
       html{
        height:100%;
        width:100%;
      }
      body{
        height:100%;
        width:100%;
        background-color:grey;
      }
      
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      
      *{
        font-family: 'Roboto', sans-serif;
      }
      .phoneScreen{
        width:300px;
        
        background-color: white;
        display: flex;
        flex-direction:column;
         
      }
      .header{
        display:flex;
        align-items:flex-start;
        flex-direction: row;;
        padding:10px 10px;
        justify-content:space-between;
        background-color:#F57280;
        box-shadow:0 2px 5px 0px #ddd;
      }
      .icon1{
        width:8%;
      }
      .icon2{
        width:25%;
      }
      .icon3{
        width:8%;
      }
      .maindisplay{
        display:flex;
        flex-direction:column;
        height:100%;
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
      
      .pfp{
        border-radius:50%;
        width:10%;
        height:10%;
        margin-top:4%;
      }
      .username{
        padding-left:5px;
        font-weight:bold;
        font-size:0.8em;
      }
      .icon3circ{
        width:5%;
        opacity:0.5;
      }
      .imagepost{
        height:60%;
      }
      .actualimage{
        width:100%;
        height:100%;
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
        width:15px;
      }
      .likescounter{
          
       display: flex;
        align-items:center;
        padding-right:10px;
      }
      
      .likesdisplay{
        font-size:0.7em;
        margin-left:10px;
        font-weight:bold;
      }

      .likeButton{
        
        border: none;
        background: transparent;
      }
      
      .bold{
        font-weight:bold;
      }
      .captioncounter{
        display:flex;
        align-items:center;
        padding-right:10px;
        margin-top:-15px;
      }
      .captiondisplay{
        font-size: 0.7em;
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
        margin-left:10px;
        color: grey;
        
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