import { useEffect, useState } from "react";
import { useBrands } from "../../../hooks/useBrands"



export const Brands = () => {


    const { brands, loading, error, createBrand, loadBrands, deleteBrandById } = useBrands();

    const [brandName, setBrandName] = useState("");

    useEffect(() => {
        loadBrands();
    }, [])

    const handleCreateBrand = async (e) => {
        e.preventDefault(e);

        if (!brandName.trim()) {
            alert("Brand name cannot be empty");
            return;
        }

        await createBrand({ name: brandName });
        setBrandName("");
    }


    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }


    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Category</h1>

            {/* CREATE */}
            <form onSubmit={handleCreateBrand} className="mb-4">
                <div className="flex gap-4">
                    <input
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Enter Brand Name"
                        className="border px-2 py-1"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white px-4 py-1 disabled:opacity-50"
                    >
                        Create
                    </button>
                </div>
            </form>

            {/* ERROR */}
            {error && <p className="text-red-500">{error}</p>}

            {/* LIST */}
            <ul className="space-y-2">
                {brands.map((brand) => (
                    <li
                        key={brand._id}
                        className="flex justify-between border p-2"
                    >
                        <span>{brand.name}</span>
                        <button className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => deleteBrandById(brand._id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}