import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Complete from './components/Complete'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Complete />
    </>
  )
}

export default App
