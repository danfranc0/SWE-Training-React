import colorNames from "colornames"

const Input = ({ color, setColor, setHexValue, isDarkText, setDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button
                type="button"
                onClick={() => setDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
        
    )
}

export default Input