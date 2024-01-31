import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from "react";

function App() {
    const [color, setColor] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setDarkText] = useState(true);
    
    return (
        <div className="App">
            <Square
                color={color}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <Input
                color={color}
                setColor={setColor}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setDarkText={setDarkText}
            />
        </div>
    );
}

export default App;
