import { useEffect,  useState } from "react"




export function  uselocal<T>(key:string ,invalue:T)  {
    const [value , setvalue] = useState<T>(() => {
        const  localcart = localStorage.getItem("cartitem")
        if (localcart != null){
            return JSON.parse(localcart)

        }
        else{
            return invalue;
        }
    })
    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    },[key , value])
    return [value , setvalue]  as [typeof value ,typeof setvalue]
}
