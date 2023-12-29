import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { client } from "@gradio/client";
import ImagePipeline from "@/components/ImagePipeline";
import { useEffect } from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[currentSlide].classList.add("active");
      currentSlide = (currentSlide + 1) % slides.length;
    }

    const intervalId = setInterval(showSlide, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Head>
        <title>Outfit Anyone</title>
      </Head>
      <Script id="google-analytics">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-9K94NYM2MP', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" />
      <main className={``}>
        <div className="hero min-h-screen relative bg-center bg-no-repeat bg-cover">
          <div
            className="slide active"
            style={{
              backgroundImage: `url('https://humanaigc.github.io/outfit-anyone/content/images/bs/3.jpg')`,
            }}
          ></div>

          <div
            className="slide"
            style={{
              backgroundImage: `url('https://humanaigc.github.io/outfit-anyone/content/images/bs/2.jpg')`,
            }}
          ></div>

          <div
            className="slide"
            style={{
              backgroundImage: `url('https://humanaigc.github.io/outfit-anyone/content/images/bs/1.jpg')`,
            }}
          ></div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://humanaigc.github.io/outfit-anyone/content/images/bs/4.jpg')`,
            }}
          ></div>

          <div
            className="slide"
            style={{
              backgroundImage: `url('https://humanaigc.github.io/outfit-anyone/content/images/bs/5.jpg')`,
            }}
          ></div>

          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content glass rounded-xl mx-2">
            <div className="max-w-md  text-neutral">
              <h1 className="mb-5 text-5xl font-bold">
                Experience Virtual Try-On Excellence
              </h1>
              <p className="mb-5">
                Explore the forefront of virtual fashion with Outfit Anyone, a
                state-of-the-art solution. Try on any clothing seamlessly with
                lifelike results through advanced two-stream model. From
                everyday to unique styles, unlock endless possibilities. Dive
                into the virtual fashion revolution—try it now!
              </p>
              <a className="btn btn-primary" href="#gen">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div
          id="gen"
          className="min-h-screen lg:max-h-screen w-full p-2 flex flex-col"
        >
          <h2 className="text-3xl font-bold text-center py-5">
            Put Clothes on Models. Try it yourself, choose a picture, press
            'Generate'
          </h2>
          <ImagePipeline />
        </div>
      </main>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <a
            href="https://humanaigc.github.io/outfit-anyone/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Powered by OutfitAnyone
          </a>
          {/* HTML symbol for a bold dot */}
          <span>&#8226;</span>
          <p className="text-sm">Not for commercial use</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://t.me/matthew_ddi" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="fill-current"
            >
              <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />{" "}
            </svg>
          </a>
          <a href="mailto:matthew.ddy@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              className="fill-current"
            >
              <defs>
                <path
                  d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 "
                  className="fill-current"
                />
              </defs>
              <g>
                <path
                  fill="rgb(6.269836%, 5.879211%, 5.099487%)"
                  d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 "
                  className="fill-current"
                />
              </g>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}
