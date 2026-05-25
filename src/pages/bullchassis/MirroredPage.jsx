import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productCatalog } from "./siteContent.js";

const bodyClassName =
  "home wp-singular page-template-default page page-id-57 wp-theme-transx wp-child-theme-transx-child theme-transx woocommerce-js elementor-default elementor-kit-10 elementor-page elementor-page-57";
const homeProductSlugs = [
  "53gn-slider-tandem-container-chassis-usa",
  "20-40-12-pins-triaxle-container-chassis",
  "40ft-gooseneck-triaxle",
  "20-40-extendable-tandem-container-chassis-with-psi-usa",
  "20-40-extendable-tandem-container-chassis-usa",
  "20-sl-tandem-container-chassis-usa",
  "40-45-48-53-extendable-triaxle-container-chassis",
  "20ft-iso-tank-container-chassis",
];

const homeProducts = homeProductSlugs
  .map((slug) => productCatalog.find((product) => product.slug === slug))
  .filter(Boolean);
const productsPerPage = 4;
const initialFormStatus = { state: "idle", message: "" };

const partnerImages = [
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/haldex.png",
    alt: "haldex",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/westlake.png",
    alt: "westlake",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/philips.png",
    alt: "philips",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/sealco.png",
    alt: "sealco",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/jost.png",
    alt: "jost",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/grote.png",
    alt: "grote",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/gabco.png",
    alt: "gabco",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/stemco.png",
    alt: "stemco",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/axn.jpeg",
    alt: "axn",
  },
  {
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/toca.jpeg",
    alt: "toca",
  },
];

const galleryImages = [
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/1-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/2-1.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/2-1-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/2-1-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/21.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/21-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/21-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-1.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-1-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/3-1-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/41.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/41-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/41-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/4-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/52.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/52-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/52-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/61.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/61-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/61-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/71.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/71-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/71-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/81.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/81-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/81-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/9.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/9-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/9-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/10.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/10-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/10-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/11.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/11-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/11-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/12.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/12-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/12-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/19.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/19-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/19-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/20.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/20-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/20-480x585.png.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/DJI_0106-scaled.jpg",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/DJI_0106-scaled-480x585.jpg",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/DJI_0106-scaled-480x585.jpg.webp",
  },
  {
    href: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-11.png",
    src: "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-11-480x585.png",
    webp: "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/1-11-480x585.png.webp",
  },
];

const latestNewsPosts = [
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Octubre-582x640.png",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Octubre-582x640.png.webp",
    category: "Uncategorized",
    date: "September 12, 2024",
    author: "Yarely",
    title: "Bull Chassis: Leading the Global Container Chassis Market",
    excerpt:
      "International trade and logistics heavily rely on the efficient transportation of containers. In this...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Septiembre-582x640.png",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Septiembre-582x640.png.webp",
    category: "chasis de contenedor",
    date: "September 12, 2024",
    author: "Yarely",
    title: "The Container Market: A Driver of Global Economy and Innovation",
    excerpt:
      "The container market has experienced exponential growth in recent decades, transforming the way global...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Agosto-582x640.png",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Agosto-582x640.png.webp",
    category: "container chassis",
    date: "September 12, 2024",
    author: "Yarely",
    title: "Bull Chassis: Innovation and Quality for the Transportation Industry",
    excerpt:
      "At Bull Chassis, we pride ourselves on being leaders in the manufacturing of high-quality chassis for the...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/bus-production-industry-2023-11-27-05-25-48-utc-1-scaled-582x640.jpeg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/bus-production-industry-2023-11-27-05-25-48-utc-1-scaled-582x640.jpeg.webp",
    category: "container chassis",
    date: "January 15, 2024",
    author: "Alan Gibran Avalos Hernandez",
    title: "The container chassis industry",
    excerpt:
      "The container chassis industry is a crucial component of the global transportation and logistics sector....",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/fleet-of-new-heavy-trucks-transportation-shippin-2023-11-27-05-30-32-utc-scaled-582x640.jpg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/fleet-of-new-heavy-trucks-transportation-shippin-2023-11-27-05-30-32-utc-scaled-582x640.jpg.webp",
    category: "container chassis",
    date: "January 15, 2024",
    author: "Alan Gibran Avalos Hernandez",
    title: "The Chassis: Fundamental Pillars of the Transportation Industry",
    excerpt:
      "In the vast world of the transportation industry, one of the most essential but often overlooked...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/hand-grasps-a-virtual-global-internet-connection-m-2023-11-27-05-11-13-utc-scaled-582x640.jpg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/hand-grasps-a-virtual-global-internet-connection-m-2023-11-27-05-11-13-utc-scaled-582x640.jpg.webp",
    category: "container chassis",
    date: "January 15, 2024",
    author: "Alan Gibran Avalos Hernandez",
    title: "The market and its competition",
    excerpt:
      "The global container chassis market is a highly competitive and dynamic sector, crucial to the efficiency...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/08/blog_1-582x640.jpg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/08/blog_1-582x640.jpg.webp",
    category: "container chassis",
    date: "August 4, 2023",
    author: "Alan Gibran Avalos Hernandez",
    title: "The Financial Advantages of Leasing with Bull Leasing: Boosting Efficiency in the Transportation Industry",
    excerpt:
      "Today, the business world is in constant flux, driven by technological innovations and disruptive business...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/08/blog2-582x640.jpg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/08/blog2-582x640.jpg.webp",
    category: "container chassis",
    date: "August 4, 2023",
    author: "Alan Gibran Avalos Hernandez",
    title: "Leasing and Depreciation of Assets: A New Perspective with Bull Leasing",
    excerpt:
      "Logistics and supply chain management are fundamental aspects for any company in the transport industry....",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/03/blog3-582x640.jpg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/03/blog3-582x640.jpg.webp",
    category: "container chassis",
    date: "March 9, 2023",
    author: "Alan Gibran Avalos Hernandez",
    title: "Tri-axle vs. Gooseneck Container Chassis: Differences and Advantages",
    excerpt:
      "Two popular types of container chassis are tri-axle and gooseneck. While both have their unique features...",
  },
  {
    image:
      "/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/03/blog4-582x640.jpeg",
    webp:
      "/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/03/blog4-582x640.jpeg.webp",
    category: "container chassis",
    date: "March 4, 2023",
    author: "Alan Gibran Avalos Hernandez",
    title:
      "Revolutionizing the Shipping Industry with BullChassis: Your Trusted Ocean Containers and Port Chassis Manufacturer",
    excerpt:
      "Discover BullChassis, a global leader in ocean containers and port chassis manufacturing. Quality products,...",
  },
];

