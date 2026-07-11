import "./Hero.css";
import coffeeImg from "../assets/Img/coffeImg.avif"

function Hero() {
    return (
        <section className="hero">
            
            <div className="hero-content">
                <h1>Fresh Coffee Every Morning</h1>
                <p>Best coffee in town with fresh beans.</p>
                <div className="hero-buttons">
                    <button>Order Now</button>
                    <button>View Menu</button>
                </div>
            </div>
            <img className="hero-image" src={coffeeImg} alt="Cup of coffee" />

        </section>
    )
}

export default Hero