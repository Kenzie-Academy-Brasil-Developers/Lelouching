import "./index.css"

export const Button = ({ message, setFilter, selectedButton, setSelectedButton }) => {
    return (
        <button onClick={() => {
            setFilter(message) 
            setSelectedButton(message)
        }} 
        className={selectedButton == message ? "button-site-selected" : "button-site"}>{message}</button>
    )
}