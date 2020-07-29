import React, { useState } from "react";
import "materialize-css";
import { Card, Navbar } from "react-materialize";
function App() {
  const [imgToSearch, setimgToSearch] = useState("392-11096");
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(600);
  var Logo = (
    <img
      alt="logo"
      src={`https://fm-cdn.web.app/cdn/image/height=50/logo_2.png`}
    />
  );
  return (
    <div className="App ">
      <Navbar
        alignLinks="right"
        brand={
          <a
            href="https://fantasiasmiguel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-logo"
          >
            {Logo}
          </a>
        }
        centerLogo
        id="mobile-nav"
      ></Navbar>
      <div className="container ">
        <label>Digita el alto que quieres la imagen:</label>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setHeight(e.target.value);
          }}
          value={height}
        />
        <label>Digita el ancho que quieres la imagen:</label>

        <input
          onChange={(e) => {
            console.log(e.target.value);
            setWidth(e.target.value);
          }}
          value={width}
        />
        <label>Digita el SKU de la imagen:</label>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setimgToSearch(e.target.value);
          }}
          value={imgToSearch}
        />
        <p>Puedes descargar esta imagen dando click derecho, Guardar Como</p>
        <p>
          O Puedes usar el siguiente Link:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://fm-cdn.web.app/cdn/image/height=${height},width=${width}/${imgToSearch}.JPG`}
          >
            https://fm-cdn.web.app/cdn/image/height={height},width={width}/{imgToSearch}.JPG
          </a>
        </p>
        <Card>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://fm-cdn.web.app/cdn/image/height=${height},width=${width}/${imgToSearch}.JPG`}
          >
          <img
            src={` https://fm-cdn.web.app/cdn/image/height=${height},width=${width}/${imgToSearch}.JPG`}
            alt="img"
          />
          </a>
        </Card>
      </div>
    </div>
  );
}

export default App;
