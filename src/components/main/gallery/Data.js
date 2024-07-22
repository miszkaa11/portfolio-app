// Data
import ReactApp1 from './gallery-images/infostation/react_app_1.webp';
import ReactApp2 from './gallery-images/infostation/react_app_2.webp';
import ReactApp3 from './gallery-images/infostation/react_app_3.webp';
import ReactApp4 from './gallery-images/infostation/react_app_4.webp';

import Ates1 from './gallery-images/atesenergy/atesenergy_1.webp';
import Ates2 from './gallery-images/atesenergy/atesenergy_2.webp';
import Ates3 from './gallery-images/atesenergy/atesenergy_3.webp';
import Ates4 from './gallery-images/atesenergy/atesenergy_4.webp';

import Simply1 from './gallery-images/simplygrow/simplygrow_1.webp';
import Simply2 from './gallery-images/simplygrow/simplygrow_2.webp';
import Simply3 from './gallery-images/simplygrow/simplygrow_3.webp';
import Simply4 from './gallery-images/simplygrow/simplygrow_4.webp';

import Nova1 from './gallery-images/nova/nova_1.webp';
import Nova2 from './gallery-images/nova/nova_2.webp';
import Nova3 from './gallery-images/nova/nova_3.webp';
import Nova4 from './gallery-images/nova/nova_4.webp';

import BytkowskaPark1 from '../gallery/gallery-images/bytkowskapark/bytkowskapark_1.webp';
import BytkowskaPark2 from '../gallery/gallery-images/bytkowskapark/bytkowskapark_2.webp';
import BytkowskaPark3 from '../gallery/gallery-images/bytkowskapark/bytkowskapark_3.webp';
import BytkowskaPark4 from '../gallery/gallery-images/bytkowskapark/bytkowskapark_4.webp';

import Nablonie1 from '../gallery/gallery-images/nablonie106/nablonie106_1.webp';
import Nablonie2 from './gallery-images/nablonie106/nablonie106_2.webp';
import Nablonie3 from '../gallery/gallery-images/nablonie106/nablonie106_3.webp';
import Nablonie4 from './gallery-images/nablonie106/nablonie106_4.webp';

import Mocarni1 from '../gallery/gallery-images/novimocarni/mocarni_1.webp';
import Mocarni2 from '../gallery/gallery-images/novimocarni/mocarni_2.webp';
import Mocarni3 from '../gallery/gallery-images/novimocarni/mocarni_3.webp';
import Mocarni4 from '../gallery/gallery-images/novimocarni/mocarni_4.webp';

import Markwood1 from '../gallery/gallery-images/markwood/markwood_1.webp';
import Markwood2 from '../gallery/gallery-images/markwood/markwood_2.webp';
import Markwood3 from '../gallery/gallery-images/markwood/markwood_3.webp';
import Markwood4 from '../gallery/gallery-images/markwood/markwood_4.webp';

import Bystrapark1 from '../gallery/gallery-images/bystrapark/bystra_1.webp';
import Bystrapark2 from '../gallery/gallery-images/bystrapark/bystra_2.webp';
import Bystrapark3 from '../gallery/gallery-images/bystrapark/bystra_3.webp';
import Bystrapark4 from '../gallery/gallery-images/bystrapark/bystra_4.webp';

import Edge1 from '../gallery/gallery-images/edgedetailing/edge_1.webp';
import Edge2 from '../gallery/gallery-images/edgedetailing/edge_2.webp';
import Edge3 from './gallery-images/edgedetailing/edge_3.webp';
import Edge4 from './gallery-images/edgedetailing/edge_4.webp';

import Project1 from '../gallery/gallery-images/projektkrosno/projektkrosno_1.webp';
import Project2 from '../gallery/gallery-images/projektkrosno/projektkrosno_2.webp';
import Project3 from '../gallery/gallery-images/projektkrosno/projektkrosno_3.webp';
import Project4 from '../gallery/gallery-images/projektkrosno/projektkrosno_4.webp';

