import Head from "next/head";
import { Inter } from "next/font/google";
import ImagePipeline from "@/components/ImagePipeline";
import AutoSlider from "@/components/AutoSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>算法妈妈虚拟试衣</title>
        <meta
          name="description"
          content="算法妈妈虚拟试衣：Mix-and-Match潮流搭配，尽在虚拟试衣服务。"
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

        <meta property="og:title" content="虚拟试衣" />
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
                虚拟试衣
              </h1>
              <a className="btn btn-secondary btn-lg" href="#gen">
                马上开始搭配
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
      </main>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <a
            href="https://www.algmon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Powered by 算法妈妈@2024
          </a>
        </aside>
      </footer>
    </>
  );
}
