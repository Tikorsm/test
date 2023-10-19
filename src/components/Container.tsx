import {ReactNode } from 'react'

type props ={
    children: ReactNode
}

export function Container({children} : props) {
    return(
        <div className='flex items-center justify-between w-full max-w-[1246px] z-10 px-[15px] mx-auto'>
            {children}
        </div>
    )
}