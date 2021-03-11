import { withAuth } from "../Session";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";

const LandingWithAuth = (props) => (
    <h1>Hi {props.user.display_name}</h1>
)

const LandingWithoutAuth = () => (
    <h1>Greetings. Please <Link to={ROUTES.SIGN_IN}>sign in.</Link></h1>
)


const LandingBase = (props) => {
    const user = props.auth?.state?.auth;
    return (
        <div>
            {props.auth?.state?.auth ? <LandingWithAuth user={user} /> : <LandingWithoutAuth />}
        </div>
    );
}

const Landing = withAuth(LandingBase);

export default Landing;