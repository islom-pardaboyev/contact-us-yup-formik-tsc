import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById("root")!).render(
  <>
  <ToastContainer position="top-center" theme="colored" />
    <App />
  </>
);
