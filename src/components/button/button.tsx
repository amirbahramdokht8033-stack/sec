import type { ComponentProps } from "react";
type Tv = "primary" | "secondary" | "danger" | "warning"
type TButton = ComponentProps<"button"> & {
    variant?: Tv
}


function Button({ children, variant, style, ...rest }: TButton) {
    return (
        <button className=" p-2 cursor-pointer mx-1  rounded-lg " {...rest} style={{ ...style,...checkv(variant)}}>
            {children}
        </button>
    )
}



export default Button;

function checkv(variant?: Tv) {
    if (variant === "primary") {
        return { backgroundColor: "white", color: "black" }
    }
    else if (variant === "secondary") {
        return { backgroundColor: "blue", color: "white" }
    }
    else if (variant === "danger") {
        return { backgroundColor: "red", color: "white" }
    }
    else if (variant === "warning") {
        return { backgroundColor: "yellow", color: "white" }
    }
}