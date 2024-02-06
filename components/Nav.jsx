'use client';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    const isUserLogged = true

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image src='/assets/images/logo.webp' alt='logo' width={30} height={30} className='object-contain'/>
                <p className='logo_text'>Expressay</p>
            </Link>

            <div className='sm:flex hidden'>
                {isUserLogged ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-entry' className='green_btn'>
                            Create entry
                        </Link>
                        <button type='button' onClick={'signOut'} className='outline_btn'>
                            Sign out
                        </button>
                        <Link href='/profile'>
                            <Image src='/assets/icons/user.svg' alt='profile avatar' width={37} height={37} className='rounded-full'/>
                        </Link>
                    </div>
                ) : (
                    <>

                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;