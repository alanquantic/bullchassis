import { useEffect, useLayoutEffect, useState } from 'react';
import MirroredPage from './MirroredPage.jsx';
import { blogPosts } from './blogPosts.js';
import { homeHeroAssets, productCatalog } from './siteContent.js';

const bodyClassName =
  'home wp-singular page-template-default page page-id-57 wp-theme-transx wp-child-theme-transx-child theme-transx woocommerce-js elementor-default elementor-kit-10 elementor-page elementor-page-57';

const productByPath = new Map(productCatalog.map((product) => [`/product/${product.slug}/`, product]));
const aboutUsProductSlugs = [
  '53gn-slider-tandem-container-chassis-usa',
  '20-40-extendable-tandem-container-chassis-with-psi-usa',
  '20-40-extendable-tandem-container-chassis-usa',
  '20-sl-tandem-container-chassis-usa',
  '80-ton-low-bed-trailer-truck-portacontenedor',
  '40-gooseneck',
  '40-lightweight-four-axle-chassis',
  '20ft-iso-tank-container-chassis',
  '40-45-48-53-extendable-triaxle-container-chassis',
  '20-40-45-extendable-triaxle-container-chassis',
  '40ft-gooseneck-lightweight',
  '40ft-gooseneck-triaxle',
  '40-45-extendable-container-chassis',
  '33-slider-tri-axle-container-chassis',
  '20-40-12-pins-triaxle-container-chassis',
  '20-40-slider-12-pins-tandem',
].map((slug) => productCatalog.find((product) => product.slug === slug)).filter(Boolean);

const archiveProductSlugs = [
  '20-sl-tandem-container-chassis-usa',
  '20-40-extendable-tandem-container-chassis-usa',
  '20-40-extendable-tandem-container-chassis-with-psi-usa',
  '20-40-12-pins-triaxle-container-chassis',
  '20-40-slider-12-pins-tandem',
  '20-40-45-extendable-triaxle-container-chassis',
  '20ft-iso-tank-container-chassis',
  '33-slider-tri-axle-container-chassis',
  '40-gooseneck',
  '40-lightweight-four-axle-chassis',
  '40-45-extendable-container-chassis',
  '40-45-48-53-extendable-triaxle-container-chassis',
  '40ft-gooseneck-lightweight',
  '40ft-gooseneck-triaxle',
  '53gn-slider-tandem-container-chassis-usa',
  '80-ton-low-bed-trailer-truck-portacontenedor',
].map((slug) => productCatalog.find((product) => product.slug === slug)).filter(Boolean);

const blogCategories = [
  { name: 'chasis de contenedor', count: 3 },
  { name: 'container chassis', count: 11 },
  { name: 'Uncategorized', count: 2 },
];
const blogTags = ['container chassis', 'pandemics', 'port chassis'];

function normalizePath(pathname = '/') {
  if (!pathname) return '/';
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return normalized.replace(/\/+/g, '/');
}

function useRouteState() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return pathname;
}

function navigateTo(pathname) {
  const nextPath = normalizePath(pathname);
  if (nextPath === normalizePath(window.location.pathname)) return;
  window.history.pushState({}, '', nextPath);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function InternalLink({ to, className, children, ariaLabel }) {
  return (
    <a
      href={to}
      className={className}
      aria-label={ariaLabel}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(to);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }}
    >
      {children}
    </a>
  );
}

function blogPostPath(slug, spanish = false) {
  return spanish ? `/es/blog/${slug}/` : `/blog/${slug}/`;
}

function productPath(product, spanish = false) {
  return spanish ? `/es/producto/${product.slug}/` : `/product/${product.slug}/`;
}

function ShellCopy(spanish = false) {
  return {
    home: 'HOME',
    about: spanish ? 'NOSOTROS' : 'ABOUT US',
    products: spanish ? 'PRODUCTOS' : 'PRODUCTS',
    contact: spanish ? 'CONTACTO' : 'CONTACT',
    blog: 'BLOG',
    contactUs: spanish ? 'CONTÁCTANOS' : 'CONTACT US',
  };
}