export default function MirroredPage({ spanish = false }) {
  const [productPage, setProductPage] = useState(1);
  const [quoteFormStatus, setQuoteFormStatus] = useState({
    mobile: initialFormStatus,
    desktop: initialFormStatus,
  });
  const localePath = spanish ? "/es/" : "/";
  const aboutPath = spanish ? "/es/sobre-nosotros/" : "/about-us/";
  const productPath = (slug) =>
    spanish ? `/es/producto/${slug}/` : `/product/${slug}/`;
  const copy = {
    pageTitle: spanish
      ? "Bull Chassis - Portacontenedores en Venta"
      : "Bull Chassis - Container Chassis for Sale",
    home: "HOME",
    about: spanish ? "NOSOTROS" : "ABOUT US",
    products: spanish ? "PRODUCTOS" : "PRODUCTS",
    contact: spanish ? "CONTACTO" : "CONTACT",
    blog: "BLOG",
    contactUs: spanish ? "CONTÁCTANOS" : "CONTACT US",
    partners: spanish ? "Socios" : "Partners",
    trustUsLead: spanish ? "Empresas que" : "Companies Who",
    trustUsAccent: spanish ? "Confían" : "Trust",
    trustUsEnd: spanish ? "en Nosotros" : "Us",
    whyChooseUs: spanish ? "Por qué elegirnos" : "Why chose Us",
    whyBull: spanish ? "¿Por Qué Bull Chassis?" : "Why Bull Chassis?",
    whyText: spanish
      ? "Bull Chassis es un fabricante global de contenedores marítimos y chasis portuarios con operaciones internacionales y ubicaciones en América y México. Nuestras sedes en EE.UU. están en Texas y California para ofrecer productos de alta calidad a precios competitivos, excelentes tiempos de entrega y costos de flete a todo EE.UU."
      : "Bull Chassis is a Global Ocean Containers and Port Chassis Manufacturer with International operations and locations in America and México, Our USA locations are in Texas and California to be able to provide high quality products at competitive prices, excellent lead times and freight cost to all USA.",
    readMore: spanish ? "Leer más" : "Read more",
    videoPresentation: spanish ? "Presentación en Video" : "Video Presentation",
    model3d: spanish ? "Modelo 3D" : "Model 3D",
    ourModel3d: spanish ? "Nuestro Modelo 3D" : "Our Model 3D",
    productsLabel: spanish ? "Productos" : "Products",
    productsHeading: spanish
      ? "Nuestros Productos de Chasis Portacontenedor"
      : "Our Container Chassis Products",
    productsText: spanish
      ? "Bull Chassis es una empresa internacional de manufactura especializada en container chassis, port chassis y dry vans certificados por DOT. Bull Chassis tiene ubicaciones en Texas y California y envía a todo EE.UU., México y Canadá. Contáctanos para obtener información detallada sobre nuestros excelentes productos."
      : "Bull Chassis is an international manufacturing company specialized in Container Chassis, port chassis, and dry vans DOT certified, Bull Chassis has locations in Texas and California and ship to all USA, México and Canada, please feel free to contact us for detailed information about our excellent products.",
    gallery: spanish ? "Galería" : "Gallery",
    ourGallery: spanish ? "Nuestra galería" : "Our gallery",
    latestNews: spanish ? "Nuestras Últimas Noticias" : "Our Latest News",
  };

  async function handleQuoteSubmit(event, formKey) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("form_fields[name]") || "").trim(),
      email: String(formData.get("form_fields[email]") || "").trim(),
      phone:
        String(formData.get("form_fields[field_c8fc5cc]") || formData.get("form_fields[field_ffc519a]") || "").trim(),
      company: String(formData.get("form_fields[field_624c46d]") || "").trim(),
      message: String(formData.get("form_fields[message]") || "").trim(),
      locale: spanish ? "es" : "en",
      page: window.location.pathname,
      formId: formKey,
      website: String(formData.get("website") || "").trim(),
    };

    setQuoteFormStatus((current) => ({
      ...current,
      [formKey]: {
        state: "submitting",
        message: spanish ? "Enviando..." : "Sending...",
      },
    }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send message.");
      }

      form.reset();
      setQuoteFormStatus((current) => ({
        ...current,
        [formKey]: {
          state: "success",
          message: spanish
            ? "Tu solicitud fue enviada correctamente."
            : "Your request was sent successfully.",
        },
      }));
    } catch (error) {
      setQuoteFormStatus((current) => ({
        ...current,
        [formKey]: {
          state: "error",
          message:
            error instanceof Error && error.message
              ? error.message
              : spanish
                ? "No se pudo enviar tu solicitud."
                : "We could not send your request.",
        },
      }));
    }
  }

  useLayoutEffect(() => {
    document.title = copy.pageTitle;
    const previousClassName = document.body.className;
    document.body.className = `${bodyClassName}${spanish ? " body--bullchassis-es" : ""}`;

    return () => {
      document.body.className = previousClassName;
    };
  }, [copy.pageTitle]);

  const totalProductPages = Math.max(
    1,
    Math.ceil(homeProducts.length / productsPerPage)
  );
  const currentProductPage = Math.min(productPage, totalProductPages);
  const productStartIndex = (currentProductPage - 1) * productsPerPage;
  const visibleHomeProducts = homeProducts.slice(
    productStartIndex,
    productStartIndex + productsPerPage
  );

  return (
    <div className="bullchassis-fragment">
      <div className="bull-language-switcher wpml-elementor-ls" aria-label="Language selector">
        <ul className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-vertical">
          <li className={`wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-first-item wpml-ls-item-legacy-list-vertical ${!spanish ? "wpml-ls-current-language" : ""}`.trim()}>
            <a href="/" className="wpml-ls-link" aria-label="Switch language to English">
              <img
                className="wpml-ls-flag webpexpress-processed"
                src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/icons8-estados-unidos-48.png"
                srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/icons8-estados-unidos-48.png.webp"
                alt="English"
              />
            </a>
          </li>
          <li className={`wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-vertical ${spanish ? "wpml-ls-current-language" : ""}`.trim()}>
            <a href="/es/" className="wpml-ls-link" aria-label="Cambiar idioma a Español">
              <img
                className="wpml-ls-flag webpexpress-processed"
                src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/bandera_mx.png"
                srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/bandera_mx.png.webp"
                alt="Español"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* Preloader */}
      <div className="transx_page-wrapper">
        {/* Side Panel */}
        <div className="transx_aside-dropdown">
          <div className="transx_aside-dropdown__inner">
            <span className="transx_aside-dropdown__close">
              <svg className="icon">
                <svg
                  viewBox="0 0 47.971 47.971"
                  id="close"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                </svg>
              </svg>
            </span>
            <div className="transx_aside-dropdown__item transx_mobile_menu_container d-lg-none d-block" />
          </div>
        </div>
        {/* Header */}
        <header className="transx_header transx_page-header transx_transparent_header_off  transx_header_view_type_1 transx_tagline_off transx_header_button_on transx_side_panel_off">
          {/* Tag Line */}
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-8 col-md-6 col-lg-3 d-flex align-items-center">
                <a className="transx_logo transx_retina_on" href="/" />
              </div>
              <div className="transx_main_menu_wrapper col-lg-5 d-flex justify-content-center">
                <div className="transx_main_menu_container">
                  <nav
                    id="quadmenu"
                    className="quadmenu-default_theme quadmenu-v3.3.2 quadmenu-align-right quadmenu-divider-hide quadmenu-carets-hide quadmenu-background-color quadmenu-mobile-shadow-hide quadmenu-dropdown-shadow-hide menu_header quadmenu-is-embed"
                    data-template="embed"
                    data-theme="default_theme"
                    data-unwrap={1}
                    data-breakpoint={768}
                  >
                    <div className="quadmenu-container">
                      <div
                        id="quadmenu_0"
                        className="quadmenu-navbar-collapse collapsed in"
                      >
                        <ul className="quadmenu-navbar-nav">
                          <li
                            id="menu-item-1571"
                            className="quadmenu-item-1571 quadmenu-item quadmenu-item-object-page quadmenu-item-home current-menu-item page_item page-item-57 current_page_item quadmenu-item-type-post_type quadmenu-item-type-post_type quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right"
                          >
                            {" "}
                            <a href={localePath}>
                              <span className="quadmenu-item-content">
                                <span className="quadmenu-text  hover t_1000">
                                  {copy.home}
                                </span>
                              </span>
                            </a>
                          </li>
                          <li
                            id="menu-item-1572"
                            className="quadmenu-item-1572 quadmenu-item quadmenu-item-object-page quadmenu-item-type-post_type quadmenu-item-type-post_type quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right"
                          >
                            {" "}
                            <a href={aboutPath}>
                              <span className="quadmenu-item-content">
                                <span className="quadmenu-text  hover t_1000">
                                  {copy.about}
                                </span>
                              </span>
                            </a>
                          </li>
                          <li
                            id="menu-item-3243"
                            className="quadmenu-item-3243 quadmenu-item quadmenu-item-object-page quadmenu-item-type-post_type quadmenu-item-type-post_type quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right"
                          >
                            {" "}
                            <a href={spanish ? "/es/productos/" : "/products/"}>
                              <span className="quadmenu-item-content">
                                <span className="quadmenu-text  hover t_1000">
                                  {copy.products}
                                </span>
                              </span>
                            </a>
                          </li>
                          <li
                            id="menu-item-1910"
                            className="quadmenu-item-1910 quadmenu-item quadmenu-item-object-custom current-menu-item current_page_item quadmenu-item-type-default quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right"
                          >
                            {" "}
                            <a href="#contacto">
                              <span className="quadmenu-item-content">
                                <span className="quadmenu-text  hover t_1000">
                                  {copy.contact}
                                </span>
                              </span>
                            </a>
                          </li>
                          <li
                            id="menu-item-4233"
                            className="quadmenu-item-4233 quadmenu-item quadmenu-item-object-page quadmenu-item-type-post_type quadmenu-item-type-post_type quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right"
                          >
                            {" "}
                            <a href={spanish ? "/es/blog/" : "/blog/"}>
                              <span className="quadmenu-item-content">
                                <span className="quadmenu-text  hover t_1000">
                                  {copy.blog}
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>{" "}
                      </div>
                    </div>
                  </nav>{" "}
                </div>
              </div>
              <div className="col-4 col-md-6 col-lg-4 d-flex justify-content-end align-items-center">
                <div className="transx_hamburger transx_dropdown-trigger d-inline-block d-md-none transx_side_panel_off">
                  <div className="transx_hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#contacto"
            className="transx_alt_header_button transx_header_button_desktop"
          >
            {copy.contactUs}
          </a>
        </header>
        <div className="transx_page_content_container">
          <div className="transx_page_content_wrapper transx_page_without_top_padding transx_page_without_bottom_padding transx_page_title_hide">
            <div className="container">
              <div className="row transx_sidebar_none transx_bg_color_default">
                {/* Content Container */}
                <div className="col-lg-12 col-xl-12">
                  <div className="transx_content_wrapper">
                    <div
                      data-elementor-type="wp-page"
                      data-elementor-id={57}
                      className="elementor elementor-57"
                      data-elementor-post-type="page"
                    >
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-6a15cd4e elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                        data-id="6a15cd4e"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4cecd774"
                            data-id="4cecd774"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-31c7c33 elementor-widget elementor-widget-video"
                                data-id="31c7c33"
                                data-element_type="widget"
                                data-e-type="widget"
                                id="video_header"
                                data-settings='{"video_type":"hosted","autoplay":"yes","play_on_mobile":"yes","loop":"yes","start":0}'
                                data-widget_type="video.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                                    <video
                                      className="elementor-video"
                                      src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/BULL.mp4"
                                      autoPlay
                                      loop
                                      playsInline
                                      controlsList="nodownload"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div
                        className="elementor-element elementor-element-2513710 e-flex e-con-boxed e-con e-parent"
                        data-id={2513710}
                        data-element_type="container"
                        data-e-type="container"
                      >
                        <div className="e-con-inner">
                          <div
                            className="elementor-element elementor-element-6bebab2 elementor-widget elementor-widget-hotspot"
                            data-id="6bebab2"
                            data-element_type="widget"
                            data-e-type="widget"
                            data-settings='{"hotspot":[{"_id":"68a6e67","hotspot_label":"LED TECH","hotspot_custom_size":"","hotspot_tooltip_content":"<p>Awesome<\/p>","hotspot_offset_x":{"unit":"%","size":10,"sizes":[]},"hotspot_offset_y":{"unit":"%","size":13,"sizes":[]},"__dynamic__":null,"hotspot_link":{"url":"","is_external":"","nofollow":"","custom_attributes":""},"hotspot_icon":{"value":"","library":""},"hotspot_horizontal":"left","hotspot_vertical":"top","hotspot_tooltip_position":"no","hotspot_position":null},{"hotspot_label":"ABS SYSTEM","hotspot_custom_size":"","hotspot_tooltip_content":"<p>Awesome<\/p>","hotspot_offset_x":{"unit":"%","size":43,"sizes":[]},"hotspot_offset_y":{"unit":"%","size":57,"sizes":[]},"_id":"2460e93","__dynamic__":null,"hotspot_link":{"url":"","is_external":"","nofollow":"","custom_attributes":""},"hotspot_icon":{"value":"","library":""},"hotspot_horizontal":"left","hotspot_vertical":"top","hotspot_tooltip_position":"no","hotspot_position":null},{"hotspot_label":"GRADE 50 STEEL","hotspot_custom_size":"","hotspot_tooltip_content":"<p>Awesome<\/p>","hotspot_offset_x":{"unit":"%","size":68,"sizes":[]},"hotspot_offset_y":{"unit":"%","size":13,"sizes":[]},"_id":"3263171","__dynamic__":null,"hotspot_link":{"url":"","is_external":"","nofollow":"","custom_attributes":""},"hotspot_icon":{"value":"","library":""},"hotspot_horizontal":"left","hotspot_vertical":"top","hotspot_tooltip_position":"no","hotspot_position":null}],"tooltip_position":"bottom","tooltip_trigger":"click","tooltip_animation":"e-hotspot--fade-in-out"}'
                            data-widget_type="hotspot.default"
                          >
                            <div className="elementor-widget-container">
                              <picture>
                                <source
                                  srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Diseno-sin-titulo-2.png.webp 854w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Diseno-sin-titulo-2-300x103.png.webp 300w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Diseno-sin-titulo-2-768x263.png.webp 768w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Diseno-sin-titulo-2-600x205.png.webp 600w"
                                  sizes="(max-width: 854px) 100vw, 854px"
                                  type="image/webp"
                                />
                                <img
                                  fetchPriority="high"
                                  decoding="async"
                                  width={854}
                                  height={292}
                                  src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2.png"
                                  className="attachment-full size-full wp-image-4875 webpexpress-processed"
                                  alt=""
                                  srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2.png 854w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2-300x103.png 300w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2-768x263.png 768w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2-600x205.png 600w"
                                  sizes="(max-width: 854px) 100vw, 854px"
                                />
                              </picture>
                              <div className="e-hotspot elementor-repeater-item-68a6e67  e-hotspot--position-left e-hotspot--position-top  ">
                                <div className="e-hotspot__button e-hotspot--expand">
                                  <div className="e-hotspot__label">
                                    LED TECH
                                  </div>
                                </div>
                                <div className="e-hotspot__tooltip  e-hotspot--tooltip-position e-hotspot--fade-in-out ">
                                  <p>Awesome</p>{" "}
                                </div>
                              </div>
                              <div className="e-hotspot elementor-repeater-item-2460e93  e-hotspot--position-left e-hotspot--position-top  ">
                                <div className="e-hotspot__button e-hotspot--expand">
                                  <div className="e-hotspot__label">
                                    ABS SYSTEM
                                  </div>
                                </div>
                                <div className="e-hotspot__tooltip  e-hotspot--tooltip-position e-hotspot--fade-in-out ">
                                  <p>Awesome</p>{" "}
                                </div>
                              </div>
                              <div className="e-hotspot elementor-repeater-item-3263171  e-hotspot--position-left e-hotspot--position-top  ">
                                <div className="e-hotspot__button e-hotspot--expand">
                                  <div className="e-hotspot__label">
                                    GRADE 50 STEEL
                                  </div>
                                </div>
                                <div className="e-hotspot__tooltip  e-hotspot--tooltip-position e-hotspot--fade-in-out ">
                                  <p>Awesome</p>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-511e414d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="511e414d"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-264d4273"
                            data-id="264d4273"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-7dfe272c elementor-section-height-min-height elementor-section-content-middle elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default"
                                data-id="7dfe272c"
                                data-element_type="section"
                                data-e-type="section"
                              >
                                <div className="elementor-container elementor-column-gap-extended">
                                  <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-55e9497a"
                                    data-id="55e9497a"
                                    data-element_type="column"
                                    data-e-type="column"
                                  >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-7dd6a183 elementor-widget elementor-widget-transx_heading"
                                        data-id="7dd6a183"
                                        data-element_type="widget"
                                        data-e-type="widget"
                                        data-widget_type="transx_heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="transx_heading_widget">
                                            <div className="transx_up_heading">
                                              {copy.partners}
                                            </div>
                                            <div className="transx_up_heading_overlay">
                                              {copy.partners}
                                            </div>
                                            <h2 className="transx_heading">
                                              {copy.trustUsLead}{" "}
                                              <span
                                                style={{ color: "#F5BF44" }}
                                              >
                                                {copy.trustUsAccent}
                                              </span>{" "}
                                              {copy.trustUsEnd}
                                            </h2>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-f28e29f elementor-arrows-position-outside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel"
                                        data-id="f28e29f"
                                        data-element_type="widget"
                                        data-e-type="widget"
                                        data-settings='{"slides_to_show":"4","image_spacing_custom":{"unit":"px","size":54,"sizes":[]},"navigation":"both","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
                                        data-widget_type="image-carousel.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <Swiper
                                            modules={[
                                              Navigation,
                                              Pagination,
                                              Autoplay,
                                            ]}
                                            slidesPerView={4}
                                            slidesPerGroup={1}
                                            spaceBetween={54}
                                            loop={true}
                                            autoplay={{
                                              delay: 5000,
                                              disableOnInteraction: false,
                                              pauseOnMouseEnter: true,
                                            }}
                                            speed={500}
                                            navigation
                                            pagination={{ clickable: true }}
                                            className="elementor-image-carousel-wrapper"
                                          >
                                            {partnerImages.map((img) => (
                                              <SwiperSlide
                                                key={img.alt}
                                                className="swiper-slide"
                                              >
                                                <figure className="swiper-slide-inner">
                                                  <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={img.src}
                                                    alt={img.alt}
                                                  />
                                                </figure>
                                              </SwiperSlide>
                                            ))}
                                          </Swiper>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-7792204c transx_front_about elementor-hidden-tablet elementor-hidden-phone elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="7792204c"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1910ef35"
                            data-id="1910ef35"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-5c84ba02 transx_figure_corner_yes transx_counter_align_left transx_about_counter elementor-absolute elementor-widget elementor-widget-counter"
                                data-id="5c84ba02"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-settings='{"_position":"absolute"}'
                                data-widget_type="counter.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-counter">
                                    <div className="elementor-counter-title">
                                      provide high quality products
                                    </div>{" "}
                                    <div className="elementor-counter-number-wrapper">
                                      <span className="elementor-counter-number-prefix" />
                                      <span
                                        className="elementor-counter-number"
                                        data-duration={2000}
                                        data-to-value={10}
                                        data-from-value={0}
                                        data-delimiter=","
                                      >
                                        10
                                      </span>
                                      <span className="elementor-counter-number-suffix">
                                        {" "}
                                        years
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-22510283 transx_about_video elementor-widget elementor-widget-transx_video"
                                data-id={22510283}
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_video.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_video_widget">
                                    <div className="transx_preview_container view_type_2">
                                      <a
                                        className="transx_video_trigger_button transx_animation_yes"
                                        href="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/bullchassis_video.mp4"
                                      >
                                        <span className="transx_button_icon">
                                          <i className="fa fa-play" />
                                        </span>
                                        <span className="transx_button_text">
                                          Video Presentation
                                        </span>
                                      </a>
                                    </div>
                                    <div className="transx_video_container">
                                      <div className="transx_close_popup_layer">
                                        <div className="transx_close_button">
                                          <svg viewBox="0 0 40 40">
                                            <path d="M10,10 L30,30 M30,10 L10,30" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div
                                        className="transx_video_wrapper"
                                        data-src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/bullchassis_video.mp4"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-4c5bea83"
                            data-id="4c5bea83"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-32b4c3ef elementor-widget elementor-widget-transx_heading"
                                data-id="32b4c3ef"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_heading_widget">
                                    <div className="transx_up_heading">
                                      {copy.whyChooseUs}
                                    </div>
                                    <h2 className="transx_heading">
                                      {copy.whyBull}{" "}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-61a50a7a elementor-widget elementor-widget-text-editor"
                                data-id="61a50a7a"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    {copy.whyText}
                                  </p>{" "}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-c16edba elementor-widget elementor-widget-transx_button"
                                data-id="c16edba"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_button_widget">
                                    <div className="transx_button_container">
                                      <a
                                        className="transx_button transx_button--primary "
                                        href={aboutPath}
                                      >
                                        <span>{copy.readMore}</span>
                                        {/*                    <svg class="icon">*/}
                                        {/*                        <svg viewBox="0 0 150 78.6" xmlns="http://www.w3.org/2000/svg"><path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z"/></svg>*/}
                                        {/*                    </svg>*/}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-5a42fe2a elementor-section-stretched elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="5a42fe2a"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-background-overlay" />
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6b4b853"
                            data-id="6b4b853"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-1b745fa elementor-widget elementor-widget-image"
                                data-id="1b745fa"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <picture>
                                    <source
                                      srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/Portchassis-e1697666215747.jpeg.webp 480w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/Portchassis-e1697666215747-289x300.jpeg.webp 289w"
                                      sizes="(max-width: 480px) 100vw, 480px"
                                      type="image/webp"
                                    />
                                    <img
                                      decoding="async"
                                      width={480}
                                      height={498}
                                      src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/Portchassis-e1697666215747.jpeg"
                                      className="attachment-large size-large wp-image-1655 webpexpress-processed"
                                      alt=""
                                      srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/Portchassis-e1697666215747.jpeg 480w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/Portchassis-e1697666215747-289x300.jpeg 289w"
                                      sizes="(max-width: 480px) 100vw, 480px"
                                    />
                                  </picture>{" "}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-64cc0e7f elementor-widget elementor-widget-transx_heading"
                                data-id="64cc0e7f"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_heading_widget">
                                    <div className="transx_up_heading">
                                      {copy.whyChooseUs}
                                    </div>
                                    <h2 className="transx_heading">
                                      {copy.whyBull}{" "}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-21cc54ae elementor-widget elementor-widget-text-editor"
                                data-id="21cc54ae"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    {copy.whyText}
                                  </p>{" "}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-5d47c12 elementor-widget elementor-widget-transx_button"
                                data-id="5d47c12"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_button_widget">
                                    <div className="transx_button_container">
                                      <a
                                        className="transx_button transx_button--primary "
                                        href={aboutPath}
                                      >
                                        <span>{copy.readMore}</span>
                                        {/*                    <svg class="icon">*/}
                                        {/*                        <svg viewBox="0 0 150 78.6" xmlns="http://www.w3.org/2000/svg"><path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z"/></svg>*/}
                                        {/*                    </svg>*/}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-56bb3735 elementor-section-full_width elementor-section-stretched elementor-hidden-desktop elementor-section-height-default elementor-section-height-default"
                        data-id="56bb3735"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-780dd20f"
                            data-id="780dd20f"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-6b2b802c elementor-widget elementor-widget-transx_video"
                                data-id="6b2b802c"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_video.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_video_widget">
                                    <div className="transx_preview_container view_type_2">
                                      <a
                                        className="transx_video_trigger_button transx_animation_yes"
                                        href="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/bullchassis_video.mp4"
                                      >
                                        <span className="transx_button_icon">
                                          <i className="fa fa-play" />
                                        </span>
                                        <span className="transx_button_text">
                                          {copy.videoPresentation}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="transx_video_container">
                                      <div className="transx_close_popup_layer">
                                        <div className="transx_close_button">
                                          <svg viewBox="0 0 40 40">
                                            <path d="M10,10 L30,30 M30,10 L10,30" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div
                                        className="transx_video_wrapper"
                                        data-src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/bullchassis_video.mp4"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-2b39fa27 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="2b39fa27"
                        data-element_type="section"
                        data-e-type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-778d6408"
                            data-id="778d6408"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-68a8ab59 elementor-widget elementor-widget-transx_heading"
                                data-id="68a8ab59"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_heading_widget">
                                    <div className="transx_up_heading">
                                      {copy.model3d}
                                    </div>
                                    <div className="transx_up_heading_overlay">
                                      {copy.model3d}
                                    </div>
                                    <h2 className="transx_heading">
                                      {copy.ourModel3d}{" "}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-9ca6855 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="9ca6855"
                                data-element_type="section"
                                data-e-type="section"
                              >
                                <div className="elementor-container elementor-column-gap-extended">
                                  <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6432986"
                                    data-id={6432986}
                                    data-element_type="column"
                                    data-e-type="column"
                                  >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-21f67c0 elementor-widget elementor-widget-html"
                                        data-id="21f67c0"
                                        data-element_type="widget"
                                        data-e-type="widget"
                                        data-widget_type="html.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div
                                            className="sketchfab-embed-wrapper bull-sketchfab-static"
                                            style={{ height: 500 }}
                                          >
                                            <div className="bull-sketchfab-static__stage">
                                              <img
                                                src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Diseno-sin-titulo-2.png"
                                                alt="Bull Chassis 3D model preview"
                                              />
                                              <div className="bull-sketchfab-static__badge">
                                                Bull Chassis 2024 40ft-45ft
                                                Container Chassis
                                              </div>
                                            </div>
                                          </div>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-3a1c78c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="3a1c78c"
                        data-element_type="section"
                        data-e-type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-386b5f5"
                            data-id="386b5f5"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-b356636 elementor-widget elementor-widget-transx_heading"
                                data-id="b356636"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="transx_heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="transx_heading_widget">
                                    <div className="transx_up_heading">
                                      {copy.productsLabel}
                                    </div>
                                    <h1 className="transx_heading">
                                      {copy.productsHeading}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-0677ad1"
                            data-id="0677ad1"
                            data-element_type="column"
                            data-e-type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-8f8a8a7 elementor-widget elementor-widget-text-editor"
                                data-id="8f8a8a7"
                                data-element_type="widget"
                                data-e-type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    {copy.productsText}
                                  </p>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-3a1c78c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="3a1c78c"
                        data-element_type="section"
                        data-e-type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5dcbda e-con-full e-flex e-con e-parent"
                            data-id="c5dcbda"
                            data-element_type="column"
                            data-e-type="container"
                          >
                            <div
                              className="elementor-element elementor-element-6f3b3b8 elementor-product-loop-item--align-center elementor-grid-4 elementor-grid-tablet-3 elementor-grid-mobile-2 elementor-products-grid elementor-wc-products elementor-show-pagination-border-yes elementor-widget elementor-widget-woocommerce-products"
                              data-id="6f3b3b8"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="woocommerce-products.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="woocommerce columns-4">
                                  <div className="woocommerce-notices-wrapper" />
                                  <ul className="products elementor-grid columns-4">
                                    {visibleHomeProducts.map((product) => (
                                      <li
                                        key={product.slug}
                                        className="product type-product instock product_cat-bull has-post-thumbnail shipping-taxable product-type-simple"
                                      >
                                        <a
                                          href={
                                            productPath(product.slug)
                                          }
                                          className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                        >
                                          <picture>
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width={300}
                                              height={300}
                                              src={product.image}
                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail webpexpress-processed"
                                              alt={spanish ? product.titleEs : product.title}
                                            />
                                          </picture>
                                          <h2 className="woocommerce-loop-product__title">
                                            {spanish ? product.titleEs : product.title}
                                          </h2>
                                        </a>
                                        <a
                                          href={
                                            productPath(product.slug)
                                          }
                                          data-quantity={1}
                                          className="button product_type_simple"
                                          rel="nofollow"
                                          data-success_message
                                        >
                                          {copy.readMore}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                {totalProductPages > 1 ? (
                                  <nav
                                    className="woocommerce-pagination"
                                    aria-label="Product Pagination"
                                  >
                                    <ul className="page-numbers">
                                      {currentProductPage > 1 ? (
                                        <li>
                                          <button
                                            type="button"
                                            className="page-numbers prev"
                                            aria-label="Previous page"
                                            onClick={() =>
                                              setProductPage((page) =>
                                                Math.max(1, page - 1)
                                              )
                                            }
                                          >
                                            ←
                                          </button>
                                        </li>
                                      ) : null}
                                      {Array.from(
                                        { length: totalProductPages },
                                        (_, index) => index + 1
                                      ).map((pageNumber) => (
                                        <li key={pageNumber}>
                                          <button
                                            type="button"
                                            aria-label={`Page ${pageNumber}`}
                                            aria-current={
                                              pageNumber === currentProductPage
                                                ? "page"
                                                : undefined
                                            }
                                            className={`page-numbers ${
                                              pageNumber === currentProductPage
                                                ? "current"
                                                : ""
                                            }`}
                                            onClick={() =>
                                              setProductPage(pageNumber)
                                            }
                                          >
                                            {pageNumber}
                                          </button>
                                        </li>
                                      ))}
                                      {currentProductPage < totalProductPages ? (
                                        <li>
                                          <button
                                            type="button"
                                            className="page-numbers next"
                                            aria-label="Next page"
                                            onClick={() =>
                                              setProductPage((page) =>
                                                Math.min(
                                                  totalProductPages,
                                                  page + 1
                                                )
                                              )
                                            }
                                          >
                                            →
                                          </button>
                                        </li>
                                      ) : null}
                                    </ul>
                                  </nav>
                                ) : null}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-a20c556 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="a20c556"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e743c0"
                          data-id="4e743c0"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-afaf072 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="afaf072"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-extended">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f654f1c"
                                  data-id="f654f1c"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-6fd188e elementor-widget elementor-widget-transx_heading"
                                      data-id="6fd188e"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_heading_widget">
                                          <div className="transx_up_heading">
                                            Category
                                          </div>
                                          <h2 className="transx_heading">
                                            Container Chassis by Category​{" "}
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-b9d0514 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="b9d0514"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-extended">
                                <div
                                  className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a151158"
                                  data-id="a151158"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-3295b6f elementor-widget elementor-widget-image"
                                      data-id="3295b6f"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1.png.webp 800w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1-300x300.png.webp 300w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1-768x768.png.webp 768w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1-600x600.png.webp 600w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat1-1-100x100.png.webp 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1.png"
                                            className="attachment-large size-large wp-image-3368 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1.png 800w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1-300x300.png 300w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1-768x768.png 768w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1-600x600.png 600w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat1-1-100x100.png 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-91006e8 elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline"
                                      data-id="91006e8"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"marker":"underline","highlighted_text":"20\/40","headline_style":"highlight","loop":"yes","highlight_animation_duration":1200,"highlight_iteration_delay":8000}'
                                      data-widget_type="animated-headline.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <a href="#">
                                          <h3 className="elementor-headline">
                                            <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                              <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                                                20/40
                                              </span>
                                            </span>
                                            <span className="elementor-headline-plain-text elementor-headline-text-wrapper">
                                              {" "}
                                              Container Chassis
                                            </span>
                                          </h3>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-66bdb01"
                                  data-id="66bdb01"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-cf8e8a2 elementor-widget elementor-widget-image"
                                      data-id="cf8e8a2"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2.png.webp 800w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2-300x300.png.webp 300w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2-768x768.png.webp 768w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2-600x600.png.webp 600w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat2-100x100.png.webp 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2.png"
                                            className="attachment-large size-large wp-image-3369 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2.png 800w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2-300x300.png 300w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2-768x768.png 768w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2-600x600.png 600w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat2-100x100.png 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-e62c229 elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline"
                                      data-id="e62c229"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"marker":"underline","highlighted_text":"Gooseneck","headline_style":"highlight","loop":"yes","highlight_animation_duration":1200,"highlight_iteration_delay":8000}'
                                      data-widget_type="animated-headline.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <a href="#">
                                          <h3 className="elementor-headline">
                                            <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                              <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                                                Gooseneck
                                              </span>
                                            </span>
                                            <span className="elementor-headline-plain-text elementor-headline-text-wrapper">
                                              {" "}
                                              Container Chassis
                                            </span>
                                          </h3>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-403660a"
                                  data-id="403660a"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-b224d49 elementor-widget elementor-widget-image"
                                      data-id="b224d49"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3.png.webp 800w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3-300x300.png.webp 300w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3-768x768.png.webp 768w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3-600x600.png.webp 600w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat3-100x100.png.webp 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3.png"
                                            className="attachment-large size-large wp-image-3370 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3.png 800w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3-300x300.png 300w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3-768x768.png 768w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3-600x600.png 600w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat3-100x100.png 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-de36385 elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline"
                                      data-id="de36385"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"marker":"underline","highlighted_text":"ISO Tank","headline_style":"highlight","loop":"yes","highlight_animation_duration":1200,"highlight_iteration_delay":8000}'
                                      data-widget_type="animated-headline.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <a href="#">
                                          <h3 className="elementor-headline">
                                            <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                              <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                                                ISO Tank
                                              </span>
                                            </span>
                                            <span className="elementor-headline-plain-text elementor-headline-text-wrapper">
                                              {" "}
                                              Container Chassis
                                            </span>
                                          </h3>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-88446fc"
                                  data-id="88446fc"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-aba393f elementor-widget elementor-widget-image"
                                      data-id="aba393f"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4.png.webp 800w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4-300x300.png.webp 300w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4-768x768.png.webp 768w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4-600x600.png.webp 600w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/cat4-100x100.png.webp 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4.png"
                                            className="attachment-large size-large wp-image-3371 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4.png 800w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4-300x300.png 300w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4-768x768.png 768w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4-600x600.png 600w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/cat4-100x100.png 100w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-8e3cbf5 elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline"
                                      data-id="8e3cbf5"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"marker":"underline","highlighted_text":"Triaxle","headline_style":"highlight","loop":"yes","highlight_animation_duration":1200,"highlight_iteration_delay":8000}'
                                      data-widget_type="animated-headline.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <a href="#">
                                          <h3 className="elementor-headline">
                                            <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                              <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                                                Triaxle
                                              </span>
                                            </span>
                                            <span className="elementor-headline-plain-text elementor-headline-text-wrapper">
                                              {" "}
                                              Container Chassis
                                            </span>
                                          </h3>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-fe0e129 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="fe0e129"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f8b152f"
                          data-id="f8b152f"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-4d19969 elementor-widget elementor-widget-transx_heading"
                              data-id="4d19969"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_heading_widget">
                                  <div className="transx_up_heading">
                                    Features
                                  </div>
                                  <div className="transx_up_heading_overlay">
                                    Features
                                  </div>
                                  <h2 className="transx_heading">Features </h2>
                                </div>
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-9ed0f85 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="9ed0f85"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-extended">
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-30b6abc"
                                  data-id="30b6abc"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-3e097c5 elementor-widget elementor-widget-image"
                                      data-id="3e097c5"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/1-2.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/1-2-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/1-2-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-2.png"
                                            className="attachment-full size-full wp-image-3481 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-2.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-2-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/1-2-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-bae4302 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="bae4302"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              Painting{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                Abrasive blast of all metal
                                                surfaces - not less than SA-2.5
                                                to achieve clean bare steel.
                                                Surface will be coated with
                                                electrophoresis primer and
                                                powder topcoat. Total thickness
                                                not less than 80μm after dry
                                                membrane. Coating supplier: PPG
                                                (7-year warranty).
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d855faa"
                                  data-id="d855faa"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-ff47365 elementor-widget elementor-widget-image"
                                      data-id="ff47365"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/BS.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/BS-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/BS-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/BS.png"
                                            className="attachment-full size-full wp-image-4914 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/BS.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/BS-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/BS-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-20562c8 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="20562c8"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              Brake System{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                PHILLIPS swinger glad hand
                                                12-4906 and 12-4908, 3/8” blue
                                                air tube for control and 3/8”
                                                red for supply. HALDEX Goldseal
                                                T30/30, 2.5” stroke brake
                                                chamber. FUWA air tanks
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b177d69"
                                  data-id="b177d69"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-100a9a3 elementor-widget elementor-widget-image"
                                      data-id="100a9a3"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/4-1.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/4-1-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/4-1-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4-1.png"
                                            className="attachment-full size-full wp-image-3484 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4-1.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4-1-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/4-1-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-37c2494 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="37c2494"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              Electrical{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                GROTE wiring harness, Reserved
                                                PSI and GPS connector. (10-year
                                                warranty). ELECTRICAL
                                                RECEPTACLE: GROTE zinc alloy
                                                material with solid pins.
                                                DOCUMENT HOLDER: GROTE.
                                                Installed on roadside near crank
                                                handle. CONSPICUITY TAPE “3M”
                                                brand. Installed per federal
                                                regulations. GROTE LED lights
                                                (amp connections for S/T/T
                                                lights; PL-10 for Marker/ID/ABS
                                                lights and .180 bullets for
                                                license light). The theft proof
                                                design used for 4'' LED
                                                lighting.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-fe0cb0f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="fe0cb0f"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-extended">
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-346045f"
                                  data-id="346045f"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-214077c elementor-widget elementor-widget-image"
                                      data-id="214077c"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/3-2.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/3-2-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/3-2-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-2.png"
                                            className="attachment-full size-full wp-image-3483 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-2.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-2-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/3-2-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-d1b9e03 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="d1b9e03"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              Suspension{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                AXN tandem suspension with
                                                high-arch 3-leaf spring (354-
                                                00). Pre-painted BLACK color.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ae36069"
                                  data-id="ae36069"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-783b3e5 elementor-widget elementor-widget-image"
                                      data-id="783b3e5"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/5-1.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/5-1-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/5-1-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/5-1.png"
                                            className="attachment-full size-full wp-image-3485 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/5-1.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/5-1-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/5-1-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-f0c8eb1 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="f0c8eb1"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              Landing Gear{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                AXN FW32E00J with 60,000 lbs
                                                capacity, 2-speed 17” travel
                                                with low “T” shoes.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-22dfcef"
                                  data-id="22dfcef"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-4ef1b0b elementor-widget elementor-widget-image"
                                      data-id="4ef1b0b"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <picture>
                                          <source
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/6-1.png.webp 256w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/6-1-150x150.png.webp 150w, /bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/10/6-1-100x100.png.webp 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                            type="image/webp"
                                          />
                                          <img
                                            loading="lazy"
                                            decoding="async"
                                            src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/6-1.png"
                                            className="attachment-full size-full wp-image-3486 webpexpress-processed"
                                            alt=""
                                            srcSet="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/6-1.png 256w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/6-1-150x150.png 150w, /bullchassis/assets/bullchassis.com/wp-content/uploads/2023/10/6-1-100x100.png 100w"
                                            sizes="(max-width: 256px) 100vw, 256px"
                                          />
                                        </picture>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-c4af722 elementor-widget elementor-widget-transx_icon_box"
                                      data-id="c4af722"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_icon_box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_icon_box_widget">
                                          <div className="transx_icon_box_item transx_view_type_1">
                                            <div className="transx_icon_container">
                                              <i />
                                            </div>
                                            <h5 className="transx_icon_box_title">
                                              License Plate Bracket{" "}
                                            </h5>
                                            <div className="transx_info_container">
                                              <p>
                                                Extending from rear bolster
                                                within envelope of ICC bumper.
                                                Plate is to contain rear cluster
                                                lights, rear fleet number &amp;
                                                license plate
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-12d695e elementor-section-full_width elementor-section-height-full elementor-section-stretched elementor-section-height-default elementor-section-items-middle"
                      data-id="12d695e"
                      data-element_type="section"
                      data-e-type="section"
                      id="container_chassis"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-72acd44c"
                          data-id="72acd44c"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-023b70e elementor-widget elementor-widget-spacer"
                              data-id="023b70e"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-spacer">
                                  <div className="elementor-spacer-inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-7b72a4ae elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="7b72a4ae"
                      data-element_type="section"
                      data-e-type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-47572b2e"
                          data-id="47572b2e"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-303229f6 transx_counter_align_left transx_figure_corner_no elementor-widget elementor-widget-counter"
                              data-id="303229f6"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="counter.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-counter">
                                  <div className="elementor-counter-title">
                                    Around the world
                                  </div>{" "}
                                  <div className="elementor-counter-number-wrapper">
                                    <span className="elementor-counter-number-prefix" />
                                    <span
                                      className="elementor-counter-number"
                                      data-duration={2000}
                                      data-to-value={50}
                                      data-from-value={0}
                                    >
                                      50
                                    </span>
                                    <span className="elementor-counter-number-suffix">
                                      {" "}
                                      cities
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5812c6bf"
                          data-id="5812c6bf"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-26e8e825 transx_counter_align_left transx_figure_corner_no elementor-widget elementor-widget-counter"
                              data-id="26e8e825"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="counter.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-counter">
                                  <div className="elementor-counter-title">
                                    Happy clients
                                  </div>{" "}
                                  <div className="elementor-counter-number-wrapper">
                                    <span className="elementor-counter-number-prefix" />
                                    <span
                                      className="elementor-counter-number"
                                      data-duration={2000}
                                      data-to-value={2}
                                      data-from-value={0}
                                    >
                                      2
                                    </span>
                                    <span className="elementor-counter-number-suffix">
                                      {" "}
                                      million
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-319e90a7"
                          data-id="319e90a7"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-3016de8 transx_counter_align_left transx_figure_corner_no elementor-widget elementor-widget-counter"
                              data-id="3016de8"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="counter.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-counter">
                                  <div className="elementor-counter-title">
                                    Deliver goods every week
                                  </div>{" "}
                                  <div className="elementor-counter-number-wrapper">
                                    <span className="elementor-counter-number-prefix" />
                                    <span
                                      className="elementor-counter-number"
                                      data-duration={2000}
                                      data-to-value="1.2"
                                      data-from-value={0}
                                    >
                                      1.2
                                    </span>
                                    <span className="elementor-counter-number-suffix">
                                      {" "}
                                      million
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-63594bc elementor-section-height-min-height elementor-section-stretched elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                      data-id="63594bc"
                      data-element_type="section"
                      data-e-type="section"
                      id="contacto-mobile"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6a128a5"
                          data-id="6a128a5"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-2b78c10A elementor-section-stretched elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="2b78c10"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched"}'
                    >
                      <div className="elementor-container elementor-column-gap-default"></div>
                    </section>

                    <section
                      class="elementor-section elementor-top-section elementor-element elementor-element-2b78c10 elementor-section-stretched elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="2b78c10"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched"}'
                    >
                      <div class="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e9db89c"
                          data-id="e9db89c"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-b079eee elementor-widget elementor-widget-transx_heading"
                              data-id="b079eee"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_heading_widget">
                                  <div className="transx_up_heading">Quote</div>
                                  <div className="transx_up_heading_overlay">
                                    Quote
                                  </div>
                                  <h2 className="transx_heading">
                                    Ask for your quote{" "}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-1787929 elementor-widget elementor-widget-text-editor"
                              data-id={1787929}
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <p>Contact Us Today!</p>{" "}
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-2a32a31 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="2a32a31"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b6c4bb1"
                                  data-id="b6c4bb1"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-10b3cf1 elementor-widget elementor-widget-html"
                                      data-id="10b3cf1"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="html.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_contact-trigger">
                                          <h4 className="transx_contact-trigger__title">
                                            How we can help you?
                                          </h4>
                                          <a
                                            className="transx_button"
                                            href="#contacto"
                                            style={{ marginTop: 19 }}
                                          >
                                            <span>Contact us</span>
                                            <svg className="icon">
                                              <svg
                                                viewBox="0 0 150 78.6"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z" />
                                              </svg>
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-74dadfa"
                          data-id="74dadfa"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-b1133da elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="b1133da"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4c98f11"
                                  data-id="4c98f11"
                                  data-element_type="column"
                                  data-e-type="column"
                                  data-settings='{"background_background":"classic"}'
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-7b4ad90 elementor-widget elementor-widget-transx_heading"
                                      data-id="7b4ad90"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_heading_widget">
                                          <h3 className="transx_heading">
                                            Request a quote{" "}
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-51d64d2 elementor-button-align-stretch elementor-widget elementor-widget-form"
                                      data-id="51d64d2"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                      data-widget_type="form.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <form
                                          className="elementor-form"
                                          method="post"
                                          name="New Form"
                                          aria-label="New Form"
                                          onSubmit={(event) =>
                                            handleQuoteSubmit(event, "mobile")
                                          }
                                        >
                                          <input
                                            type="hidden"
                                            name="post_id"
                                            defaultValue={57}
                                          />
                                          <input
                                            type="hidden"
                                            name="form_id"
                                            defaultValue="51d64d2"
                                          />
                                          <input
                                            type="hidden"
                                            name="referer_title"
                                            defaultValue="Bull Chassis - Container Chassis for Sale"
                                          />
                                          <input
                                            type="hidden"
                                            name="queried_id"
                                            defaultValue={57}
                                          />
                                          <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            className="bull-hidden-honeypot"
                                            aria-hidden="true"
                                          />
                                          <div className="elementor-form-fields-wrapper elementor-labels-">
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                              <label
                                                htmlFor="form-field-name"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Name{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="text"
                                                name="form_fields[name]"
                                                id="form-field-name"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Name"
                                              />
                                            </div>
                                            <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                              <label
                                                htmlFor="form-field-email"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Email{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="email"
                                                name="form_fields[email]"
                                                id="form-field-email"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Email"
                                                required="required"
                                              />
                                            </div>
                                            <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_c8fc5cc elementor-col-100 elementor-field-required">
                                              <label
                                                htmlFor="form-field-field_c8fc5cc"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Phone Number{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="tel"
                                                name="form_fields[field_c8fc5cc]"
                                                id="form-field-field_c8fc5cc"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Phone Number"
                                                required="required"
                                                pattern="[0-9()#&+*-=.]+"
                                                title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                              />
                                            </div>
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_624c46d elementor-col-100">
                                              <label
                                                htmlFor="form-field-field_624c46d"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Company{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="text"
                                                name="form_fields[field_624c46d]"
                                                id="form-field-field_624c46d"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Company"
                                              />
                                            </div>
                                            <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                              <label
                                                htmlFor="form-field-message"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Message{" "}
                                              </label>
                                              <textarea
                                                className="elementor-field-textual elementor-field  elementor-size-sm"
                                                name="form_fields[message]"
                                                id="form-field-message"
                                                rows={3}
                                                placeholder="Tell us about your specific needs"
                                                defaultValue={""}
                                              />{" "}
                                            </div>
                                          
                                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                              <button
                                                className="elementor-button elementor-size-sm"
                                                type="submit"
                                                disabled={
                                                  quoteFormStatus.mobile.state === "submitting"
                                                }
                                              >
                                                <span className="elementor-button-content-wrapper">
                                                  <span className="elementor-button-text">
                                                    {quoteFormStatus.mobile.state === "submitting"
                                                      ? spanish
                                                        ? "Enviando..."
                                                        : "Sending..."
                                                      : "Send"}
                                                  </span>
                                                </span>
                                              </button>
                                            </div>
                                            {quoteFormStatus.mobile.state !== "idle" && (
                                              <p
                                                className={`bull-form-status bull-form-status--${quoteFormStatus.mobile.state}`}
                                                role="status"
                                              >
                                                {quoteFormStatus.mobile.message}
                                              </p>
                                            )}
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-9ae1966 elementor-section-stretched elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="9ae1966"
                      data-element_type="section"
                      data-e-type="section"
                      id="contacto"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0a735de"
                          data-id="0a735de"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-5c0eab9 elementor-widget elementor-widget-transx_heading"
                              data-id="5c0eab9"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_heading_widget">
                                  <div className="transx_up_heading">Quote</div>
                                  <div className="transx_up_heading_overlay">
                                    Quote
                                  </div>
                                  <h2 className="transx_heading">
                                    Ask for your quote{" "}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5e7a841 elementor-widget elementor-widget-text-editor"
                              data-id="5e7a841"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <p>Contact Us Today!</p>{" "}
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-0d4be61 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="0d4be61"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b15c03c"
                                  data-id="b15c03c"
                                  data-element_type="column"
                                  data-e-type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-aefc042 elementor-widget elementor-widget-html"
                                      data-id="aefc042"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="html.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_contact-trigger">
                                          <h4 className="transx_contact-trigger__title">
                                            How we can help you?
                                          </h4>
                                          <a
                                            className="transx_button"
                                            href="#contacto"
                                            style={{ marginTop: 19 }}
                                          >
                                            <span>Contact us</span>
                                            <svg className="icon">
                                              <svg
                                                viewBox="0 0 150 78.6"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z" />
                                              </svg>
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-c2a879b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="c2a879b"
                              data-element_type="section"
                              data-e-type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a0762b9"
                                  data-id="a0762b9"
                                  data-element_type="column"
                                  data-e-type="column"
                                  data-settings='{"background_background":"classic"}'
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-18302ef elementor-widget elementor-widget-transx_heading"
                                      data-id="18302ef"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-widget_type="transx_heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="transx_heading_widget">
                                          <h3 className="transx_heading">
                                            Request a quote{" "}
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-b7d0464 elementor-button-align-stretch elementor-widget elementor-widget-form"
                                      data-id="b7d0464"
                                      data-element_type="widget"
                                      data-e-type="widget"
                                      data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                      data-widget_type="form.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <form
                                          className="elementor-form"
                                          method="post"
                                          name="New Form"
                                          aria-label="New Form"
                                          onSubmit={(event) =>
                                            handleQuoteSubmit(event, "desktop")
                                          }
                                        >
                                          <input
                                            type="hidden"
                                            name="post_id"
                                            defaultValue={57}
                                          />
                                          <input
                                            type="hidden"
                                            name="form_id"
                                            defaultValue="b7d0464"
                                          />
                                          <input
                                            type="hidden"
                                            name="referer_title"
                                            defaultValue="Bull Chassis - Container Chassis for Sale"
                                          />
                                          <input
                                            type="hidden"
                                            name="queried_id"
                                            defaultValue={57}
                                          />
                                          <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            className="bull-hidden-honeypot"
                                            aria-hidden="true"
                                          />
                                          <div className="elementor-form-fields-wrapper elementor-labels-">
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                              <label
                                                htmlFor="form-field-name"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Name{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="text"
                                                name="form_fields[name]"
                                                id="form-field-name"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Name"
                                              />
                                            </div>
                                            <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                              <label
                                                htmlFor="form-field-email"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Email{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="email"
                                                name="form_fields[email]"
                                                id="form-field-email"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Email"
                                                required="required"
                                              />
                                            </div>
                                            <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_ffc519a elementor-col-100">
                                              <label
                                                htmlFor="form-field-field_ffc519a"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Phone{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="tel"
                                                name="form_fields[field_ffc519a]"
                                                id="form-field-field_ffc519a"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Phone"
                                                pattern="[0-9()#&+*-=.]+"
                                                title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                              />
                                            </div>
                                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_624c46d elementor-col-100">
                                              <label
                                                htmlFor="form-field-field_624c46d"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Company{" "}
                                              </label>
                                              <input
                                                size={1}
                                                type="text"
                                                name="form_fields[field_624c46d]"
                                                id="form-field-field_624c46d"
                                                className="elementor-field elementor-size-sm  elementor-field-textual"
                                                placeholder="Company"
                                              />
                                            </div>
                                            <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                              <label
                                                htmlFor="form-field-message"
                                                className="elementor-field-label elementor-screen-only"
                                              >
                                                Message{" "}
                                              </label>
                                              <textarea
                                                className="elementor-field-textual elementor-field  elementor-size-sm"
                                                name="form_fields[message]"
                                                id="form-field-message"
                                                rows={3}
                                                placeholder="Message"
                                                defaultValue={""}
                                              />{" "}
                                            </div>
                                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                              <button
                                                className="elementor-button elementor-size-sm"
                                                type="submit"
                                                disabled={
                                                  quoteFormStatus.desktop.state === "submitting"
                                                }
                                              >
                                                <span className="elementor-button-content-wrapper">
                                                  <span className="elementor-button-text">
                                                    {quoteFormStatus.desktop.state === "submitting"
                                                      ? spanish
                                                        ? "Enviando..."
                                                        : "Sending..."
                                                      : "Send"}
                                                  </span>
                                                </span>
                                              </button>
                                            </div>
                                            {quoteFormStatus.desktop.state !== "idle" && (
                                              <p
                                                className={`bull-form-status bull-form-status--${quoteFormStatus.desktop.state}`}
                                                role="status"
                                              >
                                                {quoteFormStatus.desktop.message}
                                              </p>
                                            )}
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3b8d14c"
                          data-id="3b8d14c"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-2be28e53 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="2be28e53"
                      data-element_type="section"
                      data-e-type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e5d6028"
                          data-id="3e5d6028"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-4cd982b9 elementor-widget elementor-widget-transx_heading"
                              data-id="4cd982b9"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_heading_widget">
                                  <div className="transx_up_heading">
                                    {copy.gallery}
                                  </div>
                                  <div className="transx_up_heading_overlay">
                                    {copy.gallery}
                                  </div>
                                  <h2 className="transx_heading">
                                    {copy.ourGallery}{" "}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-3995bdb elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default bullchassis-gallery-section"
                      data-id="3995bdb"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ccb58c"
                          data-id="4ccb58c"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-b051b31 elementor-widget elementor-widget-transx_gallery_slider"
                              data-id="b051b31"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_gallery_slider.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_gallery_slider_widget">
                                  <div className="transx_gallery_slider_wrapper">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="transx_causes_slider_navigation_container">
                                            <div className="transx_slider_arrows" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Swiper
                                      modules={[Navigation, Pagination, Autoplay]}
                                      className="transx_gallery_carousel bullchassis-gallery-swiper"
                                      slidesPerView={4}
                                      slidesPerGroup={1}
                                      spaceBetween={0}
                                      loop={true}
                                      autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                      }}
                                      speed={500}
                                      navigation
                                      pagination={{ clickable: true }}
                                      breakpoints={{
                                        0: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 4 },
                                      }}
                                    >
                                      {galleryImages.map((image) => (
                                        <SwiperSlide
                                          key={image.href}
                                          className="bullchassis-gallery-slide"
                                        >
                                          <div className="transx_gallery_slider_item">
                                            <div className="transx_gallery_slider_wrapper">
                                              <a
                                                href={image.href}
                                                data-fancybox="gallery"
                                                data-elementor-open-lightbox="no"
                                              >
                                                <picture>
                                                  <source
                                                    srcSet={image.webp}
                                                    type="image/webp"
                                                  />
                                                  <img
                                                    decoding="async"
                                                    src={image.src}
                                                    alt=""
                                                    className="webpexpress-processed"
                                                  />
                                                </picture>
                                              </a>
                                            </div>
                                          </div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-271a5322 elementor-section-stretched elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="271a5322"
                      data-element_type="section"
                      data-e-type="section"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-30d85bdb"
                          data-id="30d85bdb"
                          data-element_type="column"
                          data-e-type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-58afcf63 elementor-widget elementor-widget-transx_blog_slider"
                              data-id="58afcf63"
                              data-element_type="widget"
                              data-e-type="widget"
                              data-widget_type="transx_blog_slider.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="transx_blog_carousel_widget">
                                  <div className="transx_blog_carousel_wrapper">
                                    <div className="row">
                                      <div className="col-xl-4">
                                        <div className="transx_up_heading">
                                          {copy.blog}
                                        </div>
                                        <div className="transx_up_heading_overlay">
                                          {copy.blog}
                                        </div>
                                        <h2 className="transx_heading">
                                          {copy.latestNews}
                                        </h2>
                                        <div className="transx_causes_slider_navigation_container">
                                          <div className="transx_slider_arrows" />
                                        </div>
                                      </div>
                                      <div className="col-xl-8">
                                        <div className="transx_offset_container">
                                          <div className="transx_offset_container_wrapper">
                                            <Swiper
                                              modules={[Navigation, Pagination]}
                                              className="transx_blog_carousel bullchassis-news-swiper"
                                              slidesPerView={2}
                                              slidesPerGroup={1}
                                              spaceBetween={24}
                                              loop={true}
                                              speed={500}
                                              navigation
                                              pagination={{ clickable: true }}
                                              breakpoints={{
                                                0: { slidesPerView: 1 },
                                                1024: { slidesPerView: 2 },
                                              }}
                                            >
                                              {latestNewsPosts.map((post) => (
                                                <SwiperSlide
                                                  key={post.title}
                                                  className="bullchassis-news-slide"
                                                >
                                                  <div className="transx_blog_slider_item">
                                                    <div className="transx_blog_slider_item_wrapper">
                                                      <div className="transx_blog_slider_image_cont">
                                                        <picture>
                                                          <source
                                                            srcSet={post.webp}
                                                            type="image/webp"
                                                          />
                                                          <img
                                                            decoding="async"
                                                            className="transx_img--bg webpexpress-processed"
                                                            src={post.image}
                                                            alt=""
                                                          />
                                                        </picture>
                                                        <div className="transx_post_cat_cont">
                                                          <div className="transx_post_cat_wrapper">
                                                            <a
                                                              href="#"
                                                              className="link link_text"
                                                            >
                                                              {post.category}
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="transx_blog_details_container">
                                                        <div className="transx_blog_slider_meta">
                                                          <span className="transx_blog_date">
                                                            {post.date}
                                                          </span>
                                                          <span className="transx_separator">
                                                            /
                                                          </span>
                                                          <span className="transx_blog_slider_author">
                                                            by {post.author}
                                                          </span>
                                                        </div>
                                                        <h5 className="transx_blog_title">
                                                          <a href="#">{post.title}</a>
                                                        </h5>
                                                        <p className="transx_blog_excerpt">
                                                          {post.excerpt}
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </SwiperSlide>
                                              ))}
                                            </Swiper>
                                            <div
                                              className="transx_blog_carousel transx_slider_slick"
                                              data-slider-options='{"pauseOnHover":true,"autoplay":false,"infinite":true,"speed":500,"rtl":false,"slidesToShow":2,"slidesToScroll":1}'
                                            >
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Octubre-582x640.png.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Octubre-582x640.png"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          Uncategorized
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        September 12, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Yarely
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        Bull Chassis: Leading
                                                        the Global Container
                                                        Chassis Market
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      International trade and
                                                      logistics heavily rely on
                                                      the efficient
                                                      transportation of
                                                      containers. In this...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Septiembre-582x640.png.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Septiembre-582x640.png"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          chasis de contenedor
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        September 12, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Yarely
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        The Container Market: A
                                                        Driver of Global Economy
                                                        and Innovation
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      The container market has
                                                      experienced exponential
                                                      growth in recent decades,
                                                      transforming the way
                                                      global...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/09/Agosto-582x640.png.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/09/Agosto-582x640.png"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        September 12, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Yarely
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        Bull Chassis: Innovation
                                                        and Quality for the
                                                        Transportation Industry
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      At Bull Chassis, we pride
                                                      ourselves on being leaders
                                                      in the manufacturing of
                                                      high-quality chassis for
                                                      the...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/bus-production-industry-2023-11-27-05-25-48-utc-1-scaled-582x640.jpeg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/bus-production-industry-2023-11-27-05-25-48-utc-1-scaled-582x640.jpeg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        January 15, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        The container chassis
                                                        industry
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      The container chassis
                                                      industry is a crucial
                                                      component of the global
                                                      transportation and
                                                      logistics sector....
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/fleet-of-new-heavy-trucks-transportation-shippin-2023-11-27-05-30-32-utc-scaled-582x640.jpg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/fleet-of-new-heavy-trucks-transportation-shippin-2023-11-27-05-30-32-utc-scaled-582x640.jpg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        January 15, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        The Chassis: Fundamental
                                                        Pillars of the
                                                        Transportation Industry
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      In the vast world of the
                                                      transportation industry,
                                                      one of the most essential
                                                      but often overlooked...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2024/01/hand-grasps-a-virtual-global-internet-connection-m-2023-11-27-05-11-13-utc-scaled-582x640.jpg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2024/01/hand-grasps-a-virtual-global-internet-connection-m-2023-11-27-05-11-13-utc-scaled-582x640.jpg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        January 15, 2024
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        The market and its
                                                        competition
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      The global container
                                                      chassis market is a highly
                                                      competitive and dynamic
                                                      sector, crucial to the
                                                      efficiency...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/08/blog_1-582x640.jpg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/08/blog_1-582x640.jpg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        August 4, 2023
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        The Financial Advantages
                                                        of Leasing with Bull
                                                        Leasing: Boosting
                                                        Efficiency in the
                                                        Transportation Industry
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      Today, the business world
                                                      is in constant flux,
                                                      driven by technological
                                                      innovations and disruptive
                                                      business...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/08/blog2-582x640.jpg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/08/blog2-582x640.jpg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        August 4, 2023
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        Leasing and Depreciation
                                                        of Assets: A New
                                                        Perspective with Bull
                                                        Leasing
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      Logistics and supply chain
                                                      management are fundamental
                                                      aspects for any company in
                                                      the transport industry....
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/03/blog3-582x640.png.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/03/blog3-582x640.png"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        March 9, 2023
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        Tri-axle vs. Gooseneck
                                                        Container Chassis:
                                                        Differences and
                                                        Advantages
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      Two popular types of
                                                      container chassis are
                                                      tri-axle and gooseneck.
                                                      While both have their
                                                      unique features...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="transx_blog_slider_item">
                                                <div className="transx_blog_slider_item_wrapper">
                                                  <div className="transx_blog_slider_image_cont">
                                                    <picture>
                                                      <source
                                                        srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/2023/03/blog4-582x640.jpeg.webp"
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        decoding="async"
                                                        className="transx_img--bg webpexpress-processed"
                                                        src="/bullchassis/assets/bullchassis.com/wp-content/uploads/2023/03/blog4-582x640.jpeg"
                                                        alt=""
                                                      />
                                                    </picture>
                                                    <div className="transx_post_cat_cont">
                                                      <div className="transx_post_cat_wrapper">
                                                        <a
                                                          href="#"
                                                          className="link link_text"
                                                        >
                                                          container chassis
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="transx_blog_details_container">
                                                    <div className="transx_blog_slider_meta">
                                                      <span className="transx_blog_date">
                                                        March 4, 2023
                                                      </span>
                                                      <span className="transx_separator">
                                                        /
                                                      </span>
                                                      <span className="transx_blog_slider_author">
                                                        by Alan Gibrán Avalos
                                                        Hernández
                                                      </span>
                                                    </div>
                                                    <h5 className="transx_blog_title">
                                                      <a href="#">
                                                        Revolutionizing the
                                                        Shipping Industry with
                                                        BullChassis: Your
                                                        Trusted Ocean Containers
                                                        and Port Chassis
                                                        Manufacturer
                                                      </a>
                                                    </h5>
                                                    <p className="transx_blog_excerpt">
                                                      Discover BullChassis, a
                                                      global leader in ocean
                                                      containers &amp; port
                                                      chassis manufacturing.
                                                      Quality products,...
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      className="elementor-element elementor-element-35d8489 e-flex e-con-boxed e-con e-parent"
                      data-id="35d8489"
                      data-element_type="container"
                      data-e-type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-3bed8c0 e-con-full e-flex e-con e-child"
                          data-id="3bed8c0"
                          data-element_type="container"
                          data-e-type="container"
                        >
                          <div
                            className="elementor-element elementor-element-3101389 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box"
                            data-id={3101389}
                            data-element_type="widget"
                            data-e-type="widget"
                            id="locations"
                            data-widget_type="icon-box.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-box-wrapper">
                                <div className="elementor-icon-box-icon">
                                  <span className="elementor-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-map-marked-alt"
                                    />{" "}
                                  </span>
                                </div>
                                <div className="elementor-icon-box-content">
                                  <h3 className="elementor-icon-box-title">
                                    <span>Location </span>
                                  </h3>
                                  <p className="elementor-icon-box-description">
                                    <b>Houston Office:</b>
                                    <br />
                                    <a href="tel:+1 (844) 424-2774">
                                      +1 (844) 424-2774
                                    </a>
                                    <br />
                                    4811 N McCarty St suite b, Houston, TX
                                    77013, Estados Unidos{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-7d7119f e-flex e-con-boxed e-con e-parent"
                      data-id="7d7119f"
                      data-element_type="container"
                      data-e-type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-09251a7 elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-wpml-language-switcher"
                          data-id="09251a7"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_position":"fixed"}'
                          data-widget_type="wpml-language-switcher.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="wpml-elementor-ls">
                              <div
                                role="navigation"
                                aria-label="Language Switcher"
                                className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-vertical"
                              >
                                <ul>
                                  <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-vertical">
                                    <a
                                      href="/"
                                      hrefLang="en"
                                      lang="en"
                                      className="wpml-ls-link"
                                      aria-current="page"
                                      aria-label="Switch to English"
                                      title="Switch to English"
                                    >
                                      <picture>
                                        <source
                                          srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/icons8-estados-unidos-48.png.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          decoding="async"
                                          className="wpml-ls-flag webpexpress-processed"
                                          src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/icons8-estados-unidos-48.png"
                                          alt="English"
                                          loading="lazy"
                                          width={18}
                                          height={12}
                                        />
                                      </picture>
                                    </a>
                                  </li>
                                  <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-vertical">
                                    <a
                                      href="#"
                                      hrefLang="es"
                                      lang="es"
                                      className="wpml-ls-link"
                                      aria-label="Switch to Spanish"
                                      title="Switch to Spanish"
                                    >
                                      <picture>
                                        <source
                                          srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/bandera_mx.png.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          decoding="async"
                                          className="wpml-ls-flag webpexpress-processed"
                                          src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/bandera_mx.png"
                                          alt="Spanish"
                                          loading="lazy"
                                          width={18}
                                          height={12}
                                        />
                                      </picture>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transx_content_paging_wrapper"></div>
              </div>
              {/* Sidebar Container */}
            </div>
          </div>
        </div>
      </div>
      <div className="transx_back_to_top_button">
        <svg className="icon">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Rectangle_8_copy_2"
              className="st0"
              d="M5.9,0h2v30h-2V0z M0,23l1.4-1.4L7.8,28l-1.4,1.4L0,23z M13.8,23l-1.4-1.4L6,28 l1.4,1.4L13.8,23z"
            />
            <rect x="6.6" y="25.8" className="st0" width="1.2" height="3.8" />
          </svg>
        </svg>
      </div>
      <div className="transx_footer_container ">
        <div className="transx_prefooter_container">
          <div className="container">
            <div className="transx_prefooter_wrapper transx_prefooter_type_3">
              <div id="block-13" className="widget footer_widget widget_block">
                <div className="footer_widget_wrapper">
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                      <div id="footer-icons">
                        <i aria-hidden="true" className="fas fa-phone-alt" />
                      </div>
                      <h2 className="wp-block-heading has-text-align-center">
                        Contact Us
                      </h2>
                      <p className="has-text-align-center">
                        <a href="tel:8444242774">
                          (844) 4 CHASSIS – (844) 424 2774
                        </a>
                      </p>
                      <p className="has-text-align-center">
                        <a href="tel:4422579946">442 257 9946</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="block-18" className="widget footer_widget widget_block">
                <div className="footer_widget_wrapper">
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        role="navigation"
        aria-label="Language Switcher"
        className="wpml-ls-statics-footer wpml-ls wpml-ls-legacy-list-horizontal"
      >
        <ul>
          <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
            <a
              href="/"
              hrefLang="en"
              lang="en"
              className="wpml-ls-link"
              aria-current="page"
              aria-label="Switch to English (English)"
              title="Switch to English (English)"
            >
              <picture>
                <source
                  srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/icons8-estados-unidos-48.png.webp"
                  type="image/webp"
                />
                <img
                  className="wpml-ls-flag webpexpress-processed"
                  src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/icons8-estados-unidos-48.png"
                  alt=""
                  loading="lazy"
                  width={18}
                  height={12}
                />
              </picture>
              <span className="wpml-ls-native">English</span>
            </a>
          </li>
          <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
            <a
              href="#"
              hrefLang="es"
              lang="es"
              className="wpml-ls-link"
              aria-label="Switch to Spanish (Español)"
              title="Switch to Spanish (Español)"
            >
              <picture>
                <source
                  srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/bandera_mx.png.webp"
                  type="image/webp"
                />
                <img
                  className="wpml-ls-flag webpexpress-processed"
                  src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/bandera_mx.png"
                  alt=""
                  loading="lazy"
                  width={18}
                  height={12}
                />
              </picture>
              <span className="wpml-ls-native">Español</span>
              <span className="wpml-ls-display">
                <span className="wpml-ls-bracket"> (</span>Spanish
                <span className="wpml-ls-bracket">)</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <link
        rel="stylesheet"
        id="wc-blocks-style-css"
        href="#"
        type="text/css"
        media="all"
      />
    </div>
  );
}
