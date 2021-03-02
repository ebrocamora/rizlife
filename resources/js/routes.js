import Home from './Pages/Home.vue';
import Pages from './Pages/Pages.vue';
import Luzon from './Pages/Luzon/Luzon.vue';
import Visayas from './Pages/Visayas/Visayas.vue';
import Mindanao from './Pages/Mindanao/Mindanao.vue';
import AboutUs from './Pages/About-Us.vue';

export const routes = [
	{
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: AboutUs
  },
	{
    path: '/luzon/',
    component: Luzon,
    children: [
      {
        path: '',
        redirect: 'rizal',
      },
      {
        path: 'rizal',
        component: () => import('./Pages/Luzon/Rizal-Province.vue'),
      },
      {
        path: 'rizal-nueva-ecija',
        component: () => import('./Pages/Luzon/Rizal-Nueva-Ecija.vue'),
      },
      {
        path: 'rizal-kalinga',
        component: () => import('./Pages/Luzon/Rizal-Kalinga.vue'),
      },
      {
        path: 'rizal-cagayan',
        component: () => import('./Pages/Luzon/Rizal-Cagayan.vue'),
      },
      {
        path: 'rizal-laguna',
        component: () => import('./Pages/Luzon/Rizal-Laguna.vue'),
      },
      {
        path: 'rizal-occidental-mindoro',
        component: () => import('./Pages/Luzon/Rizal-Occidental-Mindoro.vue'),
      },
      {
        path: 'rizal-memorial-baseball-stadium',
        component: () => import('./Pages/Luzon/Rizal-Memorial-Baseball-Stadium.vue'),
      },
      {
        path: 'rizal-memorial-coliseum',
        component: () => import('./Pages/Luzon/Rizal-Memorial-Coliseum.vue'),
      },
      {
        path: 'rizal-memorial-sports-complex',
        component: () => import('./Pages/Luzon/Rizal-Memorial-Sports-Complex.vue'),
      },
      {
        path: 'rizal-park',
        component: () => import('./Pages/Luzon/Rizal-Park.vue'),
      },
      {
        path: 'rizal-shrine',
        component: () => import('./Pages/Luzon/Rizal-Shrine.vue'),
      },
      {
        path: 'rizal-j-p-avenue',
        component: () => import('./Pages/Luzon/Rizal-JP-Avenue.vue'),
      },
      {
        path: 'rizal-avenue',
        component: () => import('./Pages/Luzon/Rizal-Avenue.vue'),
      },
      {
        path: 'rizal-boulevard',
        component: () => import('./Pages/Luzon/Rizal-Boulevard.vue'),
      },
      {
        path: 'rizal-drive-bgc',
        component: () => import('./Pages/Luzon/Rizal-BGC.vue'),
      },
    ]
  },{
    path: '/visayas/',
    component: Visayas,
    children: [
      {
        path: '',
        redirect: 'rizal-Monument-Tacloban',
      },
      {
        path: 'rizal-Monument-Tacloban',
        component: () => import('./Pages/Visayas/Rizal_Monument_Tacloban.vue'),
      },
      {
        path: 'rizal-&-propagandist-iloilo',
        component: () => import('./Pages/Visayas/Rizal_&_Propagandist_iloilo.vue'),
      },
      {
        path: 'rizal-elementary-school',
        component: () => import('./Pages/Visayas/Rizal_Elementary_School.vue'),
      },
      {
        path: 'rizal-institute-negros-occidental',
        component: () => import('./Pages/Visayas/Rizal_Institute_Negros_Occidental.vue'),
      },
      {
        path: 'rizal-memorial-library-museum',
        component: () => import('./Pages/Visayas/Rizal_Memorial_Library_Museum.vue'),
      },
      {
        path: 'rizal-monument-capiz',
        component: () => import('./Pages/Visayas/Rizal_Monument_Capiz.vue'),
      },
      {
        path: 'rizal-monument-carcar',
        component: () => import('./Pages/Visayas/Rizal_Monument_Carcar.vue'),
      },
      {
        path: 'rizal-monument-catbalogan',
        component: () => import('./Pages/Visayas/Rizal_Monument_Catbalogan.vue'),
      },
       {
        path: 'rizal-park-tagbilaran',
        component: () => import('./Pages/Visayas/Rizal_Park_Tagbilaran.vue'),
      },
      {
        path: 'rizaliana-museum',
        component: () => import('./Pages/Visayas/Rizaliana_Museum.vue'),
      },
      {
        path: 'sitting-hero',
        component: () => import('./Pages/Visayas/Sitting_hero.vue'),
      },
      {
        path: 'small-plaza-guimaras',
        component: () => import('./Pages/Visayas/Small_Plaza_Guimaras.vue'),
      },
      {
        path: 'statue-iloilo',
        component: () => import('./Pages/Visayas/Statue_iloilo.vue'),
      },
      {
        path: 'statue-ormoc',
        component: () => import('./Pages/Visayas/Statue_Ormoc.vue'),
      },
    ]
  },
  {
    path: '/mindanao/',
    component: Mindanao,
    children: [
      {
        path: '',
        redirect: 'rizal-memorial-district-hospital',
      },
      {
        path: 'rizal-memorial-district-hospital',
        component: () => import('./Pages/Mindanao/Rizal-Memorial-District-Hospital.vue'),
      },
      {
        path: 'rizal-memorial-landscape',
        component: () => import('./Pages/Mindanao/Rizal-Memorial-Landscape.vue'),
      },
      {
        path: 'rizal-memorial-park',
        component: () => import('./Pages/Mindanao/Rizal-Memorial-Park.vue'),
      },
      {
        path: 'rizal-monument-sindangan',
        component: () => import('./Pages/Mindanao/Rizal-Monument-Sindangan.vue'),
      },
      {
        path: 'rizal-rmc',
        component: () => import('./Pages/Mindanao/Rizal-RMC.vue'),
      },
      {
        path: 'rizal-rmidi',
        component: () => import('./Pages/Mindanao/Rizal-RMIDI.vue'),
      },
      {
        path: 'rizal-sakahan',
        component: () => import('./Pages/Mindanao/Rizal-Sakahan-Rizal.vue'),
      },
      {
        path: 'rizal-sped-education',
        component: () => import('./Pages/Mindanao/Rizal-Sped-Education.vue'),
      },
    ]
  },
];

