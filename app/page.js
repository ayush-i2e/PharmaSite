import Link from 'next/link';

function HomePage() {
  return (
    <>
        <header>
          <div class="container">
            <Link href="/"><h1>I2E Consulting</h1></Link>
            <nav>
              <ul>
                <li class="dropdown">
                  <a href="#">Technologies</a>
                  <div class="dropdown-content">
                    <Link href="/planisware">Planisware</Link>
                    <Link href="/generative-ai">Generative AI</Link>
                    <Link href="/project-online">Project Online</Link>
                    <Link href="/ai-ml">AI/ML</Link>
                    <Link href="/sharepoint">SharePoint</Link>
                    <Link href="/cloud">Cloud</Link>
                    <Link href="/big-data">Big Data</Link>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">Offerings</a>
                  <div class="dropdown-content">
                    <Link href="/solutions">Solutions</Link>
                    <Link href="/services">Services</Link>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">About Us</a>
                  <div class="dropdown-content">
                    <Link href="/about">About i2e</Link>
                    <Link href="/ourpeople">Our People</Link>
                    <Link href="/work">Work at i2e</Link>
                    <Link href="/contact-us">Contact Us</Link>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">Partners</a>
                  <div class="dropdown-content">
                    <Link href="/partners">Partners</Link>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">Resource Center</a>
                  <div class="dropdown-content">
                    <Link href="/blog">Blog</Link>
                    <Link href="/casestudies">Case Studies</Link>
                    <Link href="/webinars">Webinars</Link>
                    <Link href="/whitepapers">Whitepapers</Link>
                    <Link href="/events-news">Events & News</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <section class="hero">
            <iframe
              src="https://my.spline.design/squarechipsfallinginplace-bdec564d193addd169e0c3e63d7b808f/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
            <div class="container">
              <h2>Welcome To Pharma World</h2>
            </div>
          </section>

          <section class="menu-section">
            <div class="container">
              <ul class="menu-options">
                <li>Portfolio Decision Support</li>
                <li>Pharma Analytics</li>
                <li>Automation</li>
                <li>Cloud</li>
              </ul>
            </div>
          </section>

          <section class="featured-services">
            <div class="container">
              <h2>Featured Services</h2>
              <div class="services-grid">
                <div class="service">
                  <h3>Regulatory Consulting</h3>
                  <p>
                    Navigating complex regulatory landscapes with expertise and
                    precision.
                  </p>
                  <Link href="/services">Learn More</Link>
                </div>
                <div class="service">
                  <h3>Clinical Trial Management</h3>
                  <p>
                    Streamlining clinical trials for faster and more efficient drug
                    development.
                  </p>
                  <Link href="/services">Learn More</Link>
                </div>
                <div class="service">
                  <h3>Market Access Strategies</h3>
                  <p>
                    Developing effective strategies to ensure successful market
                    access and product adoption.
                  </p>
                  <Link href="/services">Learn More</Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <section class="footer-info">
            <div class="container">
              <div class="footer-grid">
                <div class="footer-col">
                  <h3>Solutions</h3>
                  <ul>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Strategy & Consulting</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Business Research</a></li>
                    <li>
                      <a href="#" rel="noopener noreferrer" target="_blank"
                        >Business Development <br />
                        and Licensing</a>
                    </li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Commercial</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h3>Technologies</h3>
                  <ul>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">PPM</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">AI/ML</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Cloud</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Big Data</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h3>Products</h3>
                  <ul>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Executive Dashboards</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Resource Management</a></li>
                    <li><a href="#" rel="noopener noreferrer" target="_blank">Competitive Intelligence</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h3>About Us</h3>
                  <ul>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/casestudies">Case Studies</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div class="footer-bottom container">
            <p>&copy; 2025 Pharma Solutions. All rights reserved.</p>
            <div class="social-icons-container">
              <ul class="social-icons">
              <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
                <li>
                  <a href="https://www.facebook.com/i2e.consulting1" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-facebook-f icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/i2e-consulting/posts/?feedView=all" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.i2econsulting.com/" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-google-plus-g icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    </>
  );
}

export default HomePage;
