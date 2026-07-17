import "./Contact.css"

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <p>Have questions? We'd love to hear from you.</p>
            <form >
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" />

                <label htmlFor="message">Message</label>
                <textarea name="" id="message"></textarea>

                <button type="submit">Send Message</button>
            </form>

        </section>
    )
}

export default Contact