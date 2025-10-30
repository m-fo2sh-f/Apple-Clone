import React from 'react'
import {navLinks} from '../Constants/index.jsx'
const NavBar = () => {

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo"/>
                <ul>
                    {navLinks.map(({label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>
                <div className={'flex-center gap-3'} >
                    <button >
                        <img src="/search.svg" alt=""/>
                    </button>
                    <button >
                        <img src="/cart.svg" alt=""/>
                    </button>
                </div>
            </nav>

        </header>
    )
}
export default NavBar
