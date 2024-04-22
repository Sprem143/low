import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Header from './pages/component/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}>


          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
