import React from "react";
import { adminLogin } from "../../../api/admin_api/login";
import Button from "../../button/Button";

interface FormDataProps {
  email: string;
  password: string;
}

const Login = ({
  setToken,
}: {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [formData, setFormData] = React.useState<FormDataProps>({
    email: "",
    password: "",
  });
  console.log("🚀 ~ formData:", formData);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const responsedata = await adminLogin({
        email: formData.email,
        password: formData.password,
      });
      setToken(responsedata.token);
    } catch (err: any | string) {
      console.log("🚀 ~ handleLogin ~ err:", err.message);
    }
  };
  return (
    <div className="w-full max-w-[1440px] h-screen mx-auto flex items-center justify-center">
      <div
        className="w-full max-w-[400px] flex flex-col items-center gap-4 justify-center p-4 rounded-2xl shadow-md"
        onSubmit={handleLogin}
      >
        <label
          htmlFor=""
          className="text-3xl font-Roboto tracking-[-0.05em] font-extrabold"
        >
          Admin Login
        </label>

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          className="w-full py-2 px-3 border border-gray-400"
          onChange={handleFormInput}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          className="w-full py-2 px-3 border border-gray-400"
          onChange={handleFormInput}
        />
        <Button label="Sign in" variant="primary" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
