import {FaEarthAfrica} from 'react-icons/fa6'

function Navbar() {
    // console.log(props.destination)
    return (
        <div className="navbar-container">
            <div className="navbar">
                <FaEarthAfrica />
                <span className="navbar__title">My Travel Journal</span>
            </div>
        </div>
    )
}

export default Navbar;