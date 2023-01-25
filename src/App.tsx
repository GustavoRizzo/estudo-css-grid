import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Example2 from './pages/Example2';
import Example1 from './pages/Example1';
import Home from './pages/Home';



function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example1" element={<Example1 />} />
          <Route path="example2" element={<Example2 />} />  

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Routes>      
      </div>
    </>
  )
}

export default App
