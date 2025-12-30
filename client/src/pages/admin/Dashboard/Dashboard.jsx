import { useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";

const Dashboard = () => {


    const { products, loading, error, loadProdcuts } = useProducts();

    useEffect(() => {
        loadProdcuts();
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    return (
        <>
            <h3>Admin Dashboard</h3>
            {(Array.isArray(products) && products.length > 0) ? (
                products.map((p) => {
                    // If API returns product directly, not wrapped in 'data'
                    const product = p.data ? p.data : p;
                    return (
                        <div key={product._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                            <h4>{product.title}</h4>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    )
                })
            ) : (
                <p>No products found.</p>
            )}
        </>
    )
}

export default Dashboard;