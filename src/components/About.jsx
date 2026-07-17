import "./About.css"
import aboutImg from "../assets/Img/aboutImg.jpg"

function About() {
    return (
        <section id="about" className="about">
            <img className="about-img" src={aboutImg} alt="Coffee shop" />
            <div className="about-content">
                <h2>About Our Coffee</h2>
                <p>We use premium Arabica beans sourced from
                    local farms. Every cup is brewed with care
                    to deliver the best coffee experience.</p>
                <button className="about-button">Learn More</button>
            </div>

        </section>
    )
}

export default About