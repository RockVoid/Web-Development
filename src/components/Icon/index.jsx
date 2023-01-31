import { AiFillPlusCircle, AiOutlineMinus } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

const Icon = ({ typeIcon }) => {

   const iconList = {
      'plus': <AiFillPlusCircle />,
      'pencil': <FaPencilAlt />,
      'minus': <AiOutlineMinus />,
      'arrow-left': <IoIosArrowDropleftCircle />
   }

   return iconList[typeIcon]
}

export default Icon;