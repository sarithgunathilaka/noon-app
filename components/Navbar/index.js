import React, { Component } from 'react'
import Link from 'next/Link'

class Navbar extends Component{
    constructor(props){
        super(props) 
        this.props = props
    }

    render() {
        return (
            <div className="footer">
                        
                <Link href='/' className="likeButton"><img className="bottomicon1"src="https://image.flaticon.com/icons/svg/271/271218.svg" /></Link>
                <Link href='/' className="likeButton"><img className="bottomicon1"src="https://image.flaticon.com/icons/svg/20/20176.svg" /></Link>
                <Link href='/favourites' className="likeButton"><img className="bottomicon1"src="https://image.flaticon.com/icons/svg/60/60993.svg" /></Link>
                
                
            <style>{`
                .footer{
                    display:flex;
                    align-items:flex-end;
                    padding:10px 10px;
                    justify-content:space-between;
                    background-color:#F57280;
                    box-shadow:0 -2px 5px 0px #ddd;
                  
                  }

                  .bottomicon1{
                    opacity:1;
                    width:20px;
                  }

                  .likeButton{
                    text-align: right;
                    border: none;
                    background: transparent;
                  } 

            `}</style>  
                </div>


        )
    }
}

export default Navbar;