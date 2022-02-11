import { MongoClient } from 'mongodb';

const handler = async (req, res) => 
{
    if(req.method === 'POST')
    {
        const data = req.body;

        const { title, image, address, description } = data;

        // console.log(data);

        const client = await MongoClient.connect('mongodb://localhost:27017/meetups');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        // console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup Inserted' });
    }

}

export default handler;