import './style.css'
import ButtonIcon from "../Button"
import { useState } from 'react'
import { Modal } from '../Modal';
import { useNavigate } from 'react-router-dom';

export const Header = ({ text, route }) => {
    const [modal, setModalState] = useState(false);
    const navigate = useNavigate()

    const changeRoute = () => {
        if (route === '/') {
            setModalState(true)
        } else {
            navigate('/register')
        }
    }

    return (
        <>
            <Modal 
                message="Tem certeza que deseja sair sem salvar?" 
                action={() => navigate('/')}
                setModalState={() => setModalState()}
                showModal={modal}
            />
            <header>
                <div className="header-container">
                    <ButtonIcon typeIcon="arrow-left" onClick={() => changeRoute()}/>
                    <h1>{text}</h1>    
                </div>
            </header>
        </>
    )
}
