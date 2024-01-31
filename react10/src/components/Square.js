const Square = ({ color, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                background: color,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{color ? color : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Square.defaultProps = {
    color: "Empty Value"
}

export default Square