import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Layout({ children, cartItems, favouriteItems }) {
    useEffect(() => {
        console.log('cartItems', cartItems);
    }, [cartItems])
    return (<>
        <Header cartItems={cartItems} favouriteItems={favouriteItems} />
        {children}
        <Footer />
    </>
    );
}

export default Layout;