import { footer } from "../../source"
import Logo from "../../Components/Logo"
import SocialHandles from "../../Components/SocialHandles";
import "./Footer.css"
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="spotlight"/>
        <div className="container">
            <div className="grid">
                <div className="cols-2 column">
                    <Logo/>
                    <p className="text__muted description">
                        Crafting responsive, high-performance websites 🌐 with clean code 💻 and a user-focused approach 👥. Let’s build something amazing together 🚀.
                    </p>
                    <SocialHandles/>
                </div>
                {
                    footer.map((list, index) => (
                        <div className="column" key={index}>
                            <h3 className="group__name">{list.group}</h3>
                            <div className="routes__container">
                                {
                                    list?.routes.map((route:any, index:number)=>(
                                        <Link to={route?.id} smooth={true}  key={index} className="route__item">{route.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <article className="copyright">
                <h3>Copyright © 2024 Mr. Rohan. All rights reserved.</h3>
                <p className="text__muted">
                    Built with love by Rohan Patil
                </p>
            </article>
        </div>
    </footer>
  )
}

export default Footer