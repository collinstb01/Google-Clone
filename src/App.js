import React from 'react'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchPageTop from './components/SearchPageTop'
import SearchPageImages from './pages/searchpages/SearchPageImages'
import SearchPageNews from './pages/searchpages/SearchPageNews'

const App = () => {
    return (
       <Router>
         <div>
           <Routes>
            <Route path="/" element={
                <div>
                     < Home />
                </div>
            } />
             <Route path="/search" element={
                <div>
                    <SearchPageTop />
                     < SearchPage />
                </div>
            } />
             <Route path="/search/images" element={
                <div>
                    <SearchPageTop />
                     < SearchPageImages />
                </div>
            } />
             <Route path="/search/news" element={
                <div>
                    <SearchPageTop />
                     < SearchPageNews />
                </div>
            } />
           </Routes>
        </div>
       </Router>
    )
}

export default App