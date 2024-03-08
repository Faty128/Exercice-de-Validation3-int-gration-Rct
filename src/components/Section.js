import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import img3 from "../assets/img/g172.png";
import img4 from "../assets/img/g296.png";
import img5 from "../assets/img/WWW.png";
import img6 from "../assets/img/INTYLO 1.png";
import img7 from "../assets/img/Group 7 1.png";
import img8 from "../assets/img/g312 1.png";
import img9 from "../assets/img/Group 2113.png";
import img10 from "../assets/img/Group 2114.png";
import img11 from "../assets/img/Group 2115.png";
import img12 from "../assets/img/Group 2117.png";
import img13 from "../assets/img/fatima.png";



function Section() {
  return (
    <div>
      <Container fluid>
      <Row id='presentation' className='prst'>
        <h1 className='text-uppercase fw-bold'>Présentation</h1>
        <Col md={6} xs={12}>
    <div className="liste-grp text-start p-4">
        <div className='capacité'>
          <p className='my-number'>1</p>
          <p className='presentation'>Capacité d'apprentissage</p>
        </div>
        <div className='capacité'>
          <p className='my-number'>2</p>
          <p className='presentation'>Collaboration</p>
        </div>
        <div className='capacité'>
          <p className='my-number'>3</p>
          <p className='presentation'>Responsabilité</p>
        </div>
        <div className='capacité'>
          <p className='my-number'>4</p>
          <p className='presentation'>Prise de décision</p>
        </div>
        <div className='capacité'>
          <p className='my-number'>5</p>
          <p className='presentation'>Gestion du temps</p>
        </div>
    </div>
        </Col>
        <Col md={6} xs={12}>
      <div className="mn-text text-start p-4">
           <h5>Triforce !</h5> 
           <p>A l'écoute je suis FORCE de proposition, j'aime chercher des solutions <br />
           et ainsi rendre services. Passionné par l'apprentissage et la découverte <br />
           intellectuelle, j'ai développé une FORCE de travail afin de toujours <br />
           progresser au quotidien. FORCE tranquille, j'ai toujours su collaborer et <br />
           pleinement m'intégrer au sien du collectif.</p>
           <p>Besion d'un collaborateur et flexible et pérservérant ?<br />
           Je vous propose mes services par le biai d'une ALTERNANCE. Avec 4 <br />
           jours dans votre société et 1 jour en formation, le tout modulable comme <br />
           vous le souhaitez, je pourrais facilement répondre à vos besions.</p>
      </div>
        </Col>
      </Row>
      <Row id='portfolio' className='gy-4 p-4 bg-light'>
        <h1 className='text-uppercase fw-bold'>Mon Portfolio</h1>
        <Col md={4} xs={12}>
        <div class="card p-4" >
          <img src={img3} alt="" className='img-card' />
          <div class="">
            <h5 class="card-title">Volkeno</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col>
        <Col md={4} xs={12}>
        <div class="card p-4" >
          <img src={img4} alt="" className='img-card'  />
          <div class="">
            <h5 class="card-title">Fewnu</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col> 
        <Col md={4} xs={12}>
        <div class="card p-4" >
          <img src={img5} alt="" className='img-card'  />
          <div class="">
            <h5 class="card-title">Fewnu mobile</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col>
        <Col md={4} xs={12}>
        <div class="card p-4">
          <img src={img6} alt="" className='img-card'  />
          <div class="">
            <h5 class="card-title">Volkeno</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col>
        <Col md={4} xs={12}>
        <div class="card p-4">
          <img src={img7} alt="" className='img-card'  />
          <div class="">
            <h5 class="card-title">Bakeli payement</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col>
        <Col md={4} xs={12}>
        <div class="card p-4">
          <img src={img8} alt="" className='img-card'  />
          <div class="">
            <h5 class="card-title">Mixte Feewi</h5>
            <p class="card-text">Créer un équivalent Netflix de <br />Disney. Pour l'anecdote ce site a <br />
                  été fait avant la création de Disney+. <br />
                  #React #API #Redux</p>
            <a href="#" class="btn">Voir le projet github</a>
          </div>
        </div>
        </Col>
      </Row>
      <Row id='compétences' className='p-4'>
        <div className="competence-h1">
          <h1 className='text-uppercase'>Mes Copétences</h1>
        </div>
          <div className="copmt-h6 p-4">
              <h6 className='h6-1'>OUTILS</h6>
              <h6 className='h6-2'>LANGUE</h6>
          </div>
        <Col md={6} xs={12}>
          <div className="progress-bar">
            <div className="div1">
            <progress id="redbar" value="50" max="50">50%</progress>
              <h2>BOOTSTRAP</h2>
            </div>
          </div>
          <div className="progress-bar">
            <div className="div1">
              <progress id="redbar" value="20" max="40" className='me-5'>40%</progress>
                <h2>LARAVEL</h2>
            </div>
          </div>
          <div className="progress-bar">
          <div className="div1">
            <progress id="redbar" value="20" max="40" className='react'>40%</progress>
              <h2>REACT</h2>
            </div>
          </div>
          <div className="progress-bar">
          <div className="div1">
            <progress id="redbar" value="20" max="40" className='me-5'>40%</progress>
              <h2>DIANGO</h2>
            </div>
          </div>        
        </Col>
        <Col md={6} xs={12}>
        <div className="progress-bar">
            <div className="div1">
            <h2 className='me-5'>HTML</h2>
            <progress id="redbar" value="50" max="50">50%</progress>
            </div>
          </div>
          <div className="progress-bar">
            <div className="div1">
          <h2 className='me-5'>CSS</h2>
              <progress id="redbar" value="30" max="40" className='ms-4'>40%</progress>
            </div>
          </div>
          <div className="progress-bar">
          <div className="div1">
          <h2 className='ms-5 javascript'>JAVASCRIPT</h2>
            <progress id="redbar" value="30" max="40" className='me-5'>40%</progress>
            </div>
          </div>
          <div className="progress-bar">
          <div className="div1">
          <h2 className='me-5'>PHP</h2>
            <progress id="redbar" value="20" max="40" className='ms-4'>40%</progress>
            </div>
          </div>
        </Col>
        <div className="copmt2 p-4">
              <h6 className='h6-1'>LANGUES</h6>
              <h6 className='h6-2'>HOBBIES</h6>
        </div>
        <Col md={6} xs={12}>
          <div className='langues'>
            <p>FRANCAIS</p>
            <p>ANGLAIS</p>
            <p>POULAAR</p>
          </div>
        </Col>
        <Col md={6} xs={12}>
        <div className='langues-copmt text-start'>
            <p>Créatrice du blog "Mon job de dev"</p>
            <p>Le développement web en général</p>
            <p>PWA</p>
            <p>Calculs distribués</p>
          </div>
        </Col>
      </Row>
      <Row id='expériences' className='gy-4 p-4 bg-light'>
        <div className='experiences'>
        <h1 className='text-uppercase'>Mex expériences</h1>
        <div className="experience p-4">
          <h3>Développeur Front-End en alternance ( RNCP niv 6 ),</h3>
          <h5>Janvier 2021</h5>
          <p>Pédagogie basée sur la réalisation de projets concrets avec l'accompagnement d'un expert métier chaque semaine.L'aleternancepeut <br />
          débuter à tout moment dans l'année avec 4 jours en entreprise et un jour de formation modulables dans la semaine.</p>
        </div>
        <div className="experience p-4">
          <h3>CS50, Harvard</h3>
          <h5>Aout-octobre 2020</h5>
          <p>Formation en ligne exclusivement dispensée en anglais. Les sujets comprennent, l'abstraction, les algorithmes, les structures de données, <br />
          l'encapsulation, la gestion des ressources, la sécurité, l'ingénierie logicielle et le développement Web. L'ensemble des problémes est <br />
          inspiré des domaines du monde réel de la biologie, de la cryptographie, de la finance et des jeux.</p>
        </div>
        <div className="experience p-4">
          <h3>Développeur junior, M2I formation</h3>
          <h5>Mars-Juillet 2020</h5>
          <p>Formation à raison de 35H/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, <br />
          Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de valider ces enseignements par la pratique de plus <br />
          d'une douzaine de projets.</p>
        </div>
        </div>
      </Row>
      <Row className="icones-img p-4 mt-5">
          <Col md={3} xs={12}>
          <div className='border-prjt'>
            <img src={img9} alt="" className='img-fluid' />
              <div className="projet">
                <p className='text-white'>18</p>
                <p className='text-white'>projets</p>
              </div>
              </div>
          </Col>
          <Col md={3} xs={12}>
          <div className='border-prjt'>
          <img src={img10} alt="" className='img-fluid' />
            <div className="projet">
              <p className='text-white'>30</p>
              <p className='text-white'>algorithmes</p>
            </div>
          </div>
          </Col>
          <Col md={3} xs={12}>
          <div className='border-prjt'>
          <img src={img11} alt="" className='img-fluid' />
            <div className="projet">
              <p className='text-white'>10</p>
              <p className='text-white'>console.log();</p>
            </div>
          </div>
          </Col>
          <Col md={3} xs={12}>
          <img src={img12} alt="" className='img-fluid' />
            <div className="projet">
              <p className='text-white'>16</p>
              <p className='text-white'>border:solid red 1px;</p>
            </div>
          </Col>
      </Row>
      <Row className='text-start contact p-4'>
        <h1 className='text-uppercase fw-bold mt-3'>Restons en contact</h1>
        <Col md={6} xs={12}>
          <div class="form-floating mb-3">
            <input type="prenom" class="form-control" id="floatingInput" placeholder="prenom" />
            <label for="floatingInput">Prenom</label>
          </div>
          <button className='btn1'>ENVOYEZ</button>
          <div class="form-floating">
            <input type="nom" class="form-control" id="floatingPassword" placeholder="nom" />
            <label for="floatingnom">Nom</label>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="11" placeholder="Votre message"></textarea>
          </div>
          <button className='btn2'>ENVOYEZ</button>
        </Col>
        <Col md={6} xs={12}>
          <div className="image">
            <img src={img13} alt="" className='img-fluid w-75 h-100 ftm' />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="footer"></div>
      </Row>
      </Container>
    </div>
  )
}

export default Section;