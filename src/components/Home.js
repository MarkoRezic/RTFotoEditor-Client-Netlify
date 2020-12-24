import RTLogo from '../images/RT_logo_HD_Sharp_Transparent_Full.png';
import HTML5 from '../images/HTML5_logo.png';
import CSS3 from '../images/CSS3_logo.png';
import JAVAS from '../images/javascript_logo.png';
import SQL from '../images/sql_logo.png';
import NODE from '../images/node_logo.png';
import ATOM from '../images/atom_logo.png';
import BOOTSTRAP from '../images/bootstrap_logo.png';
import REACT from '../images/React_logo.png';
import MYSQL from '../images/mysql_logo.png';
import EXPRESS from '../images/ExpressJS_logo.png';
import AUTORI from '../images/Autori.jpeg';
import BootstrapIcon from '../svg icons/BootstrapIcon.js';

const Home = () => {
    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><img alt="" src={RTLogo} className="logo" /><strong> Projekt Foto Editor</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post">
                            <hr className="round" />
                            <h2 className="blog-post-title">O projektu</h2>
                            <p className="blog-post-meta">Zadnje ažurirano 10. studenog 2020.</p>

                            <p><strong><em>Foto Editor</em></strong> je projekt koji obuhvaća potpuno funkcionalni sustav za prijenos, pohranu i uređivanje slika putem web aplikacije.</p>
                            <hr />
                            <p>Sustav će se sastojati od same web aplikacije za uređivanje, sučelja za administratore, korisnike i goste web stranice, te baze podataka.</p>

                            <p>Web aplikacija će omogućavati korisniku uređivanje slika pomoću sljedećih modifikacija:</p>
                            <ul>

                                <li><BootstrapIcon type={9} /> Crop</li>

                                <li><BootstrapIcon type={10} /> Resize</li>

                                <li><BootstrapIcon type={11} /> Contrast</li>

                                <li><BootstrapIcon type={12} /> Gama</li>

                                <li><BootstrapIcon type={13} /> Filter</li>

                                <li><BootstrapIcon type={14} /> Brightness</li>

                                <li><BootstrapIcon type={15} /> Saturation</li>
                            </ul>
                            <hr className="round" />
                            <h2 className="w">Motivacija</h2>
                            <p>Zanimanje za grafička sučelja i manipulaciju datotekama i medijskim zapisima putem JavaScript jezika.</p>
                            <hr className="round" />
                            <h2 className="w">Tehnologije</h2>
                            <hr className="round" />
                            <div className="row justify-content-around">

                                <div className="col teh html">
                                    <img alt="" src={HTML5} className="tehimg" />
                                    <a href="https://html.spec.whatwg.org/multipage/" className="text-center" id="html" target="_blank" rel="noreferrer">HTML5</a>
                                </div>

                                <div className="col teh css3">
                                    <img alt="" src={CSS3} className="tehimg" />
                                    <a href="https://www.w3.org/Style/CSS/" className="text-center" id="css3" target="_blank" rel="noreferrer">CSS3</a>
                                </div>

                                <div className="col teh javascript">
                                    <img alt="" src={JAVAS} className="tehimg" />
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-center" id="javascript" target="_blank" rel="noreferrer">JavaScript</a>
                                </div>

                                <div className="col teh sql">
                                    <img alt="" src={SQL} className="tehimg" />
                                    <a href="https://www.iso.org/standard/63555.html" className="text-center" id="sql" target="_blank" rel="noreferrer">SQL</a>
                                </div>

                                <div className="col teh node">
                                    <img alt="" src={NODE} className="tehimg" />
                                    <a href="https://nodejs.org/en/about/" className="text-center" id="node" target="_blank" rel="noreferrer">NodeJS</a>
                                </div>

                            </div>
                            <div className="row justify-content-around">

                                <div className="col teh atom">
                                    <img alt="" src={ATOM} className="tehimg" />
                                    <a href="https://atom.io/docs" className="text-center" id="atom" target="_blank" rel="noreferrer">Atom</a>
                                </div>

                                <div className="col teh boot">
                                    <img alt="" src={BOOTSTRAP} className="tehimg" />
                                    <a href="https://getbootstrap.com/" className="text-center" id="boot" target="_blank" rel="noreferrer">Bootstrap</a>
                                </div>

                                <div className="col teh react">
                                    <img alt="" src={REACT} className="tehimg" />
                                    <a href="https://reactjs.org/" className="text-center" id="react" target="_blank" rel="noreferrer">React</a>
                                </div>

                                <div className="col teh mysql">
                                    <img alt="" src={MYSQL} className="tehimg" />
                                    <a href="https://www.mysql.com/" className="text-center" id="mysql" target="_blank" rel="noreferrer">MySQL</a>
                                </div>

                                <div className="col teh exp">
                                    <img alt="" src={EXPRESS} className="tehimg expimg" />
                                    <a href="https://expressjs.com/" className="text-center" id="exp" target="_blank" rel="noreferrer">ExpressJS</a>
                                </div>

                            </div>
                            <p id="framew" className="text-center">Frameworks</p>
                            <hr className="round" />
                        </div>


                        <div className="blog-post">
                            <h2 className="blog-post-title">Autori</h2>
                            <p className="blog-post-meta">Marko Rezić, Toni Jelonjić</p>
                            <hr className="round" />
                            <div className="row">

                                <div className="col-6" id="toni">
                                    <h4 className="w">Toni Jelonjić</h4>
                                    <p>Student 3. godine Fakulteta Strojarstva, Računarstva i Elektrotehnike u Mostaru. <br /><br />Rođen 2.8.1999.</p>
                                </div>
                                <div className="col-6" id="marko">
                                    <h4 className="w">Marko Rezić</h4>
                                    <p>Student 3. godine Fakulteta Strojarstva, Računarstva i Elektrotehnike u Mostaru. <br /><br />Rođen 25.9.1999.</p>
                                </div>
                            </div>
                            <hr className="round" />
                            <div className="row">
                                <div className="col-12">
                                    <img alt="" src={AUTORI} className="autori" />
                                </div>
                            </div>


                        </div>

                        <div className="blog-post">
                            <h5 className="w">Link Vizije</h5>
                            <p className="blog-post-meta">Zadnje ažurirano 8. studenog 2020. <strong> <a className="alink" href="https://docs.google.com/document/d/141DHijMdyPfeffnDDo_hYwJRKfGQT5NC6UDfMsEDl3Y/edit?usp=sharing" target="_blank" rel="noreferrer">Vizija</a> </strong></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;