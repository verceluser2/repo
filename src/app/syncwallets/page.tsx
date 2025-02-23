import Wallet from '@/components/Wallets/Wallet'
import NewWallet from "@/components/Wallets/NewWallet";
import React from 'react'

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <Wallet /> */}
      <NewWallet />
    </div>
  );
}

export default page