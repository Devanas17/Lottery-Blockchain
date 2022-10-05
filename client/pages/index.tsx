import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {useContext} from "react"
import {TransactionContext} from "../context/TransactionContext"
import Loggin from '../components/Loggin'

const Home: NextPage = () => {
  const {currentAccount} = useContext(TransactionContext)

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
