import { FaPhone } from 'react-icons/fa6';
import { PrismaClient } from '@prisma/client';

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

const prisma = new PrismaClient();

export async function getCars() {
    try {
        const cars = await prisma.cars.findMany();
        return cars;
    } catch (error) {
        console.log("Error fetching cars:", error);
        throw new Error('Error fetching cars');
    }
}

export async function createCar(data) {
    try {
        const newCar = await prisma.cars.create({
            data: {
                name: data.name,
                engine_type: data.engine_type,
                horsepower: data.horsepower,
                weight: data.weight
            }
        });
        return newCar;
    } catch (error) {
        console.log("Error creating car:", error);
        throw new Error('Error creating car');
    }
}