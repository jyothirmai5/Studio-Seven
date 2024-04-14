import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children, cartItems, favouriteItems, categories }) {
    return (<>
        <Header cartItems={cartItems} categories={categories} favouriteItems={favouriteItems} />
        {children}
        <Footer />
    </>
    );
}

export default Layout;