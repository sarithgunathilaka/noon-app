import Fetch from 'isomorphic-unfetch';
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
class Favourites extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            favs: null,
        };
    }


    async componentDidMount() {
        const res = await Fetch('http://localhost:3000/api/favourites');
        const data = await res.json();
        this.setState({favs: data.message, loading:false})
        
    }
    
    
    render() {
        if (this.state.loading){
            return <div>loading...</div>
        }
        
        if (this.state.favs) {
        const favList = this.state.favs.map(fav => {
            return(
                <tr>
                    <td>{fav.userName}</td>
                </tr>
            )
        })

        return (
            <div className="container">
            
            <h2>Members</h2>
            <p>Total Favourites: {favList.length}</p>
            
                    <tbody>
                        {favList}
                    </tbody>
            
            </div>
        );
    }
    
    }
}

export default Favourites;