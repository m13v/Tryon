import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { client } from "@gradio/client";


const copyFromSite = [
  {
    "path": "/tmp/gradio/72fdf03287c4598e82a7c86cef134ea82ae64336/woman-with-beautiful-body-144627-37981.jpg",
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/72fdf03287c4598e82a7c86cef134ea82ae64336/woman-with-beautiful-body-144627-37981.jpg",
    "orig_name": "woman-with-beautiful-body-144627-37981.jpg",
    "size": null,
    "mime_type": null
  },
  {
    "path": "/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
    "orig_name": "top222.JPG",
    "size": null,
    "mime_type": null
  },
  {
    "path": "/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png",
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png",
    "orig_name": "bottom1.png",
    "size": null,
    "mime_type": null
  }
]

const test = [
  {
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/91baf552252b7f9c6416f3175f35e98070565a57/Rouyan_0.png",
    "orig_name": "Rouyan_0.png",
    "size": null,
    "mime_type": null
  },
  {
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
    "orig_name": "top222.JPG",
    "size": null,
    "mime_type": null
  },
  {
    "url": "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png",
    "orig_name": "bottom1.png",
    "size": null,
    "mime_type": null
  }
]
const testUrl = [
  "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/91baf552252b7f9c6416f3175f35e98070565a57/Rouyan_0.png",
  "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
  "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png"
]
async function urlToBlob(url) {
  // Загрузка изображения по URL
  const response = await fetch(url);
  const blob = await response.blob();

  // Получение имени файла из URL
  const fileName = url.substring(url.lastIndexOf('/') + 1);

  // Создание объекта File
  const file = new File([blob], fileName, { type: blob.type });

  return file;
}

function App() {
  const [count, setCount] = useState(0);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    [
      "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/28dbd2deba1e160bfadffbc3675ba4dcac20ca58/Eva_0.png",
      "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
      "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/file=/tmp/gradio/94c62681b3f3086ea00a63df9a9ceb85fe7b04e8/bottom5.png",
    ].forEach(async (url) => {
      const file = await urlToBlob(url);
      setArr((arr) => [...arr, file]);
      console.log('setArr', file)
    });

    console.log('arr', arr)
  }, [])

  useEffect(()=>{console.log('arr', arr)}, [arr])


  useEffect(() => {
    // if (arr?.length !== 3) return;
    (async () => {
      try {
        const app = await client(
          "https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/"
        );

        // const formData = new FormData();
        // const file = await urlToBlob("https://i.ibb.co/30rbqFq/woman-with-beautiful-body-144627-37981.jpg");
        // formData.append('files', file);
        // const response = await fetch("https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/upload?upload_id=111", {
        //   method: 'POST',
        //   body: formData
        // });

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const data = await response.json();
        // console.log("upload",data);
        const result = await app.predict("/get_tryon_result", copyFromSite);
        console.log("result", result);
      } catch (e) {
        console.log(e);
      }
    })(arr);

    console.log("first");
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
