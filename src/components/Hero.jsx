import "./Hero.css";
import coffeeImg from "../assets/Img/coffeImg.avif"

function Hero() {
    return (
        <section id="hero" className="hero" >

            <div className="hero-content" data-aos="fade-right">
                <h1>Fresh Coffee Every Morning</h1>
                <p>Best coffee in town with fresh beans.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="hero-button">
                        Order Now
                    </a>
                    <a href="#menu" className="hero-button">
                        View Menu
                    </a>
                </div>
            </div>
            <img className="hero-image" data-aos="fade-left" src={coffeeImg} alt="Cup of coffee" />

        </section>
    )
}

export default Hero