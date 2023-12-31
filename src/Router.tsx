import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Project from './router/Project';
import Contact from './router/Contact';
import Home from './router/Home';
import { AnimatePresence } from 'framer-motion';
import { TransitionComponents } from './components/molecule/TransitionComponents';
import { styled } from 'styled-components';

function Router() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    index
                    element={
                        <TransitionComponents>
                            <Home />
                        </TransitionComponents>
                    }
                />
                <Route
                    path="project"
                    element={
                        <TransitionComponents>
                            <Project />
                        </TransitionComponents>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export default Router;