function ShellHeader({ spanish = false }) {
  const copy = ShellCopy(spanish);
  const localePath = spanish ? '/es/' : '/';
  const aboutPath = spanish ? '/es/sobre-nosotros/' : '/about-us/';
  const productsPath = spanish ? '/es/productos/' : '/products/';
  const blogPath = spanish ? '/es/blog/' : '/blog/';
  const contactPath = `${localePath}#contacto`;

  return (
    <>
      <div className="bull-language-switcher wpml-elementor-ls" aria-label="Language selector">
        <ul className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-vertical">
          <li className={`wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-first-item wpml-ls-item-legacy-list-vertical ${!spanish ? 'wpml-ls-current-language' : ''}`.trim()}>
            <InternalLink to="/" className="wpml-ls-link" ariaLabel="Switch language to English">
              <img
                className="wpml-ls-flag webpexpress-processed"
                src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/icons8-estados-unidos-48.png"
                srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/icons8-estados-unidos-48.png.webp"
                alt="English"
              />
            </InternalLink>
          </li>
          <li className={`wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-vertical ${spanish ? 'wpml-ls-current-language' : ''}`.trim()}>
            <InternalLink to="/es/" className="wpml-ls-link" ariaLabel="Cambiar idioma a Español">
              <img
                className="wpml-ls-flag webpexpress-processed"
                src="/bullchassis/assets/bullchassis.com/wp-content/uploads/flags/bandera_mx.png"
                srcSet="/bullchassis/assets/bullchassis.com/wp-content/webp-express/webp-images/uploads/flags/bandera_mx.png.webp"
                alt="Español"
              />
            </InternalLink>
          </li>
        </ul>
      </div>

      <header className="bull-shell-header transx_header transx_page-header transx_transparent_header_off transx_header_view_type_1 transx_tagline_off transx_header_button_on transx_side_panel_off">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-8 col-md-6 col-lg-3 d-flex align-items-center">
              <InternalLink to={localePath} className="transx_logo transx_retina_on" ariaLabel="Bull Chassis home" />
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
                    <div id="quadmenu_0" className="quadmenu-navbar-collapse collapsed in">
                      <ul className="quadmenu-navbar-nav">
                        <li className="quadmenu-item quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right">
                          <InternalLink to={localePath}>
                            <span className="quadmenu-item-content">
                              <span className="quadmenu-text hover t_1000">{copy.home}</span>
                            </span>
                          </InternalLink>
                        </li>
                        <li className="quadmenu-item quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right">
                          <InternalLink to={aboutPath}>
                            <span className="quadmenu-item-content">
                              <span className="quadmenu-text hover t_1000">{copy.about}</span>
                            </span>
                          </InternalLink>
                        </li>
                        <li className="quadmenu-item quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right">
                          <InternalLink to={productsPath}>
                            <span className="quadmenu-item-content">
                              <span className="quadmenu-text hover t_1000">{copy.products}</span>
                            </span>
                          </InternalLink>
                        </li>
                        <li className="quadmenu-item quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right">
                          <a href={contactPath}>
                            <span className="quadmenu-item-content">
                              <span className="quadmenu-text hover t_1000">{copy.contact}</span>
                            </span>
                          </a>
                        </li>
                        <li className="quadmenu-item quadmenu-item-level-0 quadmenu-has-title quadmenu-has-link quadmenu-has-background quadmenu-dropdown-right">
                          <InternalLink to={blogPath}>
                            <span className="quadmenu-item-content">
                              <span className="quadmenu-text hover t_1000">{copy.blog}</span>
                            </span>
                          </InternalLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-4 col-md-6 col-lg-4 d-flex justify-content-end align-items-center">
              <div className="transx_hamburger transx_dropdown-trigger d-inline-block d-md-none transx_side_panel_off">
                <div className="transx_hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
        <a href={contactPath} className="transx_alt_header_button transx_header_button_desktop">
          {copy.contactUs}
        </a>
      </header>
    </>
  );
}

function ShellFooter({ spanish = false }) {
  return (
    <>
      <div className="transx_footer_container">
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
                        {spanish ? 'Contáctanos' : 'Contact Us'}
                      </h2>
                      <p className="has-text-align-center">
                        <a href="tel:8444242774">(844) 4 CHASSIS - (844) 424 2774</a>
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
              </div>
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
          <li className={`wpml-ls-slot-footer wpml-ls-item wpml-ls-item-en wpml-ls-first-item wpml-ls-item-legacy-list-horizontal ${!spanish ? 'wpml-ls-current-language' : ''}`.trim()}>
            <InternalLink
              to="/"
              className="wpml-ls-link"
              ariaLabel="Switch to English (English)"
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
            </InternalLink>
          </li>
          <li className={`wpml-ls-slot-footer wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-horizontal ${spanish ? 'wpml-ls-current-language' : ''}`.trim()}>
            <InternalLink
              to="/es/"
              className="wpml-ls-link"
              ariaLabel="Switch to Spanish (Español)"
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
            </InternalLink>
          </li>
        </ul>
      </div>
    </>
  );
}

