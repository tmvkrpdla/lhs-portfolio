import { useState } from "react";
import profile from "../data/profile";


function Navbar({ darkMode, setDarkMode }) {


    const [open, setOpen] = useState(false);


    const move = (id)=>{

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior:"smooth"
            });

        setOpen(false);

    };


    return (

        <header className="navbar glass">


            <div className="nav-container">


                <div
                    className="logo"
                    onClick={()=>window.scrollTo({
                        top:0,
                        behavior:"smooth"
                    })}
                >

                    {profile.name}

                </div>



                <nav className={open ? "nav active":"nav"}>


                    <button onClick={()=>move("about")}>
                        소개
                    </button>


                    <button onClick={()=>move("experience")}>
                        경력
                    </button>


                    <button onClick={()=>move("skills")}>
                        기술
                    </button>


                    <button onClick={()=>move("projects")}>
                        프로젝트
                    </button>


                    <button onClick={()=>move("contact")}>
                        연락처
                    </button>


                </nav>



                <button
                    className="theme-btn"
                    onClick={()=>setDarkMode(!darkMode)}
                >

                    {darkMode ? "☀️":"🌙"}

                </button>



                <button
                    className="mobile-menu"
                    onClick={()=>setOpen(!open)}
                >
                    ☰
                </button>


            </div>


        </header>

    );

}


export default Navbar;