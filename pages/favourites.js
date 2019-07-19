import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Layout/mainLayout'

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
        return (
            <div>
                <Main 
                data={this.state.favs} 
                button={this.removeFav} 
                load={this.state.loading}
                butStatus="Dislike"
                />
            </div>
        )
    }
}

export default Favourites;