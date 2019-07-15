import React, { Component } from 'react'
import Link from 'next/Link'

class Navbar extends Component{
    constructor(props){
        super(props) 
        this.props = props
    }

    render() {
        return (
            <nav>
                <div>
                    <Link href='/'>
                        <a title='home'>
                            Home
                        </a>
                    </Link>
                    <Link href='/favourites'>
                        <a title='favourites'>
                            Liked
                        </a>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;