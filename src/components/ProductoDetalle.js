import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/ProductoDetalle.css';


const ListadoCarros = [
    {
      id: "0",
      name: "Celeste",
      gender: "Indie",
      url:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/c/celeste-switch/hero",
      release_year: 2018,
      description: "Celeste narra la historia de Madeline, quien emprende una travesía para escalar la misteriosa Montaña Celeste en Canadá. Esta montaña tiene la peculiar capacidad de materializar la confusión interna y el verdadero ser de quienes la enfrentan. A lo largo de su ascenso, Madeline se encuentra con diversos personajes, como Theo, un joven confiado y optimista, y el sr. Oshiro, el fantasma de un conserje de un hotel abandonado en la montaña. Sin embargo, el mayor desafío para Madeline es encontrarse con otra versión hostil de sí misma, la parte paranoica y egoísta que la montaña ha creado. Madeline lucha contra la depresión y ataques de pánico, lo que la lleva a enfrentar sus propios demonios internos mientras supera las pruebas que la montaña le presenta."
    },

    {
      id: "1",
      name: "God Of War 4",
      gender: "Action-adventure",
      url:
        "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/61716faa61eca53a843588af/sharing_images/lcwz6ohd1c3iurp3jtwo.jpg",
      release_year: 2018,
      description: "Tras haberse cobrado su venganza contra su padre Zeus y los demás Dioses Olímpicos, el antiguo dios de la guerra, Kratos, ahora vive con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros. Kratos deberá actuar como mentor y protector de su hijo, y tendrá que dominar la ira y el enfado que tuvo durante muchos años, además de enseñarle a Atreus lo que significa ser un dios y las responsabilidades y peligros que eso conlleva."
    },
    {
      id: "2",
      name: "Bayonetta 3",
      gender: "Hack-and-slash",
      url:
        "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Bayonetta3_image1600w.jpg",
      release_year: 2022,
      description: "Con la ayuda de viejos y nuevos aliados, incluidos sus yo alternativos y una bruja en entrenamiento llamada Viola, Bayonetta debe enfrentar y derrotar a las misteriosas amenazas creadas por el hombre conocidas como 'Homonculi' mientras viaja a la isla de Thule, para prevenir. la destrucción de varios mundos por una entidad maligna conocida como la Singularidad."
    },
    {
      id: "3",
      name: "The last of Us 2",
      gender: "Action-adventure",
      url:
        "https://stevivor.com/wp-content/uploads/2020/05/the-last-of-us-part-2-preview-990x557.webp",
      release_year: 2020,
      description:"La historia transcurre cinco años después de los eventos del primer juego. En esta segunda entrega el jugador toma el control de Ellie como la protagonista, la cual emprende un largo viaje para lograr su venganza por el asesinato de alguien a quien apreciaba más que a nada en el mundo. Por otra parte, también se asume el control de Abby, la deuteragonista del juego, que busca vengar la muerte de su padre, quien resulta ser el cirujano que pretendía operar a Ellie y que fue eliminado por Joel al rescatarla."
    },
    {
      id: "4",
      name: "Nier Automata",
      gender: "Hack-and-slash",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/capsule_616x353.jpg?t=1682534695",
      release_year: 2019,
      description: "'Nier: Automata' es un videojuego que comparte el mismo universo postapocalíptico que su predecesor, 'Nier', pero se desarrolla después del cuarto final de este último. La trama gira en torno a una guerra entre androides, los últimos representantes de la humanidad, y una invasión de máquinas de otro mundo. Después de la irrupción inicial de las máquinas, los humanos se refugian en la Luna y crean el escuadrón 'YoRHa', una unidad de androides de combate diseñados para luchar en la guerra. Aunque a los androides se les prohíbe tener emociones y nombres reales, muestran actitudes distintivas. La resistencia se comanda desde el 'Búnker', una base orbital que busca hacer retroceder a las máquinas y recuperar el planeta Tierra. El juego presenta una atmósfera oscura y una historia ramificada, pero no está directamente conectado con la serie Drakengard, a pesar de algunas referencias."
    },
    {
      id: "5",
      name: "Horizon Forbidden West",
      gender: "Action-adventure",
      url: "https://blog.latam.playstation.com/tachyon/sites/3/2023/02/dfceb6f833e609d80d89fc05f0da066d4489eace.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
      release_year: 2020,
      description: "El videojuego se desarrolla seis meses después de Zero Dawn y continua la historia de Aloy, una joven cazadora y guerrera de la tribu Nora que viaja al Oeste Prohibido para investigar una misteriosa y mortífera plaga que amenaza la vida en la Tierra. En su viaje a través de estas tierras desconocidas, Aloy se encuentra con nuevas regiones devastadas por tormentas masivas, enfrentándose a máquinas más letales y entrando en conflicto con Regalla y sus rebeldes."
    },
    {
      id: "6",
      name: "Stardew Valley",
      gender: "Indie",
      url: "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466",
      release_year: 2017,
      description: "¡Stardew Valley es un RPG de vida en el campo! Hereda la vieja granja de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y algo de dinero, te dispones a empezar tu nueva vida. ¿Podrás aprender a vivir de la tierra y a convertir esos campos de malezas en un hogar próspero? No va a ser fácil. Desde que Joja Corporation llegó a la ciudad, las antiguas formas de vivir han desaparecido. El centro comunitario, en su momento el centro de actividad más activo de la ciudad, se encuentra ahora en ruinas. Pero el valle se encuentra lleno de oportunidades. ¡Con un poco de dedicación, podrás ser uno de los que devuelva Stardew Valley a la gloria!"
    },
    {
      id: "7",
      name: "Assassin's creed odyssey",
      gender: "Action-adventure",
      url: "https://www.prosiebengames.de/uploads/public/b0b731f79a1f79dbf48c9f9057af69ee/b0b731f79a1f79dbf48c9f9057af69ee.jpg",
      release_year: 2018,
      description: "El juego se desarrolla en el 431 a.c., cuatrocientos años antes de los eventos de 'Assassin's Creed: Origins'. Cuenta una secreta historia mitológica establecida durante la Guerra del Peloponeso, que se libró entre las ciudades-estado de Grecia. El jugador asume el papel de una mercenaria y puede luchar por la Liga de Delos, dirigida por Atenas, o la Liga del Peloponeso, dirigida por Esparta.13​ La historia principal del juego hace que el personaje del jugador intente restaurar a su familia fracturada después de que fuera arrojada por un acantilado en su juventud y su padre le dejó morir por el comando del Oráculo espartano. Las líneas de misión paralelas tratan sobre la extirpación de un culto maligno que abarca el mundo griego y el descubrimiento de artefactos y monstruos de la época Atlante."
    },
    {
      id: "8",
      name: "Hollow Knight",
      gender: "Indie",
      url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
      release_year: 2017,
      description:"El videojuego cuenta la historia del Caballero, en su búsqueda para descubrir los secretos del largamente abandonado reino de Hallownest, cuyas profundidades atraen a los aventureros y valientes con la promesa de tesoros o la respuesta a misterios antiguos."
    },
    {
      id: "9",
      name: "The Legend of Zelda:TOTK",
      gender: "Action-adventure",
      url: "https://www.hindustantimes.com/ht-img/img/2023/04/28/550x309/9222b2b244072d28af4586_1682669541106_1682669541280.jpg",
      release_year: 2023,
      description: "Después de los eventos de 'The Legend of Zelda: Breath of the Wild', la princesa Zelda y Link investigan el castillo de Hyrule y encuentran una sustancia maligna que enferma a quienes la tocan. Descubren murales que relatan la antigua 'Guerra del Destierro' y se enfrentan a un enemigo poderoso que rompe el sello que lo mantenía encerrado. El castillo se eleva y Zelda desaparece, dejando a Link herido y sin su Espada Maestra. Ahora, Link debe buscar a Zelda y detener a Ganondorf, el rey demonio, para salvar el reino de Hyrule una vez más."
    },
    {
      id: "10",
      name: "Metroid dread",
      gender: "Action-adventure",
      url: "https://i.ytimg.com/vi/FmSctyvQwNY/maxresdefault.jpg",
      release_year: 2021,
      description: "Únete a la cazarrecompensas intergaláctica Samus Aran mientras intenta escapar de un mundo alienígena en el aclamado juego Metroid Dread, Después de investigar una misteriosa transmisión del planeta ZDR, Samus se enfrenta a un enigmático enemigo que la atrapa en este peligroso mundo. Este remoto planeta está infestado de despiadadas formas de vida alienígenas y siniestros mecanismos llamados E.M.M.I. Sé cazadora y presa a la vez mientras te abres camino a través de un peligroso mundo en la aventura más intensa de Samus hasta ahora."
    },
    {
      id: "11",
      name: "Cult of the Lamb",
      gender: "Hack-and-slash",
      url: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000047973/9519538ac3c40f033647cb1c143e61eeff2345df4376c6a5386e68300fd4df74",
      release_year: 2022,
      description: "'Cult of the Lamb' es un emocionante juego de aventuras y acción donde te conviertes en el Mesías de un culto adorador. Dirige tu culto, recluta seguidores y construye tu base mientras exploras un mundo misterioso y enfrentas desafíos. Descubre secretos ocultos y demuestra tu liderazgo en este apasionante juego. ¿Tienes lo necesario para guiar a tu culto hacia la grandeza y enfrentar al rey demonio? ¡Únete al Cult of the Lamb y descubre un viaje emocionante lleno de sorpresas!"
    },

  ];

const ProductoDetalle = () => {

    const {prodID} = useParams();
    const [ListadoProductos] = useState(ListadoCarros); 

    const prodinfo = ListadoProductos.find( product => product.id === prodID )

        if(!prodinfo){
            return (
                <div>
                    <h1>No hay productos</h1>
                </div>
            )
        }
        else {
            return (
                <div className='contenedor'>
                    <h1>{prodinfo.name}</h1>
                    <h4> Gender: {prodinfo.gender} </h4>
                    <img src={prodinfo.url}></img>
                    <p> {prodinfo.description} </p>
                    <Link to="/" className='link-style'><button className="button-style">Volver al Perfil</button></Link>
                </div>
              )
        }  

    
}



export default ProductoDetalle