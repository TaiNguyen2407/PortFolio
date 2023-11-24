import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NavigationBar from './pages/NavigationBar/NavigationBar';
import MySkills from './pages/MySkills/MySkills';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/'>
          <Route index path='' element={<Home />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<MySkills />} />  { /* Missing skills page */ }
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

