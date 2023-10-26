import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { category, id } = useParams();
    return (<h1>Category: {category} and Product ID: {id}</h1>);
}

export default ProductDetails;