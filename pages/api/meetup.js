// import React from 'react'

// const Handler = async (req, res) => 
// {
//     if(req.method === 'GET')
//     {
//         const client = await MongoClient.connect('mongodb://localhost:27017/meetups');

//         const db = client.db();

//         const meetupsCollection = db.collection('meetups');

//         const result = await meetupsCollection.selectOne(data);

//         // console.log(result);

//         client.close();
//     }
// }

// export default Handler