import Link from "next/link";

import { set } from "mongoose";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import Web3 from "web3";
import ConnectWalletButton from "./ConnectWalletButton";
const login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formbody = { email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),
    });
    let responce = await res.json();
    console.log(responce);

    setEmail("");
    setPassword("");
    if (responce.success) {
      localStorage.setItem("token", responce.token);
      localStorage.setItem("email", responce.email);
      toast.success("you are successfully logged in!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } else {
      toast.warn("Invaild Crendential!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const onPressConnect = async () => {
    setLoading(true);

    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);

        if (account) {
          // localStorage.setItem("token", "");
          localStorage.setItem("email", "enter your email");
          localStorage.setItem("metamaskaddress", account);
          toast.success("you are successfully logged in!", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // setTimeout(() => {
          const formbody = { metamask: account };

          let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formbody),
          });
          let responce = await res.json();
          console.log(responce);
          localStorage.setItem("token", responce.token);
          localStorage.setItem("email", responce.email);
          router.push("/home");
          // }, 2000);
        } else {
          toast.warn("Invaild Crendential!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const onPressLogout = () => setAddress("");
  const responseMessage = (response) => {
    if (response.clientId) {
      // localStorage.setItem("token", "");

      localStorage.setItem("email", "enter your email");
      localStorage.setItem("clientId", response.clientId);
      toast.success("you are successfully logged in!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // setTimeout(() => {
      router.push("/home");
      // }, 2000);
    } else {
      toast.warn("Invaild Crendential!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <section className="bg-sky-50 dark:bg-sky-300">
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-800 dark:border-sky-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-sky-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-sky-50 border border-sky-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-700 dark:border-sky-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-sky-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-sky-50 border border-sky-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-700 dark:border-sky-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <ConnectWalletButton
                  onPressConnect={onPressConnect}
                  onPressLogout={onPressLogout}
                  loading={loading}
                  address={address}
                />
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                />
                <div className="flex items-center justify-between">
                  <Link href="/forgot" legacyBehavior>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="text-sm font-light text-sky-500 dark:text-sky-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
