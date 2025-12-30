
import { useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";
import Pagination from "../../../components/Pagination";

const Dashboard = () => {


    const { products, loading, error, loadProdcuts, changePage, currentPage, pageSize } = useProducts();


    // Pagination Logic

    const filteredProducts = Array.isArray(products) ? products : [];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredProducts.length / pageSize);


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
            {(Array.isArray(paginatedProducts) && paginatedProducts.length > 0) ? (
                paginatedProducts.map((p) => {
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


            {/* Pagination Controls */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
            />
        </>
    )
}

export default Dashboard;