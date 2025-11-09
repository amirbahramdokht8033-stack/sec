import { useContext } from "react";
import Button from "../../components/button/button";
import Cartinf from "../../components/cartinf/cartinf";
import { ShopCart } from "../../context/cartcontext";

function Cart() {
    let { cartitme } = useContext(ShopCart)

    return (
        <div className="mx-10 ">
            {cartitme.map(item => (<Cartinf {...item} />
            ))}

            <div className="mt-2 bg-gray-950">
                <h1>total price</h1>
                <p>price:20$</p>
                <p>price:20$</p>
                <p>price:20$</p>
                <p>price:20$</p>
                <Button variant="primary">
                    pay
                </Button>

            </div>

        </div>
    )
}





export default Cart;