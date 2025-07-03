import react from 'react';

function Skills() {
    const addSkills = () => {
        const skillsicon = ["react", "android_icon", "express_icon.png", "firebase_icon.png"]
        const skillsElement = ["React","Android","Firebase","Python", "Java", "Javascript", "Linux", "Mongodb","C++","Git", "Nodejs",];
        return skillsElement.map((skills, index) => (
            <div className="card" key={index}>
                <div className="image_container">
                    <img className='image' src={"./src/assets/BulkResizePhotos.com/"+skillsElement[index]+".png"} width={"55px"} height={"50px"} />
                    {/* <img className='image' src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_logo.svg/1200px-Java_logo.svg.png" alt="Python logo" width="50"/> */}
                </div>
                <div className="title">
                    <span>{skills}</span>
                </div>
            </div>
            ));
        }

    return (
        <section id='Skills'>
            <div className="aboutskills">
                <div className="skilltitle">
                    <h2>Skills & Abilites</h2>
                </div>
                <div className="skillscontent">
                    {addSkills()}
                </div>
            </div>
        </section>
    )
}

export default Skills;