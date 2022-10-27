import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Projects from './pages/Projects'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
