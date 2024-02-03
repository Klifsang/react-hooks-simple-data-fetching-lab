import { useEffect, useState } from "react";

// create your App component here
export default function App() {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  });

  return (
    <div>
      {!imageUrl ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}
