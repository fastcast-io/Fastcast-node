import { ActionTitle } from "../components/Helpers";

const Profile = ({ photoUrl } : any) => {
    console.log({photoUrl})
    return (<>
        <ActionTitle textValue="My Profile" />
        { photoUrl && <img src={photoUrl} width={"50px"} height={"50px"} /> }
    </>
)}

export default Profile