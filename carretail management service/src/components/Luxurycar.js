import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import { useEffect, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
// import { carobjects } from './cars';

export function Luxurycar() {

    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/car.json")
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const [type, setType] = useState("");

    const search = (cars) => {
        return cars.filter(value => value.type.includes(type));
    }

    return (<>
        <div className='p-3'>
            <Link className="nav-link text-white" to="/"><button className='btn btn-primary'><BiArrowBack ></BiArrowBack></button></Link>
        </div>
        <div className='container p-4 '>
            <div><h2 className='text-white'>Here is your Luxury list </h2></div>
            <div className="d-flex flex-row typeButton mt-4">
                <button className="typebutton" onClick={e => setType(e.target.value)}>ALL cars</button>
                <button className="typebutton" value={"HATCHBACK"} onClick={e => setType(e.target.value)}>HATCHBACK</button>
                <button className="typebutton" value={"SEDAN"} onClick={e => setType(e.target.value)}>SEDAN</button>
                <button className="typebutton" value={"SUV"} onClick={e => setType(e.target.value)}>SUV</button>
                <button className="typebutton" value={"MUV"} onClick={e => setType(e.target.value)}>MUV</button>
            </div>
            <div className="row mt-5">
                {
                    search(car).map((value, index) => (
                        value.startPrice > 2000000 ?
                            <div className='col-lg-3 mt-4'>
                                <div className="card cardCarousel1">
                                    <img className="d-block carouselImage" src={value.image} alt="First slide" />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}&nbsp;{value.model}</h5>
                                        <p className="card-text"><FaRupeeSign className="icons"></FaRupeeSign>{value.startPrice / 100000} - {value.endPrice / 100000} lakh*</p>
                                        <a href={value.source} target="blank" className="btn btn-primary">Check here</a>
                                    </div>
                                </div>
                            </div> : " "
                    ))
                }
            </div>
        </div>
    </>);
}