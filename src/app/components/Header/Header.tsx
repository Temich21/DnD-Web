"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { setBurger } from '@app/app/redux/reducers/BurgerSlice'
import { useAppDispatch, useAppSelector } from "@app/app/redux/store"

interface HeaderState {
    children: React.ReactNode
    name: string
}

export const Header = ({ children, name }: HeaderState) => {
    const dispatch = useAppDispatch()
    const burger = useAppSelector(state => state.burgerReducer)
    return (
        <header className='h-header flex fixed top-0 left-0 right-0 items-center mx-auto bg-headerGray'>
            <div className='w-burger flex justify-center'>
                {burger.burger ?
                    <FontAwesomeIcon
                        icon={faBars}
                        color='white'
                        size="2x"
                        onClick={() => dispatch(setBurger(false))}
                        cursor='pointer' /> :
                    <FontAwesomeIcon
                        icon={faXmark}
                        color='white'
                        size="2x"
                        onClick={() => dispatch(setBurger(true))}
                        cursor='pointer' />
                }
            </div>
            <div className='flex grow items-center justify-center text-header gap-header'>
                {name}
                {children}
            </div>
        </header>
    )
}