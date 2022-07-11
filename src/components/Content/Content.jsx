import {FaBitcoin} from "react-icons/fa"
// import { useSpring,animated } from "react-spring"
import {FaEthereum} from "react-icons/fa"
import {SiLitecoin} from "react-icons/si"
import checkIconMobile from "../../assets//mobile/checkpoint.svg"
const Content = () => {
    // const customer = useSpring({ customers: 10245, from: { customers: 0 } });
    return ( 
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to transparent md:w-[25%]">
                <div className="mt-16 gap-8 flex items-start">
                    <FaBitcoin size={"50px"} className="mt-[12px]"/>
                        <div className="text-26">
                            10245
                            {/* <animated.div>
                                {customer.customers.to((val)=>Math.floor(val))}
                            </animated.div> */}
                            <p className="text-13 font-semibold mb-[36px] md:text-16">Bitcoins</p>
                        </div> 
                </div>
                <div className="flex gap-8 items-start mb-[40px]">
                    <FaEthereum size={"50px"} className="mt-[12px]"/>
                    <div className="text-26">
                        12045
                        <p className="text-13 font-semibold md:text-16"> Ethereums </p>
                    </div>
                </div>
                <div className="flex gap-8 items-start mb-16">
                    <SiLitecoin size={"50px"} className="mt-[12px]"/>
                    <div className="text-26">
                        1455
                        <p className="text-13 font-semibold md:text-16"> LiteCoins </p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
                <div className="mb-[51px] flex gap-8 ml-[70px] mr-[29px] items-center md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p> Create your free account</p>
                </div>
                <div className="mb-[51px] flex gap-8 ml-[70px] mr-[29px] items-center md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p> Connect your funding method</p>
                </div>
                <div className="mb-[51px] flex gap-8 ml-[70px] mr-[29px] items-center md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p> Buy and sell 100+ cryptocurrencies</p>
                </div>
            </div>
        </section>
     );
}
 
export default Content;
