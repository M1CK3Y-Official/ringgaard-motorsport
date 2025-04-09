import { FaEnvelope, FaInstagram, FaPhone, FaTiktok, FaYoutube, FaFacebookF } from 'react-icons/fa6';

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


export const getMenuData2 = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global?populate[topnav][populate][logoLink][populate][image][fields][0]=url&populate[topnav][populate][logoLink][populate][image][fields][1]=width&populate[topnav][populate][logoLink][populate][image][fields][2]=height&populate[topnav][populate][logoLink][populate][image][fields][3]=alternativeText&populate[topnav][populate][link]=*&populate[topnav][populate][cta]=*`);
        const data = await response.json();
        console.log("API Response:", data.data.attributes.topnav);
        return data.data.attributes.topnav;
    } catch (error) {
        console.log("Fejl ved at hente topmenu data:", error);
        throw error;
    }
}

// export const getFooterData2 = async () => {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global?populate[footer][populate][groups][populate][links]=*`);
//         const data = await response.json();
//         console.log("API Response:", data.data.attributes.topnav);
//         return data.data.attributes.topnav;
//     } catch (error) {
//         console.log("Fejl ved at hente topmenu data:", error);
//         throw error;
//     }
// }




export const getFooterData = async () => {

    return [
        {
            "id": "1",
            "name": "Mathias Ringgaard",
            "subTitle": "Motorsport",
            "description": "Mathias Ringgaard Motorsport er et dansk motorsports team, med ambitionerne helt i top!",
                "socials" : [
                    {
                        "platform" : "Facebook",
                        "link" : "https://www.facebook.com/MathiasRinggaardMotorsport",
                        "icon" : <FaFacebookF  />
                    },
                    {
                        "platform" : "Instagram",
                        "link" : "https://www.instagram.com/Mathias_Ringgaard_Motorsport",
                        "icon" : <FaInstagram  />
                    },
                    {
                        "platform" : "TikTok",
                        "link" : "https://www.tiktok.com/@mathiasringgaard56",
                        "icon" : <FaTiktok  />
                    },
                    {
                        "platform" : "YouTube",
                        "link" : "https://www.youtube.com/channel/UCyde5KRpJY6RZJ64SczI1vw",
                        "icon" : <FaYoutube  />
                    }
                ]
        },
        {
            "id": "2",
            "name": "Navigation",
                "menus" : [
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
                        "name": "Sponsorer", 
                        "link" : "/sponsorer"
                    },
                    { 
                        "name" : "Kontakt", 
                        "link" : "/kontakt"
                    }
                ]
        },
        {
            "id": "3",
            "name": "Teamet",
                "menus" : [
                    { 
                        "name" : "Karriere", 
                        "link" : "/karriere"
                    },
                    { 
                        "name" : "Resultater", 
                        "link" : "/resultater"
                    },
                    { 
                        "name" : "Galleri", 
                        "link" : "/galleri"
                    },
                    { 
                        "name": "Pitstop Racing Club", 
                        "link" : "/pitstop-racing-club"
                    },
                ]
        },
        {
            "id": "4",
            "name": "Kontakt",
                "contactInfo" : [
                    { 
                        "text": "m.ringgaard@icloud.com", 
                        "mail": "m.ringgaard@icloud.com", 
                        "icon" : <FaEnvelope />
                    },
                    { 
                        "text" : "30 32 47 51", 
                        "phone" : "30324751",
                        "icon" : <FaPhone />
                    },
                    
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

    } catch (error) {
        console.log("Fejl ved at hente biler:", error);
        throw error;
    }
}

