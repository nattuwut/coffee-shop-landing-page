import "./Footer.css"


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <h2>☕ Coffee House</h2>
                <p>Fresh coffee, every morning.</p>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <p>© 2026 Coffee House. All rights reserved.</p>
        </footer>)
}

export default Footer