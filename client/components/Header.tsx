import React from 'react';
import Profile from "../assets/profile.jpg"
import Image from 'next/image';
import NavButton from './NavButton';
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"

const style = {
  wrapper: 'grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5',
    profile: 'rounded-full hover:cursor-pointer',
    appName: 'text-lg text-white font-bold',
    headerLeft: 'flex items-center space-x-2',
    userAddress: 'text-s text-emerald-500 truncate',
    headerCenter: 'hidden md:flex items-center justify-center rounded-md md:col-span-3',
    bgButtons: 'bg-[#0a1f1c] space-x-2 p-4',
    headerRight: 'flex flex-col ml-auto  text-right',
    iconStyle: 'h-8 2-8 mx-auto text-white cursor-pointer',
    headerRightLogout: 'md:hidden ',
}


const Header = () => {
  return (
    <header className={style.wrapper}>
        {/* left div */}
        <div className={style.headerLeft}>
            <Image src={Profile} className={style.profile} alt="profile" width={50} height={50} />
        <div className="">
            <h1 className={style.appName}>DevAnas Lottery</h1>
            <p className={style.userAddress}>0xf382jf2...</p>
        </div>
        </div>

    {/* center div */}
        <div className={style.headerCenter}>
          <div className={style.bgButtons}>
            <NavButton isActive title="Buy Tickets" />
            <NavButton title="Logout" />
          </div>
        </div>


    {/* Right Div */}
      <div className={style.headerRight}>
        <Bars3BottomRightIcon className={style.iconStyle}/>

      <span className={style.headerRightLogout}>
        <NavButton title='Logout' />
      </span>
      </div>
    </header> 
  )
}

export default Header