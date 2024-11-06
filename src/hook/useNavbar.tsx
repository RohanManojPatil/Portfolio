import { useEffect, useState } from 'react'

function useNavbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        if(window.scrollY>100)
        {
            setShowNavbar(true);
        }
        else{
            setShowNavbar(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scrool", toggleNavbar);
        return () => window.removeEventListener("scroll", toggleNavbar);
    }, []);

    return {showNavbar};
};

export default useNavbar