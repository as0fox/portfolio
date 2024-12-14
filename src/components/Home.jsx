// Home.jsx
import React from 'react';

function Home() {
  return (
    <header id="home" className="h-screen bg-cover bg-center" style={{backgroundImage: "url('/image/2121.jpg')"}}>
      <div className="flex items-center justify-around h-full">
        <div className="book relative w-64 h-96 bg-black rounded-lg perspective-2000 rotate-z-20">
          <div className="cover absolute inset-0 bg-black rounded-lg transform-origin-left">
            <img src="/image/book.jpg" alt="Book Cover" className="absolute inset-0 rounded-lg" />
            <img src="/image/2.jpg" alt="Book Inner" className="absolute inset-0 rounded-lg transform rotate-y-180" />
          </div>
        </div>
      </div>
    </header>
  );
}



export default Home;