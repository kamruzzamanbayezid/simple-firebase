
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

      const [user, setUser] = useState(null);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const githubProvider = new GithubAuthProvider();

      const handleGoogleLogIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        setUser(result.user);
                  })
                  .catch(error => {
                        console.log('Error', error.message);
                  })
      }

      const handleLogOut = () => {
            signOut(auth)
                  .then(result => {
                        setUser(null)
                  })
                  .catch(error => {
                        console.log(error);
                  })
      }

      const handleGitHubLogin = () => {
            signInWithPopup(auth, githubProvider)
                  .then(result => {
                        setUser(result.user);
                        console.log(result.user);
                  })
                  .catch(error => {
                        console.log('Error:', error.message);
                  })
      }

      return (
            <div>
                  {
                        user ? <button onClick={handleLogOut}>Log Out</button>
                              :
                              <div>
                                    <button onClick={handleGoogleLogIn}>Google Login</button>
                                    <button onClick={handleGitHubLogin}>Github Login</button>
                              </div>
                  }



                  {
                        user && <div>
                              <h2>Name: {user.displayName}</h2>
                              <p>Email: {user.email}</p>
                              <img src={user.photoURL} alt="" />
                        </div>
                  }
            </div>
      );
};

export default Login;