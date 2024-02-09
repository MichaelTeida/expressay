'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Nav = () => {
    const {data: session} = useSession()

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image src='/assets/images/logo.webp' alt='logo' width={30} height={30} className='object-contain'/>
                <p className='logo_text'>Expressay</p>
            </Link>

            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-entry' className='green_btn'>
                            Create entry
                        </Link>
                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign out
                        </button>
                        <Link href='/profile'>
                            <Image src={session?.user.image} alt='profile avatar' width={37} height={37}
                                   className='rounded-full'/>
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)}
                                    className='green_btn'>
                                Sign in
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* mobile nav */}

            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <Image src={session?.user.image} alt='profile avatar' width={37} height={37}
                               className='rounded-full' onClick={() => setToggleDropdown(prevState => !prevState)}/>
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href='/profile' className='dropdown_link'
                                      onClick={() => setToggleDropdown(false)}>
                                    Profile
                                </Link>
                                <Link href='/create-entry' className='dropdown_link'
                                      onClick={() => setToggleDropdown(false)}>
                                    Create entry
                                </Link>
                                <button type='button' className='mt-4 w-full green_btn' onClick={() => {
                                    setToggleDropdown(false)
                                    signOut()
                                }}>
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)}
                                    className='green_btn'>
                                Sign in
                            </button>
                        ))}
                    </>
                )}
            </div>

        </nav>
    );
};

export default Nav;