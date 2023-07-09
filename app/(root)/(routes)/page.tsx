"use client";

import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

const Home = () => {
  
  // Add Categories form states { Open Close } 
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);

  // Display on Page
  return null;
}

export default Home;