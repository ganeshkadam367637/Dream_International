import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Comp1 from './component/Comp1'
import Comp2 from './component/Comp2'
import Comp3 from './component/Comp3'

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

  function Main() {
    return(
        <>

            <Router>
            <Header></Header>
                <Routes>
                    <Route path='/comp1' element={<Comp1></Comp1>}></Route>
                    <Route path='/comp2' element={<Comp2></Comp2>}></Route>
                    <Route path='/comp3' element={<Comp3></Comp3>}></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        
        </>
    )
}
export default Main;
