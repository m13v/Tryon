import Head from "next/head";
import { Inter } from "next/font/google";
import ImagePipeline from "@/components/ImagePipeline";
import AutoSlider from "@/components/AutoSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Outfit Anyone</title>
        <meta
          name="description"
          content="Outfit Anyone: Virtual fitting of the highest quality for any clothing and any person. Secure upload of clothing images. Learn more!"
        />
        <meta
          name="keywords"
          content="Outfit Anyone, virtual fitting, high quality, album, try, security, research, ModelScope, Hugging Face, fashion, style, innovations, Put Clothes on Models"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Put Clothes on Models"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:title" content="Put Clothes on Models" />
        <meta
          property="og:description"
          content="Outfit Anyone: Virtual fitting of the highest quality for any clothing and any person. Secure upload of clothing images. Learn more!"
        />
        {/* <meta property="og:image" content="URL_TO_YOUR_IMAGE" /> */}
        <meta property="og:url" content="https://outfitanyone.site" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outfit Anyone" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <main>
        <section className="hero min-h-screen relative bg-center bg-no-repeat bg-cover">
          <div className={"absolute top-0 left-0 right-0 bottom-0"}>            
            <AutoSlider />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>
          </div>

          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-neutral">
              <h1 className="mb-5 text-6xl lg:text-9xl font-bold font-smooch text-white">
                Put Clothes on Models
              </h1>
              <a className="btn btn-secondary btn-lg" href="#gen">
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section
          id="gen"
          className="min-h-screen lg:max-h-screen w-full lg:h-screen p-2"
        >
          <ImagePipeline />
        </section>
        <section className="min-h-screen relative">
          <div className={"absolute top-0 left-0 right-0 bottom-0"}>
            <video
              autoPlay={false}
              preload="none"
              loop
              muted
              controls
              className="w-full h-full object-contain"
            >
              <source src="/tutor.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
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
          <a href="https://t.me/matthew_ddi" target="_blank" aria-label="Contact via telegram">
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
          <a href="mailto:matthew.ddy@gmail.com" aria-label="Contact via email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="32"
              preserveAspectRatio="xMidYMid meet"
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
