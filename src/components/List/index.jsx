import "./index.css"
import trashDefault from "../../assets/trash.svg"
import trashHover from "../../assets/trashHover.svg"
import { useState } from "react"

export const List = ({ valueType, value, description, id, deleteTransaction }) => {

    const [trash, setTrash] = useState(false)

    return(
        <li className="financee-list">
            {
                valueType == "entrada" ? (
                    <div className="color-financee-entry"></div>
                ) : (
                    <div className="color-financee-expense"></div>
                )
            }
            <div className="div-finance-content">
                <div className="div-financee-list-1">
                    <span className="financee-description">{description}</span>
                    <span className="financee-value-type">{valueType}</span>
                </div>
                <div className="div-financee-list-2">
                    <span className="financee-value-text">R$ {value}</span>
                    <button onMouseOver={() => setTrash(true)} onMouseOut={() => setTrash(false)} onClick={() => deleteTransaction(id)} className="button-image-trash" type="button">
                        {
                            !trash ? (
                                <img className="trash-image" src={trashDefault} alt="Lixeira para apagar a finança" />
                            ) : (
                                <img className="trash-image" src={trashHover} alt="Lixeira para apagar a finança" />
                            )
                        }
                    </button>
                </div>
            </div>
        </li>
    )
}