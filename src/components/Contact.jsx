import react from 'react';

function Aboutme() {
    const addSkills = () => {
        const skillsicon = ["./src/assets/react.svg", "./src/assets/android_icon.png", "./src/assets/express_icon.png", "./src/assets/firebase_icon.png"]
        const skillsElement = ["ReactJs", "Android", "ExpressJS", "Firebase"];
        return skillsElement.map((skills, index) => (
            <div className="card" key={index}>
                <div className="image_container">
                    <img className='image' src={skillsicon[index]} />
                </div>
                <div className="title">
                    <span>{skills}</span>
                </div>
            </div>
        ));
    }

    return (
        <section id='Contact'>
            <div className="contactTitle">
                <h2>Contact</h2>
            </div>
            

            {/* <!-- From Uiverse.io by DavidTM96 -->  */}
            <div className="form-card1">
                <div className="form-card2">
                    <form className="form">
                        <p className="form-heading">Get In Touch</p>

                        <div className="form-field">
                            <input required="" placeholder="Name" className="input-field" type="text" />
                        </div>

                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Email"
                                className="input-field"
                                type="email"
                            />
                        </div>

                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Subject"
                                className="input-field"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <textarea
                                required=""
                                placeholder="Message"
                                cols="30"
                                rows="3"
                                className="input-field"
                            ></textarea>
                        </div>

                        <button className="sendMessage-btn">Send Message</button>
                    </form>
                </div>
            </div>
        <div className="backcircle_contact"></div>

        </section>
    )
}

export default Aboutme;