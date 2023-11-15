import './App.css'
import Ejemplo from './components/Ejemplo2/Ejemplo'
import PascalCase from './components/Ejemplo1/PascalCase'

function App() {

  return (
    <>
      <h1 className='titulo'>ECOMMERCE</h1>
      <Ejemplo title="Caja Misteriosa" description="Es una caja que contiene X cosas." price="U$S 1300,00" sku="AAAB01" cantDispo="1000 unidades"/>
      <PascalCase />
    </>
  )
}

export default App
