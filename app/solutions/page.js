import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Solutions() {
    return (
        <>
            <Head>
                <title>Solutions</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <div className="container">
                    <Link href="/"><h1>Pharma Solutions</h1></Link>
                    <nav>
                        <ul>
                            <li className="dropdown">
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
                            <li className="dropdown">
                                <a href="#">Offerings</a>
                                <div class="dropdown-content">
                    <Link href="/solutions">Solutions</Link>
                    <Link href="/services">Services</Link>
                  </div>
                            </li>
                            <li className="dropdown">
                                <a href="#">About Us</a>
                                <div class="dropdown-content">
                    <Link href="/about">About i2e</Link>
                    <Link href="/ourpeople">Our People</Link>
                    <Link href="/work">Work at i2e</Link>
                    <Link href="/contact-us">Contact Us</Link>
                  </div>
                            </li>
                            <li className="dropdown">
                                <a href="#">Partners</a>
                                <div class="dropdown-content">
                    <Link href="/partners">Partners</Link>
                  </div>
                            </li>
                            <li className="dropdown">
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
                <section className="hero">
                    <iframe src='https://my.spline.design/particles-eac4a8005c4a7a6c55db9801700a6f7f/' frameBorder='0' width='100%' height='100%'></iframe>
                    <div className="container">
                        <h2>Welcome To Solutions</h2>
                    </div>
                </section>
                <section className="solutions-content">
                    <div className="container">
                        <div className="solution-list">
                            <div className="solution-item">
                                <h3>Digital Transformation</h3>
                                <p>Leveraging digital technologies to transform pharmaceutical processes and improve efficiency.</p>
                            </div>
                            <div className="solution-item">
                                <h3>Data Analytics &amp; Insights</h3>
                                <p>Harnessing the power of data to generate valuable insights for informed decision-making in the pharma industry.</p>
                            </div>
                            <div className="solution-item">
                                <h3>Technology Integration</h3>
                                <p>Seamlessly integrating cutting-edge technologies to enhance pharmaceutical operations and innovation.</p>
                            </div>
                            <div className="solution-item">
                                <h3>Custom Software Development</h3>
                                <p>Developing tailored software solutions to meet the specific needs of pharmaceutical companies.</p>
                            </div>
                            <div className="solution-item">
                                <h3>AI and Machine Learning</h3>
                                <p>Applying AI and machine learning to accelerate drug discovery, improve patient outcomes, and optimize processes.</p>
                            </div>
                            <div className="solution-item">
                                <h3>Cloud Solutions</h3>
                                <p>Providing secure and scalable cloud solutions for pharmaceutical data management and collaboration.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-bottom container">
                    <p>&copy; 2025 Pharma Solutions. All rights reserved.</p>
                    <div className="social-icons-container">
                        <ul className="social-icons">
                        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
                            <li>
                                <a href="https://www.facebook.com/i2e.consulting1"><i className="fab fa-facebook-f icon"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/i2e-consulting/posts/?feedView=all"><i className="fab fa-linkedin-in icon"></i></a></li>
                            <li>
                                <a href="https://www.i2econsulting.com/"><i className="fab fa-google-plus-g icon"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
