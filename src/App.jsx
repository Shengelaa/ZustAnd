import React from "react";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h2 className='text-2xl font-bold mb-4'>Counter</h2>
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
