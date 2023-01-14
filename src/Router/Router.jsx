import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Router = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router