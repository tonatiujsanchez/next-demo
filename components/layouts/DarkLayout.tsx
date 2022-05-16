import { FC } from "react"
import { PropsChildren } from '../../interfaces/index';



const DarkLayout:FC<PropsChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: '#333',
        padding: '10px',
        borderRadius: '5px'
    }}> 
    <h3>DarkLayout</h3>
    { children }
    </div>
  )
}

export default DarkLayout