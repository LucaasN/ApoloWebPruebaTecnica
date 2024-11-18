import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer } from "./components";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <AppRouter />
        <ToastContainer />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
