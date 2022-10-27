import React, { useEffect, useState, createContext } from 'react'
import {contractABI, contractAddress} from "../utils/constant"
import { ethers } from 'ethers';
import { useRouter } from 'next/router';

export const TransactionContext = createContext();

let eth;

if (typeof window !== 'undefined') {
    eth = window.ethereum
  }

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractABI,
    contractAddress,
    signer
  )
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()


  


     /**
   * Checks if MetaMask is installed and an account is connected
   * @param {*} metamask Injected MetaMask code from the browser
   * @returns
   */
  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask ')

      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object.')
    }
  }

    /**
   * Prompts user to connect their MetaMask wallet
   * @param {*} metamask Injected MetaMask code from the browser
   */
    const connectWallet = async (metamask = eth) => {
        try {
          if (!metamask) return alert('Please install metamask ')
    
          const accounts = await metamask.request({ method: 'eth_requestAccounts' })
          setCurrentAccount(accounts[0])
        } catch (error) {
          console.error(error)
          throw new Error('No ethereum object.')
        }
      }

// Trigger loading modal
// useEffect(() => {
//   // setIsLoading(true)
//   if(isLoading){
//     router.push(`/?loading=${currentAccount}`)
//   } else {
//     router.push(`/`)
//   }
// }, [connectWallet])

      const disConnect = async(metamask = eth) => {
        setCurrentAccount = null;
        console.log("You hit logout")
      }

    return (
        <TransactionContext.Provider
          value={{
            connectWallet,
            currentAccount,
            disConnect,
            isLoading
          }}
        >
          {children}
        </TransactionContext.Provider>
      )
}
