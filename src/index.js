import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import App from "containers/App";

import createRootducer from "./rootducer";
import * as serviceWorker from "./serviceWorker";

const fbConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const rrfConfig = {
  userProfile: "users"
};

firebase.initializeApp(fbConfig);

const initialState = {};
const history = createBrowserHistory();

const store = createStore(
  createRootducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

const Root = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

const db = [
  {
    "Final Ranking": 1,
    "Final Score": 365,
    "Show Order": 10,
    Country: "Sweden",
    Artist: "Måns Zelmerlöw",
    "Song Title": "Heroes",
    "Video ID": "5sGOwFVUU0I",
    Year: 2015
  },
  {
    "Final Ranking": 2,
    "Final Score": 303,
    "Show Order": 25,
    Country: "Russia",
    Artist: "Polina Gagarina",
    "Song Title": "A Million Voices",
    "Video ID": "Q2gbKglCL5s",
    Year: 2015
  },
  {
    "Final Ranking": 3,
    "Final Score": 292,
    "Show Order": 27,
    Country: "Italy",
    Artist: "Il Volo",
    "Song Title": "Grande Amore",
    "Video ID": "1TOMqZV2jA8",
    Year: 2015
  },
  {
    "Final Ranking": 4,
    "Final Score": 217,
    "Show Order": 13,
    Country: "Belgium",
    Artist: "Loïc Nottet",
    "Song Title": "Rhythm Inside",
    "Video ID": "IjH-HYAFICg",
    Year: 2015
  },
  {
    "Final Ranking": 5,
    "Final Score": 196,
    "Show Order": 12,
    Country: "Tonight Again",
    Artist: "Australia",
    "Song Title": "Guy Sebastian",
    "Video ID": "H0EhhZWXTng",
    Year: 2015
  },
  {
    "Final Ranking": 6,
    "Final Score": 186,
    "Show Order": 19,
    Country: "Love Injected",
    Artist: "Latvia",
    "Song Title": "Aminata",
    "Video ID": "-usdXbeGHi8",
    Year: 2015
  },
  {
    "Final Ranking": 7,
    "Final Score": 106,
    "Show Order": 4,
    Country: "Estonia",
    Artist: "Elina Born & Stig Rästa",
    "Song Title": "Goodbye To Yesterday",
    "Video ID": "Xsx_dIJOtgI",
    Year: 2015
  },
  {
    "Final Ranking": 8,
    "Final Score": 102,
    "Show Order": 9,
    Country: "Norway",
    Artist: "Mørland & Debrah Scarlett",
    "Song Title": "A Monster Like Me",
    "Video ID": "U1td70yaoS8",
    Year: 2015
  },
  {
    "Final Ranking": 9,
    "Final Score": 97,
    "Show Order": 3,
    Country: "Israel",
    Artist: "Nadav Guedj",
    "Song Title": "Golden Boy",
    "Video ID": "-w-2K9U8UIs",
    Year: 2015
  },
  {
    "Final Ranking": 10,
    "Final Score": 53,
    "Show Order": 8,
    Country: "Serbia",
    Artist: "Bojana Stamenov",
    "Song Title": "Beauty Never Lies",
    "Video ID": "c40kVKIoPvE",
    Year: 2015
  },
  {
    "Final Ranking": 11,
    "Final Score": 51,
    "Show Order": 23,
    Country: "Georgia",
    Artist: "Nina Sublatti",
    "Song Title": "Warrior",
    "Video ID": "gWgDzQ0mWTg",
    Year: 2015
  },
  {
    "Final Ranking": 12,
    "Final Score": 49,
    "Show Order": 24,
    Country: "Azerbaijan",
    Artist: "Elnur Huseynov",
    "Song Title": "Hour Of The Wolf",
    "Video ID": "IcVrAFtc5YI",
    Year: 2015
  },
  {
    "Final Ranking": 13,
    "Final Score": 44,
    "Show Order": 16,
    Country: "Montenegro",
    Artist: "Knez  Adio",
    "Song Title": "Adio",
    "Video ID": "vrYmyTJ87vI",
    Year: 2015
  },
  {
    "Final Ranking": 14,
    "Final Score": 39,
    "Show Order": 1,
    Country: "Slovenia",
    Artist: "Maraaya",
    "Song Title": "Here For You",
    "Video ID": "y1c7gDOaFY0",
    Year: 2015
  },
  {
    "Final Ranking": 15,
    "Final Score": 35,
    "Show Order": 20,
    Country: "Romania",
    Artist: "Voltaj",
    "Song Title": "De La Capat",
    "Video ID": "o7iOFkEymXA",
    Year: 2015
  },
  {
    "Final Ranking": 16,
    "Final Score": 34,
    "Show Order": 6,
    Country: "Armenia",
    Artist: "Genealogy",
    "Song Title": "Face The Shadow",
    "Video ID": "Z6O8pr7HH94",
    Year: 2015
  },
  {
    "Final Ranking": 17,
    "Final Score": 34,
    "Show Order": 26,
    Country: "Albania",
    Artist: "Elhaida Dani",
    "Song Title": "I'm Alive",
    "Video ID": "lZJdWUmxxZw",
    Year: 2015
  },
  {
    "Final Ranking": 18,
    "Final Score": 30,
    "Show Order": 7,
    Country: "Lithuania",
    Artist: "Monika Linkytė and Vaidas Baumila",
    "Song Title": "This Time",
    "Video ID": "xtB_slM63JA",
    Year: 2015
  },
  {
    "Final Ranking": 19,
    "Final Score": 23,
    "Show Order": 15,
    Country: "Greece",
    Artist: "Maria Elena Kyriakou",
    "Song Title": "One Last Breath",
    "Video ID": "1RZ2JGC9Nlw",
    Year: 2015
  },
  {
    "Final Ranking": 20,
    "Final Score": 19,
    "Show Order": 22,
    Country: "Hungary",
    Artist: "Boggie",
    "Song Title": "Wars For Nothing",
    "Video ID": "MdybVsBESQc",
    Year: 2015
  },
  {
    "Final Ranking": 21,
    "Final Score": 15,
    "Show Order": 21,
    Country: "Spain",
    Artist: "Edurne",
    "Song Title": "Amanecer",
    "Video ID": "NsMiJJlElAY",
    Year: 2015
  },
  {
    "Final Ranking": 22,
    "Final Score": 11,
    "Show Order": 11,
    Country: "Cyprus",
    Artist: "John Karayiannis",
    "Song Title": "One Thing I Should Have Done",
    "Video ID": "RUNEoMBLGc8",
    Year: 2015
  },
  {
    "Final Ranking": 23,
    "Final Score": 10,
    "Show Order": 18,
    Country: "Poland",
    Artist: "Monika Kuszyńska",
    "Song Title": "In The Name Of Love",
    "Video ID": "TReYIZYloSg",
    Year: 2015
  },
  {
    "Final Ranking": 24,
    "Final Score": 5,
    "Show Order": 5,
    Country: "United Kingdom",
    Artist: "Electro Velvet",
    "Song Title": "Still In Love With You",
    "Video ID": "s6r1tUhl1cQ",
    Year: 2015
  },
  {
    "Final Ranking": 25,
    "Final Score": 4,
    "Show Order": 2,
    Country: "France",
    Artist: "Lisa Angell",
    "Song Title": "N'oubliez Pas",
    "Video ID": "tJful-Jtc9o",
    Year: 2015
  },
  {
    "Final Ranking": 26,
    "Final Score": 0,
    "Show Order": 14,
    Country: "Austria",
    Artist: "The Makemakes",
    "Song Title": "I Am Yours",
    "Video ID": "-f993p0CAV8",
    Year: 2015
  },
  {
    "Final Ranking": 27,
    "Final Score": 0,
    "Show Order": 17,
    Country: "Germany",
    Artist: "Ann Sophie",
    "Song Title": "Black Smoke",
    "Video ID": "DGMJOchTRPc",
    Year: 2015
  },
  {
    "Final Ranking": 1,
    "Final Score": 290,
    "Show Order": 11,
    Country: "Austria",
    Artist: "Conchita Wurst",
    "Song Title": "Rise Like a Phoenix",
    "Video ID": "SaolVEJEjV4",
    Year: 2014
  },
  {
    "Final Ranking": 2,
    "Final Score": 238,
    "Show Order": 24,
    Country: "Netherlands",
    Artist: "The Common Linnets",
    "Song Title": "Calm After The Storm",
    "Video ID": "bWe8PRsW4T0",
    Year: 2014
  },
  {
    "Final Ranking": 3,
    "Final Score": 218,
    "Show Order": 13,
    Country: "Sweden",
    Artist: "Sanna Nielsen",
    "Song Title": "Undo",
    "Video ID": "5PQJI-3LW-8",
    Year: 2014
  },
  {
    "Final Ranking": 4,
    "Final Score": 174,
    "Show Order": 7,
    Country: "Armenia",
    Artist: "Aram MP3",
    "Song Title": "Not Alone",
    "Video ID": "ChkJpnOgIwQ",
    Year: 2014
  },
  {
    "Final Ranking": 5,
    "Final Score": 143,
    "Show Order": 21,
    Country: "Hungary",
    Artist: "András Kállay-Saunders",
    "Song Title": "Running",
    "Video ID": "T_RxJZ3N9kE",
    Year: 2014
  },
  {
    "Final Ranking": 6,
    "Final Score": 113,
    "Show Order": 1,
    Country: "Ukraine",
    Artist: "Mariya Yaremchuk",
    "Song Title": "Tick - Tock",
    "Video ID": "slHboKF9PIQ",
    Year: 2014
  },
  {
    "Final Ranking": 7,
    "Final Score": 89,
    "Show Order": 15,
    Country: "Russia",
    Artist: "Tolmachevy Sisters",
    "Song Title": "Shine",
    "Video ID": "f7HKBlAzN5I",
    Year: 2014
  },
  {
    "Final Ranking": 8,
    "Final Score": 88,
    "Show Order": 5,
    Country: "Norway",
    Artist: "Carl Espen",
    "Song Title": "Silent Storm",
    "Video ID": "BTMli8U17MM",
    Year: 2014
  },
  {
    "Final Ranking": 9,
    "Final Score": 74,
    "Show Order": 23,
    Country: "Denmark",
    Artist: "Basim",
    "Song Title": "Cliche Love Song",
    "Video ID": "fn8DzOcpQas",
    Year: 2014
  },
  {
    "Final Ranking": 10,
    "Final Score": 74,
    "Show Order": 19,
    Country: "Spain",
    Artist: "Ruth Lorenzo",
    "Song Title": "Dancing in the rain",
    "Video ID": "-OtuM3Zvkeo",
    Year: 2014
  },
  {
    "Final Ranking": 11,
    "Final Score": 72,
    "Show Order": 18,
    Country: "Finland",
    Artist: "Softengine",
    "Song Title": "Something Better",
    "Video ID": "3FDWaFfo1CU",
    Year: 2014
  },
  {
    "Final Ranking": 12,
    "Final Score": 72,
    "Show Order": 6,
    Country: "Romania",
    Artist: "Paula Seling & OVI",
    "Song Title": "Miracle",
    "Video ID": "qN2h6__yJGQ",
    Year: 2014
  },
  {
    "Final Ranking": 13,
    "Final Score": 64,
    "Show Order": 20,
    Country: "Switzerland",
    Artist: "Sebalter",
    "Song Title": "Hunter Of Stars",
    "Video ID": "DqjoM8ZlyMc",
    Year: 2014
  },
  {
    "Final Ranking": 14,
    "Final Score": 62,
    "Show Order": 9,
    Country: "Poland",
    Artist: "Donatan & Cleo",
    "Song Title": "My Słowianie - We Are Slavic",
    "Video ID": "VJ920cN2HmA",
    Year: 2014
  },
  {
    "Final Ranking": 15,
    "Final Score": 58,
    "Show Order": 4,
    Country: "Iceland",
    Artist: "Pollapönk",
    "Song Title": "No Prejudice",
    "Video ID": "V5ZG378DH1c",
    Year: 2014
  },
  {
    "Final Ranking": 16,
    "Final Score": 43,
    "Show Order": 2,
    Country: "Belarus",
    Artist: "Teo",
    "Song Title": "Cheesecake",
    "Video ID": "tImGMW-4eHY",
    Year: 2014
  },
  {
    "Final Ranking": 17,
    "Final Score": 40,
    "Show Order": 26,
    Country: "United Kingdom",
    Artist: "Molly",
    "Song Title": "Children of the Universe",
    "Video ID": "C6w7tmWvm6M",
    Year: 2014
  },
  {
    "Final Ranking": 18,
    "Final Score": 39,
    "Show Order": 12,
    Country: "Germany",
    Artist: "Elaiza",
    "Song Title": "Is it right",
    "Video ID": "BFuGH2Kp9dI",
    Year: 2014
  },
  {
    "Final Ranking": 19,
    "Final Score": 37,
    "Show Order": 8,
    Country: "Montenegro",
    Artist: "Sergej Ćetković",
    "Song Title": "Moj Svijet",
    "Video ID": "6FJtzRSKHKg",
    Year: 2014
  },
  {
    "Final Ranking": 20,
    "Final Score": 35,
    "Show Order": 10,
    Country: "Greece",
    Artist: "Freaky Fortune feat. RiskyKidd",
    "Song Title": "Rise Up",
    "Video ID": "c9y6A1uXLn8",
    Year: 2014
  },
  {
    "Final Ranking": 21,
    "Final Score": 33,
    "Show Order": 16,
    Country: "Italy",
    Artist: "Emma",
    "Song Title": "La Mia Città",
    "Video ID": "8W5ZlalAMV8",
    Year: 2014
  },
  {
    "Final Ranking": 22,
    "Final Score": 33,
    "Show Order": 3,
    Country: "Azerbaijan",
    Artist: "Dilara Kazimova",
    "Song Title": "Start A Fire",
    "Video ID": "5mPUMPcFQAY",
    Year: 2014
  },
  {
    "Final Ranking": 23,
    "Final Score": 32,
    "Show Order": 22,
    Country: "Malta",
    Artist: "Firelight",
    "Song Title": "Coming Home",
    "Video ID": "E_hT08vzHt8",
    Year: 2014
  },
  {
    "Final Ranking": 24,
    "Final Score": 14,
    "Show Order": 25,
    Country: "San Marino",
    Artist: "Valentina Monetta",
    "Song Title": "Maybe (Forse)",
    "Video ID": "_eZNTBJ-Hyc",
    Year: 2014
  },
  {
    "Final Ranking": 25,
    "Final Score": 9,
    "Show Order": 17,
    Country: "Slovenia",
    Artist: "Tinkara Kovač",
    "Song Title": "Round and round",
    "Video ID": "CiwM1sY3u0s",
    Year: 2014
  },
  {
    "Final Ranking": 26,
    "Final Score": 2,
    "Show Order": 14,
    Country: "France",
    Artist: "TWIN TWIN",
    "Song Title": "Moustache",
    "Video ID": "vjkqciwP034",
    Year: 2014
  },
  {
    "Final Ranking": 1,
    "Final Score": 281,
    "Show Order": 18,
    Country: "Denmark",
    Artist: "Emmelie de Forest",
    "Song Title": "Only Teardrops",
    "Video ID": "k59E7T0H-Us",
    Year: 2013
  },
  {
    "Final Ranking": 2,
    "Final Score": 234,
    "Show Order": 20,
    Country: "Azerbaijan",
    Artist: "Farid Mammadov",
    "Song Title": "Hold Me",
    "Video ID": "iN3d_V7KVLE",
    Year: 2013
  },
  {
    "Final Ranking": 3,
    "Final Score": 214,
    "Show Order": 22,
    Country: "Ukraine",
    Artist: "Zlata Ognevich",
    "Song Title": "Gravity",
    "Video ID": "BMxpv8naRd8",
    Year: 2013
  },
  {
    "Final Ranking": 4,
    "Final Score": 191,
    "Show Order": 24,
    Country: "Norway",
    Artist: "Margaret Berger",
    "Song Title": "I Feed You My Love",
    "Video ID": "gjm-kCOMaPY",
    Year: 2013
  },
  {
    "Final Ranking": 5,
    "Final Score": 174,
    "Show Order": 10,
    Country: "Russia",
    Artist: "Dina Garipova",
    "Song Title": "What If",
    "Video ID": "wHNwk3Oez8U",
    Year: 2013
  },
  {
    "Final Ranking": 6,
    "Final Score": 152,
    "Show Order": 21,
    Country: "Greece",
    Artist: "Koza Mostra feat. Agathon Iakovidis",
    "Song Title": "Alcohol Is Free",
    "Video ID": "_AfrOZersNk",
    Year: 2013
  },
  {
    "Final Ranking": 7,
    "Final Score": 126,
    "Show Order": 23,
    Country: "Italy",
    Artist: "Marco Mengoni",
    "Song Title": "L'Essenziale",
    "Video ID": "S8oaxDV1q6o",
    Year: 2013
  },
  {
    "Final Ranking": 8,
    "Final Score": 120,
    "Show Order": 9,
    Country: "Malta",
    Artist: "Gianluca",
    "Song Title": "Tomorrow",
    "Video ID": "VK4TvZeL6c0",
    Year: 2013
  },
  {
    "Final Ranking": 9,
    "Final Score": 114,
    "Show Order": 13,
    Country: "Netherlands",
    Artist: "Anouk",
    "Song Title": "Birds",
    "Video ID": "n5iazXvMw5o",
    Year: 2013
  },
  {
    "Final Ranking": 10,
    "Final Score": 84,
    "Show Order": 17,
    Country: "Hungary",
    Artist: "ByeAlex",
    "Song Title": "Kedvesem (Zoohacker Remix)",
    "Video ID": "rOimfHq76xk",
    Year: 2013
  },
  {
    "Final Ranking": 11,
    "Final Score": 71,
    "Show Order": 3,
    Country: "Moldova",
    Artist: "Aliona Moon",
    "Song Title": "O Mie",
    "Video ID": "xckgLUv73Jc",
    Year: 2013
  },
  {
    "Final Ranking": 12,
    "Final Score": 71,
    "Show Order": 6,
    Country: "Belgium",
    Artist: "Roberto Bellarosa",
    "Song Title": "Love Kills",
    "Video ID": "dCl7OUFNSCA",
    Year: 2013
  },
  {
    "Final Ranking": 13,
    "Final Score": 65,
    "Show Order": 14,
    Country: "Romania",
    Artist: "Cezar",
    "Song Title": "It's My Life",
    "Video ID": "OV3xp5ZXSYA",
    Year: 2013
  },
  {
    "Final Ranking": 14,
    "Final Score": 62,
    "Show Order": 16,
    Country: "Sweden",
    Artist: "Robin Stjernberg",
    "Song Title": "You",
    "Video ID": "vtjdTPnCcu0",
    Year: 2013
  },
  {
    "Final Ranking": 15,
    "Final Score": 50,
    "Show Order": 25,
    Country: "Georgia",
    Artist: "Nodi Tatishvili & Sophie Gelovani",
    "Song Title": "Waterfall",
    "Video ID": "-n3mwx0vQDE",
    Year: 2013
  },
  {
    "Final Ranking": 16,
    "Final Score": 48,
    "Show Order": 8,
    Country: "Belarus",
    Artist: "Alyona Lanskaya",
    "Song Title": "Solayoh",
    "Video ID": "XKewBfUE2Mg",
    Year: 2013
  },
  {
    "Final Ranking": 17,
    "Final Score": 47,
    "Show Order": 19,
    Country: "Iceland",
    Artist: "Eythor Ingi",
    "Song Title": "Ég Á Líf",
    "Video ID": "GzE88IYzXLI",
    Year: 2013
  },
  {
    "Final Ranking": 18,
    "Final Score": 41,
    "Show Order": 12,
    Country: "Armenia",
    Artist: "Dorians",
    "Song Title": "Lonely Planet",
    "Video ID": "UGOSZ7Uufno",
    Year: 2013
  },
  {
    "Final Ranking": 19,
    "Final Score": 23,
    "Show Order": 15,
    Country: "United Kingdom",
    Artist: "Bonnie Tyler",
    "Song Title": "Believe In Me",
    "Video ID": "-agn-ERgTXA",
    Year: 2013
  },
  {
    "Final Ranking": 20,
    "Final Score": 19,
    "Show Order": 7,
    Country: "Estonia",
    Artist: "Birgit",
    "Song Title": "Et Uus Saaks Alguse",
    "Video ID": "Ooo6GvZNLhI",
    Year: 2013
  },
  {
    "Final Ranking": 21,
    "Final Score": 18,
    "Show Order": 11,
    Country: "Germany",
    Artist: "Cascada",
    "Song Title": "Glorious",
    "Video ID": "3HYTd7WDCPg",
    Year: 2013
  },
  {
    "Final Ranking": 22,
    "Final Score": 17,
    "Show Order": 2,
    Country: "Lithuania",
    Artist: "Andrius Pojavis",
    "Song Title": "Something",
    "Video ID": "0VLhnzk_dAs",
    Year: 2013
  },
  {
    "Final Ranking": 23,
    "Final Score": 14,
    "Show Order": 1,
    Country: "France",
    Artist: "Amandine Bourgeois",
    "Song Title": "L'enfer Et Moi",
    "Video ID": "hQwiQj5Dyj8",
    Year: 2013
  },
  {
    "Final Ranking": 24,
    "Final Score": 13,
    "Show Order": 4,
    Country: "Finland",
    Artist: "Krista Siegfrids",
    "Song Title": "Marry Me",
    "Video ID": "dlBXOveVh7c",
    Year: 2013
  },
  {
    "Final Ranking": 25,
    "Final Score": 8,
    "Show Order": 5,
    Country: "Spain",
    Artist: "ESDM",
    "Song Title": "Contigo Hasta El Final (With You Until The End)",
    "Video ID": "Q5m8aCZSvws",
    Year: 2013
  },
  {
    "Final Ranking": 26,
    "Final Score": 5,
    "Show Order": 26,
    Country: "Ireland",
    Artist: "Ryan Dolan",
    "Song Title": "Only Love Survives",
    "Video ID": "4tgtyl_5x5Y",
    Year: 2013
  },
  {
    "Final Ranking": 1,
    "Final Score": 372,
    "Show Order": 17,
    Country: "Sweden",
    Artist: "Loreen",
    "Song Title": "Euphoria",
    "Video ID": "Pfo-8z86x80",
    Year: 2012
  },
  {
    "Final Ranking": 2,
    "Final Score": 259,
    "Show Order": 6,
    Country: "Russia",
    Artist: "Buranovskiye Babushki",
    "Song Title": "Party For Everybody",
    "Video ID": "BgUstrmJzyc",
    Year: 2012
  },
  {
    "Final Ranking": 3,
    "Final Score": 214,
    "Show Order": 24,
    Country: "Serbia",
    Artist: "Željko Joksimović",
    "Song Title": "Nije Ljubav Stvar",
    "Video ID": "R9x9VbJzaDQ",
    Year: 2012
  },
  {
    "Final Ranking": 4,
    "Final Score": 150,
    "Show Order": 13,
    Country: "Azerbaijan",
    Artist: "Sabina Babayeva",
    "Song Title": "When The Music Dies",
    "Video ID": "yzT7O3Fnwpk",
    Year: 2012
  },
  {
    "Final Ranking": 5,
    "Final Score": 146,
    "Show Order": 3,
    Country: "Albania",
    Artist: "Rona Nishliu",
    "Song Title": "Suus",
    "Video ID": "QeBL2UHhyEc",
    Year: 2012
  },
  {
    "Final Ranking": 6,
    "Final Score": 120,
    "Show Order": 11,
    Country: "Estonia",
    Artist: "Ott Lepland",
    "Song Title": "Kuula",
    "Video ID": "T7BaTBe0UD8",
    Year: 2012
  },
  {
    "Final Ranking": 7,
    "Final Score": 112,
    "Show Order": 18,
    Country: "Turkey",
    Artist: "Can Bonomo",
    "Song Title": "Love Me Back",
    "Video ID": "3Qa7_y21oOY",
    Year: 2012
  },
  {
    "Final Ranking": 8,
    "Final Score": 110,
    "Show Order": 20,
    Country: "Germany",
    Artist: "Roman Lob",
    "Song Title": "Standing Still",
    "Video ID": "cScJPH20P3A",
    Year: 2012
  },
  {
    "Final Ranking": 9,
    "Final Score": 101,
    "Show Order": 10,
    Country: "Italy",
    Artist: "Nina Zilli",
    "Song Title": "L'Amore È Femmina (Out Of Love)",
    "Video ID": "v0kGpDEvtbQ",
    Year: 2012
  },
  {
    "Final Ranking": 10,
    "Final Score": 97,
    "Show Order": 19,
    Country: "Spain",
    Artist: "Pastora Soler",
    "Song Title": "Quédate Conmigo (Stay With Me)",
    "Video ID": "U8J1b62wOao",
    Year: 2012
  },
  {
    "Final Ranking": 11,
    "Final Score": 81,
    "Show Order": 26,
    Country: "Moldova",
    Artist: "Pasha Parfeny",
    "Song Title": "Lăutar",
    "Video ID": "vIy0EtEeLEw",
    Year: 2012
  },
  {
    "Final Ranking": 12,
    "Final Score": 71,
    "Show Order": 14,
    Country: "Romania",
    Artist: "Mandinga",
    "Song Title": "Zaleilah",
    "Video ID": "K3ruy639kTQ",
    Year: 2012
  },
  {
    "Final Ranking": 13,
    "Final Score": 71,
    "Show Order": 22,
    Country: "FYR Macedonia",
    Artist: "Kaliopi",
    "Song Title": "Crno I Belo",
    "Video ID": "MSuCdNEy9w0",
    Year: 2012
  },
  {
    "Final Ranking": 14,
    "Final Score": 70,
    "Show Order": 4,
    Country: "Lithuania",
    Artist: "Donny Montell",
    "Song Title": "Love Is Blind",
    "Video ID": "x2vNoZnJxgY",
    Year: 2012
  },
  {
    "Final Ranking": 15,
    "Final Score": 65,
    "Show Order": 25,
    Country: "Ukraine",
    Artist: "Gaitana",
    "Song Title": "Be My Guest",
    "Video ID": "sLsTn_li5d8",
    Year: 2012
  },
  {
    "Final Ranking": 16,
    "Final Score": 65,
    "Show Order": 8,
    Country: "Cyprus",
    Artist: "Ivi Adamou",
    "Song Title": "La La Love",
    "Video ID": "zRqmHRbJvTo",
    Year: 2012
  },
  {
    "Final Ranking": 17,
    "Final Score": 64,
    "Show Order": 16,
    Country: "Greece",
    Artist: "Eleftheria Eleftheriou",
    "Song Title": "Aphrodisiac",
    "Video ID": "NreIi8ma_PY",
    Year: 2012
  },
  {
    "Final Ranking": 18,
    "Final Score": 55,
    "Show Order": 5,
    Country: "Bosnia & Herzegovina",
    Artist: "Maya Sar",
    "Song Title": "Korake ti znam",
    "Video ID": "81hIbZNoFU8",
    Year: 2012
  },
  {
    "Final Ranking": 19,
    "Final Score": 46,
    "Show Order": 23,
    Country: "Ireland",
    Artist: "Jedward",
    "Song Title": "Waterline",
    "Video ID": "e1cuimKLNpU",
    Year: 2012
  },
  {
    "Final Ranking": 20,
    "Final Score": 46,
    "Show Order": 7,
    Country: "Iceland",
    Artist: "Greta Salóme & Jónsi",
    "Song Title": "Never Forget",
    "Video ID": "zRqmHRbJvTo",
    Year: 2012
  },
  {
    "Final Ranking": 21,
    "Final Score": 41,
    "Show Order": 21,
    Country: "Malta",
    Artist: "Kurt Calleja",
    "Song Title": "This Is The Night",
    "Video ID": "lUnEZp-qHxs",
    Year: 2012
  },
  {
    "Final Ranking": 22,
    "Final Score": 21,
    "Show Order": 9,
    Country: "France",
    Artist: "Anggun",
    "Song Title": "Echo (You And I)",
    "Video ID": "0DZ7DbdeOeE",
    Year: 2012
  },
  {
    "Final Ranking": 23,
    "Final Score": 21,
    "Show Order": 15,
    Country: "Denmark",
    Artist: "Soluna Samay",
    "Song Title": "Should've Known Better",
    "Video ID": "U5X2r_t-KBk",
    Year: 2012
  },
  {
    "Final Ranking": 24,
    "Final Score": 19,
    "Show Order": 2,
    Country: "Hungary",
    Artist: "Compact Disco",
    "Song Title": "Sound Of Our Hearts",
    "Video ID": "sw85G2AlU2c",
    Year: 2012
  },
  {
    "Final Ranking": 25,
    "Final Score": 12,
    "Show Order": 1,
    Country: "United Kingdom",
    Artist: "Engelbert Humperdinck",
    "Song Title": "Love Will Set You Free",
    "Video ID": "rXw4Q5jbNqQ",
    Year: 2012
  },
  {
    "Final Ranking": 26,
    "Final Score": 7,
    "Show Order": 12,
    Country: "Norway",
    Artist: "Tooji",
    "Song Title": "Stay",
    "Video ID": "-ZaxIY1VAbM",
    Year: 2012
  },
  {
    "Final Ranking": 1,
    "Final Score": 221,
    "Show Order": 19,
    Country: "Azerbaijan",
    Artist: "Ell & Nikki",
    "Song Title": "Running Scared",
    "Video ID": "iq2yLykdjvA",
    Year: 2011
  },
  {
    "Final Ranking": 2,
    "Final Score": 189,
    "Show Order": 12,
    Country: "Italy",
    Artist: "Raphael Gualazzi",
    "Song Title": "Madness Of Love",
    "Video ID": "TE0uNLp3LuU",
    Year: 2011
  },
  {
    "Final Ranking": 3,
    "Final Score": 185,
    "Show Order": 7,
    Country: "Sweden",
    Artist: "Eric Saade",
    "Song Title": "Popular",
    "Video ID": "-04pUETT7oI",
    Year: 2011
  },
  {
    "Final Ranking": 4,
    "Final Score": 159,
    "Show Order": 23,
    Country: "Ukraine",
    Artist: "Mika Newton",
    "Song Title": "Angel",
    "Video ID": "g_xRmEkR6KE",
    Year: 2011
  },
  {
    "Final Ranking": 5,
    "Final Score": 134,
    "Show Order": 3,
    Country: "Denmark",
    Artist: "A Friend In London",
    "Song Title": "New Tomorrow",
    "Video ID": "YDXeK0r3aKs",
    Year: 2011
  },
  {
    "Final Ranking": 6,
    "Final Score": 125,
    "Show Order": 2,
    Country: "Bosnia & Herzegovina",
    Artist: "Dino Merlin",
    "Song Title": "Love In Rewind",
    "Video ID": "mBg3coarF_8",
    Year: 2011
  },
  {
    "Final Ranking": 7,
    "Final Score": 120,
    "Show Order": 9,
    Country: "Greece",
    Artist: "Loucas Yiorkas feat. Stereo Mike",
    "Song Title": "Watch My Dance",
    "Video ID": "FdZzklXoAOg",
    Year: 2011
  },
  {
    "Final Ranking": 8,
    "Final Score": 119,
    "Show Order": 6,
    Country: "Ireland",
    Artist: "Jedward",
    "Song Title": "Lipstick",
    "Video ID": "XgrlG6hQbNM",
    Year: 2011
  },
  {
    "Final Ranking": 9,
    "Final Score": 110,
    "Show Order": 25,
    Country: "Georgia",
    Artist: "Eldrine",
    "Song Title": "One More Day",
    "Video ID": "CfJVlssy0cc",
    Year: 2011
  },
  {
    "Final Ranking": 10,
    "Final Score": 107,
    "Show Order": 16,
    Country: "Germany",
    Artist: "Lena",
    "Song Title": "Taken By A Stranger",
    "Video ID": "KqZprvpWlcE",
    Year: 2011
  },
  {
    "Final Ranking": 11,
    "Final Score": 100,
    "Show Order": 14,
    Country: "United Kingdom",
    Artist: "Blue",
    "Song Title": "I Can",
    "Video ID": "y1dXMWWq6y8",
    Year: 2011
  },
  {
    "Final Ranking": 12,
    "Final Score": 97,
    "Show Order": 15,
    Country: "Moldova",
    Artist: "Zdob și Zdub",
    "Song Title": "So Lucky",
    "Video ID": "nHAY_OVN_gY",
    Year: 2011
  },
  {
    "Final Ranking": 13,
    "Final Score": 96,
    "Show Order": 20,
    Country: "Slovenia",
    Artist: "Maja Keuc",
    "Song Title": "No One",
    "Video ID": "NNP3nfvoqps",
    Year: 2011
  },
  {
    "Final Ranking": 14,
    "Final Score": 85,
    "Show Order": 24,
    Country: "Serbia",
    Artist: "Nina",
    "Song Title": "Čaroban",
    "Video ID": "-CWvXKxjCs8",
    Year: 2011
  },
  {
    "Final Ranking": 15,
    "Final Score": 82,
    "Show Order": 11,
    Country: "France",
    Artist: "Amaury Vassili",
    "Song Title": "Sognu",
    "Video ID": "OTiBNPT-x_Y",
    Year: 2011
  },
  {
    "Final Ranking": 16,
    "Final Score": 77,
    "Show Order": 10,
    Country: "Russia",
    Artist: "Alexej Vorobjov",
    "Song Title": "Get You",
    "Video ID": "C-3ohaRN3MM",
    Year: 2011
  },
  {
    "Final Ranking": 17,
    "Final Score": 77,
    "Show Order": 17,
    Country: "Romania",
    Artist: "Hotel FM",
    "Song Title": "Change",
    "Video ID": "2a1Q_hpGLbs",
    Year: 2011
  },
  {
    "Final Ranking": 18,
    "Final Score": 64,
    "Show Order": 18,
    Country: "Austria",
    Artist: "Nadine Beiler",
    "Song Title": "The Secret Is Love",
    "Video ID": "UsBC5AB1tFo",
    Year: 2011
  },
  {
    "Final Ranking": 19,
    "Final Score": 63,
    "Show Order": 4,
    Country: "Lithuania",
    Artist: "Evelina Sašenko",
    "Song Title": "C'est Ma Vie",
    "Video ID": "S3_aSVE4t3M",
    Year: 2011
  },
  {
    "Final Ranking": 20,
    "Final Score": 61,
    "Show Order": 21,
    Country: "Iceland",
    Artist: "Sjonni's Friends",
    "Song Title": "Coming Home",
    "Video ID": "apc_qJf3nws",
    Year: 2011
  },
  {
    "Final Ranking": 21,
    "Final Score": 57,
    "Show Order": 1,
    Country: "Finland",
    Artist: "Paradise Oskar",
    "Song Title": "Da Da Dam",
    "Video ID": "1Fj9of4IzFU",
    Year: 2011
  },
  {
    "Final Ranking": 22,
    "Final Score": 53,
    "Show Order": 5,
    Country: "Hungary",
    Artist: "Kati Wolf",
    "Song Title": "What About My Dreams?",
    "Video ID": "IuGUz1ExflY",
    Year: 2011
  },
  {
    "Final Ranking": 23,
    "Final Score": 50,
    "Show Order": 22,
    Country: "Spain",
    Artist: "Lucía Pérez",
    "Song Title":
      "Que Me Quiten Lo Bailao - They Can't Take The Fun Away From Me",
    "Video ID": "91bKjEojSDU",
    Year: 2011
  },
  {
    "Final Ranking": 24,
    "Final Score": 44,
    "Show Order": 8,
    Country: "Estonia",
    Artist: "Getter Jaani",
    "Song Title": "Rockefeller Street",
    "Video ID": "UxvmdR7oYdQ",
    Year: 2011
  },
  {
    "Final Ranking": 25,
    "Final Score": 19,
    "Show Order": 13,
    Country: "Switzerland",
    Artist: "Anna Rossinelli",
    "Song Title": "In Love For A While",
    "Video ID": "wxLE5FmNJow",
    Year: 2011
  },
  {
    "Final Ranking": 1,
    "Final Score": 246,
    "Show Order": 22,
    Country: "Germany",
    Artist: "Lena",
    "Song Title": "Satellite",
    "Video ID": "-qnsZgQe1tU",
    Year: 2010
  },
  {
    "Final Ranking": 2,
    "Final Score": 170,
    "Show Order": 14,
    Country: "Turkey",
    Artist: "maNga",
    "Song Title": "We Could Be The Same",
    "Video ID": "524Yy7JWBd4",
    Year: 2010
  },
  {
    "Final Ranking": 3,
    "Final Score": 162,
    "Show Order": 19,
    Country: "Romania",
    Artist: "Paula Seling & Ovi",
    "Song Title": "Playing With Fire",
    "Video ID": "6OlG9g4-cyg",
    Year: 2010
  },
  {
    "Final Ranking": 4,
    "Final Score": 149,
    "Show Order": 25,
    Country: "Denmark",
    Artist: "Chanée & N'evergreen",
    "Song Title": "In A Moment Like This",
    "Video ID": "nNhIVQ1KBb8",
    Year: 2010
  },
  {
    "Final Ranking": 5,
    "Final Score": 145,
    "Show Order": 1,
    Country: "Azerbaijan",
    Artist: "Safura",
    "Song Title": "Drip Drop",
    "Video ID": "7zWO-V0dmHg",
    Year: 2010
  },
  {
    "Final Ranking": 6,
    "Final Score": 143,
    "Show Order": 7,
    Country: "Belgium",
    Artist: "Tom Dice",
    "Song Title": "Me And My Guitar",
    "Video ID": "Nk1UAXlfBUA",
    Year: 2010
  },
  {
    "Final Ranking": 7,
    "Final Score": 141,
    "Show Order": 21,
    Country: "Armenia",
    Artist: "Eva Rivas",
    "Song Title": "Apricot Stone",
    "Video ID": "hgz5TZugISw",
    Year: 2010
  },
  {
    "Final Ranking": 8,
    "Final Score": 140,
    "Show Order": 11,
    Country: "Greece",
    Artist: "Giorgos Alkaios & Friends",
    "Song Title": "OPA",
    "Video ID": "J50RL1rDisA",
    Year: 2010
  },
  {
    "Final Ranking": 9,
    "Final Score": 136,
    "Show Order": 13,
    Country: "Georgia",
    Artist: "Sofia Nizharadze",
    "Song Title": "Shine",
    "Video ID": "2-1yBx6IQN0",
    Year: 2010
  },
  {
    "Final Ranking": 10,
    "Final Score": 108,
    "Show Order": 17,
    Country: "Ukraine",
    Artist: "Alyosha",
    "Song Title": "Sweet People",
    "Video ID": "NQ2mAuqnXZk",
    Year: 2010
  },
  {
    "Final Ranking": 11,
    "Final Score": 90,
    "Show Order": 20,
    Country: "Russia",
    Artist: "Peter Nalitch & Friends",
    "Song Title": "Lost And Forgotten",
    "Video ID": "IOB7uaWuRyc",
    Year: 2010
  },
  {
    "Final Ranking": 12,
    "Final Score": 82,
    "Show Order": 18,
    Country: "France",
    Artist: "Jessy Matador",
    "Song Title": "Alllez Olla Olé",
    "Video ID": "anVLKrv28hs",
    Year: 2010
  },
  {
    "Final Ranking": 13,
    "Final Score": 72,
    "Show Order": 8,
    Country: "Serbia",
    Artist: "Milan Stanković",
    "Song Title": "Ovo Je Balkan",
    "Video ID": "TBwWB3kKd6o",
    Year: 2010
  },
  {
    "Final Ranking": 14,
    "Final Score": 71,
    "Show Order": 24,
    Country: "Israel",
    Artist: "Harel Skaat",
    "Song Title": "Milim",
    "Video ID": "OG7fBifcRLk",
    Year: 2010
  },
  {
    "Final Ranking": 15,
    "Final Score": 68,
    "Show Order": 2,
    Country: "Spain",
    Artist: "Daniel Diges",
    "Song Title": "Algo Pequeñito",
    "Video ID": "_Unb161ZI-s",
    Year: 2010
  },
  {
    "Final Ranking": 16,
    "Final Score": 62,
    "Show Order": 15,
    Country: "Albania",
    Artist: "Juliana Pasha",
    "Song Title": "It's All About You",
    "Video ID": "3ZLlQE8ICno",
    Year: 2010
  },
  {
    "Final Ranking": 17,
    "Final Score": 51,
    "Show Order": 6,
    Country: "Bosnia & Herzegovina",
    Artist: "Vukašin Brajić",
    "Song Title": "Thunder And Lightning",
    "Video ID": "wgPtHtmSFec",
    Year: 2010
  },
  {
    "Final Ranking": 18,
    "Final Score": 43,
    "Show Order": 23,
    Country: "Portugal",
    Artist: "Filipa Azevedo",
    "Song Title": "Há Dias Assim",
    "Video ID": "_mTaVdnTMwo",
    Year: 2010
  },
  {
    "Final Ranking": 19,
    "Final Score": 41,
    "Show Order": 16,
    Country: "Iceland",
    Artist: "Hera Björk",
    "Song Title": "Je Ne Sais Quoi",
    "Video ID": "8vM7XAM6fzo",
    Year: 2010
  },
  {
    "Final Ranking": 20,
    "Final Score": 35,
    "Show Order": 3,
    Country: "Norway",
    Artist: "Didrik Solli-Tangen",
    "Song Title": "My Heart Is Yours",
    "Video ID": "h3KlbuVZGJw",
    Year: 2010
  },
  {
    "Final Ranking": 21,
    "Final Score": 27,
    "Show Order": 5,
    Country: "Cyprus",
    Artist: "Jon Lilygreen & The Islanders",
    "Song Title": "Life Looks Better In Spring",
    "Video ID": "KVsue-XPY0s",
    Year: 2010
  },
  {
    "Final Ranking": 22,
    "Final Score": 27,
    "Show Order": 4,
    Country: "Moldova",
    Artist: "Sunstroke Project & Olia Tira",
    "Song Title": "Run Away",
    "Video ID": "C-VMHOlCyW8",
    Year: 2010
  },
  {
    "Final Ranking": 23,
    "Final Score": 25,
    "Show Order": 10,
    Country: "Ireland",
    Artist: "Niamh Kavanagh",
    "Song Title": "It's For You",
    "Video ID": "HZnrupI_Mms",
    Year: 2010
  },
  {
    "Final Ranking": 24,
    "Final Score": 18,
    "Show Order": 9,
    Country: "Belarus",
    Artist: "3+2",
    "Song Title": "Butterflies",
    "Video ID": "5e0FQkgnm4Q",
    Year: 2010
  },
  {
    "Final Ranking": 25,
    "Final Score": 10,
    "Show Order": 12,
    Country: "United Kingdom",
    Artist: "Josh",
    "Song Title": "That Sounds Good To Me",
    "Video ID": "fR7l2xC4cOY",
    Year: 2010
  }
];

const createEntries = db =>
  db.reduce((obj, entry) => {
    obj[entry["Video ID"]] = entry;
    return obj;
  }, {});

const entries = createEntries(db);

const years = [2010, 2011, 2012, 2013, 2014, 2015];
years.forEach(year => {
  const yearEntries = Object.keys(entries).filter(
    key => entries[key].year === year
  );
  firebase
    .database()
    .ref(`contest/${year}/entryIds`)
    .set(yearEntries);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
