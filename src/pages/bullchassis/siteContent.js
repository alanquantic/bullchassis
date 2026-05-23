const asset = (path) => `/bullchassis/assets/bullchassis.com/wp-content/uploads/${path}`;

export const homeHeroAssets = {
  logo: asset('2024/08/Bull-chassis.png'),
  video: asset('2023/10/BULL.mp4'),
  category1: asset('2023/10/cat1-1.png'),
  category2: asset('2023/10/cat2.png'),
  category3: asset('2023/10/cat3.png'),
  category4: asset('2023/10/cat4.png'),
};

export const productCatalog = [
  {
    slug: '53gn-slider-tandem-container-chassis-usa',
    title: '53’GN Slider Tandem Container Chassis',
    titleEs: '53’GN Slider Tandem Portacontenedor',
    image: asset('2023/10/52.png'),
    gallery: [asset('2023/10/52.png'), asset('2023/10/52-480x585.png')],
    summary:
      'This chassis is designed for transporting a 53’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 53’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '53’-7” (Excluding dock bumpers)'],
      ['Overall Width', '96”'],
      ['Payload', '67,200 lbs'],
    ],
    related: ['20-40-extendable-tandem-container-chassis-with-psi-usa', '20-sl-tandem-container-chassis-usa', '40-gooseneck'],
  },
  {
    slug: '20-40-extendable-tandem-container-chassis-with-psi-usa',
    title: '20/40 Extendable Tandem Container Chassis With PSI',
    titleEs: '20/40 Extendable Tandem Portacontenedor Con PSI',
    image: asset('2024/08/20_40-EXTENDABLE-TANDEM-CONTAINER-CHASSIS-WITH-PSI.png'),
    gallery: [asset('2024/08/20_40-EXTENDABLE-TANDEM-CONTAINER-CHASSIS-WITH-PSI.png'), asset('2024/08/20_40-EXTENDABLE-TANDEM-CONTAINER-CHASSIS-WITH-PSI-600x600.png')],
    summary:
      'This chassis is designed for transporting one ISO 20’ or one ISO 40’ containers. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 20’ o de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '29’ -11” retracted or 40’-10” extended'],
      ['Overall Width', '96”'],
      ['Payload', '44,640 lbs in 20’ position; 67,040 lbs in 40’ position'],
    ],
    related: ['20-40-extendable-tandem-container-chassis-usa', '40-gooseneck', '40ft-gooseneck-triaxle'],
  },
  {
    slug: '20-40-extendable-tandem-container-chassis-usa',
    title: '20/40 Extendable Tandem Container Chassis',
    titleEs: '20/40 Extendable Tandem Portacontenedor',
    image: asset('2023/10/1.png'),
    gallery: [asset('2023/10/1.png'), asset('2023/10/1-480x585.png')],
    summary:
      'This chassis is designed for transporting one ISO 20’ or one ISO 40’ containers. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 20’ o de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '29’ -11” retracted or 40’-10” extended'],
      ['Overall Width', '96”'],
      ['Payload', '44,640 lbs in 20’ position; 67,040 lbs in 40’ position'],
    ],
    related: ['20-40-extendable-tandem-container-chassis-with-psi-usa', '20-sl-tandem-container-chassis-usa', '20-40-slider-12-pins-tandem'],
  },
  {
    slug: '20-sl-tandem-container-chassis-usa',
    title: '20’ SL Tandem Container Chassis',
    titleEs: '20’ SL Tandem Portacontenedor',
    image: asset('2023/10/2-1.png'),
    gallery: [asset('2023/10/2-1.png'), asset('2023/10/2-1-480x585.png')],
    summary:
      'This chassis is designed for transporting a 20’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 20’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '23’-8” or 27’-8” (extend)'],
      ['Overall Width', '96”'],
      ['Payload', '67,200 lbs (30,480kgs)'],
    ],
    related: ['20ft-iso-tank-container-chassis', '40ft-gooseneck-triaxle', '20-40-slider-12-pins-tandem'],
  },
  {
    slug: '80-ton-low-bed-trailer-truck-portacontenedor',
    title: '80 Ton Low Bed Trailer Truck Container Chassis',
    titleEs: '80 Ton Low Bed Trailer Truck Portacontenedor',
    image: asset('2023/10/DJI_0106-scaled.jpg'),
    gallery: [asset('2023/10/DJI_0106-scaled.jpg'), asset('2023/10/DJI_0106-scaled-480x585.jpg')],
    summary:
      '80T Three Axle Low Flatbed Semi-trailer.',
    summaryEs:
      'Semirremolque plataforma baja de tres ejes, 80T.',
    specs: [
      ['Length', '13000 mm'],
      ['Payload', '80,000 kg'],
      ['GVWR', '91,400 kg'],
    ],
    related: ['40-gooseneck', '40-lightweight-four-axle-chassis', '40-45-48-53-extendable-triaxle-container-chassis'],
  },
  {
    slug: '40-gooseneck',
    title: '40’ Gooseneck Container Chassis',
    titleEs: '40’ Gooseneck Portacontenedor',
    image: asset('2023/10/4.png'),
    gallery: [asset('2023/10/4.png'), asset('2023/10/4-480x585.png')],
    summary:
      'This chassis is designed for transporting a 40’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’-11”'],
      ['Overall Width', '96”'],
      ['Payload', '67,200 lbs (30,480kgs)'],
    ],
    related: ['40-lightweight-four-axle-chassis', '20-40-45-extendable-triaxle-container-chassis', '40-45-extendable-container-chassis'],
  },
  {
    slug: '40-lightweight-four-axle-chassis',
    title: '40’ Lightweight Four-Axle Container Chassis',
    titleEs: '40’ Lightweight Four-Axle Portacontenedor',
    image: asset('2023/10/41.png'),
    gallery: [asset('2023/10/41.png'), asset('2023/10/41-480x585.png')],
    summary:
      'This chassis is designed for transporting a 40’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, CMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, CMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’- 8” (Exclude rear bumper)'],
      ['Axle Spread', '49”+49”+49”'],
      ['Payload', '67,700 lbs (30,708kgs)'],
    ],
    related: ['40-gooseneck', '20-40-slider-12-pins-tandem', '20ft-iso-tank-container-chassis'],
  },
  {
    slug: '20ft-iso-tank-container-chassis',
    title: '20ft Iso Tank Container Chassis',
    titleEs: '20ft Iso Tank Portacontenedor',
    image: asset('2023/02/20ft-ISO-TANK-CONTAINER-CHASSIS-2.png'),
    gallery: [asset('2023/02/20ft-ISO-TANK-CONTAINER-CHASSIS-2.png'), asset('2023/02/20ft-ISO-TANK-CONTAINER-CHASSIS-2-600x600.png')],
    summary:
      'This chassis is designed for transporting a 20’ ISO Tank container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO Tank de 20’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '43’'],
      ['Axle Spread', '109”'],
      ['Payload', '67,200 lbs (30,480kgs)'],
    ],
    related: ['20-sl-tandem-container-chassis-usa', '40ft-gooseneck-lightweight', '33-slider-tri-axle-container-chassis'],
  },
  {
    slug: '40-45-48-53-extendable-triaxle-container-chassis',
    title: '40/45/48/53’ Extendable Triaxle Container Chassis',
    titleEs: '40/45/48/53’ Extendable Triaxle Portacontenedor',
    image: asset('2023/02/40_45_48_53-EXTENDABLE-TRIAXLE.png'),
    gallery: [asset('2023/02/40_45_48_53-EXTENDABLE-TRIAXLE.png'), asset('2023/02/40_45_48_53-EXTENDABLE-TRIAXLE-600x600.png')],
    summary:
      'This chassis is designed for transporting a 40’ or a 45’ or a 48’ or a 53’ ISO or Domestic container. This chassis meets all DOT, AAR, ANSI, TOFC, CMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO o doméstico de 40’, 45’, 48’ o 53’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, CMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’-8” or 45’-8” or 48’-8” or 53’-8”'],
      ['Axle Spread', '60”+60”'],
      ['Payload', '67,200 lbs (30,480 kg)'],
    ],
    related: ['40-45-extendable-container-chassis', '33-slider-tri-axle-container-chassis', '20-40-slider-12-pins-tandem'],
  },
  {
    slug: '20-40-45-extendable-triaxle-container-chassis',
    title: '20/40/45’ Extendable Triaxle Container Chassis',
    titleEs: '20/40/45’ Extendable Triaxle Portacontenedor',
    image: asset('2024/08/8.png'),
    gallery: [asset('2024/08/8.png'), asset('2024/08/8-300x300.png')],
    summary:
      'This chassis is designed for transporting one ISO 20’, one ISO 40’ or one ISO 45’ containers. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 20’, 40’ o 45’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '36’ 10 15/16” retracted or 45’ 6 3/16” extended'],
      ['Axle Spread', '61” + 61”'],
      ['Payload', '49,400 lbs in 20’ position; 67,200 lbs in 40’ or 45’ position'],
    ],
    related: ['40-45-extendable-container-chassis', '40ft-gooseneck-triaxle', '20-40-12-pins-triaxle-container-chassis'],
  },
  {
    slug: '40ft-gooseneck-lightweight',
    title: '40ft Gooseneck Lightweight Container Chassis',
    titleEs: '40ft Gooseneck Lightweight Portacontenedor',
    image: asset('2024/08/2-6.png'),
    gallery: [asset('2024/08/2-6.png'), asset('2024/08/2-6-300x300.png')],
    summary:
      'This chassis is designed for transporting a 40’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’-11”'],
      ['Tare Weight', '5,250 lbs ±2%'],
      ['Payload', '67,200 lbs (30,480kgs)'],
    ],
    related: ['40ft-gooseneck-triaxle', '40-45-extendable-container-chassis', '20-40-slider-12-pins-tandem'],
  },
  {
    slug: '40ft-gooseneck-triaxle',
    title: '40ft Gooseneck Triaxle Container Chassis',
    titleEs: '40ft Gooseneck Triaxle Portacontenedor',
    image: asset('2022/12/40FT-GOOSENECK-TRIAXLE-1-1.png'),
    gallery: [asset('2022/12/40FT-GOOSENECK-TRIAXLE-1-1.png'), asset('2022/12/40FT-GOOSENECK-TRIAXLE-1-1-600x600.png')],
    summary:
      'This chassis is designed for transporting a 40’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’- 8” (Exclude rear bumper)'],
      ['Axle Spread', '61”+61”'],
      ['Payload', '75,000 lbs (34,020kgs)'],
    ],
    related: ['40-gooseneck', '40ft-gooseneck-lightweight', '20-40-45-extendable-triaxle-container-chassis'],
  },
  {
    slug: '40-45-extendable-container-chassis',
    title: '40/45’ Extendable Container Chassis',
    titleEs: '40/45’ Extendable Portacontenedor',
    image: asset('2023/10/6-1.png'),
    gallery: [asset('2023/10/6-1.png'), asset('2023/10/6-1.png')],
    summary:
      'This chassis is designed for transporting a 40’ or a 45’ ISO container. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 40’ o 45’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '40’-11” retracted or 45’-11” extended'],
      ['Axle Spread', '49”'],
      ['Payload', '67,200 lbs (30,480kgs)'],
    ],
    related: ['40-45-48-53-extendable-triaxle-container-chassis', '40-gooseneck', '33-slider-tri-axle-container-chassis'],
  },
  {
    slug: '33-slider-tri-axle-container-chassis',
    title: '33’ Slider Tri-Axle Container Chassis',
    titleEs: '33’ Slider Tri-Axle Portacontenedor',
    image: asset('2022/12/33-SLIDER-TRI-AXLE-CONTAINER-CHASSIS-1-600x600.png'),
    gallery: [asset('2022/12/33-SLIDER-TRI-AXLE-CONTAINER-CHASSIS-1-600x600.png')],
    summary:
      'This chassis is designed for transporting a 20’ ISO container. This chassis meets all DOT, AAR, ANSI,TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un contenedor ISO de 20’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '33’ (retracted) or 41’ (extended)'],
      ['Axle Spread', '54.5” + 54.5”'],
      ['Payload', '67,200 lbs'],
    ],
    related: ['20-40-12-pins-triaxle-container-chassis', '20-40-slider-12-pins-tandem', '40-45-extendable-container-chassis'],
  },
  {
    slug: '20-40-12-pins-triaxle-container-chassis',
    title: '20/40’ 12 Pins Triaxle Container Chassis',
    titleEs: '20/40’ 12 Pins Triaxle Portacontenedor',
    image: asset('2022/12/triaxle_20.png'),
    gallery: [asset('2022/12/triaxle_20.png'), asset('2022/12/triaxle_20-300x300.png')],
    summary:
      'This chassis is designed to carry one ISO 20’ or 2 x 20’ empties or 40’ ISO containers. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un ISO de 20’ o dos contenedores vacíos de 20’ o uno de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '31’-7” (retracted) or 40’-11” (extended)'],
      ['Axle Spread', '61” + 61”'],
      ['Payload', '66,100lbs for 20’ loaded or 74,100lbs for 40’ loaded'],
    ],
    related: ['20-40-slider-12-pins-tandem', '20-40-45-extendable-triaxle-container-chassis', '20ft-iso-tank-container-chassis'],
  },
  {
    slug: '20-40-slider-12-pins-tandem',
    title: '20/40’ Slider 12 Pins Tandem Container Chassis',
    titleEs: '20/40’ Slider 12 Pins Tandem Portacontenedor',
    image: asset('2023/10/9.png'),
    gallery: [asset('2023/10/9.png'), asset('2023/10/9-480x585.png')],
    summary:
      'This chassis is designed to carry one ISO 20’ or 2 x 20’ empties or 40’ ISO containers. This chassis meets all DOT, AAR, ANSI, TOFC, FMVSS, SAE and TTMA specifications.',
    summaryEs:
      'Este chasis está diseñado para transportar un ISO de 20’ o dos contenedores vacíos de 20’ o uno de 40’. Cumple con las especificaciones DOT, AAR, ANSI, TOFC, FMVSS, SAE y TTMA.',
    specs: [
      ['Overall Length', '31’-7” (retracted) or 40’-11” (extended)'],
      ['Axle Spread', '109”'],
      ['Payload', '54,500lbs for 20’ loaded or 57,000lbs for 40’ loadedf'],
    ],
    related: ['20-40-12-pins-triaxle-container-chassis', '20-sl-tandem-container-chassis-usa', '40ft-gooseneck-lightweight'],
  },
];

export const homeRoutes = [
  {
    slug: 'home',
    path: '/',
    title: 'Bull Chassis - Container Chassis for Sale',
  },
  {
    slug: 'home-es',
    path: '/es/',
    title: 'Bull Chassis - Portacontenedores',
  },
];

export const staticRoutes = [
  { path: '/about-us/', title: 'ABOUT US - bullchassis', titleEs: 'NOSOTROS - bullchassis' },
  { path: '/products/', title: 'Products - bullchassis', titleEs: 'Productos - bullchassis' },
  { path: '/shop/', title: 'Shop - bullchassis', titleEs: 'Tienda - bullchassis' },
  { path: '/es/sobre-nosotros/', title: 'NOSOTROS - bullchassis', titleEs: 'NOSOTROS - bullchassis' },
];
