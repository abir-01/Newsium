
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function App() {




  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<News category={'general'} />} />
          <Route exact path='/Health/' element={<News category={'health'} />} />
          <Route exact path='/Sports/' element={<News category={'sports'} />} />
          <Route exact path='/Science/' element={<News category={'science'} />} />
          <Route exact path='/Business/' element={<News category={'business'} />} />
          <Route exact path='/Technology/' element={<News category={'technology'} />} />
          <Route exact path='/General/' element={<News category={'general'} />} />
          <Route exact path='/Entertainment/' element={<News category={'entertainment'} />} /> */}


          <Route exact path='/' element={<News language={'en'} category={'general'} country={'in'} />} />
          <Route exact path='/in/' element={<News language={'en'} category={'general'} country={'in'} />} />
          <Route exact path='/in/Health/' element={<News language={'en'} category={'health'}  country={'in'}/>} />
          <Route exact path='/in/Sports/' element={<News language={'en'} category={'sports'}  country={'in'}/>} />
          <Route exact path='/in/Science/' element={<News language={'en'} category={'science'}  country={'in'}/>} />
          <Route exact path='/in/Business/' element={<News language={'en'} category={'business'}  country={'in'}/>} />
          <Route exact path='/in/Technology/' element={<News language={'en'} category={'technology'}  country={'in'}/>} />
          <Route exact path='/in/General/' element={<News language={'en'} category={'general'}  country={'in'}/>} />
          <Route exact path='/in/Entertainment/' element={<News language={'en'} category={'entertainment'} country={'in'} />} />

          <Route exact path='/au/' element={<News language={'en'} category={'general'} country={'au'} />} />
          <Route exact path='/au/Health/' element={<News language={'en'} category={'health'} country={'au'} />} />
          <Route exact path='/au/Sports/' element={<News language={'en'} category={'sports'} country={'au'} />} />
          <Route exact path='/au/Science/' element={<News language={'en'} category={'science'} country={'au'} />} />
          <Route exact path='/au/Business/' element={<News language={'en'} category={'business'} country={'au'} />} />
          <Route exact path='/au/Technology/' element={<News language={'en'} category={'technology'} country={'au'} />} />
          <Route exact path='/au/General/' element={<News language={'en'} category={'general'} country={'au'} />} />
          <Route exact path='/au/Entertainment/' element={<News language={'en'} category={'entertainment'} country={'au'} />} />

          <Route exact path='/nz/' element={<News language={'en'} category={'general'} country={'nz'} />} />
          <Route exact path='/nz/Health/' element={<News language={'en'} category={'health'} country={'nz'} />} />
          <Route exact path='/nz/Sports/' element={<News language={'en'} category={'sports'} country={'nz'} />} />
          <Route exact path='/nz/Science/' element={<News language={'en'} category={'science'} country={'nz'} />} />
          <Route exact path='/nz/Business/' element={<News language={'en'} category={'business'} country={'nz'} />} />
          <Route exact path='/nz/Technology/' element={<News language={'en'} category={'technology'} country={'nz'} />} />
          <Route exact path='/nz/General/' element={<News language={'en'} category={'general'} country={'nz'} />} />
          <Route exact path='/nz/Entertainment/' element={<News language={'en'} category={'entertainment'} country={'nz'} />} />

          <Route exact path='/ru/' element={<News language={'en'} category={'general'} country={'ru'} />} />
          <Route exact path='/ru/Health/' element={<News language={'en'} category={'health'} country={'ru'} />} />
          <Route exact path='/ru/Sports/' element={<News language={'en'} category={'sports'} country={'ru'} />} />
          <Route exact path='/ru/Science/' element={<News language={'en'} category={'science'} country={'ru'} />} />
          <Route exact path='/ru/Business/' element={<News language={'en'} category={'business'} country={'ru'} />} />
          <Route exact path='/ru/Technology/' element={<News language={'en'} category={'technology'} country={'ru'} />} />
          <Route exact path='/ru/General/' element={<News language={'en'} category={'general'} country={'ru'} />} />
          <Route exact path='/ru/Entertainment/' element={<News language={'en'} category={'entertainment'} country={'ru'} />} />

          <Route exact path='/us/' element={<News language={'en'} category={'general'} country={'us'} />} />
          <Route exact path='/us/Health/' element={<News language={'en'} category={'health'} country={'us'} />} />
          <Route exact path='/us/Sports/' element={<News language={'en'} category={'sports'} country={'us'} />} />
          <Route exact path='/us/Science/' element={<News language={'en'} category={'science'} country={'us'} />} />
          <Route exact path='/us/Business/' element={<News language={'en'} category={'business'} country={'us'} />} />
          <Route exact path='/us/Technology/' element={<News language={'en'} category={'technology'} country={'us'} />} />
          <Route exact path='/us/General/' element={<News language={'en'} category={'general'} country={'us'} />} />
          <Route exact path='/us/Entertainment/' element={<News language={'en'} category={'entertainment'} country={'us'} />} />


        </Routes>

      </Router>


    </>
  )
}