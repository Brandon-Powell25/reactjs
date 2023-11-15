import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

// React router parts:
// - BrowserRouter need to exist higher up in the component tree than whatever we are writing routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <about />
// - Routes specifies URL and component, belongs to routes

function App() {
  return (
    <div className="App">

      <h1>This h1 shows on every page</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

      {/* route for /about opening */}
        {/* <Route path="/about" element={<AboutPage />}> */}

          {/* <Route path="/about/contact" element={<ContactPage />} /> */}

        {/* route for /about closing */}
        {/* </Route> */}

        {/* route for /about opening */}
        {/* <Route path="about" element={<AboutPage />}> */}

          {/* <Route path="contact" element={<ContactPage />} /> */}

        {/* route for /about closing */}
        {/* </Route> */}

        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
        </Route>

      </Routes>
           
    </div>
  );
}

export default App;
