import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AddPostPage } from './pages/Posts/AddPostPage';
import { EditPostPage } from './pages/Posts/EditPostPage';
import { PostDetailsPage } from './pages/Posts/PostDetailsPage';
import { AddCommentPage } from './pages/Comments/AddCommentPage';
import { EditCommentPage } from './pages/Comments/EditCommentPage';
import { AboutPage } from './components/About';
import { ContactPage } from './components/Contact';

function App() {
  return (
    <Router>

      <header className="header">
        <div className="overlay">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Noha emad blog</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About us</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact us</Link>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
          <Header />
        </div>

      </header>

      <Route path="/" component={Home} exact />
      <Route path="/add-post" component={AddPostPage} exact />
      <Route path="/edit-post/:id" component={EditPostPage} />
      <Route path="/post/:id" component={PostDetailsPage} />
      <Route path="/add-comment" component={AddCommentPage} exact />
      <Route path="/edit-comment/:id" component={EditCommentPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />

      <Footer />


    </Router>
  );
}

export default App;
