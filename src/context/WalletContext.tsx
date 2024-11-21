// app/context/WalletContext.tsx
"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextProps {
    address: string | null;
    isConnected: boolean;
    setWalletAddress: (address: string | undefined
    ) => void;
    setIsConnected: (status: boolean) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { address, isConnected } = useAppKitAccount();
    const [walletAddress, setWalletAddress] = useState<string | undefined>(address || undefined);
    const [connectionStatus, setIsConnected] = useState<boolean>(isConnected);

    return (
        <WalletContext.Provider
            value={{
                address: walletAddress || null,
                isConnected: connectionStatus,
                setWalletAddress,
                setIsConnected,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWalletContext must be used within a WalletProvider");
    }
    return context;
};
