import React, { createContext, useState } from "react";
export const home = createContext();
const Homeapi = (props) => {
  const [dataHome, setDataHome] = useState([
   
   {
    "source": {
    "id": null,
    "name": "PRNewswire"
    },
    "author": null,
    "title": "Thinking about trading options or stock in Advanced Micro Devices, Papa John's, Alliant Energy, Northrop Grumman, or Tesla?",
    "description": "NEW YORK, May 25, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for AMD, PZZA, LNT, NOC, and TSLA. Click a link below then choose between in-depth options trade idea report or a stock score report. Options Report – Ideal trade ideas…",
    "url": "https://www.prnewswire.com/news-releases/thinking-about-trading-options-or-stock-in-advanced-micro-devices-papa-johns-alliant-energy-northrop-grumman-or-tesla-301554951.html",
    "urlToImage": "https://mma.prnewswire.com/media/1333368/InvestorsObserver_Logo.jpg?p=facebook",
    "publishedAt": "2022-05-25T13:31:00Z",
    "content": "NEW YORK, May 25, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for AMD, PZZA, LNT, NOC, and TSLA.\r\nClick a link below then choose between in-depth options trade idea repor… [+796 chars]"
    },
   
   {
    "source": {
    "id": null,
    "name": "TweakTown"
    },
    "author": "Adam Hunt",
    "title": "This Elon Musk deepfake is scamming people out of their cryptocurrency",
    "description": "A new scam cryptocurrency trading platform has found a way to promote itself using deep fakes of Elon Musk's likeness and others. Continue reading at TweakTown >",
    "url": "https://www.tweaktown.com/news/86443/this-elon-musk-deepfake-is-scamming-people-out-of-their-cryptocurrency/index.html",
    "urlToImage": "https://static.tweaktown.com/news/8/6/86443_01_this-elon-musk-deepfake-is-scamming_full.jpg",
    "publishedAt": "2022-05-25T13:14:40Z",
    "content": "Yet another cryptocurrency scam has surfaced, this time utilizing deep-fakes and Elon Musk's likeness to do the trick.\r\nThe deep faked video shows Elon Musk on the set of a TED talk originally from A… [+1187 chars]"
    },
   {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "U.S. automated electric truck startup Solo AVT picks battery supplier ABS - Reuters",
    "description": "Silicon Valley startup Solo Advanced Vehicle Technologies has partnered with Michigan-based Advanced Battery Solutions (ABS) to develop battery packs for its new driverless electric heavy-duty truck, Solo AVT’s chief executive told Reuters.",
    "url": "https://www.reuters.com/business/autos-transportation/us-automated-electric-truck-startup-solo-avt-picks-battery-supplier-abs-2022-05-25/",
    "urlToImage": "https://www.reuters.com/resizer/e0m5i4PxaLnvLGLZDSuKz5O4zAQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AA4U35IXVNISJBG4BMVD7LNMXI.jpg",
    "publishedAt": "2022-05-25T13:11:00Z",
    "content": "May 25 (Reuters) - Silicon Valley startup Solo Advanced Vehicle Technologies has partnered with Michigan-based Advanced Battery Solutions (ABS) to develop battery packs for its new driverless electri… [+2034 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Eric Rosenbaum",
    "title": "Early Tesla investor DBL Partners leads $70 million investment in logistics firm Airspace",
    "description": "Airspace, a time-critical shipping start-up focused on AI for logistics, has doubled its venture funding in a round led by early Tesla investor DBL Partners.",
    "url": "https://www.cnbc.com/2022/05/25/early-tesla-investor-leads-70-million-investment-in-airspace.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105161397-GettyImages-528192184.jpg?v=1532563649&w=1920&h=1080",
    "publishedAt": "2022-05-25T13:09:39Z",
    "content": "Time-critical logistics start-up Airspace, which originally broke into the market handling shipments for emergency situations including organ transplants and life-saving medications, has nearly doubl… [+6145 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "TweakTown"
    },
    "author": "Anthony Garreffa",
    "title": "SpaceX temporarily testing Starlink internet on planes, helicopters",
    "description": "SpaceX receives testing authorization from the FCC to test Starlink on helicopters, and planes... and Elon Musk has tested it. Continue reading at TweakTown >",
    "url": "https://www.tweaktown.com/news/86408/spacex-temporarily-testing-starlink-internet-on-planes-helicopters/index.html",
    "urlToImage": "https://static.tweaktown.com/news/8/6/86408_08_spacex-temporarily-testing-starlink-internet-on-planes-helicopters_full.png",
    "publishedAt": "2022-05-25T13:08:01Z",
    "content": "SpaceX has received testing authorization from the FCC to use the Starlink satellite internet service to helicopters, and planes.\r\nSpace Exploration Technologies Corporation's (SpaceX) Starlink satel… [+768 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Barron's"
    },
    "author": "Al Root",
    "title": "ARK Bought Tesla, Zoom, Others. Cathie Wood Is Buying the Dip.",
    "description": "The ARK Innovation ETF's buying was funded by sales of about $50 million worth of Spotify Technology stock.",
    "url": "https://www.barrons.com/articles/cathie-wood-ark-innovation-tesla-stock-buying-dip-51653483562",
    "urlToImage": "https://images.barrons.com/im-551170/social",
    "publishedAt": "2022-05-25T13:07:16Z",
    "content": "On a day when the Nasdaq Composite fell 2.3% and the ARK Innovation ETF (ticker: ARKK) dropped 7%, Wood turned over about 0.7% of her fund. She doubled down on many of her largest positions, adding a… [+1504 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Dagospia.com"
    },
    "author": null,
    "title": "SILICON FAIDA - SECONDO IL SITO \"BREITBART\", BILL GATES AVREBBE FINANZIATO,- NELL'ARTICOLO SI PARLA DI \"DENARO OSCURO\" GIRATO A 11 DEI 26 FIRMATARI DI UNA LETTERA APERTA CHE SPINGEVA AL BOICOTTAGGIO DI MUSK...",
    "description": "Bill Gates commented on Elon Musk's plan to purchase Twitter and how he could make misinformation online worse. #WSJCEOCouncil https://t.co/0E4mtWvjQI pic.twitter.com/xkQMpurrcO — The Wall Street Journal (@WSJ) May 4, 2022   Dagotraduzione dal Daily Mail   Tw…",
    "url": "https://www.dagospia.com/rubrica-29/cronache/silicon-faida-secondo-sito-quot-breitbart-quot-bill-gates-avrebbe-311435.htm",
    "urlToImage": "https://cdn-static.dagospia.com/img/patch/05-2022/elon-musk-bill-gates-tweet-1662669.jpg",
    "publishedAt": "2022-05-25T13:07:00Z",
    "content": "Dagotraduzione dal Daily Mail\r\nTweet di Elon Musk\r\nContinua la faida tra Elon Musk e Bill Gates. I due miliardari si stuzzicano su Twitter da anni. L’ultimo episodio riguarda un tweet di Elon Musk. I… [+1626 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "Aaron Pressman",
    "title": "Tesla owners less likely to crash their EV than their other cars",
    "description": "A new study from Cambridge Mobile Telematics compared the safety performance of Tesla drivers when they drove their EV versus when they drove other vehicles.",
    "url": "https://www.bostonglobe.com/2022/05/25/business/tesla-owners-less-likely-crash-their-ev-than-their-other-cars/",
    "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/EPYL_ezG6YShiuCjOyNPVwtiGAM=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/7WBU7ER3MU5FBJBHPFL7UFFBKA.jpg",
    "publishedAt": "2022-05-25T13:06:52Z",
    "content": "People who drive a Tesla are a lot less likely to get in an accident in their electric car than when they drive another brand of vehicle they own, according to new research from Cambridge Mobile Tele… [+3866 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Radaronline.com"
    },
    "author": "cs@emg.inc (Connor Surmonte)",
    "title": "Battle Of The Billionaires! Elon Musk SLAMS Bill Gates After Article Claims Microsoft Mogul Is Funding Musk's Critics",
    "description": "Elon Musk took to social media after Breitbart published an article claiming Bill Gates funds advertisers telling people to boycott Twitter if Musk takes over.",
    "url": "https://radaronline.com/p/elon-musk-slams-bill-gates-article-claims-funding-critics/",
    "urlToImage": "https://media.radaronline.com/brand-img/MnupdqdJS/1200x628/elon-musk-slams-bill-gates-article-claims-funding-critics-2jpg-1653483866289.jpg",
    "publishedAt": "2022-05-25T13:05:48Z",
    "content": "I heard that at one point he had a large short position. I dont know if thats true or not, but it seems weird, Musk told Joe Rogan during a sit-down interview.\r\nPeople I know who know the situation p… [+125 chars]"
    },
   
]);
return (
  <div>
    <home.Provider value={[dataHome, setDataHome]}>
      {props.children}
    </home.Provider>
  </div>
);
};
export default Homeapi;