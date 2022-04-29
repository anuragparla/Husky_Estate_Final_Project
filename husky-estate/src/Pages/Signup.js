import React, { useState } from "react";
import Navbar3 from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../util/validator";
import { URL } from "../util/constants";
import Footer from "../Components/Footer";
const SignupPage = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    var letters = /^[A-Za-z]+$/;
    if(!name && letters.match(name)) {
      alert("Name is invalid");
      return;
    }
    if(!password || !confirmPassword || confirmPassword !== password) {
      alert("Please check passwords again");
      return;
    }

    if(!validateEmail(email)) {
      alert("Email is not good");
      return;
    }

    const data = {
      name,
      email,
      password,
    }

    const res = await fetch(`${URL}/auth/register`, {
      method:"POST",
      body: new URLSearchParams(data)
    });
    console.log(res);
    const json = await res.json();
    if(json.success) {
      alert("Signup Successful");
      navigate("/login", { replace: true })

    } else {
      alert(json.message);
    }





  };

  return (
    <>
      <Navbar3></Navbar3>

      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Get started today</h1>

          <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
            mollitia?
          </p>

          <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl" onSubmit={handleClick}>
            <p class="text-lg font-medium">Sign in to your account</p>

            <div>
              <label for="name" class="text-sm font-medium">Name</label>

              <div class="relative mt-1">
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Jack Dorsey"
                  required
                />

              </div>
            </div>


            <div>
              <label for="email" class="text-sm font-medium">Email</label>

              <div class="relative mt-1">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="elon@isagod.xyz"
                  required
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="text-sm font-medium">Password</label>

              <div class="relative mt-1">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="ssshhh...."
                  required
                />
              </div>
            </div>

            <div>
              <label for="cpassword" class="text-sm font-medium">Confirm Password</label>

              <div class="relative mt-1">
                <input
                  type="password"
                  id="cpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="sshhh again...."
                  required
                />

              </div>
            </div>


            <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg" 
              >
              Sign up
            </button>

            <p class="text-sm text-center text-gray-500">
              Already have an account?
              <Link class="underline" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>


    </>
  )
}



export default SignupPage