import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";
import { getpost } from "../../severs/api";
import type { Post } from "../../types/servers";

function Store() {
    let [post, setpost] = useState<Post[]>([]);
    useEffect(() => {
        getpost().then((itm) => {
         setpost(itm)
       
        });

    }, [])
    return (
        <>
            <h1 className="text-left mt-7 mx-10">new product in the store</h1>
            <div className="mx-10 grid grid-cols-4 gap-5 mt-5">
                {
                    post.map(item => (
                        <Link key={item.id} to={`/item/${item.id}`}>
                            <Product {...item} />
                        </Link>
                    ))
                }



            </div>
        </>
    )
}















export default Store;