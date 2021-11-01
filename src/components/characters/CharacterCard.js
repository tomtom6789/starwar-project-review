import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ character: {name , id} }) => <li><NavLink to={`/characters/${id}`}>{ name }</NavLink></li>
