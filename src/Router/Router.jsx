import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Footer from '../pages/Footer'
import Page404 from '../pages/Page404'

const Router = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />} ></Route>
                    <Route path='*' element={<Page404 />} ></Route>
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    )
}

export default Router