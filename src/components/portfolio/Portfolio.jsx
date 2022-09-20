import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
const data = [{
  id: 1,
  img: IMG1,
  title: '2018 Project',
  gitthub: 'https://github.com',
  demo: 'https://teach-example.firebaseapp.com/mall'
},
{
  id: 2,
  img: IMG2,
  title: '2018 Dashboard',
  gitthub: 'https://github.com',
  demo: 'https://teach-example.firebaseapp.com/mall'
}, {
  id: 3,
  img: IMG3,
  title: 'This is my another portfolio Website',
  gitthub: 'https://github.com',
  demo: 'https://anna870628.github.io/index.html'
}]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>Project I did</h4>
      <h2>Showing</h2>

      <div className='container portfolioContainer'>
        {
        data.map(({id, img, title, github, demo}) => {
         return(
         <article key={id} className='portfolioItem'>
            <div className='portfolioItemImg'>
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolioItemCta'>

              <a href={github} className='btn'>Github</a>
              <a href={demo} className="btn btn-primary">Live Demo</a>

            </div>
          </article>
         )
        })}
      </div>

    </section>
  )
}

export default Portfolio