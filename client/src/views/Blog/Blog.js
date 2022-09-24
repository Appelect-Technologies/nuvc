import React from "react";
import blog from "./blog.css";
import image89 from "../.././asstes/5-min.jpg";
import image90 from "../.././asstes/apply jobs-min.jpg";
import image91 from "../.././asstes/education.jpeg";
import ContentCard from "../home/ContentCard";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      <section class="blog-content">
        <div class="row">
          <div class="blog-left">
            <img src={image89} alt="image" />
            <h2>Our Certificate & online program For 2022</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              distinctio nemo provident autem rem est cum accusantium deserunt
              dolorem sapiente?
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              dolorum doloribus voluptas reiciendis natus fugiat asperiores in
              nobis dolorem. Modi velit nam est, provident odio iste molestiae
              amet dolorum minima fugiat laboriosam enim debitis nesciunt culpa
              corrupti iure consequatur recusandae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tempora officiis numquam saepe id corporis quisquam ullam.
              Voluptas, recusandae! Molestias, quaerat cumque. Totam qui
              similique cupiditate quod consequatur magnam provident nesciunt
              neque aspernatur beatae? Soluta quod maiores ut quae assumenda!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nobis quia consectetur, distinctio nesciunt illum neque
              fuga omnis quo ut!
            </p>

            {/* <div class="comment-box">
              <h3>leave a Comment</h3>
              <form class="comment-form">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your E-mail" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <button type="submit" class="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div> */}
          </div>
          <div class="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytic</span>
              <span>21</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>50</span>
            </div>{" "}
            <div>
              <span>Machine Leanring</span>
              <span>40</span>
            </div>{" "}
            <div>
              <span>Computer Science</span>
              <span>35</span>
            </div>{" "}
            <div>
              <span>Auto CAD</span>
              <span>15</span>
            </div>
            <div>
              <span>Journlisam</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div>
          <ContentCard />
        </div>
      </div>
      <div>
        <div className="h1">
          <h1>Our Blogs</h1>
        </div>
        <ul class="cards">
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">skill india</h3>
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image90} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    {/* <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span> */}
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image91} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul class="cards">
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image90} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    {/* <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span> */}
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image91} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
