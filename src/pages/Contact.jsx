import "../assets/styles/contact.css"

const Contact = () => {
  return (
    <section>
      <h1>Contact us</h1>
      <div>
        <label form="name">Name</label>
        <input type="text" id="name" placeholder="what is your name"></input>

        <label form="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"></input>

        <label form="message">Message</label>
        <textarea id="message" name="message" rows={"5"}></textarea>

        <button type="submit">submit</button>
      </div> 
    </section>
  )
}

export default Contact