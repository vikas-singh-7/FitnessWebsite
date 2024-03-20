import React from 'react'
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <div className='h-screen bg-[red]'>Home</div>
  )
}

export default Home