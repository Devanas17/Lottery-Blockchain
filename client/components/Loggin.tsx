import React, {useContext} from 'react'
import Image from 'next/image'
import Retro from "../assets/retro.jpg"
import {TransactionContext} from '../context/TransactionContext'



const style = {
    wrapper: 'bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center',
    content: 'flex flex-col items-center justify-center mb-10 text-center',
    logginImage: 'rounded-full mb-10',
    welcomeTxt: 'text-2xl sm:text-3xl md:text-5xl uppercase font-bold text-white',
    getStartTxt: 'mt-1 text-[18px] font-medium text-white',
    btn: 'cursor-pointer flex items-center justify-center mt-5 bg-white px-8 py-5 rounded-lg shadow-md font-bold',
}

const Loggin = () => {
    const {connectWallet} = useContext(TransactionContext)
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
        <Image className={style.logginImage} src={Retro} width={80} height={80} />
        <h1 className={style.welcomeTxt}>Welcome to Retro Lottery...</h1>
        <h2 className={style.getStartTxt} >Get Started by loggin with your Metamask</h2>

        <button className={style.btn} onClick={() => connectWallet()} >Loggin with Metamask</button>
        </div>
    </div>
  )
}

export default Loggin