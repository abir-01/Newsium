
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function App() {




  return (
    <>
      {/* <Router> */}
        <Navbar />
        {/* <Routes>
          <Route exact path='/' element={<News category={'general'} />} />
          <Route exact path='/Heath' element={<News category={'Heath'} />} />
          <Route exact path='/Sports' element={<News category={'Sports'} />} />
          <Route exact path='/Science' element={<News category={'Science'} />} />
          <Route exact path='/Business' element={<News category={'Business'} />} />
          <Route exact path='/Technology' element={<News category={'Technology'} />} />
          <Route exact path='/General' element={<News category={'General'} />} />
          <Route exact path='/Entertainment' element={<News category={'Entertainment'} />} />
        </Routes> */}

      </Router>


    </>
  )
}