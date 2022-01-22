import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../store/useStore';

const Menu = () => {
    const tracker = useStore(state => state.tracker);
    return (
        <div className="text-center mx-auto md:w-1/2 mt-12 sm:flex-auto border-b-4 border-slate-400 dark:border-amber-200 text-black dark:text-orange-400">
            <nav>
                <ul className="flex font-medium text-xl md:flex-auto  ">
                    <li className={["flex-auto w-1/3  dark:hover:text-orange-600", tracker === 'all' ? 'underline underline-offset-4' : '' ].join(' ')}>
                        <Link to="/">All</Link>
                    </li>
                    <li className={["flex-auto w-1/3   dark:hover:text-orange-600", tracker === 'active' ? 'underline underline-offset-4' : '' ].join(' ')}>
                        <Link to="/Active">Active</Link>
                    </li>
                    <li className={["flex-auto w-1/3   dark:hover:text-orange-600", tracker === 'completed' ? 'underline underline-offset-4' : '' ].join(' ')}>
                        <Link to="/Completed">Completed</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
