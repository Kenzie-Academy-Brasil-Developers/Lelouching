import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import { Begin } from './components/Begin'
import { Button } from './components/Button'
import { FinanceeResume } from './components/FinanceeResume'
import { Form } from './components/Form'
import { Header } from './components/Header'

const App = () => {

  const [listTransactions, setListTransactions] = useState([
    { id: uuid(), description: "Salário recebido", type: "entrada", value: 2500 },
    { id: uuid(), description: "Conta de luz", type: "saída", value: -150 }
  ])

  const [filter, setFilter] = useState("Todos")

  const [selectedButton, setSelectedButton] = useState("Todos")

  const filtersTransaction = listTransactions.filter((element) => {
    if(filter == "Todos") {
      return true
    } else if (filter == "Entradas") {
      return element.type == "entrada"
    } else {
      return element.type == "saída"
    }
  })

  const totalValue = filtersTransaction.reduce((a, b) => a + b.value, 0)

  const [page, setPage] = useState(false)

  const home = () => {
    setPage(true)
  }

  const begin = () => {
    setPage(false)
  }

  return (
    <div className="App">
      {
        !page ? (
          <Begin setPage={home}/>
        ) : (
          <div className="div-all-content">
            <Header setPage={begin}/>
            <main className="container main-home">
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions} totalValue={totalValue} />
              <FinanceeResume setSelectedButton={setSelectedButton} selectedButton={selectedButton} filtersTransaction={filtersTransaction} listTransaction={listTransactions} setListTransaction={setListTransactions} totalValue={totalValue}>
                <Button setSelectedButton={setSelectedButton} selectedButton={selectedButton} setFilter={setFilter} listTransaction={listTransactions} setListTransaction={setListTransactions} message="Todos"/>
                <Button setSelectedButton={setSelectedButton} selectedButton={selectedButton} setFilter={setFilter} listTransaction={listTransactions} setListTransaction={setListTransactions} message="Entradas"/>
                <Button setSelectedButton={setSelectedButton} selectedButton={selectedButton} setFilter={setFilter} listTransaction={listTransactions} setListTransaction={setListTransactions} message="Despesas"/>
              </FinanceeResume>
            </main>
          </div>
        )
      }
    </div>
  )
}

export default App
