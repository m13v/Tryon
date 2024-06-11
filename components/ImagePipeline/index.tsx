import React, { useEffect, useMemo, useRef, useState } from "react";
import ImageUploader from "./ImageUploader";
import { client } from "@gradio/client";
import { GrNext } from "react-icons/gr";
import * as ga from "@/libs/ga";
import { wrap } from "module";

const apiUrls = ["/load_example", "/load_example_1", "/load_example_2"];

const top_garment = [
  {
    id: 0,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
  },
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/65ff53dc99803d44d4e07facd195cda873856968/top5.png",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/79df244bb1e3a712b3612fdd0bebf93ff40a88a8/top333.png",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/3b0d73532b2296848b39c332c018211fb1d8f8c6/dress1.png",
  },
  {
    id: 4,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/30275a32330224953f3bd08c3e536fd451706bab/dress2.png",
  },
];

const lower_garment = [
  {
    id: 0,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png",
  },
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/17850932298f412c6d307504e6694510c3983592/bottom2.PNG",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/166442933d4f5841ac2a19568ac6b1fdfd495e35/bottom3.JPG",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/27316c1d97f31a0eeef64d42202e1beadb08483a/bottom4.PNG",
  },
  {
    id: 4,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/94c62681b3f3086ea00a63df9a9ceb85fe7b04e8/bottom5.png",
  },
];

const models = [
  {
    id: 0,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/91baf552252b7f9c6416f3175f35e98070565a57/Rouyan_0.png",
  },
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/f7dce00cee84dadceb24526d4ce5cc5999855c9d/Rouyan_2.png",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/28dbd2deba1e160bfadffbc3675ba4dcac20ca58/Eva_0.png",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/2f060521cb67195666c59ccd0e47ecc2587a4100/Simon_1.png",
  },
  {
    id: 4,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/3a2287f20c44729f5c7804235f113de32c769baf/Eva_1.png",
  },
  {
    id: 5,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/9a02f1f9b4db87c22a3341612edeaca4b65920e0/Simon_0.png",
  },
  {
    id: 6,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/ef12488138e32ba30930bd342a53fbc409ad00a9/Xuanxuan_0.png",
  },
  {
    id: 7,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/daca749076bd63a3d8c8a97225a031123e6b432a/Xuanxuan_2.png",
  },
  {
    id: 8,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/951c48e394c297c0632753d1a5fa5b79c59c9a36/Yaqi_1.png",
  },
  {
    id: 9,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/6f793bb1d75f34cdc2c980467ef2f2c242fe9b56/Yifeng_0.png",
  },
  {
    id: 10,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/4c5c245e2e96bf61ea1e606d11e31d0a915575e1/Yifeng_3.png",
  },
  {
    id: 11,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/57c66d2b92687a8e1ab12034a9a40d5ae1936ff7/Rouyan_1.png",
  },
  {
    id: 12,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/64f42706321086bbcc24d37a29a5be87da06ef59/Yifeng_2.png",
  },
  {
    id: 13,
    url: "https://humanaigc-outfitanyone.hf.space/file=/tmp/gradio/53974d6ff65483b035a8437be33a9b2c4764b021/Yaqi_0.png",
  },
];

export default function ImagePipeline() {
  const [app, setApp] = useState();
  const [imageData, setImageData] = useState([]);
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    (async () => {
      const a = await client(
        "https://humanaigc-outfitanyone.hf.space/",
        {}
      );
      setApp(a);
    })();

    const isDesktop = window.innerWidth > 1024;
    if (wrapperRef.current && isDesktop) {
      const height = wrapperRef.current.offsetHeight;
      wrapperRef.current.style.height = `${height}px`;
    }
  }, []);

  const handleGenerate = async () => {
    if (!app) return;
    // console.log("imageData:", imageData);
    if (imageData.length < 2) {
      console.error("Missing imageData");
      return;
    } else if (imageData.length === 2) {
      imageData[2] = null;
    }
    for (let i = 0; i < imageData.length; i++) {
      if (!imageData[i]?.orig_name || !imageData[i]?.path) {
        if (i === 2) {
          imageData[2] = null;
        } else {
          console.error("Missing orig_name or path in imageData at index", i);
          return;
        }
      }
    }
    try {
      setIsLoading(true);
      const result = await app.predict("/get_tryon_result", imageData);
      setOutput(result.data[0].url);
      // console.log("result", result);
      setIsLoading(false);
      ga.event({
        action: "click",
        params: {
          category: "generate",
          label: "generate",
          error: false,
        },
      });
    } catch (e) {
      console.log(e);
      ga.event({
        action: "click",
        params: {
          category: "generate",
          label: "generate",
          error: true,
        },
      });
    }
  };
  const handlePick = async (id, type) => {
    try {
      const result = await app.predict(apiUrls[type], [id]);
      // console.log("result", result);
      setImageData((prev) => {
        const temp = [...prev];
        temp[type] = { ...result.data[0].value };
        return temp;
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="lg:flex self-stretch h-full flex-col pb-8">
      <h2 className="text-3xl font-bold text-center py-5">
        算法妈妈虚拟试衣服务
      </h2>
      <div className="lg:flex lg:gap-4 h-full pb-6 items-stretch">
        <div className="flex flex-col border-2 rounded-3xl border-base-300 p-4 flex-1">
          <h2 className="text-xl text-center pb-4">选择模特</h2>
          <ImageUploader
            imageList={models}
            onUpload={null}
            onPick={(id) => handlePick(id, 0)}
          />
        </div>
        <div className="flex items-center justify-center">
          <GrNext size={28} className="rotate-90 lg:rotate-0 text-base-300" />
        </div>

        <div className="flex flex-col self-stretch h-full  border-2 rounded-3xl border-base-300 p-4 flex-1">
          <h2 className="text-xl text-center pb-4">选择或上传上装和下装</h2>
          <div className="h-1/2">
            <ImageUploader
              imageList={top_garment}
              onUpload={(image) =>
                setImageData((prev) => {
                  const temp = [...prev];
                  temp[1] = image;
                  return temp;
                })
              }
              onPick={(id) => handlePick(id, 1)}
            />
          </div>
          <div className="h-1/2">
            <ImageUploader
              imageList={lower_garment}
              onUpload={(image) =>
                setImageData((prev) => {
                  const temp = [...prev];
                  temp[2] = image;
                  return temp;
                })
              }
              onPick={(id) => handlePick(id, 2)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GrNext size={28} className="rotate-90 lg:rotate-0 text-base-300" />
        </div>
        <div className="flex flex-col self-stretch flex-1 border-2 rounded-3xl border-base-300 p-4">
          <h2 className="text-xl text-center pb-4">虚拟试衣效果</h2>
          <div className="text-center py-4">
            {isLoading ? (
              <button className="btn  w-full">
                <span className="loading loading-spinner"></span>
                搭配生成中...
              </button>
            ) : (
              <button
                className="btn btn-primary w-full"
                onClick={handleGenerate}
                disabled={!imageData[0]?.path || !imageData[1]?.path}
              >
                生成搭配
              </button>
            )}
          </div>
          <div
            className="w-auto h-full flex flex-col justify-center items-center"
            ref={wrapperRef}
          >
            {output && !isLoading && (
              <img
                src={output}
                alt="result"
                className="w-full h-full object-contain"
              />
            )}
            {isLoading && (
              <span className="loading loading-bars loading-lg"></span>
            )}

            {(!imageData[0]?.orig_name || !imageData[0]?.path) && (
              <p>No model</p>
            )}
            {(!imageData[1]?.orig_name || !imageData[1]?.path) && (
              <p>No top garment</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
