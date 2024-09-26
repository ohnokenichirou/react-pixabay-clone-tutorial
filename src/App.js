import { useRef, useState } from "react";
import "./App.css";
import { ImageGallery } from "./ImageGallery";

const API_KEY = "27800439-c51423717090186532fd42957";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //APIURL
    const searchURL =
      "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;
    //APIを叩く(データフェッチング)
    fetch(searchURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
