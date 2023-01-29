import { Navbar } from "../Navbar"
import { FormSection } from "./FormSection"
export const PostAd = () => {

    const formSections = [
        {
            title: 'Ad Details',
            sections: [
                {
                    name: 'Ad Type',
                    options: [{text: 'I am offering', input: 'radio', parent: 'Ad Type'}, {text: 'I want', input: 'radio', parent: 'Ad Type'}]
                },
                {
                    name: 'For Rent By',
                    options: [{text: 'Owner', input: 'radio', parent: 'For Rent By'}, {text: 'Professional', input: 'radio', parent: 'For Rent By'}]
                }
            ]
        },
       {
            title: 'Media',
            sections: [
                {
                    name: 'Add Photos',
                    options: [{text: 'Select Photos', input: 'button', parent: 'Add Photos'}]
                }
            ]
        },
        {
            title: 'Location',
            sections: [
                {
                    name:'Postal code or street address',
                    options: [{text: '', input: 'text', parent: 'Postal code or street address'}]
                }
            ]
        }
    ]

    return (
        <div>
            <Navbar/>
            {formSections.map((fs, i) => {
                return <FormSection formDetails={fs} index={i+1}/>
            })}
        </div>
        
    )
}