function Shell({ title, spanish = false, pathname, mainClassName = '', children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useLayoutEffect(() => {
    const previousClassName = document.body.className;
    document.body.className = `${bodyClassName}${spanish ? ' body--bullchassis-es' : ''}`;
    return () => {
      document.body.className = previousClassName;
    };
  }, [spanish]);

  return (
    <div className="bull-site-shell">
      <ShellHeader spanish={spanish} />
      <main className={`bull-site-shell__main ${mainClassName}`.trim()} data-pathname={pathname} data-lang={spanish ? 'es' : 'en'}>
        {children}
      </main>
      <ShellFooter spanish={spanish} />
    </div>
  );
}

function ListingPage({ title, spanish = false }) {
  return (
    <Shell title={title} spanish={spanish} pathname={spanish ? '/es/productos/' : '/products/'}>
      <section className="bull-listing bull-listing--archive">
        <div className="bull-listing__header">
          <p className="bull-hero__eyebrow">{spanish ? 'Catálogo' : 'Catalog'}</p>
          <h1 className="bull-listing__archive-title">{spanish ? 'Productos' : 'Products'}</h1>
          <p>{spanish ? 'Explora nuestro catálogo de chasis y soluciones de transporte.' : 'Explore our chassis catalog and transport solutions.'}</p>
        </div>
        <div className="bull-product-grid bull-product-grid--listing">
          {archiveProductSlugs.map((product) => (
            <article key={product.slug} className="bull-product-card bull-product-card--archive">
              <InternalLink to={productPath(product, spanish)} className="bull-product-card__media bull-product-card__media--square">
                <img src={productArchiveThumb(product)} alt={spanish ? product.titleEs : product.title} />
              </InternalLink>
              <div className="bull-product-card__body bull-product-card__body--archive">
                <h3>{spanish ? product.titleEs : product.title}</h3>
                <p>{spanish ? product.summaryEs : product.summary}</p>
                <InternalLink to={productPath(product, spanish)} className="bull-product-card__readmore">
                  {spanish ? 'Ver producto' : 'View product'}
                </InternalLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function ProductPage({ product, spanish = false }) {
  const relatedProducts = (product.related || [])
    .map((slug) => productCatalog.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <Shell title={`${spanish ? product.titleEs : product.title} - bullchassis`} spanish={spanish} pathname={productPath(product, spanish)}>
      <section className="bull-product">
        <div className="bull-product__gallery">
          <img src={product.gallery?.[0] || product.image} alt={spanish ? product.titleEs : product.title} />
        </div>
        <div className="bull-product__summary">
          <p className="bull-hero__eyebrow">{spanish ? 'Producto' : 'Product'}</p>
          <h1>{spanish ? product.titleEs : product.title}</h1>
          <p>{spanish ? product.summaryEs : product.summary}</p>
          <div className="bull-product__actions">
            <a href="#contact" className="bull-button bull-button--solid">{spanish ? 'Pedir cotización' : 'Get a Quote'}</a>
            <InternalLink to={spanish ? '/es/productos/' : '/products/'} className="bull-button bull-button--ghost">
              {spanish ? 'Volver al catálogo' : 'Back to catalog'}
            </InternalLink>
          </div>
          <dl className="bull-specs">
            {product.specs.map(([label, value]) => (
              <div key={label} className="bull-specs__row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bull-panel">
          <div className="bull-panel__header">
            <h2>{spanish ? 'Productos relacionados' : 'Related products'}</h2>
          </div>
          <div className="bull-product-grid bull-product-grid--related">
            {relatedProducts.map((item) => (
              <article key={item.slug} className="bull-product-card bull-product-card--compact">
                <InternalLink to={productPath(item, spanish)} className="bull-product-card__media">
                  <img src={item.image} alt={spanish ? item.titleEs : item.title} />
                </InternalLink>
                <div className="bull-product-card__body">
                  <h3>{spanish ? item.titleEs : item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </Shell>
  );
}

function AboutUsMirrorPage({ spanish = false }) {
  const title = spanish ? 'Sobre Nosotros - bullchassis' : 'About Us - bullchassis';
  return (
    <Shell title={title} spanish={spanish} pathname={spanish ? '/es/sobre-nosotros/' : '/about-us/'}>
      <section className="bull-listing">
        <div className="bull-listing__header">
          <p className="bull-hero__eyebrow">{spanish ? 'Compañía' : 'Company'}</p>
          <h1>{spanish ? 'Sobre Nosotros' : 'About Us'}</h1>
          <p>
            {spanish
              ? 'Bull Chassis fabrica soluciones de transporte robustas para la industria intermodal en Norteamérica.'
              : 'Bull Chassis manufactures robust transport solutions for the intermodal industry across North America.'}
          </p>
        </div>
      </section>

      <section className="bull-panel">
        <div className="bull-panel__header">
          <h2>{spanish ? 'Líneas destacadas' : 'Featured lines'}</h2>
        </div>
        <div className="bull-product-grid bull-product-grid--listing">
          {aboutUsProductSlugs.slice(0, 6).map((product) => (
            <article key={product.slug} className="bull-product-card">
              <InternalLink to={productPath(product, spanish)} className="bull-product-card__media">
                <img src={productArchiveThumb(product)} alt={spanish ? product.titleEs : product.title} />
              </InternalLink>
              <div className="bull-product-card__body">
                <h3>{spanish ? product.titleEs : product.title}</h3>
                <p>{spanish ? product.summaryEs : product.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function BlogArchivePage({ spanish = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 5;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = blogPosts.slice(start, start + POSTS_PER_PAGE);
  const recentPosts = blogPosts.slice(0, 5);

  function goToPage(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  }

  return (
    <Shell title="Blog - bullchassis" spanish={spanish} pathname={spanish ? '/es/blog/' : '/blog/'} mainClassName="bull-site-shell__main--blog">
      <div className="bull-blog-layout">

        {/* ── Main column ── */}
        <div className="bull-blog-main">
          {pagePosts.map((post) => (
            <article key={post.slug} className="bull-blog-card">
              <InternalLink to={blogPostPath(post.slug, spanish)} className="bull-blog-card__img-wrap">
                <img src={post.image} alt={post.title} className="bull-blog-card__img" />
              </InternalLink>
              <div className="bull-blog-card__body">
                <div className="bull-blog-card__meta">
                  <a href="#" className="bull-blog-card__cat">{post.category}</a>
                  <span className="bull-blog-card__byline">
                    {post.date} / {spanish ? 'por' : 'by'} {post.author}
                  </span>
                </div>
                <h2 className="bull-blog-card__title">
                  <InternalLink to={blogPostPath(post.slug, spanish)}>{post.title}</InternalLink>
                </h2>
                <p className="bull-blog-card__excerpt">{post.excerpt}</p>
                <InternalLink to={blogPostPath(post.slug, spanish)} className="bull-blog-card__more">
                  {spanish ? 'Explorar más' : 'Explore More'}
                </InternalLink>
              </div>
            </article>
          ))}

          {totalPages > 1 && (
            <nav className="bull-pagination bull-pagination--blog" aria-label="Blog pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`bull-pagination__btn${page === currentPage ? ' bull-pagination__btn--current' : ''}`}
                  onClick={() => goToPage(page)}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  className="bull-pagination__btn bull-pagination__btn--next"
                  onClick={() => goToPage(currentPage + 1)}
                >
                  {spanish ? 'Siguiente →' : 'Next →'}
                </button>
              )}
            </nav>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className="bull-blog-sidebar">
          {/* Search */}
          <div className="bull-blog-widget">
            <h3 className="bull-blog-widget__title">{spanish ? 'Buscar' : 'Search'}</h3>
            <div className="bull-blog-search">
              <input
                type="text"
                placeholder={spanish ? 'Buscar…' : 'Search…'}
                className="bull-blog-search__input"
                readOnly
              />
              <button className="bull-blog-search__btn" aria-label={spanish ? 'Buscar' : 'Search'}>
                <i className="fas fa-search" />
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bull-blog-widget">
            <h3 className="bull-blog-widget__title">{spanish ? 'Publicaciones recientes' : 'Recent Posts'}</h3>
            <ul className="bull-blog-recent">
              {recentPosts.map((post) => (
                <li key={post.slug} className="bull-blog-recent__item">
                  <InternalLink to={blogPostPath(post.slug, spanish)}>{post.title}</InternalLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bull-blog-widget">
            <h3 className="bull-blog-widget__title">{spanish ? 'Categorías' : 'Categories'}</h3>
            <ul className="bull-blog-cats">
              {blogCategories.map((cat) => (
                <li key={cat.name} className="bull-blog-cats__item">
                  <a href="#">{cat.name}</a>
                  <span>({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bull-blog-widget">
            <h3 className="bull-blog-widget__title">{spanish ? 'Etiquetas' : 'Tags'}</h3>
            <div className="bull-blog-tags">
              {blogTags.map((tag) => (
                <a key={tag} href="#" className="bull-blog-tags__tag">{tag}</a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Shell>
  );
}

function BlogPostPage({ post, spanish = false }) {
  return (
    <Shell
      title={`${post.title} - bullchassis`}
      pathname={spanish ? '/es/blog/' : '/blog/'}
      mainClassName="bull-site-shell__main--post"
    >
      <article className="bull-post">
        <div className="bull-post__container">
          <h1 className="bull-post__title">{post.title}</h1>
        </div>
        <img src={post.image} alt={post.title} className="bull-post__hero" />
        <div className="bull-post__container">
          <div className="bull-post__meta">
            <span className="bull-post__date">{post.date}</span>
            <span className="bull-post__sep"> | </span>
            <span className="bull-post__author">{spanish ? 'por' : 'by'} {post.author}</span>
          </div>
          <div className="bull-post__content">
            {post.contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            ) : (
              post.content.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
                if (block.type === 'ul') {
                  return (
                    <ul key={i}>
                      {block.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={i}>{block.text}</p>;
              })
            )}
          </div>
          <InternalLink to={spanish ? '/es/blog/' : '/blog/'} className="bull-post__back">
            {spanish ? '← Volver al blog' : '← Back to Blog'}
          </InternalLink>
        </div>
      </article>
    </Shell>
  );
}

export default function BullChassisRouter2() {
  const pathname = useRouteState();

  if (pathname === '/' || pathname === '/index.html') {
    return <MirroredPage />;
  }

  if (pathname === '/es/' || pathname === '/es/index.html') {
    return <MirroredPage spanish />;
  }

  if (pathname === '/about-us/') {
    return <AboutUsMirrorPage />;
  }

  if (pathname === '/es/sobre-nosotros/') {
    return <AboutUsMirrorPage spanish />;
  }

  if (
    pathname === '/products/' ||
    pathname === '/shop/' ||
    pathname === '/es/productos/' ||
    pathname === '/es/tienda/' ||
    pathname === '/productos/'
  ) {
    const isSpanish = pathname.startsWith('/es/') || pathname === '/productos/';
    const title = isSpanish
      ? (pathname === '/es/tienda/' ? 'Tienda - bullchassis' : 'Productos - bullchassis')
      : (pathname === '/products/' ? 'Products - bullchassis' : 'Shop - bullchassis');
    return <ListingPage title={title} spanish={isSpanish} />;
  }

  if (pathname === '/blog/' || pathname === '/es/blog/') {
    return <BlogArchivePage spanish={pathname.startsWith('/es/')} />;
  }

  const product = productByPath.get(pathname);
  if (product) {
    return <ProductPage product={product} />;
  }

  if (pathname.startsWith('/es/producto/')) {
    const match = productCatalog.find((item) => pathname.includes(item.slug));
    if (match) {
      return <ProductPage product={match} spanish />;
    }
  }

  if (pathname.startsWith('/blog/') && pathname !== '/blog/') {
    const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
    const post = blogPosts.find((p) => p.slug === slug);
    if (post) return <BlogPostPage post={post} />;
  }

  if (pathname.startsWith('/es/blog/') && pathname !== '/es/blog/') {
    const slug = pathname.replace(/^\/es\/blog\//, '').replace(/\/$/, '');
    const post = blogPosts.find((p) => p.slug === slug);
    if (post) return <BlogPostPage post={post} spanish />;
  }

  return (
    <Shell title="Bull Chassis">
      <section className="bull-listing">
        <div className="bull-listing__header">
          <p className="bull-hero__eyebrow">Bull Chassis</p>
          <h1>Page not found</h1>
          <p>The requested route is not mapped in the local mirror.</p>
        </div>
      </section>
    </Shell>
  );
}
