import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';

import Gif from './components/Gif';
import Poems from './components/Poems';
import Video from './components/Video';
import Gallery from './components/Gallery';
import { Home } from './components/Home';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1 className="header__title">Happy birthday</h1>
                <div className="links">
                    <NavLink className="nav-link" to="home">Home</NavLink>
                    <NavLink className="nav-link" to="gallery/0">Gallery</NavLink>
                    <NavLink className="nav-link" to="video">Video</NavLink>
                    <NavLink className="nav-link" to="gif">Gifs</NavLink>
                    <NavLink className="nav-link" to="poems">Poems</NavLink>
                </div>
            </div>
            <main>
                <Routes>
                    <Route path="/home" element={< Home />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/gif" element={<Gif />} />
                    <Route path="/poems" element={<Poems />} />
                    <Route path="/gallery/:id" element={<Gallery />} />
                </Routes>
            </main>
        </div >
    );
}

export default App;
