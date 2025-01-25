import { FaPhone } from 'react-icons/fa6';

export const getMenuData = async () => {

    return [
        { 
            "name": "Forside", 
            "link" : "/"
        },
        { 
            "name" : "Bilen", 
            "link" : "/bilen"
        },
        { 
            "name" : "Om os", 
            "link" : "/om-os"
        },
        { 
            "name" : "Sponsorer", 
            "link" : "/sponsorer"
        },
        { 
            "name" : "Kontakt", 
            "link" : "/kontakt",
            "icon" : <FaPhone />
        },
    ]

}


export const getFooterData = async () => {

    return [
        {
            "id": "1",
            "name": "Teamet",
                "menus" : [
                    { 
                        "name": "Forside", 
                        "link" : "/"
                    },
                    { 
                        "name" : "Om os", 
                        "link" : "/om-os"
                    },
                    { 
                        "name" : "Bilen", 
                        "link" : "/bilen"
                    }
                ]
        },
        {
            "id": "2",
            "name": "Aktuelt",
                "menus" : [
                    { 
                        "name": "Nyheder", 
                        "link" : "/nyheder"
                    },
                    { 
                        "name" : "Resultater", 
                        "link" : "/resultater"
                    },
                    { 
                        "name" : "Galleri", 
                        "link" : "/galleri"
                    }
                ]
        },
        {
            "id": "3",
            "name": "Samarbejde",
                "menus" : [
                    { 
                        "name": "Pitstop Racing Club", 
                        "link" : "/pitstop-racing-club"
                    },
                    { 
                        "name" : "Sponsorer", 
                        "link" : "/sponsorer"
                    },
                    { 
                        "name" : "Kontakt", 
                        "link" : "/kontakt"
                    }
                ]
        },
    ]

}