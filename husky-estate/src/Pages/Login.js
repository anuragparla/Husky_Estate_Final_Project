import React, { useState } from "react";
import Navbar3 from "../Components/Navbar";
import { Link } from "react-router-dom";
import { validateEmail } from "../util/validator";
import Cookies from 'universal-cookie';
import { URL } from "../util/constants";
import Footer from "../Components/Footer";


const LoginPage = () => {

    const[email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        if(!passsword || passsword.length === 0) {
            alert("Please check passwords again");
            return;
          }
      
        if(!validateEmail(email)) {
            alert("Email is not good");
            return;
        }
        const data = {email, password: passsword}
        const res = await fetch(`${URL}/auth/login`, {
            method:"POST",
            body: new URLSearchParams(data)
          });
          console.log(res);
          const json = await res.json();
          if(json.success) {
            alert("Login Successful");
            const cookies = new Cookies();
            cookies.set('auth', json.token, { path: '/' });
            window.open("/", "_self").focus();
          } else {
            alert(json.message);
          }
    }


    return (
        <>
            <Navbar3></Navbar3>

            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Good to have you back</h1>

                    <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
                        mollitia?
                    </p>

                    <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                        <p class="text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label for="email" class="text-sm font-medium">Email</label>

                            <div class="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}


                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter email"
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
                                    value={passsword}
                                    onChange={(e) => setPassword(e.target.value)}

                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                />

                            </div>
                        </div>

                        <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
                        onClick={handleClick}>
                            Login
                        </button>

                        <p class="text-sm text-center text-gray-500">
                            No account?
                            <Link class="underline" to="/signup">Signup</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer></Footer>


        </>
    )
}



export default LoginPage