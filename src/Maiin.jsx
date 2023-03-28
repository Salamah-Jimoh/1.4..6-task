import React from 'react'

const Maiin = () => {
    const myCountry ='Nigeria'
  return (
   <main>
    <section>
        <h2> About Us</h2>
        <p> We are a small team of web developers based in {myCountry}. We specialize in 
            in creating modern and responsive website for businesses and individuals
        </p>
    </section>
    <section>
        <h2>Our Services</h2>
        <ul>
            <li> Web Design</li>
            <li> Web Development</li>
            <li> E-commmerce Solution</li>
            <li> Search Engine Optmization (SEO) </li>
        </ul>

    </section>
   </main>
  )
}

export default Maiin
