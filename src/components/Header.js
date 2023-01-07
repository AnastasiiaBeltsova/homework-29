import { Link } from "./Link";
import {useState} from "react";



export function Header() {
    const [error, setError] = useState(false);
    const handleError = () => {
        setError({value: true});
    }
    return (
        <header className="header">
            <ul>
                <li><Link to="/"><span>Главная</span></Link></li>
                <li><Link to="/contact"><span>Контакты</span></Link></li>
                <br/> <button onClick={handleError}>Set Error</button>
                {error}
            </ul>
        </header>
    )
}