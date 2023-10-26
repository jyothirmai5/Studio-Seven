import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';

function ProductDetails() {
    const { category, id } = useParams();
    return (
        <Layout>
            <h1>Category: {category} and Product ID: {id}</h1>
        </Layout>);
}

export default ProductDetails;