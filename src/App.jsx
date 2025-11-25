import "./App.css";
import { useEffect } from "react";

//react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
//imported icon: react-icons
import { FaRegThumbsUp } from "react-icons/fa";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  useEffect(() => {
    toast.success("Welcome to our Library Management System");
  }, []);

  return (
    <>
      {/* <FaRegThumbsUp /> */}

      <AppRoutes />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
