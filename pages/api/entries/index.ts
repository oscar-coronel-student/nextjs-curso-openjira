import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database';
import { Entry, IEntry } from '@/models';

type Data = 
    | { message: string }
    | { data: IEntry[] }
    | IEntry

export default function (
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {

    switch( req.method ){
        case 'GET':
            return getEntries( res );
        case 'POST':
            return createEntry( req, res );
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getEntries = async ( res: NextApiResponse<Data> ) => {
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    return res.status(200).json({ data: entries });
}

const createEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    const { description = '', status = '' } = req.body;

    console.log(description);

    const newEntry = new Entry({ 
        description,
        status,
        createdAt: new Date().getTime(),
    });

    try{
        await db.connect();
        await newEntry.save();
        await db.disconnect();
        return res.status(201).json( newEntry )
    } catch ( error: any ){
        await db.disconnect();
        console.log(error);

        return res.status(500).json({
            message: 'Error al crear la entrada.'
        })
    }


}