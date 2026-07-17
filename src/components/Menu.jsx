import "./Menu.css"
import MenuCard from "./MenuCard"
import menuData from "../data/menuData"

function Menu() {
    return (
        <section id="menu" className="menu">
            <h2>Our Menu</h2>
            <p>Our most popular coffee</p>
            <div className="menu-container">
                {menuData.map((coffee) => (
                    <MenuCard
                        key={coffee.id}
                        src={coffee.image}
                        alt={coffee.alt}
                        name={coffee.name}
                        description={coffee.description}
                        price={coffee.price}
                    />
                ))}
            </div>
        </section>
    )
}

export default Menu