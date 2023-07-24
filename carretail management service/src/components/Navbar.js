import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import Logo from '../images/logo3.png';
import { } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkScroll} from 'react-scroll';
import { Link } from 'react-router-dom';


export function Navbar(props) {

    const [car, setCar] = useState([]);

    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/car.json")
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const search = (cars) => {
        return cars.filter(value => value.name.toLowerCase().includes(name.toLowerCase()));
    }
  function registerClick(){
    document.getElementById("registerFORM").style.display="inline";
    document.getElementById("loginFORM").style.display="none";
  }

  function loginClick(){
    document.getElementById("loginFORM").style.display="inline";
    document.getElementById("registerFORM").style.display="none";
  } 

    return (<>
        <div className='bg nav-bar '>
            <div className='container-fluid'>
                <div className="row ">
                    <div className="col-lg-12 ">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <img src={Logo} className="logo" onClick={()=>{
                                scroll.scrollToTop()}}/>
                            <div className='search1'>

                                <form className="form-inline d-flex flex-row searchbox">
                                    <input className="form-control mr-sm-2 seacrhinput" id="searchbox1" type="search" value={name} onChange={e => setName(e.target.value)} placeholder="Search" aria-label="Search" />
                                    <button className="searchbutton" type="submit">Search</button>
                                </form>

                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link text-white" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Car
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/Allcars">All Cars</Link>
                                            <Link className="dropdown-item" to="/Budgetcars">Budget Cars
                                                <ul className="subMenu" data-track-section="SubMenu"></ul> </Link>
                                            <Link className="dropdown-item" to="/Luxurycars" >Luxury Cars</Link>
                                            <div className="dropdown-divider"></div>
                                            <LinkScroll spy={true} smooth={true} duration={400} className="dropdown-item" to="offerscroll">Offers and Discounts</LinkScroll>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <LinkScroll spy={true} smooth={true} duration={400} className="nav-link text-white" to="servicescroll">Service</LinkScroll>
                                    </li>
                                    <li className="nav-item">
                                        <LinkScroll spy={true} smooth={true} duration={400} className="nav-link text-white" to="contactscroll">Contact</LinkScroll>
                                    </li>
                                </ul>
                                <div className='search2'>
                                    <form className="form-inline my-2 my-lg-0 d-flex flex-row searchbox">
                                        <input className="form-control mr-sm-2 seacrhinput" id="searchbox2" type="search" placeholder="Search" value={name} onChange={e => setName(e.target.value)} aria-label="Search" />
                                        <button className="searchbutton" type="submit">Search</button>
                                    </form>
                                </div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <LinkScroll spy={true} smooth={true} duration={400} className="nav-link text-white" to="homepage" onClick={registerClick}>Register</LinkScroll>
                                        </li>
                                    <li className="nav-item">
                                        <LinkScroll spy={true} smooth={true} duration={400} className="nav-link text-white" to="homepage" onClick={loginClick}>Login</LinkScroll>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className='search3'>
                        <form className="form-inline my-2 my-lg-0 d-flex flex-row searchbox">
                            <input className="form-control mr-sm-2 seacrhinput" id="searchbox3" type="search" placeholder="Search" value={name} onChange={e => setName(e.target.value)} aria-label="Search" />
                            <button className="searchbutton" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="searchListBox">
                {name.length > 0 &&
                    search(car).map((valu, i) => (
                        <button key={i} className="searchListButton" id="searchButton" onChange={(e)=>{
                                setName(e.target.value.velu.name)
                        }} >{valu.name}</button>
                    ))
                }
            </div> */}
        </div>
    </>);
}