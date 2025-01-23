import { FaPhone } from 'react-icons/fa6';

export const getMenuData = async () => {

    return [
        { 
            "name": "Forside", 
            "link" : "/"
        },
        { 
            "name" : "Bilen", 
            "link" : "/car"
        },
        { 
            "name" : "Om mig", 
            "link" : "/about"
        },
        { 
            "name" : "Sponsorer", 
            "link" : "/sponsors"
        },
        { 
            "name" : "Kontakt", 
            "link" : "/contact",
            "icon" : <FaPhone />
        },
    ]

}