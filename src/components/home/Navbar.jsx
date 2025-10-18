import { Link } from 'react-router-dom'
import { HiUserGroup } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav id='navbar' className={`w-full max-w-[1920px] mx-auto bg-slate-900 text-slate-900 flex justify-around items-center py-3`}>

      <Link to={'/'} className='text-3xl bg-slate-300 px-1 rounded hover:bg-slate-500 hover:text-white'>
        <HiUserGroup /> {/* Grouped persons Icon */}
      </Link>

      <div id='pages' className='flex gap-4 items-center'>
        <Link to={'/bhuwan'} className='bg-slate-300 px-1 rounded hover:bg-slate-500 hover:text-white'>Bhuwan</Link>
        <Link to={'/mohanmitra'} className='bg-slate-300 px-1 rounded font-bold hover:bg-slate-500 hover:text-white'>मोहनमित्र</Link>
        <Link to={'/technofancy'} className='bg-slate-300 px-1 rounded hover:bg-slate-500 hover:text-white'>Technofancy</Link>
      </div>

    </nav>
  )
}

export default Navbar;