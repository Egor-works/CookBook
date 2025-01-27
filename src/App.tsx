import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <>
            <Router basename='/cookbook'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/category/:name' element={<Category/>} />
                        <Route path='/meal/:id' element={<Recipe/>} />
                        <Route element={<NotFound/>} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
