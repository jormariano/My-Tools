import './Buttons.css'

const Buttons = (params) => {
    const { text, style, handleClick } = params;

    return <button className={style} onClick={handleClick}> {text} </button>
}

export default Buttons