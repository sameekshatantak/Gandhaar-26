import { useEffect } from "react";
import "../style/Header.css";
import bg from '../assets/images/header/bg.jpeg';
import bgg from '../assets/images/header/bgg.jpg';
import diskImg from '../assets/images/header/disk.png';
import tvImg from '../assets/images/header/tv.png';
import tv1Img from '../assets/images/header/tv1.png';
import wordImg from '../assets/images/header/word.png';
import word2Img from '../assets/images/header/word2.png';
import v1 from '../assets/images/header/v1.png';
import v2 from '../assets/images/header/v2.png';
import v3 from '../assets/images/header/v3.png';
import v4 from '../assets/images/header/v4.jpeg';

export default function Home() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      runMobileJS();
    } else {
      runWebsiteJS();
    }

    const handleResize = () => location.reload();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* DESKTOP LAYOUT */}
      <div id="desktop-layout">
        <div className="scene">
          <img src={bgg} className="bg1" alt="" />
          <img src={wordImg} className="disk-word" alt="" />
          <img src={word2Img} className="disk-word-2" alt="" />
          <img src={diskImg} className="disk" alt="" />
          <img src={tv1Img} className="tv" alt="" />

          {/* Corrected variable names below: v1, v2, v3, v4 */}
          <img className="tv-video tv-video-1" src={v1} alt="" />
          <img className="tv-video tv-video-2" src={v2} alt="" />
          <img className="tv-video tv-video-3" src={v3} alt="" />
          <img className="tv-video tv-video-4" src={v4} alt="" />
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div id="mobile-layout">
        <div className="scene">
          <img src={bg} className="bg1" alt="" />
          <img src={wordImg} className="disk-word" alt="" />
          <img src={word2Img} className="disk-word-2" alt="" />
          <img src={diskImg} className="disk" alt="" />
          <img src={tvImg} className="tv" alt="" />

          <img className="tv-video tv-video-1" src={v1} alt="" />
          <img className="tv-video tv-video-2" src={v2} alt="" />
          <img className="tv-video tv-video-3" src={v3} alt="" />
          <img className="tv-video tv-video-4" src={v4} alt="" />
        </div>
      </div>
    </>
  );
}

function runWebsiteJS() {
  const scene = document.querySelector("#desktop-layout .scene");
  if (!scene) return;

  const disk = scene.querySelector(".disk");
  const tv = scene.querySelector(".tv");

  scene.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    scene.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    disk.style.transform = `translateZ(120px) rotate(${Date.now() * 0.03}deg)`;
    tv.style.transform = `translateZ(200px) translateY(-10px)`;
  });

  scene.addEventListener("mouseleave", () => {
    scene.style.transform = "rotateX(0deg) rotateY(0deg)";
    disk.style.transform = "translateZ(0)";
    tv.style.transform = "translateZ(0)";
  });

  // Video logic removed because tags are now <img>
}

function runMobileJS() {
  const scene = document.querySelector("#mobile-layout .scene");
  if (!scene) return;

  const tv = scene.querySelector(".tv");
  const words = scene.querySelectorAll(".disk-word, .disk-word-2");

  tv.addEventListener("click", () => {
    tv.classList.toggle("pop");
  });

  words.forEach((word) => {
    word.addEventListener("click", () => {
      word.classList.add("word-pop");
      setTimeout(() => word.classList.remove("word-pop"), 2000);
    });
  });
}