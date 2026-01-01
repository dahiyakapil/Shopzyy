import { useEffect, useState } from "react";
import { useCategory } from "../../../hooks/useCategory";

export const Category = () => {
  const {
    category,
    loading,
    error,
    createCategory,
    loadCategory,
    deleteCategoryById,
  } = useCategory();

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    loadCategory();
  }, []);

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("Category name cannot be empty");
      return;
    }

    await createCategory({ name: categoryName });
    setCategoryName("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Category</h1>

      {/* CREATE */}
      <form onSubmit={handleCreateCategory} className="mb-4">
        <div className="flex gap-4">
          <input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter Category Name"
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
        {category.map((cat) => (
          <li
            key={cat._id}
            className="flex justify-between border p-2"
          >
            <span>{cat.name}</span>
            <button className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteCategoryById(cat._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
