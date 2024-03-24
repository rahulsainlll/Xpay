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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Register = async () => {
    try {
      const { data } = await axios.post("/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        localStorage.setItem("token", data.token);
        toast.success("Register Succesful.");
        navigate("/signin");
      }
    } catch (error) {
      console.log("Frontent register errot:" + error);
    }
  };

  return (
    <div className=" h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <Heading label={"Sign up to Xpay"} />
        <div className="w-80 bg-[#f6f8fa] text-center p-4 h-max px-5 rounded-lg ring-1 ring-inset ring-gray-300">
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"Rahul"}
            label={"First name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Sain"
            label={"Last name"}
          />
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
          <Button onclick={() => Register()} label={"Sign Up"} />
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
