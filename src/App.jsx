import './App.css'

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'

//Layouts
import RootLayout from './layouts/RootLayout'

const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
    </Route>
)
const router = createBrowserRouter(routesFromElements)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
