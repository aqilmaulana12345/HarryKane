
import './App.css';
import *as ReactBootStrap from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';


function App() {
  return (
    <div className="App">
        <ReactBootStrap.Navbar expand="lg" className="bg-body-tertiary">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">Harry Kane</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
    <Container>
    <Row className='mt-4'  className='Home'>
        <Col xs={12} md={8}>
          <h1 className='AqilMaulana'>Harry Edward Kane</h1>
          <p className='tulisan'>Harry Edward Kane MBE (lahir 28 Juli 1993) 
          adalah seorang pemain sepak bola profesional
           Inggris yang bermain sebagai penyerang untuk klub Bundesliga, 
           Bayern München dan kapten tim nasional Inggris. Seorang pencetak gol yang subur dengan gaya permainan penghubung serangan yang kuat, Kane dianggap sebagai salah satu penyerang terbaik di dunia.[4][5] Ia merupakan pencetak gol terbanyak sepanjang masa Tottenham Hotspur dan timnas Inggris, serta peringkat kedua pencetak gol terbanyak sepanjang masa Liga Utama Inggris.[6] Kane telah mencetak lebih dari 350 gol sepanjang karier profesionalnya bagi klub dan negara. 
          </p>
          <Button variant="outline-danger">Read More</Button>{' '}
        </Col>
        
        <Col xs={6} md={4}>
        <img src="1.png" alt="HTML5 Icon" width="300" />
        </Col>
      </Row>
      </Container>
      <Container className='Gallery mt-5'>
      <Row>
        <Col><h1 className='Galeri'>Gallery</h1></Col>
      </Row>
    </Container>
      <Container className='Gallery2'>
      <Row>
        <Col className='Card'><ReactBootStrap.Card style={{ width: '18rem' }}>
      <ReactBootStrap.Card.Img variant="top" src="aqil.jpg/100px180"  img src="1.png" alt="Flowers in Chania"  />
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>England</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>
          <p className='TulisanCard'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.</p>
        </ReactBootStrap.Card.Text>
       <ReactBootStrap.Button variant="outline-danger">Read More</ReactBootStrap.Button>{' '}
      </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card></Col>
        <Col className='Card'><ReactBootStrap.Card style={{ width: '18rem' }}>
      <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" img src="2.png" alt="Flowers in Chania"  />
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>Tottenham Hotspurs</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>
        <p className='TulisanCard'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. </p>
        </ReactBootStrap.Card.Text>
        <ReactBootStrap.Button variant="outline-danger">Read More</ReactBootStrap.Button>{' '}
      </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card></Col>
        <Col className='Kard ms-5'><ReactBootStrap.Card style={{ width: '18rem' }}>
      <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" img src="3.png" alt="Flowers in Chania"  />
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>Bayern Munchen</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>
          <p className='TulisanCard'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.</p>
        </ReactBootStrap.Card.Text>
        <ReactBootStrap.Button variant="outline-danger">Read More</ReactBootStrap.Button>{' '}
      </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card></Col>
      </Row>
      </Container>
      <Container className=''>
     <h1 className='AqilMaulana mt-5'>Video</h1>
      <Row className='mt-4'>
        <Col xs={12} md={8}>
          <p className='ProfilKane'>Memulai karier pemain profesional dengan Tottenham Hotspur pada 2009, Kane kemudian dipinjamkan ke sejumlah klub, yaitu Leyton Orient, Millwall, Leicester City, dan Norwich City. Setelah Mauricio Pochettino menjadi kepala pelatih pada 2014, ia lebih banyak mendapat kesempatan bermain untuk tim utama Tottenham Hotspur hingga berhasil meraih pengghargaan Pemain Muda Terbaik Tahunan versi PFA pada musim penuh pertamanya dengan klub itu. Pada musim 2015–2016 dan 2016–2017, 
            Kane menutup kedua musim tersebut pencetak gol terbanyak Liga Utama Inggris. </p>
        </Col>
        <Col xs={6} md={4}>
        <iframe class="embed-responsive-item" src="Kane.mp4" Ratio aspectRatio="16x9"  ></iframe>
        </Col>
      </Row>

    </Container>
    </div>
  );
}

export default App;


