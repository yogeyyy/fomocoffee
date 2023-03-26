import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutArea'>
        <div className='aboutContent'>
          <h1 className='aboutHeading'>
            My story
          </h1>
          <p className='aboutPara'>
          Coffee is just a morning beverage for a lot of you reading this, but for me, it is comfort. It is a token of love and appreciation for the people I extremely care about. Whether it be going on long walks with vanilla latte in drunken monkey&#39;s glass bottles, or making beated frothy coffee in hostel mess for all my friends coming for breakfast, the love grew stronger and brought dozens of smiles and happiness for those seeking that one good cup of coffee in the campus. Be it hot or be it cold, the froth is always the best part of it all. To celebrate and spread this feeling of love and comfort, I brewed this brand for you, so you don&#39;t miss out on the best coffee. 
          </p>
          <h5 className='aboutAuthor'>~ Yogit Nainani</h5>
        </div>
        <div className='aboutImage'>
          <img
            src='./aboutPhoto.svg'
            alt='Yogit Nainani'
          />
        </div>
      </div>
    </div>
  )
}

export default About