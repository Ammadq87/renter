import './Styles/Result.css'
export const Result = (props) => {
    return (
        <div className='result-container'>
            <div className='image'>
                <img src={props.result.Image}></img>
            </div>
            <div className='info-card'>
                <div className='header'>
                    <div className='header-title'>
                        <a className='name'>{props.result.Name}</a>
                        <p className='location'>{props.result.Location}</p>
                    </div>
                    <div className='price'>
                        <p>${props.result.Price.toFixed(2)}</p>
                    </div>
                </div>
                <div className='description'>
                    {props.result.Description}
                </div>

                <div className='tags'>
                    <p className='tag'>{props.result.Bedrooms} {props.result.Bedrooms > 1? 'Bedrooms' : 'Bedroom'}</p>
                    <p className='tag'>{props.result.Bathrooms} {props.result.Bathrooms > 1? 'Bathrooms' : 'Bathroom'}</p>
                    
                    {props.result.Tags.map((tag) => {
                        return (<p className='tag'>{tag}</p>)
                    })}
                </div>
            </div>
            
        </div>
    )
}