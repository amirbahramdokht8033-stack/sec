import { createContext, useContext, useState } from "react";
import { uselocal } from "../hooks/createstorag";

interface ShopCartProvider {
    children: React.ReactNode
}
interface ShopCart {
    cartitme: Aitme[]
    increase: (id: Number) => void;
    decrease: (id: number) => void;
    getqty: (id: number) => number
    remove: (id: number) => void;
    cartqty: number
}
interface Aitme {
    id: number,
    qty: number
}
export let ShopCart = createContext({} as ShopCart)
export let useShopcart = () => {
    return useContext(ShopCart)
}
export function ShopCartProvider({ children }: ShopCartProvider) {
    let [cartitme, setcarttime] = uselocal<Aitme[]>("cartitem",[])


    let increase = (id: Number) => {
        setcarttime((curitem) => {
            let selected = curitem.find((item) => item.id == id);
            if (selected == null) {
                return [...curitem, { id: id, qty: 1 }];
            }
            else {
                return curitem.map(item => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }
    let decrease = (id: Number) => {
        setcarttime(curitem => {
            const selected = curitem.find(item => item.id == id)
            if (selected?.qty == 1) {
                return curitem.filter(item => item.id !== id)
            }
            else {
                return curitem.map(item => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    let getqty = (id: Number) => {
        return cartitme.find(item => item.id == id)?.qty || 0

    }
    let remove = (id: Number) => {
        setcarttime(citem => citem.filter(item => item.id != id))

    }
    let cartqty = cartitme.reduce((aqty, item) => aqty + item.qty, 0)







    return (
        <ShopCart.Provider value={{ increase, cartitme, decrease, getqty, remove , cartqty}}>
            {children}
        </ShopCart.Provider>
    )
}