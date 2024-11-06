import "./Services.css"
import { Link } from "react-scroll"
import { FaArrowRight } from 'react-icons/fa'
import { services } from '../../source'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/all"
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
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
      .from([".section__header .sub__title","section__header .description"], {opacity:0, y:30, stagger:0.5})
      .from(".service", {opacity:0, y: 30, stagger:0.5});
    },{scope:container})
  return (
    <section id="services" className='bg__secondary' ref={container}>
        <div className="container">
            <div className="section__header">
                <h2 className="sub__title">
                    My <span className='primary'>Services</span>
                </h2>
                <p className="description">
                    As a full stack developer, I build robust, efficient, and scalable web applications that provide seamless user experiences, combining modern frontend designs with powerful backend functionality.
                </p>
            </div>
            <div className='services'>
                {services.map((service, index) => (
                    <div className='service' key={index}>
                        <div className='spotlight'/>
                        <div className="icon__container">{service.icon}</div>
                        <h3 className='name'>{service.name}</h3>
                        <p className='text__muted description'>{service.description}</p>
                        <div className='flex__center'>
                            <Link to="contact" smooth={true} className='btn'>Let’s Talk <FaArrowRight/></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
