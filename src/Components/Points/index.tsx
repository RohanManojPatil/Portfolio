import "./Points.css";
import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
import { useEffect, useState } from "react";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Points = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [awards, setAwards] = useState(0);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setExperience(400);
            setProjects(400);
            setAwards(15);
        }, 1000);

        return () => clearTimeout(timeout);
    },[])
  return (
    <div className="coding__profile">
        <h1 className="coding__profile__title"></h1>


        <div className="points">
            <div className="spotlight"/>
            <div className="point">
                <div className="flex">
                    <Odometer value={experience} className="sub__title"/>
                    <h3 className="sub__title">+</h3>
                </div>
                <div className="flex code__stats">
                    <a href="https://leetcode.com/u/rohanpatil1963/" target="_blank"><SiLeetcode size={20}/></a>
                    <p className="text__muted">LeetCode Problems</p>
                </div>
            </div>

            <div className="point">
                <div className="flex">
                    <Odometer value={projects} className="sub__title"/>
                    <h3 className="sub__title">+</h3>
                </div>
                <div className="flex code__stats">
                    <a href="https://www.geeksforgeeks.org/user/rohan1963/" target="_blank"><SiGeeksforgeeks size={20}/></a>
                    <p className="text__muted">GFG Problems</p>
                </div>
            </div>

            <div className="point">
                <div className="flex">
                    <Odometer value={awards} className="sub__title"/>
                    <h3 className="sub__title">+</h3>
                </div>
                <p className="text__muted">Projects</p>
            </div>
        </div>
    </div> 
  )
}

export default Points