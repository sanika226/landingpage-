import React from 'react'
import './LandPage.css'
import mountain from './video/Mountains .mp4'

function LandPage() {
    return (
        <div>
            <section className="travel">
            <header>
                <h2 className="logo">Nature</h2>
            </header>
            <video src={mountain} muted autoPlay={true}></video>
            <div className="text">
                <h2>Love The Nature</h2>
                <p>Nature is made of everything we see around us – trees, flowers, plants, animals, sky, mountains, forests and more. Human beings depend on nature to stay alive. Nature helps us breathe, gives us food, water, shelter, medicines, and clothes. We find many colors in nature which make the Earth beautiful..</p>
                <a href="#">Explore</a>
            </div>
            <ul class="social">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
            
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>

            </div>
            </section>
        </div>
    )
}

export default LandPage
