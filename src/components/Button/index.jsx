import './style.css'
import Icon from '../Icon'

const ButtonIcon = ({ typeIcon, onClick }) => { 
   return (
      <button 
         id="btn-icon" 
         type="button"
         onClick={() => onClick()}
      >
         {Icon({ typeIcon })}
      </button>)
}

export default ButtonIcon;
