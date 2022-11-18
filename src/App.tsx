import React from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Events from './pages/Events'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Apply from './pages/Apply'

function App() {
    /*
        ---- BrowserRouter Implementation  ----

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="events" element={<Events />} />
                <Route path="projects" element={<Projects />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="apply" element={<Apply />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    */
    return (
        // HashRouter required for static deployments
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    )
}

export default App
