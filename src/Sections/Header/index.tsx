import "./Header.css"
import {me} from "../../assets";
import SocialHandles from "../../Components/SocialHandles";
import { Link } from "react-scroll";
import Points from "../../Components/Points";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Header = () => {
  const container:any = useRef();
  useGSAP(()=>{
    gsap.timeline({delay:0.5})
    .from(".points",{opacity:0, y:-30})
    .from(".me", {opacity:0, scale:0.7})
    .from([".user__info .sub__title", ".user__info .description"],{opacity:0, y:20})
    .from("user__info .title", {opacity:0, x:-30})
    .from("user__info .buttons", {opacity:0, x:-30})
    .from(".points .point", {opacity:0, x:-30, stagger:0.5})
  },{scope:container})
  return (
    <section id="header" className="bg__secondary">
        <div className="spotlight"/>
        <div className="container">
            <div className="grid">
                <div className="me">
                    {/* <img src={me} alt=""/> */}
                </div>
                <div className="user__info">
                  <h2 className="sub__title">Hi 👋, I'm Rohan Patil</h2>
                  <h1 className="title">Full Stack Web Developer</h1>
                  <p className="description"> I specialize in crafting robust, efficient, and scalable web applications. With a strong foundation in both frontend and backend development, I leverage technologies like Java, React, and Node.js to deliver high-quality solutions. My passion for clean, maintainable code ensures that each project I undertake not only meets but exceeds client expectations. Whether you're looking for a complex web application or a simple landing page, I am dedicated to transforming your ideas into seamless user experiences. Let’s collaborate and bring your vision to life! </p>

                  <div className="flex buttons">
                        <SocialHandles/>
                        <Link to="contact" smooth={true} className="btn btn__primary">Contact Me</Link>
                  </div>
                </div>
            <Points/> 
            </div>
        </div>
    </section>
  )
}

export default Header