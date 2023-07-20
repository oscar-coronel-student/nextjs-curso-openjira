import { db } from '@/database';
import { Entry } from '@/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../models/Entry';

type Data = 
    | { message: string }
    | IEntry;

type Query = { id: string };


export default function (
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {

    const { id } = req.query as Query;

    if( !mongoose.isValidObjectId( id ) ){
        return res.status(400).json({
            message: 'El id enviado no es un id de objeto válido.'
        })
    }
    
    switch ( req.method ) {
        case 'PUT':
            return updateEntry( req, res );
    
        default:
            return res.status(400).json({ message: 'Petición inválida.' })
    }
}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    const { id } = req.query as Query;

    await db.connect();

    const entryForUpdate = await Entry.findById(id);

    if(!entryForUpdate){
        return res.status(400).send({ message: `No existe una entrada con el id: ${ id }` });
    }
    const { 
        description = entryForUpdate.description, 
        status = entryForUpdate.status 
    } = req.body;


    try {
        const entryUpdated = await Entry.findByIdAndUpdate(id, {
            description,
            status,
        }, {
            runValidators: true,
            new: true
        });
        await db.disconnect();
        return res.status(200).json(entryUpdated!);
    } catch (error: any) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: error?.errors?.status?.message })
    }

}