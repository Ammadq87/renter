import '../Styles/FormSection.css'
export const FormSection = (props) => {

    return (
        <div className='Form'>
            <h2>{props.index + '. ' + props.formDetails.title}</h2>
            {props.formDetails.sections.map((s, i) => {
                return (
                <div className='FormSection'>

                    <p className='title'>{s.name}</p>
                    <div className='inputs'>
                        {
                            s.options.map(option => {
                                return (
                                    <div>
                                        {option.input === 'radio' && <div> <input id={option.text} name={option.parent} type={option.input} value={option.text}/><label for={option.text}>{option.text}</label> </div>}
                                        {option.input === 'button' && 
                                        <div>
                                            <button onClick={() => alert("hi")}>{option.text}</button>
                                        </div>}
                                        {option.input === 'text' && 
                                        <div>
                                            <input/>
                                        </div>}
                                    </div>
                                
                                )
                            })
                        }
                    </div>
                </div>
                )
            })}
        </div>
    )
}