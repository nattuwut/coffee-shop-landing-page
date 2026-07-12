

function MenuCard({
    src,
    alt,
    name,
    description,
    price
}) {
    return (
        <div className="menu-card">
            <img src={src} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="menu-price">{price}</p>
            <button>Order Now</button>
        </div>
    );
}

export default MenuCard