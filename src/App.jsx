
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandinPage from './pages/LandinPage'
import SkillGenerator from './pages/SkillGenerator'
import Pnf from './pages/Pnf'
import ViewSkill from './pages/ViewSkill'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandinPage />} />
        <Route path='/skillgenerator' element={<SkillGenerator />} />
        <Route path='/viewskilll' element={<ViewSkill />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