import Dentplus1 from '../gallery/gallery-images/dentplus/dentplus_1.webp';
import Dentplus2 from '../gallery/gallery-images/dentplus/dentplus_2.webp';
import Dentplus3 from '../gallery/gallery-images/dentplus/dentplus_3.webp';
import Dentplus4 from '../gallery/gallery-images/dentplus/dentplus_4.webp';

import Kamyczkipatyczki1 from '../gallery/gallery-images/kamyczkipatyczki/kamyczkipatyczki_1.webp';
import Kamyczkipatyczki2  from './gallery-images/kamyczkipatyczki/kamyczkipatyczki_2.webp';
import Kamyczkipatyczki3  from './gallery-images/kamyczkipatyczki/kamyczkipatyczki_3.webp';

const galleryItems = [
    {
        id: "infostation",
        thumbnail: ReactApp1,
        technology: 'react',
        title: 'infostation',
        description: 'Application created in React.js. Shows the current time, weather and air quality in the selected city. Current data is downloaded from the OpenWeather API. The application also has a to-do list and a notebook.',
        client: 'MŁ',
        date: 2024,
        task: 'Back-End + Front-End',
        images: [ReactApp2, ReactApp3, ReactApp4],
    },
    {
        id: "atesenergy",
        thumbnail: Ates1,
        technology: 'wordpress',
        title: 'atesenergy',
        description: 'We are one of the fastest growing companies in the renewable energy industry. We are guided by conscientiousness, reliability and commitment. We use the latest technologies and proven solutions.',
        client: 'Atesenergy',
        date: 2024,
        task: 'Back-End + Front-End',
        images: [Ates2, Ates3, Ates4],
    },
    {
        id: "simplygrow",
        thumbnail: Simply1,
        technology: 'wordpress',
        title: 'simplygrow',
        description: 'We are a company that has one of the greatest practical experiences on the educational market in the field of analyzes and consultations on educational process management.',
        client: 'Simplygrow',
        date: 2024,
        task: 'Back-End + Front-End',
        images: [Simply2, Simply3, Simply4],
    },
    {
        id: "nova",
        thumbnail: Nova1,
        technology: 'wordpress',
        title: 'novawiosenna',
        description: 'The prestigious district of Krakow - Wola Justowska, turned out to be an extremely good choice for a place that was supposed to be the architectural definition of elegance - the Nova Wiosenna investment.',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Front-End',
        images: [Nova2, Nova3, Nova4],
    },
    {
        id: "bytkowskapark",
        thumbnail: BytkowskaPark1,
        technology: 'wordpress',
        title: 'bytkowskapark',
        description: 'An investment that is a synthesis of all the advantages that an ideal place to live should have. Great, functional living spaces, excellent quality of materials used and unrivaled location make Bytkowska so popular among our clients that we have been expanding this estate in stages since 2018.',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Front-End',
        images: [BytkowskaPark2, BytkowskaPark3, BytkowskaPark4],
    },
    {
        id: "nablonie106",
        thumbnail: Nablonie1,
        technology: 'wordpress',
        title: 'nablonie106',
        description: 'Na Błonie 106 is an elegant and modern investment built by Wawel Service in a prestigious district of Krakow, in response to the expectations of the most demanding customers. In the green part of Bronowice, surrounded by unique nature, an intimate building with a green roof was built, which will perfectly fit into the surroundings.',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Front-End',
        images: [Nablonie2, Nablonie3, Nablonie4],
    },
    {
        id: "novimocarni",
        thumbnail: Mocarni1,
        technology: 'wordpress',
        title: 'novimocarni',
        description: 'Novi Mocarni is not only a tribute to the Podhale tradition, but also an expression of respect for the power of nature. Therefore, the entire investment is built in ecological technology. The buildings are equipped with a photovoltaic installation, a heat pump in each apartment, recuperation and a private charging station for electric',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Back-End + Front-End',
        images: [Mocarni2, Mocarni3, Mocarni4],
    },
    {
        id: "markwood",
        thumbnail: Markwood1,
        technology: 'wordpress',
        title: 'markwood',
        description: 'Markwood is a construction company that builds houses in modern wooden technology. We have been working for several years. Our priority is the highest quality of investment execution and high-quality building materials. We provide 100% satisfaction to our customers. We look to the future. We build solid, safe and ecological houses.',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Back-End + Front-End',
        images: [Markwood2, Markwood3, Markwood4],
    },
    {
        id: "bytrapark",
        thumbnail: Bystrapark1,
        technology: 'wordpress',
        title: 'bystrapark',
        description: 'Bystra Park is an apartment building located at ul. Szczyrkowska in the town of Bystra on the edge of the Bielsko agglomeration. The area is full of charming views that illustrate the unique richness of nature - the high natural diversity of this region is a characteristic feature of the Silesian Beskids. The intimate location of the facility ensures privacy and relaxation, and at the same time it is well connected with',
        client: 'IAM FOR DEVELOPER',
        date: 2023,
        task: 'Back-End + Front-End',
        images: [Bystrapark2, Bystrapark3, Bystrapark4],
    },
    {
        id: "edgedetailing",
        thumbnail: Edge1,
        technology: 'wordpress',
        title: 'edgedetailing',
        description: 'At EDGE we are passionate about vehicles whether its a brand new Mercedes Benz, 15 year old BMW or 40 year old Ford - they will all receive the best care possible. We are all about making our lifes easier - in our case its the professional tools and cosmetics. They make the wow factor when you are colecting your vehicle. On a second note if you a DIY\'er - our products that are available to purchase online and in store will make your life easier! When it comes to car restoration / protection, we got you covered!',
        client: 'Edgedetailing',
        date: 2023,
        task: 'Back-End + Front-End',
        images: [Edge2, Edge3, Edge4],
    },
    {
        id: "projekt-krosno",
        thumbnail: Project1,
        technology: 'wordpress',
        title: 'projekt-krosno',
        description: 'We are specializing in designing and manufacturing new machines and devices and also carrying out repairs and modernization according to our Customers requirements. The system is modernized by us to use its full production capacity development affects the improvement of the efficiency, work ergonomics and the quality of the final product.',
        client: 'Projekt-Krosno',
        date: 2020,
        task: 'Back-End + Front-End',
        images: [Project2, Project3, Project4]
    },
    {
        id: "dentplus",
        thumbnail: Dentplus1,
        technology: 'html',
        title: 'dentplus',
        description: 'Our activity started thirty years ago – since 1987. The office is located in Ruczaj estate in residential and service building on the corner of Kubierzyńska and Zachodnia streets. We offer two independent dental units. We have our office equipped with the most modern devices and tools. We use dental materials proven over the years only from reputable brands. To provide our Guests with the maximum comfort our premises are air-conditioned.',
        client: 'Dentplus',
        date: 2020,
        task: 'Back-End + Front-End',
        images: [Dentplus2, Dentplus3, Dentplus4],
    },
    {
        id: "kamyczkipatyczki",
        thumbnail: Kamyczkipatyczki1,
        technology: 'wordpress',
        title: 'kamyczkipatyczki',
        description: 'As parents of two children we were looking for a place where our children would be able to stimulate their creativity through playing and at the same time we could relax and have a sip of a good coffee in a pleasant atmosphere. This is why have created Kamyczki Patyczki – a perfect place to play, learn and rest. We offer a playroom for you with many creative toys. Visiting parents could find a corner where they can sit down, drink coffee and eat something sweet while looking at their child having a great time!',
        client: 'kamyczkipatyczki',
        date: 2020,
        task: 'Back-End + Front-End',
        images: [Kamyczkipatyczki2, Kamyczkipatyczki3],
    },
];

export default galleryItems;
