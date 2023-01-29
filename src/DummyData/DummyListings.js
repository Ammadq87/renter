const listingType = ['Long Term Rentals', 'Short Term Rentals', 'Room Rentals', 'Storage & Parking for Rent']
const unitType = ['Apartment', 'Condo', 'Basement', 'House', 'Townhouse', 'Duple/Triplex'];
const appliances = ['Laundry (In Unit)', 'Laundry (In Building)', 'Dishwasher', 'Fridge/Freezer'];
const accessibilityFeatures  = ['Barrier-free Entrances & Ramps', 'Visual Aids', 'Accessible Washrooms in Suite'];
const utilities = ['Hydro', 'Heat', 'Water'];
const wifiAndMore = ['Internet', 'Cable/TV']

export const dummyListings = [
    {
        ListingID: 1,
        UserListingID: 1,
        Name: '1 Bedroom House',
        ListingType: listingType[0],
        UnitType: unitType[1],
        Bedrooms: 1,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: 'Idk man issa house. eat shit sleep repeat',
        Tags: [],
        Location: 'Toronto, ON',
        Price: 1450.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp'
    },
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    ,
    {
        ListingID: 2,
        UserListingID: 2,
        Name: 'Furnished 1 BR basement apartment',
        ListingType: listingType[2],
        UnitType: unitType[2],
        Bedrooms: 3,
        Bathrooms: 2,
        AgreementType: 'Month-to-Month',
        MoveInDate: 'mm/dd/yyyy',
        Pets: false,
        Size_sqft: 800,
        Furnished: false,
        Appliances: [appliances[1]],
        AirConditioning: false,
        PersonalOutdoorSpace: false,
        Smoking: false,
        Accessibility: true,
        AccessibilityFeatures: [accessibilityFeatures[1], accessibilityFeatures[0]],
        Utilities: [utilities[1], utilities[2]],
        WifiAndMore: [wifiAndMore[1]],
        Description: `Short Term Rental only. Daily or weekly.

        Type A. Single room with shared bathroom. $65per day per person. weekly $400. it is not suitable for 2.
        
        Type B. Double room with Private Bathroom. 2 Beds. $100 per day. weekly $600.
        
        my friend's condo for a temporary rental. Sheppard/Victoria Park. 1 bedroom condo available. availble from Dec 31st to Jan 31st.monthly $4500. weekly $1500. security deposit $2000. refundable if no damages. it is suitable for 2 people.
        
        Beddings and shampoo are provided.
        
        Please present your government issued photo ID upon arrival No illegal activities allowed No excessive drinking, no loud noise, no pets. Please be tidy, clean, quiet and respectful. please call or text 6478305682. Thank you! Love birds for a couple of hours,$75. Please call for availability thank you
        
        I also listed my property on Airbnb. If you contact me directly here, it will save you Airbnb service fee`,
        Tags: ['Pet Friendly', 'Amenties', 'No Jews', 'No Blacks', 'Only Whites', 'No gays'],
        Location: 'Burlington, ON',
        Price: 3800.00,
        ContactNumber: 9054559404,
        ContactEmail: 'ammadq3@gmail.com',
        Image: 'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg'
    }
    
]

