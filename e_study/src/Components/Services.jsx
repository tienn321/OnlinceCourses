import React from 'react'
import blackboard from '../Assets/images/blackboard.svg';
import books from '../Assets/images/books.svg';
import earthglobe from '../Assets/images/earth-globe.svg';
import exam from '../Assets/images/exam.svg';
import professor from '../Assets/images/professor.svg';
import mortarboard from '../Assets/images/mortarboard.svg';


export default function Services() {
  return (
    <div className="services page_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h1>Our Services</h1>
            </div>
          </div>
        </div>
        <div className="row services_row">
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={earthglobe} />
            </div>
            <h3>Online Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={exam} />
            </div>
            <h3>Indoor Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={books} />
            </div>
            <h3>Amazing Library</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={professor} />
            </div>
            <h3>Exceptional Professors</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={blackboard} />
            </div>
            <h3>Top Programs</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
            <div className="icon_container d-flex flex-column justify-content-end">
              <img src={mortarboard} />
            </div>
            <h3>Graduate Diploma</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
        </div>
      </div>
    </div>

  )
}
