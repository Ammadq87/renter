import '../Styles/Home.css'
import {dummyListings} from '../../DummyData/DummyListings'
import { Navbar } from "../Navbar"
import { Result } from '../Result'

export const Home = () => {
    console.log(dummyListings)
    return (
        <div className='home-container'>
            <Navbar/>
            <div className='search'>
                <form >
                    <p className='search-label'>Search for a place:</p>
                    <div className='inputs'>
                        <input className='room-search' type='text' placeholder='What are you looking for?'/>
                        <input type='text' placeholder='Location' title='Enter location'/>
                        <input type='text' placeholder='Filters' title='Seperate filters by commas'/>
                        <button type='submit'>Search</button>
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