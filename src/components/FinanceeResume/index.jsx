import { List } from "../List"
import "./index.css"
import noCard from "../../assets/NoCard.svg"

export const FinanceeResume = ({ children, listTransaction, setListTransaction, filtersTransaction }) => {

    const deleteTransaction = (id) => {
        const filter = listTransaction.filter((element) => element.id !== id)
        setListTransaction(filter)
    }

    return (
        <div className="container-financee-resume">
            <div className="div-financee-resume-1">
                <span className="financee-resume-text">Resumo financeiro</span>
                <div className="div-financee-resume-2">
                    {children}
                </div>
            </div>
            <div>
                {
                    filtersTransaction.length == 0 ? (
                        <div className="div-financee-resume-3">
                            <h2 className="not-own-financee">Você ainda não possui nenhum lançamento</h2>
                            <img className="no-financee-image" src={noCard} alt="Sem nenhuma finança" />
                        </div>
                    ) : (
                        <ul className="lists-transaction">
                            {
                                filtersTransaction.map((financee, index) => (
                                    <List value={financee.value} valueType={financee.type} description={financee.description} deleteTransaction={deleteTransaction} id={financee.id} key={index}/>
                                ))
                            }
                        </ul>
                    )        
                }
            </div>
        </div>
    )
}