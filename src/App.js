import styles from "./styles/App.scss";
import { Routes, Route, Outlet } from "react-router-dom";

// Components
import MainContainer from "./components/Containers/MainContainer";
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";

// Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";

//REACT QUERY
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <PageContainer optionClass={"pageContainer"}>
            <Navbar />
            <div className="mobileMenu">
              <MobileNavbar />
            </div>
            <Routes>
              {/* AUTH PAGE */}
              <Route path="/auth" element={<Auth />} />
              {/* Categories */}
              <Route path="/categories" element={<Categories />} />
              {/* PROTECTED ROUTES */}
              <Route element={<ProtectedRoutes />}>
                {/* HOME */}
                <Route path="/" element={<Home />} />
                {/* Categories */}
                <Route path="/categories" element={<Categories />} />
                {/* 404 */}
                <Route
                  path="/*"
                  element={
                    <MainContainer>
                      <span style={{ fontSize: "1.2rem" }}>
                        404 Page Not Found
                      </span>
                    </MainContainer>
                  }
                />
              </Route>
            </Routes>
          </PageContainer>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
