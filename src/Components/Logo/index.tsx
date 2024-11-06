import "./Logo.css"
import {logo} from "../../assets"

const Logo = () => {
  return (
    <div className="flex_center logo">
      <img src={logo} alt=""/>
    </div>
  )
}

export default Logo