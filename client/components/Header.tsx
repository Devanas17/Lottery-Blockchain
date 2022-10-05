import React, {useContext} from 'react';
import Retro from "../assets/retro.jpg"
import Image from 'next/image';
import NavButton from './NavButton';
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"
import {TransactionContext} from "../context/TransactionContext"


const style = {
  wrapper: 'grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5',
  profile: 'rounded-full hover:cursor-pointer',
  appName: 'text-lg text-white font-bold',
  headerLeft: 'flex items-center space-x-2',
  userAddress: 'text-s text-emerald-500 truncate',
  headerCenter: 'hidden md:flex items-center justify-center rounded-md md:col-span-3',
  bgButtons: 'bg-[#0a1f1c] space-x-2 p-4',
  button: ' text-white py-2 px-4 rounded bg-[#036756] font-semibold cursor-pointer ',
  headerRight: 'flex flex-col ml-auto  text-right',
  iconStyle: 'h-8 2-8 mx-auto text-white cursor-pointer',
  headerRightLogout: 'md:hidden ',
}


const Header = () => {
  const {currentAccount, disConnect} = useContext(TransactionContext)
  return (
    <header className={style.wrapper}>
        {/* left div */}

        <div className={style.headerLeft}>
      <Image src={Retro} className={style.profile} alt="profile" width={50} height={50} />
       <div className="">
            <h1 className={style.appName}>Retro Lottery</h1>
            <p className={style.userAddress}>User: {currentAccount?.substring(0,5)}...{currentAccount?.substring(currentAccount.length, currentAccount.length - 5)}</p>
          </div>
        </div>

    {/* center div */}
        <div className={style.headerCenter}>
          <div className={style.bgButtons}>
            <NavButton isActive title="Buy Tickets" />
            <NavButton onClick={disConnect} title="Logout" />
          </div>
        </div>


    {/* Right Div */}
      <div className={style.headerRight}>
        <Bars3BottomRightIcon className={style.iconStyle}/>

      <span className={style.headerRightLogout}>
        <NavButton onClick={disConnect} title='Logout' />
      </span>
      </div>
    </header> 
  )
}

export default Header