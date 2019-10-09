import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/sass/Page.scss';
import { name, surname, loremIpsum, Avatar } from 'react-lorem-ipsum'

function Page() {
  return (
    <div className="page">

      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-logo'>
            <a className='logo' href='index.html'>
              <img src={logo} alt="logo"/>
              Company
            </a>
          </div>
          <div className='navbar-menu'>
            <ul className='menu'>
              <li className='menu-item'>
                <a className='menu-link' href='index.html'>Home</a>
              </li>
              <li className='menu-item'>
                <a className='menu-link' href='#about'>About</a>
              </li>
              <li className='menu-item'>
                <a className='menu-link' href='#features'>Features</a>
              </li>
              <li className='menu-item'>
                <a className='menu-link' href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='column'>
              <h1 className='title'>Company Name</h1>
              <p className='subtitle'>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
              <br></br>
              <a className='button' href='#about'>Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='container'>

          <section>
            <div className='row'>
              <div className='column'>
                <h2 className='title'>Features</h2>
                <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <div className='feature-card'>
                  <div className='feature-icon'>
                    <i className='material-icons'>house</i>
                  </div>
                  <h2 className='title'>Title</h2>
                  <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 3 })}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className='title'>Our Team</h2>
            <div className='team'>
              <div className='row'>
                <div className='column'>
                  <div className='team-member'>
                    <div className='member-card'>
                      <div className='avatar'></div>
                      <Avatar gender="male" className="avatar" width="200" height="200" alt="Avatar" />
                      <div className='card-title'>
                        <h3 className='member-name'>{name('male')} {surname()}</h3>
                        <p className='member-position'>Developer</p>
                      </div>
                      <div className='card-body'>
                        <p className='description'></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='row'>
              <div className='column'>
                <h2 className='title'>Testimonials</h2>
                <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
              </div>
            </div>
          </section>

          <section>
            <div className='row'>
              <div className='column'>
                <h2 className='title'>Contact Us</h2>
                <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
                <form className='contact-form'>
                  <div className='row'>
                    <div className='column'>
                      <div className='labeled-input'>
                        <label></label>
                        <input></input>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='labeled-input'>
                        <label></label>
                        <input></input>
                      </div>
                    </div>
                  </div>
                  <div className='labeled-input'>
                    <label></label>
                    <textarea></textarea>
                  </div>
                  <div className='row'>
                    <div className='column'>
                      <button className='contact-submit'>Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

        </div>
      </div>

      <footer>
        <div className='container'>
          <div className='copyright'>
            <p>Copyright © All rights reserved</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Page;
