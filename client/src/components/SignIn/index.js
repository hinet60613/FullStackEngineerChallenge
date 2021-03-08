import { useState } from "react";
import Backend, { withAuth } from "../Session";

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const SignInFormBase = (props) => {
    const [userName, setUserName] = useState("");
    const signInAdmin = () => props.auth.doSignInAdmin();
    const signIn = () => props.auth.doSignIn(userName);
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