import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {

  const ListadoCarros = [
    {
      name: "Celeste",
      gender: "Indie",
      url:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/c/celeste-switch/hero",
      release_year: 2018
    },
    {
      name: "God Of War 4",
      gender: "Action-adventure",
      url:
        "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/61716faa61eca53a843588af/sharing_images/lcwz6ohd1c3iurp3jtwo.jpg",
      release_year: 2018
    },
    {
      name: "Bayonetta 3",
      gender: "Hack-and-slash",
      url:
        "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Bayonetta3_image1600w.jpg",
      release_year: 2022
    },
    {
      name: "The last of Us 2",
      gender: "Action-adventure",
      url:
        "https://stevivor.com/wp-content/uploads/2020/05/the-last-of-us-part-2-preview-990x557.webp",
      release_year: 2020
    },
    {
      name: "Nier Automata",
      gender: "Hack-and-slash",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/capsule_616x353.jpg?t=1682534695",
      release_year: 2019
    },
    {
      name: "Horizon Forbidden West",
      gender: "Action-adventure",
      url: "https://blog.latam.playstation.com/tachyon/sites/3/2023/02/dfceb6f833e609d80d89fc05f0da066d4489eace.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
      release_year: 2020
    },
    {
      name: "Stardew Valley",
      gender: "Indie",
      url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466",
      release_year: 2017
    },
    {
      name: "Assassin's creed odyssey",
      gender: "Action-adventure",
      url: "https://www.prosiebengames.de/uploads/public/b0b731f79a1f79dbf48c9f9057af69ee/b0b731f79a1f79dbf48c9f9057af69ee.jpg",
      release_year: 2018
    },
    {
      name: "Hollow Knight",
      gender: "Indie",
      url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
      release_year: 2017
    },
    {
      name: "The Legend of Zelda:TOTK",
      gender: "Action-adventure",
      url: "https://www.hindustantimes.com/ht-img/img/2023/04/28/550x309/9222b2b244072d28af4586_1682669541106_1682669541280.jpg",
      release_year: 2023
    },
    {
      name: "Metroid dread",
      gender: "Action-adventure",
      url: "https://i.ytimg.com/vi/FmSctyvQwNY/maxresdefault.jpg",
      release_year: 2021
    },
    {
      name: "Cult of the Lamb",
      gender: "Hack-and-slash",
      url: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000047973/9519538ac3c40f033647cb1c143e61eeff2345df4376c6a5386e68300fd4df74",
      release_year: 2022
    },

  ];
  

  const [ListadoFiltrado, setListadoFiltrado] = useState(ListadoCarros);  
  const [MarcaSeleccionada, setMarcaSeleccionada] = useState("");
  const [AnioSeleccionado,setAnioSeleccionado] = useState();


  const FiltradoxMarca = (DataFiltrado) => {
      if(!MarcaSeleccionada){
        return DataFiltrado;
      }
      
      const FiltradoAutos = DataFiltrado.filter(
        (car) => car.gender.split(" ").indexOf(MarcaSeleccionada) !== -1
      );

      return FiltradoAutos;
  };

  const FiltradoxAnio = (DataFiltrado) => {
    if(!AnioSeleccionado){
      return DataFiltrado;
    }

    const FiltradoAutos = DataFiltrado.filter(
      (car) => car.release_year === AnioSeleccionado
    );

    return FiltradoAutos;
  };

  const handleCambioMarca = (event) => {
    setMarcaSeleccionada(event.target.value);
  };

  const handleCambioAnio = (event) => {
    
    const inputAnio = Number(event.target.id);

    if(inputAnio === AnioSeleccionado){
      setAnioSeleccionado("");
    }else{
      setAnioSeleccionado(inputAnio);
    }
  };


  useEffect (() => {
    var DataFiltrado = FiltradoxMarca(ListadoCarros);
    DataFiltrado = FiltradoxAnio(DataFiltrado);
    setListadoFiltrado(DataFiltrado);
  },[MarcaSeleccionada,AnioSeleccionado]);

  return (
    <div className='App'>
      <div className='filtradomarca'>
        <div> Filter by gender: </div>
        <select
          id='inputMarca'
          value={MarcaSeleccionada}
          onChange={handleCambioMarca}
        >
          <option value=""> All </option>
          <option value="Indie"> Indie </option>
          <option value="Action-adventure"> Action adventure </option>
          <option value="Hack-and-slash"> Hack and slash </option>
        </select>
      </div>
      <div className='filteryear'> Filter by year: </div>
      <div id="opcionesAnio" onClick={handleCambioAnio}>
      <div
          className={AnioSeleccionado === 2017 ? "opcionActivo" : "opcionFiltrado" }
          id="2017"
        > 
        2017 
        </div>
        <div
          className={AnioSeleccionado === 2018 ? "opcionActivo" : "opcionFiltrado" }
          id="2018"
        > 
        2018 
        </div>
        <div
          className={AnioSeleccionado === 2029 ? "opcionActivo" : "opcionFiltrado" }
          id="2019"
        > 
        2019 
        </div>
        <div
          className={AnioSeleccionado === 2020 ? "opcionActivo" : "opcionFiltrado" }
          id="2020"
        > 
        2020
        </div>
        <div
          className={AnioSeleccionado === 2021 ? "opcionActivo" : "opcionFiltrado" }
          id="2021"
        > 
        2021
        </div>
        <div
          className={AnioSeleccionado === 2022 ? "opcionActivo" : "opcionFiltrado" }
          id="2022"
        > 
        2022
        </div>
        <div
          className={AnioSeleccionado === 2023 ? "opcionActivo" : "opcionFiltrado" }
          id="2023"
        > 
        2023
        </div>
      </div>

      <div id="listadoCarros">
        {ListadoFiltrado.map((item, index) => (
          <div className='car-item' key={index}>
            <Link to={`/app2/${index}`} className='enlace'><div className='car-name'> {` ${item.name}`}</div></Link>
            <div className='car-gender'>{`Gender: ${item.gender}`}</div>
            <div className='car-year'>{`Year: ${item.release_year}`}</div>
            <img className='car-image'src={item.url}/>
          </div>
        ))}
      </div>
    </div>
    );
}

export default App;