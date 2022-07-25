import { useState } from 'react';
import { RiCopperCoinLine } from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import {FaRegMoon} from 'react-icons/fa'
import useDarkMode from '../../useDarkMode';

const NavBar = (props) => {
    const {isMobile}=props
    const [openMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    const handleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return (  
        <nav className="flex item-center">
            <div className="flex item-center">
                <div className="text-20 font-bold mr-2">CryptoPeople</div>
                {isDarkMode ? (
                <RiCopperCoinLine size={"24px"} color={"#e9c46a"} className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)}/>

                ):(
                <FaRegMoon size={"24px"} color={"#e9c46a"} className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)}/>

                )}   
            </div>
            <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
                {openMenu && isMobile ? (
                    <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
                ):!openMenu && isMobile ?(
                    <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu}/>

                ):(
                    <>
                        <li className="hover:text-purple-500 transition-all duration-200 cursor-pointer">Features</li>
                        <li className="hover:text-purple-500 transition-all duration-200 cursor-pointer">Menu</li>
                        <li className="hover:text-purple-500 transition-all duration-200 cursor-pointer">NFT</li>
                        <li className="hover:text-purple-500 transition-all duration-200 cursor-pointer">Contact</li>
                    </>
                )}
                {openMenu && (
                    <div className='absolute right-8 bg-white p-8 text-center z-10 text-black text-13'>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Menu</li>
                        <li className="cursor-pointer">NFT</li>
                        <li className="cursor-pointer">Contact</li>

                    </div>
                )}
            </ul>
        </nav>
    );
}
 
export default NavBar;
