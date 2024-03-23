import React from 'react'

export default function NavItem({title}) {
    return (
        <li className="nav-item mx-2 ">
            <a className="nav-link " href="#">{title}</a>
        </li>
    )
}
