import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/index";

function App() {
  return (
    <>
      <Routes />
      <Toaster 
        toastOptions={{
          duration: 3000,
        }} />
    </>
  )
}

export default App