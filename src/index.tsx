import React, { Suspense } from "react"
import { App } from "./component/App"
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Shop } from "./pages/Shop"
import { About } from "./pages/about"

const root = document.getElementById('root')
if (!root) {
    throw new Error(`Root element not found`)
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={'loading...'}><About /></Suspense>,
            },
            {
                path: "/shop",
                element: <Suspense fallback={'loading...'}><Shop /></Suspense>
            },
        ]
    },
]);

const container = createRoot(root)
container.render(< RouterProvider router={router} />)