import '../Styles/Home.css'
import {dummyListings} from '../../DummyData/DummyListings'
import { Navbar } from "../Navbar"
import { Result } from '../Result'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Home = (props) => {
    console.log(dummyListings)
    return (
        <div className='home-container'>
            <Navbar/>
            <div className='search'>
                <form >
                    <p className='search-label'>Search for a place:</p>
                    <div className='inputs'>
                        <input className='room-search' type='text' placeholder='What are you looking for?' id='text-input'/>
                        <input type='text' placeholder='Location' title='Enter location' id='location-input'/>
                        <input type='text' placeholder='Filters' title='Seperate filters by commas' id='filter-input'/>
                        <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </div>
                </form>
            </div>
            <div className='results'>
                {dummyListings.map((listing) => {
                    return <Result result={listing}/>
                })}
            </div>
        </div>
    )
}