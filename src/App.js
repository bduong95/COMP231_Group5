// import logo from './logo.svg';
import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className ="container">
      <header className ="d-flex col-md-12 py-3">
        <ul className ="nav nav-pills justify-content-left">
          {/* <!--Navigation Bar Home Button--> */}
          <li button type="button" className ="nav-item active"><a href="#" className ="nav-link" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>Home</a>
          </li>
          
          {/* <!--Navigation Bar Contact Button--> */}
          <li button type="button" className ="nav-item"><a href="#" className ="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-chat-dots-fill" viewBox="0 0 16 16">
              <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>Contact</a>
          </li>
          
          {/* <!--Navigation Bar Aboutt Button--> */}
          <li button type="button" className ="nav-item"><a href="#" className ="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>About</a>
          </li>
        </ul>

        <ul className ="nav nav-pills">
          <li button type="button" className ="nav-item"><a href="#" className ="nav-link signup">Sign Up</a></li>
        </ul>

      </header>
      
      <div className ="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
          <p className = "heading">WaitOntario</p>
          <div className ="modal-dialog" role="document">
            <div className ="modal-content rounded-4 shadow">
              <div className ="modal-header p-5 pb-4 border-bottom-0">
                <h1 className ="fw-bold mb-0 fs-2">Sign Up</h1>
                
              </div>

              <p className  ="signin-followup-line">Stay updated with waiting</p>
                
                <div className ="modal-body p-5 pt-0">
                  <form className ="">
                    <div className ="form-floating mb-3">
                      <input type="email" className ="form-control rounded-3" id="floatingInput" placeholder="name@example.com" fdprocessedid="hplpc" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className ="form-floating mb-3">
                      <input type="password" className ="form-control rounded-3" id="floatingPassword" placeholder="Password" fdprocessedid="2fm09q" />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <button className ="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" fdprocessedid="g7wx4j">Sign in</button>
                    <hr className ="my-4" />
                    <h2 className ="fs-5 fw-bold mb-3"></h2>

                    {/* <!--Insert the Sign Up Link below in #a tag--> */}
                    <p className  = "signin-page-signup-bottonline">Don't have an account?<a href="signup.html">Sign Up</a></p> 
                  </form>
                </div>

                
              </div>
          </div>
        </div>
        
        <div className  ="footer">
          <a href="reportissue.html" className  ="report-issue">Report an Issue</a>
        </div>
    </div>
  );
}

export default App;
