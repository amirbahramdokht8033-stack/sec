import { useEffect, useState } from "react";
import Button from "../button/button";
import { getposts } from "../../severs/api";
import type { Post } from "../../types/servers";
import { useShopcart } from "../../context/cartcontext";
import { Link } from "react-router-dom";

interface cartinf {
    id: number
    qty: number
}

function Cartinf({ id, qty }: cartinf) {
    let { decrease, increase, remove } = useShopcart()
    let [pro, setpro] = useState<Post>()
    useEffect(() => {
        getposts(id).then(data => {
            setpro(data)
        })
    }, [])
    return (
        <div className="flex my-5 border-b pb-2">
            <Link to={`/item/${id}`}>
                <img
                    className="rounded w-40 "

                    src={pro?.image} alt="" />
            </Link>

            <div className="m-5">
                <h3 >{pro?.title}</h3>
                <Button onClick={() => increase(id)} variant="secondary">+</Button>
                <span className="mx-3">{qty}</span>
                <Button onClick={() => decrease(id)} variant="secondary">-</Button>
                < Button onClick={() => remove(id)} variant="danger"> remove </Button>
            </div>

        </div>
    )
}





export default Cartinf;