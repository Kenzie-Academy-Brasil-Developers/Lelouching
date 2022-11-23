import "./index.css"
import { useState } from "react"
import uuid from 'react-uuid';

export const Form = ({ listTransactions, setListTransactions, totalValue }) => {

    const [data, setData] = useState({
        id: "",
        description: "",
        type: "entrada",
        value: ""
    })

    const newTransaction = (event) => {
        event.preventDefault()
        setData(data)
        data.type == "saída" ? 
        setListTransactions([...listTransactions, {...data, id: uuid(), value: -data.value}]) : 
        setListTransactions([...listTransactions, {...data, id: uuid()}])
    }

    return (
        <div className="div-form-value-total">
            <form onSubmit={(event) => newTransaction(event)} className="form-transaction">
                <div className="div-description-1">
                    <label htmlFor="input-description" className="form-text-style">Descrição</label>
                    <div className="div-description-2">
                        <input value={data.description} onChange={(event) => setData({...data, description: event.target.value})} id="input-description" type="text" placeholder="Digite aqui sua descrição" required/>
                        <span className="buy-example">Ex: Compra de roupas</span>
                    </div>
                </div>
                <div className="div-value-value-type">
                    <div className="div-value-1">
                        <label htmlFor="input-value" className="form-text-style">Valor</label>
                        <div className="div-value-2">
                            <input value={data.value} onChange={(event) => setData({...data, value: +event.target.value})} id="input-value" type="number" placeholder="1" required/>
                            <span className="real-money">R$</span>
                        </div>
                    </div>
                    <div className="div-value-type-1">
                        <label htmlFor="input-value-type" className="form-text-style">Tipo de valor</label>
                        <select value={data.type} onChange={(event) => setData({...data, type: event.target.value})} name="" id="input-value-type">
                            <option value="entrada">Entrada</option>
                            <option value="saída">Despesa</option>
                        </select>
                    </div>
                </div>
                <button className="button-insert-value" type="submit">Inserir valor</button>
            </form>
            {
                listTransactions.length !== 0 ? (
                    <div className="div-value-total">
                        <div className="div-sum-value">
                            <span className="value-total-text">Valor total:</span>
                            <span className="sum-value">$ {totalValue}</span>
                        </div>
                        <span className="value-referee">O valor se refere ao saldo</span>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}