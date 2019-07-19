import React, { Component } from 'react'
import Fetch from 'isomorphic-unfetch';
import Main from '../components/Layout/mainLayout'

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
                },

                {
                    id: 2,
                    userName: "microsoft",
                    userImage: "https://cdn3.iconfinder.com/data/icons/picons-social/57/57-windows-512.png",
                    coverImage: "https://c.s-microsoft.com/en-us/CMSImages/SurfaceHome_HL_ImagePanel_1_V4.png?version=64622b0d-b501-b3e0-08d1-1038b35a9e3c",
                    title: "Surface Pro 6",
                    price: 800,
                    description: "Stand out from the ordinary",
                    likes: 200,
                    tags: "#microsoft #surfacePro #tablet #notebook",
                },
              ],
          loading: false
      };
  }

    favourited(id, userName, userImage, coverImage, title, price, description, likes, tags) {
        
      Fetch('http://localhost:3000/favourites', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              id: id,
              userName: userName, 
              userImage: userImage,
              coverImage: coverImage,
              title: title,
              price: price,
              description: description,
              likes: likes+1,
              tags: tags,
              
          }),
      })
    }
    
    render() {
        return (
            <div>
                <Main 
                  data={this.state.data} 
                  button={this.favourited} 
                  load={this.state.loading}
                  butStatus="Favourite"
                />
            </div>
        )
    }
}

export default Index;


