import { useState } from "react";
import { withAuth } from "../Session";
import * as ROUTES from '../../constants/routes'

const SignInPage = (props) => (
    <div>
        <SignInForm history={props.history} />
    </div>
);

const SignInFormBase = (props) => {
    const [userName, setUserName] = useState("");
    const signInAdmin = () => {
        props.auth.doSignInAdmin();
        props.history.push(ROUTES.LANDING);
    }
    const signIn = () => {
        props.auth.doSignIn(userName);
        props.history.push(ROUTES.LANDING);
    }
    return (
        <div>
            <div>
                <input type="text" name="user_name" onChange={(e) => { setUserName(e.target.value); }} />
                <button onClick={signIn}>Sign in</button>
            </div>
            or
            <div>
                <button onClick={signInAdmin}>Sign in as Admin</button>
            </div>
        </div>
    )
}

const SignInForm = withAuth(SignInFormBase);

export default SignInPage;