import { Entry } from "@/src/interfaces"

interface SeedEntry extends 
Pick<Entry, 
    |'description'
    |'createdAt'
    |'status'
> {
}

interface SeedData {
    entries: SeedEntry[]
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'NextJS - Pendiente: Crear tabla de usuarios',
            status: 'pending',
            createdAt: new Date().getTime(),
        },
        {
            description: 'NextJS - Progreso: Crear tabla de dispositivos',
            status: 'in-progress',
            createdAt: new Date().getTime() - 1000000,
        },
        {
            description: 'NextJS - Finalizada: Crear tabla de notas',
            status: 'finished',
            createdAt: new Date().getTime() - 2000000,
        },
    ]
}