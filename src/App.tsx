import { useState } from 'react'
import './App.css'
import ClickButton from './Components/ClickButton'
import Gallery from './Components/Gallery'
import MeuInput from './Components/MeuInput'
import ButtonModal from './Components/PropsModel/ButtonModal'
import ExUseMemo from './Components/UseMemo/ExUseMemo'
import ExUseEffect from './Components/UseEffect/ExUseEffect'
import ExUseRef from './Components/UseRef/ExUseRef'

export default function App() {
  //const [count, setC] = useState(0)
  const [text, setText] = useState<string>('')

  // Para testar o useEffect no desmonte do componente
  const [show, setShow] = useState(true);

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

      <h1>UseEffect</h1>
      {show && <ExUseEffect /> }
      <button  onClick={() => setShow(!show)}>testar onMounted e unMounted</button>

      <h1>UseRef</h1>
      <ExUseRef />
    </div>
  )
}
