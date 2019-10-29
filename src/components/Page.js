import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SectionFeature from './SectionFeature';
import SectionTeam from './SectionTeam';
import SectionTestimonials from './SectionTestimonials';
import SectionContact from './SectionContact';
import Footer from './Footer';
import '../assets/sass/layout/navigation.scss';
import '../assets/sass/layout/header.scss';
import '../assets/sass/layout/grid.scss';
import '../assets/sass/layout/footer.scss';
import '../assets/sass/components/feature.scss';
import '../assets/sass/components/team.scss';
import '../assets/sass/components/testimonials.scss';
import '../assets/sass/components/contact.scss';
import { loremIpsum } from 'react-lorem-ipsum';

export default function Page() {
  useEffect(() => {
    const nav = document.getElementById('navigation')
    const hero = document.getElementById('home')
    const transparent = hero.clientHeight
    console.log(transparent)
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.pageYOffset > transparent) {
        nav.classList.add('black')
      } else {
        nav.classList.remove('black')
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div className="page">
      <Navbar />
      <Hero
        title='Company Name'
        subtitle={loremIpsum({ avgSentencesPerParagraph: 2 })}
      />
      <SectionFeature
        title='Feature'
        subtitle={loremIpsum({ avgSentencesPerParagraph: 3 })}
      />
      <SectionTeam
        title='Our Team'
      />
      <SectionTestimonials
        title='Testimonials'
      />
      <SectionContact
        title='Contact Us'
        subtitle={loremIpsum({ avgSentencesPerParagraph: 4 })}
      />
      <Footer />
    </div>
  )
}
