import { useParams } from "react-router-dom";
import Button from "../../components/button/button";
import { useEffect, useState } from "react";
import { getposts } from "../../severs/api";
import type { Post } from "../../types/servers";
import { useShopcart } from "../../context/cartcontext";
function Pro() {
    let params = useParams<{ id: string }>()
    const [pro, setpro] = useState<Post>()
    const { increase, decrease, getqty, remove } = useShopcart()
    useEffect(() => {
        getposts(params.id as string).then(result => {
            setpro(result)
        })
    }, [])
    return (
        <div className="mx-10 h-auto shadow shadow-amber-50 mt-15 grid grid-cols-12">

            <div className="bg-gray-950 col-span-2 p-5  ">
                <img


                    src={pro?.image} alt="" />

                <div className="felx">
                    <Button className="w-1/4 mx-5 my-2" onClick={() => increase(parseInt(params.id as string))} variant="primary">
                        +
                    </Button>
                    {
                        getqty(parseInt(params.id as string))
                    }
                    <Button className="w-1/4 mx-5 my-2" onClick={() => decrease(parseInt(params.id as string))} variant="primary">
                        -
                    </Button>

                    <Button className="w-full my-2" variant="danger" onClick={() => remove((parseInt(params.id as string)))}>remove</Button>
                </div>
            </div>
            <div className=" col-span-9 font-bold   p-15">
                <h1 className="font-bold">{pro?.title}</h1>
                <p className="text-gray-400 mt-5">{pro?.description}
                </p>
                <p className="text-gray-400 mt-5">price: {pro?.price}$</p>
            </div>
        </div>
    )
}




export default Pro;