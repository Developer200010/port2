import React from "react";
import "./Hero.css";
import { TypedComponent } from "../TypedComponent";
const Hero = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hi, Myself</h3>
          <h1>Chandan Vishwakarm</h1>
          <h3>
            And I do have knowledge of <span className="change"><TypedComponent/></span>
          </h3>
          <p>
            Who is passionate, enthusiastic, and love to learn new tools and
            technology which help to boost the work and reduce the time
            complexity.
          </p>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/chandan-vishwakarma-38ba942bb/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://x.com/chandanVisw01" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://github.com/Developer200010" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="cv.pdf" download className="btn12">
            Download cv
          </a>
        </div>
        <div className="home-img">
          <img src="/image/1.jpeg" alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/image/1.jpeg" alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            ABOUT<span>Me</span>
          </h2>
          <h3>Web Developer</h3>
          <p>I love Design, Technology, and Story!</p>
          <a href="" className="btn"></a>
        </div>
      </section>

      <section className="services" id="services">
        <h2>
          My <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>
              Frontend Developer <br />{" "}
              <bold className="tool">Tools &#771; </bold> <span>React.js</span>{" "}
              <span className="span">||</span> <span>HTML || CSS || Bootstrap</span>
            </h3>
            <a href="" className="btn"></a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-pen-nib"></i>
            <h3>
              Database
              <br /> <bold className="tool">Tools &#771; </bold>{" "}
              <span>No-Relational = MongoDB</span> <span className="span">||</span>{" "}
              <span>Relational = MySql</span> <span className="span">||</span>{" "}
            </h3>

            <a href="" className="btn"></a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>
              Backend Developer <br />{" "}
              <bold className="tool">Tools &#771; </bold> <span>Node.js</span>{" "}
              <span className="span">||</span> <span>Express.js</span>
            </h3>
            <a href="" className="btn"></a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>{" "}
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="" alt="" />
            <div className="portfolio-layer">
              <h4>MovieSite</h4>
              <p>MovieSite help user to seen all the details of a movie</p>
              <a href="https://movie-site-tau-silk.vercel.app/" target="_blank">
                <i className="fa-regular fa-share-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="" alt="" />
            <div className="portfolio-layer">
              <h4>githubUserDetails</h4>
              <p>
                This site help user to fetch there repository details with there
                username and languages used.
              </p>
              <a
                href="https://fetching-git-user-data.vercel.app/"
                target="_blank"
              >
                <i className="fa-regular fa-share-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="" alt="" />
            <div className="portfolio-layer">
              <h4>FoodRecipe API</h4>
              <p>It help to get the data of Recipe required by user</p>
              <a href="https://food-recipe-app-jade.vercel.app/">
                <i className="fa-regular fa-share-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 className="heading">
          contact <span>details</span>{" "}
        </h2>

        <div className="contain">
          <span className="cont">
            Email : <b>Chandanvishw11002@gmail</b>
          </span>
          <div className="line"></div>
          <span className="cont">
            Phone : <b>6901088383</b>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
