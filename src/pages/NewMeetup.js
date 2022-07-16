import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {
    const Navigate = useNavigate();
    function onAddMeetupHandler(meetupData) {
        fetch('https://react-meetup-app-a9ea6-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(()=>{
            Navigate("/",{replace: true});
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    )
}
export default NewMeetupsPage;