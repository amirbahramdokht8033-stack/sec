import { Link } from "react-router-dom";
import { useShopcart } from "../../context/cartcontext";

function Navbar() {
    const {cartqty} = useShopcart()
    return (
        <>

            <div className="h-15 border-b w-full shadow-gray-600 flex justify-between  items-center-safe">
                <div>
                    <ul className="flex mx-10 space-x-2  cursor-pointer">
                        <li><Link to={"/"} > home </Link></li>
                        <li> <Link to={"/store"}>store</Link></li>
                        <li></li>
                    </ul>

                </div>
                <div className="flex">
                      <span className="rounded-full w-5 h-5 bg-amber-50 text-black flex justify-center items-center">{cartqty !== 0? cartqty:""}</span>
                    <Link to={"/cart"}><h1 className="  mr-10 cursor-pointer ">
                        cart</h1></Link>
                      
                </div>
            </div>
        </>
    )
}












export default Navbar;
