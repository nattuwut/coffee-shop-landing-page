import "./Hero.css";

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
            <div className="hero-image"></div>

        </section>
    )
}

export default Hero