import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';


const NewMeetupPage = () => {
    
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) =>
    {
        console.log(enteredMeetupData);

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');

    }
  
    return (
        <>
            <Head>
                <title>Add a New Meetups</title>
                <meta 
                    name='description' 
                    content='Add your own meetups and create amazing networking opportunities.' 
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
  )
}

export default NewMeetupPage