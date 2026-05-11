import { useState } from 'react'
import './App.css'
import ClickButton from './Components/ClickButton'
import Gallery from './Components/Gallery'
import MeuInput from './Components/MeuInput'
import ButtonModal from './Components/PropsModel/ButtonModal'
import ExUseMemo from './Components/UseMemo/ExUseMemo'

export default function App() {
  //const [count, setC] = useState(0)
  const [text, setText] = useState<string>('')
  return (
    <div>
      <Gallery /><br />
      <ClickButton /><br />

      <h1>UseState</h1>
      <MeuInput value={text} onChange={setText} />
      <p>{text}</p>

      <h1>Props e lifting state up</h1>
      <ButtonModal />

      <h1>UseMemo</h1>
      <ExUseMemo />
    </div>
  )
}
