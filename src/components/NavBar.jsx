import React from 'react'

const NavBar = () => {
    const links = [
        {label: 'Store'},
        {label: 'Mac'},
        {label: 'iPhone'},
        {label: 'Watch'},
        {label: 'Vision'},
        {label: 'Store'},
        {label: 'Airpods'}
    ]
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo"/>
                <ul>
                    {links.map(({label})=>(
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
