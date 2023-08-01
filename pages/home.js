import Navbar from "@/components/Navbar";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

import jsonewebtoken from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = (props) => {
  //console.log(props);
  const router = useRouter();
  const { formData } = router.query;
  //console.log(formData);
  const [user, setUser] = useState({ value: null });
  const [myemail, setMyemail] = useState(null);
  const [key, setKey] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [metaadd, setMetaadd] = useState(null);
  const [clientId, setClientId] = useState(null);
  const handleOrderClick = () => {
    if (!isAnimated) {
      setIsAnimated(true);
      setTimeout(() => {
        setIsAnimated(false);
      }, 10000);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const Myaddress = localStorage.getItem("metamaskaddress");
    const client = localStorage.getItem("clientId");

    setClientId(client);
    setMetaadd(Myaddress);
    if (token || Myaddress || email) {
      setUser({ value: token, email: email });

      setMyemail(email);
      setKey(Math.random());
    } else {
      router.push("/");
    }
  }, [router.query, clientId, metaadd]);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("metamaskaddress");
    localStorage.removeItem("clientId");
    localStorage.removeItem("email");
    if (window.ethereum && window.ethereum.disconnect) {
      window.ethereum.disconnect();
    }
    setUser({ value: null });
    setKey(Math.random());
  };

  const [rows, setRows] = useState([
    {
      Package_name: "",
      No_of_packages: "",
      Description: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = (e) => {
    e.preventDefault();

    setRows([
      ...rows,
      {
        Package_name: "",
        No_of_packages: "",
        Description: "",
        // Weight: "",
        // rate: "",
        // loading_charges: "",
        // packing_charges: "",
        // unloading_charges: "",
        // stationary_charges: "",
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAnimated) {
      setIsAnimated(true);
      setTimeout(() => {
        setIsAnimated(false);
      }, 4000);
    }
    const formData = {
      email: myemail,
      bill_id: Math.floor(Math.random() * Date.now()),
      consignorName: document.getElementById("consignorName").value,
      consignorAddress: document.getElementById("consignorAddress").value,
      consigneeGst: document.getElementById("consigneeGst").value,
      date: document.getElementById("date").value,
      from: document.getElementById("from").value,
      to: document.getElementById("to").value,
      distance: document.getElementById("distance").value,
      lorryno: document.getElementById("lorryno").value,
      deliveryaddress: document.getElementById("deliveryaddress").value,
      freightRate: document.getElementById("freightRate").value,
      cgst: document.getElementById("cgst").value,
      sgst: document.getElementById("sgst").value,
      igst: document.getElementById("igst").value,
      total: document.getElementById("total").value,
      loading_charges: document.getElementById("loading_charges").value,
      packing_charges: document.getElementById("packing_charges").value,
      unloading_charges: document.getElementById("unloading_charges").value,
      stationary_charges: document.getElementById("stationary_charges").value,
      actual_weight: document.getElementById("actual_weight").value,
      charged_weight: document.getElementById("charged_weight").value,
      goods: rows,
    };
    //   phoneno: document.getElementById("phoneno").value,
    // pan: document.getElementById("pan").value,
    // gstin: document.getElementById("gstin").value,
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/bill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let responce = await res.json();
    console.log(responce);
    if (responce.success) {
      toast.success("your bill is successfully created!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        router.push({
          pathname: "/printbill",
          query: { formData: JSON.stringify(formData) },
        });
      }, 4000);
    } else {
      toast.warn("Try again!", {
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

    // Reset form fields

    setRows([
      {
        Package_name: "",
        No_of_packages: "",
        Description: "",
        Weight: "",
        rate: "",
      },
    ]);
  };
  return (
    <>
      <Navbar
        user={user}
        Myaddress={metaadd}
        clientId={clientId}
        logout={logout}
        key={key}
      />
    </>
  );
};

export default Home;
