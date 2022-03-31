import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Popular from "./pages/Popular";

function App() {
    let isAuthenticated = true;
    return (
        <Routes>
            <Route
                path="/"
                element={isAuthenticated ? <Homepage /> : <Login />}
            ></Route>
            <Route
                path="/popular"
                element={isAuthenticated ? <Popular /> : <Login />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
