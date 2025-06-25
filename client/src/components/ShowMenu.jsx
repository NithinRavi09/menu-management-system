import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowMenu = () => {
  const [menus, setMenus] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const navigate = useNavigate();

  const fetchMenus = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/getMenu`
      );
      setMenus(res.data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAddMenu = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/addMenu`,
        formData
      );
      setFormData({ name: "", description: "" });
      setShowForm(false);
      fetchMenus();
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  return (
    <div
      className="relative w-full min-h-[60vh] py-16 px-4 bg-cover bg-center flex flex-col items-center gap-6"
      style={{ backgroundImage: 'url("/bg-items.png")' }}
    >
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add Menu"}
      </button>

      {/* Form to add new menu */}
      {showForm && (
        <form
          onSubmit={handleAddMenu}
          className="p-4 rounded-lg border border-gray-300 shadow-md w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border text-white border-gray-300 px-3 py-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            className="border text-white border-gray-300 px-3 py-2 rounded resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {menus.length > 0 ? (
          menus.map((menu, index) => (
            <div
              key={index}
              onClick={() => navigate(`/items/${menu._id}`)}
              className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <h1 className="text-xl text-white font-bold mb-2">{menu.name}</h1>
              <p className="text-gray-200">{menu.description}</p>
            </div>
          ))
        ) : (
          <h1 className="text-white text-xl">No menus</h1>
        )}
      </div>
    </div>
  );
};

export default ShowMenu;
