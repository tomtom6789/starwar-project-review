import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <ul>
                        <li><NavLink to="/Characters">Characters</NavLink></li>
                        <li><NavLink to="/Characters/new">Create Character</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
