import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function OurPeople() {
    return (
        <>
            <Head>
                <title>Our People</title>
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
                    <iframe src='https://my.spline.design/gitnesssplinetest-c1629cb3bc9b50a76cc1b540f87c38b8/' frameBorder='0' width='100%' height='100%'></iframe>
                    <div className="container">
                        <h2>Welcome To Our People</h2>
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
