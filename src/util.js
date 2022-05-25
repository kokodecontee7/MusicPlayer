import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return[
        {
            name: "Indian Summer Rally",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
            artist: "oddfish, cocabona",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=32863",
            color: ["#736E70", "#C2C69A"],
            Id:uuidv4(),
            Active: true,
        },
        {
            name: "Valse",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
            artist: "Plusma, Guillaume",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=28897",
            color: ["#B9BEAC", "#BEA4A3"],
            Id:uuidv4(),
            Active: false,
        },
        {
            name: "parasol",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/c46e7efae453e56f839e3683926e809639f167b0-1024x1024.jpg",
            artist: "Plusma, Guillaume",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=28901",
            color: ["#887958","#77ACA8"],
            Id:uuidv4(),
            Active: false,
        },
        {
            name: "Nightfall",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#B69D9D", "#594F72"],
            Id:uuidv4(),
            Active: false,
        },
        {
            name: "Daylight",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#DEC5BC", "#3F3557"],
            Id:uuidv4(),
            Active: false,
        },


    ];
}

export default chillHop;