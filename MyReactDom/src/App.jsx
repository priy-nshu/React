import './App.css'
import { Route,Outlet } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

//import BasicRouting from './BasicRouting'
import Layout from './Layout'
import { Home } from './Home'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* <Route index element={<Home/>} />
          <Route path="/blog/:id" element={<BlogsWithParams />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="homestate" element={<HomeWithState />} /> */}
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
      <Outlet></Outlet>
    </>
  )
}

export default App
