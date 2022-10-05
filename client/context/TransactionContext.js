import React, { useEffect, useState, createContext } from 'react'

export const TransactionContext = createContext();

let eth;

if (typeof window !== 'undefined') {
    eth = window.ethereum
  }
export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()


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
          }}
        >
          {children}
        </TransactionContext.Provider>
      )
}
