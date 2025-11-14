import { Route, Routes } from "react-router";
import { mainNavItems } from "./routes";
import { Suspense } from "react";

function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <InnerRoutes />
        </Suspense>
    );
}

function InnerRoutes() {
    return (
        <Routes>
            {mainNavItems.map((item, index) => (
                <Route key={index} path={item.path} element={<item.component />} />
            ))}
        </Routes>
    );
}

export default AppRoutes;