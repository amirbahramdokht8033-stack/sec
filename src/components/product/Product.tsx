import type { Post } from "../../types/servers";

type Postitme = Post
function Product({ title, price ,description ,image }:Postitme ){
    return(
        <div className=" h-120 shadow border shadow-gray-600 p-20">
       <img className=" h-60"
        src={image} alt="" />
       <div className="h-60 mt-5">
        <h3 className="font-black">{title}</h3>
        <p> price: {price} $</p>
        <p className="line-clamp-1">{description}</p>
        </div> 
       
        
        </div>
    )
}





export default Product;