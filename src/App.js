import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'



import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}/>

        
          
        </Route>
      </Routes>
    </>
  )
}

export default App