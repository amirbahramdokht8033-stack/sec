import Navbar from "../Navbar/Navbar";

interface Layout{
    children: React.ReactNode
}
function Layout ({children}: Layout){
    return(
        <>
          <Navbar />
        {children}
        </>
    )
}




export default Layout;