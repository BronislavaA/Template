import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/sass/layout/navigation.scss';
import '../assets/sass/layout/header.scss';
import '../assets/sass/layout/grid.scss';
import '../assets/sass/layout/footer.scss';
import '../assets/sass/components/feature.scss';
import '../assets/sass/components/team.scss';
import '../assets/sass/components/testimonials.scss';
import '../assets/sass/components/contact.scss';
import { name, surname, loremIpsum, Avatar } from 'react-lorem-ipsum'

function Page() {
  return (
    <div className="page">

      <nav id='navigation'>
        <a className='logo' href='index.html'>
          <img src={logo} alt="logo"/>
          Company
        </a>
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
      </nav>
      <section id='home'>
        <div className='container'>
          <div className='columns align-center justify-center'>
            <h1>Company Name</h1>
            <p>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
            <a className='button' href='#about'>Learn More</a>
          </div>
        </div>
      </section>
      <section id='feature'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Features</h1>
              <hr></hr>
              <p>{loremIpsum({ avgSentencesPerParagraph: 3 })}</p>
            </div>
          </div>
          <div className='row'>
          <div className='col col-6'>
              <div className='feature-card'>
                <div className='row'>
                  <div className='column col-2'>
                    <div className='feature-icon'>
                      <i className='material-icons'>house</i>
                    </div>
                  </div>
                  <div className='column col-10'>
                    <div className='feature-body'>
                      <h3>Title</h3>
                      <p>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='feature-card'>
                <div className='row'>
                  <div className='column col-2'>
                    <div className='feature-icon'>
                      <i className='material-icons'>house</i>
                    </div>
                  </div>
                  <div className='column col-10'>
                    <div className='feature-body'>
                      <h3>Title</h3>
                      <p>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='feature-card'>
                <div className='row'>
                  <div className='column col-2'>
                    <div className='feature-icon'>
                      <i className='material-icons'>house</i>
                    </div>
                  </div>
                  <div className='column col-10'>
                    <div className='feature-body'>
                      <h3>Title</h3>
                      <p>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <div className='feature-card'>
                <div className='row'>
                  <div className='column col-2'>
                    <div className='feature-icon'>
                      <i className='material-icons'>house</i>
                    </div>
                  </div>
                  <div className='column col-10'>
                    <div className='feature-body'>
                      <h3>Title</h3>
                      <p>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Our Team</h1>
              <hr></hr>
            </div>
          </div>
          <div className='row'>
            <div className='col col-4'>
              <div className='member-card'>
                <div className='columns align-center'>
                  <Avatar gender="male" className="avatar" width="200" height="200" alt="Avatar" />
                  <div className='card-title'>
                    <h5 className='member-name'>{name('male')} {surname()}</h5>
                    <p className='member-position'>Developer</p>
                  </div>
                  <div className='card-body'>
                    <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-4'>
              <div className='member-card'>
                <div className='columns align-center'>
                  <Avatar gender="female" className="avatar" width="200" height="200" alt="Avatar" />
                  <div className='card-title'>
                    <h5 className='member-name'>{name('female')} {surname()}</h5>
                    <p className='member-position'>Designer</p>
                  </div>
                  <div className='card-body'>
                    <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-4'>
              <div className='member-card'>
                <div className='columns align-center'>
                  <Avatar gender="male" className="avatar" width="200" height="200" alt="Avatar" />
                  <div className='card-title'>
                    <h5 className='member-name'>{name('male')} {surname()}</h5>
                    <p className='member-position'>Manager</p>
                  </div>
                  <div className='card-body'>
                    <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 2 })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonials'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Testimonials</h1>
              <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Contact Us</h1>
              <hr></hr>
              <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
            </div>
          </div>
          <div className='row justify-center'>
            <form className='contact-form col col-8'>
              <div className='row'>
                <div className='col col-6'>
                  <div className='labeled-input'>
                    <div className='columns justify-start'>
                      <label>Your Name</label>
                      <input type='text'></input>
                    </div>
                  </div>
                </div>
                <div className='col col-6'>
                  <div className='labeled-input'>
                    <div className='columns justify-start'>
                      <label>Your Email</label>
                      <input type='email'></input>
                    </div>
                  </div>
                </div>
                <div className='col col-12'>
                  <div className='labeled-input'>
                    <div className='columns justify-start'>
                      <label for='message'>Your Message</label>
                      <textarea id='message' type='text'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='columns align-end'>
                <div className='submit-button'>
                  <button type='submit'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='columns justify-center'>
            <div className='copyright'>
              <p>Copyright © All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Page;
