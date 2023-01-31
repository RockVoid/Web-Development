import './style.css'
import ButtonIcon from "../Button"
import { Link } from 'react-router-dom'

export const Header = ({ text, route }) => {
    console.log(text, route)
    return (
        <header>
            <div className="header-container">
                <Link to={route}>
                    <ButtonIcon typeIcon="arrow-left" />
                </Link>
                {text}    
            </div>
        </header>
    )
}
