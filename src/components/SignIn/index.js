const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const SignInFormBase = () => {
    return (
        <div>
            <div>
                <input type="text" name="user_name" onChange={onChange} />
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