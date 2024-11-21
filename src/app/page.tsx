"use client"

import Connect from '@/components/Connect'
import { useAppKitAccount } from "@reown/appkit/react";

import Link from 'next/link';

const Home = () => {
  const { address, isConnected } = useAppKitAccount()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      {isConnected ? (
        <h4>Connected with address: {address}</h4>
      ) : (<></>)
      }
      <h1 className="text-3xl font-bold mb-4">Welcome to Web3 DApp Interface</h1>
      <div className="p-2 " >
        <Connect />
      </div>

      <Link href="/interact"
        className="bg-green-500 text-white p-2 rounded"
      >
        Go to Interact Page
      </Link>

    </div>
  );
};

export default Home;
