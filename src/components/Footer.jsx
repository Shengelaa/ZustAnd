import React from "react";
import useCounterStore from "../store/store";

const Footer = () => {
  const { increment, decrement } = useCounterStore();
  return (
    <div className='mt-10'>
      <button
        onClick={increment}
        className='px-4 py-2 bg-blue-500 text-white rounded mr-2'>
        Increment +
      </button>
      <button
        onClick={decrement}
        className='px-4 py-2 bg-red-500 text-white rounded mr-2'>
        Decrement -
      </button>
    </div>
  );
};

export default Footer;
