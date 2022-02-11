import Head from 'next/head';
import { MongoClient } from "mongodb";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


const HomePage  = (props) => 
{
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {

  //   setLoadedMeetups(DUMMY_MEETUPS)
  // }, []);

  return (
    // <MeetupList meetups={loadedMeetups} />
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
            name='description' 
            content='Browse huge list of highly active React meetups!' 
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

// SSG - Static Site Generation

export async function getStaticProps()
{

  const client = await MongoClient.connect('mongodb://localhost:27017/meetups');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();


  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}
    
    
// SSR - Server Side Rendering
    
// export async function getServerSideProps(context)
// {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS  
//     }
//   }
// }

export default HomePage 