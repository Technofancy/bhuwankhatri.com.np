// import React from 'react'
import Navbar from "../components/home/Navbar";
import IconLinks from "../components/bhuwan/IconLinks"

const Bhuwan = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar className="fixed" />

        <div className="relative bg-slate-300 w-full h-[60vh] lg:h-[95vh] rounded text-slate-900">
          <IconLinks />
          ... छिटै प्राप्त गराइने ... <br />
          ... will be provided soon ...
        </div>
      </div>
    </>
  );
};

export default Bhuwan;
