import { useEffect, useState } from "react";
import { useAdminAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
    const { loading, error, isAuthenticated, adminLogin } = useAdminAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    // Removed roleError and submitAttempted state

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/admin/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        adminLogin(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {/* roleError removed */}
            </form>
        </>
    );
};

export default AdminLogin;