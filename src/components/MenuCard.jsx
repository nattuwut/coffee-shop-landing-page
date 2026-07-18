

function MenuCard({
    src,
    alt,
    name,
    description,
    price,
    delay
}) {
    return (
        <div className="menu-card"
            data-aos="fade-up"
            data-aos-delay={delay * 200}>
            <img src={src} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="menu-price">{price}</p>
            <button>Order Now</button>
        </div>
    );
}

export default MenuCard