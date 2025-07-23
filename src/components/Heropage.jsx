import react, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Heropage() {
    const el  = useRef(null);
    useEffect(() => {
        // Typing animation script start
       const typing = new Typed(el.current, {
            strings: ["Android Developer", "Full Stack Developer"],
            typeSpeed: 100,
            backSpeed: 40,
            loop: true,
        });
        // Typing animation script End
        return () => {
            typing.destroy();
        }
    }, [])
    return (
        <>
            <section id='Home'>
                <div className="aboutmepage">
                    <div className="mynamepart">
                        <div className="myName">
                            <div className="mypart">
                                <div className="backcircle">
                                    <h1 className='piedra-regular'>H</h1>
                                </div>
                                <h1 className='piedra-regular' id='marleft'>ello! I Am</h1>
                                <h1 className='piedra-regular' style={{ color: '#763cac' }}>Balakrishna</h1>
                            </div>
                        </div>

                        <div className="myrole">
                            <h2><span ref={el} style={{color: "#763cac"}}></span></h2>
                            <h3> Linked In</h3>
                        </div>

                        <div className="mydesc">
                            <h3 className='parastoo-mydesc'>Hi, I'm Balakrisna ! A passionate Frontend Developer, crafting
                                seamless digital experiences with a blend of creativity and technology.
                                With expertise in HTML, CSS, JavaScript, and React, I bring ideas to
                                life with intuitive designs and clean code. Let's create something
                                amazing together!.</h3><br />
                        </div>

                    </div>
                    <div className="myimg">
                        <div className="background_img">

                        </div>
                        {/* <img src="./src/assets/21004063.jpg" alt="my image" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}