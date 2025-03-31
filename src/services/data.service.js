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

export const getAdminMenuData = async () => {

    return [
        { 
            "name": "Forside", 
            "link" : "/admin"
        },
        { 
            "name" : "Biler", 
            "link" : "/admin/cars"
        },
        { 
            "name" : "Sponsorer", 
            "link" : "/admin/sponsors"
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


export const getCars = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cars?populate=*`);
        const data = await response.json();
        console.log("API Response:", data.data);
        return data.data;

        // if (!response.ok) {
        //     throw new Error('Fejl ved hentning af biler');
        // }

        // console.log("Data:", data);
        // if (!data || !data.data) {
        //     throw new Error('Ingen data modtaget');
        // }


    } catch (error) {
        console.log("Fejl ved at hente biler:", error);
        throw error;
    }
}

