"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useAppSelector } from "@app/app/redux/store"

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Create character', path: '/create-character' },
    { id: 3, title: 'Character generator', path: '/character-generator' }
]

export const Navigation: React.FC = () => {
    const pathname = usePathname()

    const burger = useAppSelector(state => state.burgerReducer)

    return (
        <ul className='w-navigation h-navigation flex flex-col gap-2 items-center list-none fixed m-0 top-16 pt-2 pl-0 transition-all duration-1000 bg-navGray/70'
            style={{ left: (!burger.burger ? '0px' : '-250px') }}>
            {navigation.map(({ id, title, path }) => (
                <li key={id} className='text-center'>
                    <Link className={pathname === path ? 'navActiveText' : 'navText'} href={path}>{title}</Link>
                    {id == navigation.length ? null : <hr className='w-navLine border-b-2 border-header rounded-full no-underline' />}
                </li>
            ))}
        </ul>
    )
}
