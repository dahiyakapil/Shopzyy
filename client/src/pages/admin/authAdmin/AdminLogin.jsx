import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../../components/buttons/LoginButton";

import { useAdminAuth } from "../../../hooks/useAuth";
import { FormInput } from "../../../components/input/FormInput";

const AdminLogin = () => {
    const { loading, error, isAuthenticated, adminLogin } = useAdminAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

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

        <div className="flex flex-col justify-center items-center p-2 m-2 w-full h-screen ">

            <form onSubmit={handleSubmit}>


                <div className="flex flex-col justify-center items-center p-2 m-2 border border-b-amber-500 w-90 gap-4">

                    <div>
                        <FormInput
                        label="Email" 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        />  
                    </div>
                    <div>
                        <FormInput
                        label="Password" 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        />
                    </div>
                    <LoginButton onClick={handleSubmit} loading={loading} />   
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </form>
        </div>
        </>
    );
};

export default AdminLogin;