import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {useContext} from "react"
import {TransactionContext} from "../context/TransactionContext"
import Loggin from '../components/Loggin'
import Retro from "../assets/retro.jpg"
import  PropagateLoader  from 'react-spinners/PropagateLoader'


const Home: NextPage = () => {
  const {currentAccount, isLoading} = useContext(TransactionContext)

  
  if(isLoading)
  return(
    <div className="bg-[#091818] h-screen flex flex-col items-center justify-center">
      <div className=" flex items-center space-x-2 mb-10">
      <Image src={Retro} className="rounded-full" height={40} width={40} />
      <h1 className="text-lg text-white font-bold">
        Loading with Metamask
      </h1>
      </div>
      <PropagateLoader color='white' size={30} />
    </div>
  )
  
  if(!currentAccount) return <Loggin />

  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>Lottery Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header /> 
    </div>
  )
}

export default Home
