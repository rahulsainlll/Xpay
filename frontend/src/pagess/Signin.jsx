import React, { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    try {
      const { data } = await axios.post("/api/v1/user/signin", {
        username,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setUsername("");
        setPassword("");
        toast.success("Login Succesful. Welcome!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <Heading label={"Sign in to Xpay"} />
        <div className="w-80 bg-[#f6f8fa] text-center p-4 h-max px-5 rounded-lg ring-1 ring-inset ring-gray-300">
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"rahulsain@gmail.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"123456q"}
            label={"Password"}
          />
          <Button onclick={() => Login()} label={"Sign In"} />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
