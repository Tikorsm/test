import IconSeach from '@/assets/icon-search.svg'
import Image from 'next/image';


export function  Search() {
    return ( 
        <div className='flex items-center gap-4'>
            <Image
            src={IconSeach}
            alt='Search'
            
            />

            <input type="text" className='bg-transparent outline-none pr-5 text-white placeholder:text-white' placeholder='Search' />
        </div>
     );
}
