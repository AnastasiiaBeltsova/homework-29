import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import {Main} from './pages/Main';
import {Contacts} from './pages/Contacts';
import {ErrorBoundary} from "./components/ErrorBoundary";


function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;