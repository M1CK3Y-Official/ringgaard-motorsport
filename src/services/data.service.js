import { FaEnvelope, FaInstagram, FaPhone, FaTiktok, FaYoutube, FaFacebookF } from 'react-icons/fa6';




export const getMenuData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigation?populate[logoLink][populate][image][fields][0]=url&populate[logoLink][populate][image][fields][1]=width&populate[logoLink][populate][image][fields][2]=height&populate[logoLink][populate][image][fields][3]=alternativeText&populate[link]=*`);
        const data = await response.json();
        return data.data.attributes;
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
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer?populate[content][populate][0]=group&populate[content][populate][1]=socials`);
        const data = await response.json();
        return data.data.attributes;
    } catch (error) {
        console.log("Fejl ved at hente footer data:", error);
        throw error;
    }
}


export const getCars = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cars?populate=*`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("Fejl ved at hente biler:", error);
        throw error;
    }
}




export const getTestData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tests?populate=*`);
        const data = await response.json();
        console.log("API Response:", data.data);
        return data.data.attributes;
    } catch (error) {
        console.log("Fejl ved at hente test data:", error);
        throw error;
    }
}


export const getSponsorsTeaserData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sponsors?filters[id][$in]=4&filters[id][$in]=38&filters[id][$in]=24&filters[id][$in]=32&populate[logo][fields][0]=url&populate[logo][fields][1]=width&populate[logo][fields][2]=height`);
        const data = await response.json();
        const sponsors = data?.data || [];
        return sponsors;
    } catch (error) {
        console.log("Fejl ved at hente Udvalgte Sponsors data:", error);
        throw error;
    }
}

export const getSponsorsData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sponsors?populate[logo][fields][0]=url&populate[logo][fields][1]=width&populate[logo][fields][2]=height`);
        const data = await response.json();
        console.log("Sponsors Data:", data.data);
        return data.data.attributes;
    } catch (error) {
        console.log("Fejl ved at hente Sponsors data:", error);
        throw error;
    }
}


// export const getHomePageData = async () => {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/forside?populate[hero][populate][image][fields][0]=url&populate[hero][populate][image][fields][1]=alternativeText&populate[hero][populate][image][fields][2]=width&populate[hero][populate][image][fields][3]=height&populate[blocks][populate][sponsors][fields][0]=name&populate[blocks][populate][sponsors][fields][1]=url&populate[blocks][populate][sponsors][populate][logo][fields][0]=url&populate[blocks][populate][sponsors][populate][logo][fields][1]=width&populate[blocks][populate][sponsors][populate][logo][fields][2]=height`);
//         const data = await response.json();
//         console.log("Forside Data:", data.data);
//         return data.data.attributes;
//     } catch (error) {
//         console.log("Fejl ved at hente Forside data:", error);
//         throw error;
//     }
// }