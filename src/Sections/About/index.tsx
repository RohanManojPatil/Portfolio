import {me} from "../../assets"
import "./About.css";
import Window from "../../assets/Window";
import CodeBlock from "../../Components/CodeBlock"
import GridWireframe from "../../assets/GridWireFrame";
import { techStack } from "../../source";
import Grid from "../../assets/Grid";
import CardUi from "../../assets/CardUi";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
const code = 
`const developer = {
firstName: "Rohan",
lastName: "Patil",
hobby: repeat = () => {
//eat();
//sleep();
//code();
//return();
}}`
const About = () => {
  const container:any = useRef();
  useGSAP(()=>{
    gsap.timeline({
        delay: 0.5,
        scroollTrigger:{
            trigger: container.current,
            start: "20% button",
            end: "bottom top"
        }
    })
    .from(".box", {opacity:0, y:30, stagger:0.5})
  },{scope:container})
  return (
      <section id="about" ref={container}>
        <div className="container grid">
            <div className="box self__start">
                <div className="spotlight"/>
                <div className="cluster">
                    <div className="flex user">
                        <div className="profile">
                            <img src={me} alt=""/>
                        </div>
                        <div className="details">
                            <h4>Rohan Patil</h4>
                            <p className="text__muted">Full Stack Web Developer</p>
                        </div>
                    </div>
                    <h2 className="sub__title">
                        <span className="primary">Passionate</span>Developer
                    </h2>
                    <p className="description">
                        I adopt to different time zones to make sure communication is smooth, no matter where you're located.
                    </p>
                </div>
                <Window color="var(--color-primary-light)" className="kit window"/>
            </div>

            <div className="col-2 box">
                <div className="spotlight"/>
                <div className="flex row cluster">
                    <CodeBlock code={code} language="javascript"/>
                    <div className="my__drive">
                        <h2 className="sub__title">
                            What <span className="primary">Drives Me</span>
                        </h2>
                        <p className="description">
                        I’m passionate about the intersection of design 🎨 and development 💻. I believe the best digital experiences are built with a deep understanding of the user 👤 and a commitment to innovation 🌟. Whether working on a simple landing page or a complex web app, I bring precision 🎯, creativity ✨, and a user-first mindset to every project.
                        </p>
                    </div>
                </div>
                <GridWireframe
                width={"90%"}
                height={"auto"}
                color="var(--color-primary-light)"
                className="kit grid__wireframe"/>
            </div>

            <div className="col-2 box">
                <div className="cluster">
                    <div className="column">
                        <h2 className="sub__title">
                            My <span className="primary">Tech Stack</span>
                        </h2>
                        <p className="description">Always Evolving My Tech Stack</p>
                    </div>
                    <div className="column stacks__container">
                        {techStack.map((stack,index)=>(
                            <div className="flex btn stack" key={index}>
                                {stack.icon}
                                {stack.name}   
                            </div>
                        ))}
                    </div>
                </div>
                <Grid className="kit"/>
                <CardUi className="kit card__ui" color="gray" background="rgba(var(--bg-base-rgb), 0.5)"/>
            </div>
            <div className="box flex__center last__box">
                <div className="cluster">
                    <h2 className="text__white sub__white">
                        I'm Committed to Collaboration and Clear Communication
                    </h2>
                    <div className="flex__centr btn__wrapper">
                        <Link to="contact" smooth={true} className="btn">Let Collaborate</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default About;