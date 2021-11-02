/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.sm)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import Fade from 'react-reveal/Fade';
import { fadeIn } from 'react-animations'
import classnames from 'classnames'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
import StarfieldAnimation from 'react-starfield-animation'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from 'reactstrap'

// css
import './style.css'

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'

const carouselItems = [
  {
    src: require('assets/img/39.jpg').default,
    altText: 'Slide 1',
  },
  {
    src: require('assets/img/49.jpg').default,
    altText: 'Slide 2',
    
  },
  {
    src: require('assets/img/64.jpg').default,
    altText: 'Slide 3',

  },
  {
    src: require('assets/img/24.jpg').default,
    altText: 'Slide 3',

  }
]

let ps = null

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1)
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      let tables = document.querySelectorAll('.table-responsive')
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
    document.body.classList.toggle('profile-page')
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        //ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off'
        document.documentElement.classList.remove('perfect-scrollbar-on')
      }
      document.body.classList.toggle('profile-page')
    }
  }, [])
  return (
    <>
      <ExamplesNavbar />
      <div className='wrapper'>
        <div className='page-header'>
          <img
            alt='...'
            className='dots'
            src={require('assets/img/dots.png').default}
          />
          <img
            alt='...'
            className='path'
            src={require('assets/img/path4.png').default}
          />
          <Container className='align-items-center'>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            />
            <Row>
              <Col lg='6 order-2 order-lg-0' md='6 order-2 order-lg-0'>
                <h1 className='profile-title text-left'>
                  Welcome to Kosmo Alien <span>Space Club</span>
                </h1>
                <h5 className='text-on-back'>01</h5>

              
                <p className='profile-description'>
                  Kozmos Alien is a collection of 8,888 aliens with lightspeed
                  hyperspace technology. Each one is equipped with armor,
                  weapons, masks, accessories, and special powers . Owning any
                  one of our NFTs grants club membership.
                </p>

                <div className='btn-wrapper profile pt-3'>
                  <Button
                    className='btn-icon btn-round'
                    color='twitter'
                    href='https://twitter.com/KozmoAliens'
                    id='tooltip639225725'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip639225725'>
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='facebook'
                    href=''
                    id='tooltip982846143'
                    target='_blank'
                  >
                    <i className='fab fa-instagram' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip982846143'>
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='dribbble'
                    href='https://discord.gg/BUWUC7gQ'
                    id='tooltip951161185'
                    target='_blank'
                  >
                    <i className='fab fa-discord' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip951161185'>
                    Join our Discord
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className='ml-auto mr-auto' lg='4' md='6'>
                <img
                  alt='...'
                  className='shapes circle'
                  src={require('assets/img/chester-wade.jpg').default}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div id='sections' style={{ backgroundcolor: 'red' }}>
          <Container>
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md='5'>
                <h1 className='profile-title text-left'>Rarity</h1>
                <h5 className='text-on-back'>02</h5>
                <p className='profile-description text-left'>
                  All 8,888 <span>Kozmo</span> Alienss are unique, there is no
                  one like another. Each Alien is randomly generated with its
                  own characteristics and expressions
                </p>
                <div className='btn-wrapper pt-3 d-inline-block'> <br/>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='https://discord.gg/BUWUC7gQ'
                    onClick={e => e.preventDefault()}
                  > 
                    <i className='fab fa-discord' /> Join The Communitiy 
                  </Button>
              
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className='section'>
          <Container>
            <Row>
            <Fade left>
              <Col lg='6' className='d-flex justify-content-center  text-left'>
                <div id="j" style={{marginleft:"10px"}}>
                  <div class='neon'>Join The</div>
                  <div class='flux'>Kosmos</div>
                </div>
              </Col>
              </Fade>

              <Col className='ml-auto mr-auto card-mint' lg='6'>
                <Card
                  className='card-coin card-plain '
                  style={{ background: '#9e7599' }}
                >
                  <CardHeader>
                    <h4 className='mint-head'>Count your Aliens</h4>
                    <h4 className='mint-title'>
                      Enter the Amount of Aliens You would like to buy
                    </h4>
                  </CardHeader>

                  {/* card body */}

                  <CardBody>
                    <div className='rf-card-desktop'>
                      <Row>
                        <Col md='4'>
                          <img
                            alt='...'
                            className='img-fluid m-4'
                            style={{ width: '100px' }}
                            src={require('assets/img/41.jpg').default}
                          />
                        </Col>
                        <Col md='8'>
                          <h6 class='price-h'>Price per alien</h6>
                          <h6 class='price-n'>
                            <span>0.08 </span>Eth Each
                          </h6>
                          <h6 class='price-h'>9,999 remaining</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className='rf-card-mobile rf-card-row'>
                      <div className='rf-card-imgbx'>
                        <img
                          alt='...'
                          className='img-fluid m-4'
                          id="fw"
                          style={{ width: '100px' }}
                          src={require('assets/img/41.jpg').default}
                        />
                      </div>
                      <div>
                        <h6 class='price-h'>Price per alien</h6>
                        <h6 class='price-n'>
                          <span>0.08 </span>Eth Each
                        </h6>
                        <h6 class='price-h'>9,999 remaining</h6>
                      </div>
                    </div>
                    <div class='form-div'>
                      <input class='onum' defaultValue='1' type='text' />
                    </div>

                    <div class='hline'></div>

                    <div class='ta-div'>
                      <h6 class='totalh'>Total</h6>
                      <h6 class='totala'>0.08 ETH</h6>
                    </div>

                    <div class='hline'></div>

                    <Button
                      className='btn btn-mint mx-auto m-3'
                      color='primary'
                      type='submit'
                      style={{ width: '100%' }}
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='section' id='crap-roadmap'>
          
          <Container>
            
            <Row>
              
           
              <Col md='7 order-2 order-lg-0'>
              
                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 1</span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>The Galaxy is created </strong> <br/><br/>
                    The private discord channel will be available exclusively for Kozmo Alien  owners.

                    <strong>  🌟  Dj $pace  🌟  </strong> <br/><br/><br/><br/>
             DJ $pace joins the kozmos. and transmits his music to earth. Live streamed sets every week. <br/><br/>

             <strong>    🚀 Terraforming 🚀</strong><br/><br/>
 Members can choose which galaxy they belong too. The 3 galaxies; Milky Way, Andromeda, and
  Triangulum galaxies are all rivals. Which side will you join? <br/><br/>

Members may access 1 galaxy via the #galaxies_2000 terminal in Discord.            
     Members of Galaxies will be able to participate in games, giveaways ,  
     Solve mysteries  and  invade other galaxies to earn  more $Space token. 

                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 2</span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                 
                    <span class='pointz-des'>
                  <strong>  $Space Token </strong>
                  An ERC20 utility token that will be freely tradable on Uniswap & These tokens allow you to rename and upgrade
                  your
                   aliens and write their own backstory, stored in the metadata on the blockchain.<br/><br/>
In the future you will be able to use these tokens to invade other galaxies and upgrade your spaceship and kozmo alien.
Every Kozmo gains 10 $Space per day, which can be claimable by paying gas. 

                    </span>
                   
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 3</span>
                  </Col>
                <Fade left>

                  <Col sm='10'>
                    <span class='pointz-des'><strong> Merch drop</strong> <br/><br/>
                    The Shoppy Planet  is now open.
Get decked out in an exclusive selection  of Kozmo Alien  merch.
Get a unique gift from the universe.
Kozmo  owners with a selected trait (to be revealed) will receive free merch!     
                    
                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 4</span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>Kosmo SpaceShip </strong> <br/><br/>

                    Kozmo space holders will be able to mint their exclusive 1/1 spaceship. 
                    Later you will be able to use this ship to invade other galaxies 
                    in an exclusive PVP play to earn game with community prizes.   
                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 5</span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>Space Wars Begin</strong><br/><br/>
                    An exclusive play to earn PVP game will be launched allowing Kozmo Alien
                     holders to battle and invade other galaxies and earn more space token. 
                    </span>
                  </Col>
                  </Fade>
                </Row>
             
              </Col>
            
              <Col md='5'>
                
                <h1 className='roadmap-text'>Roadmap Activations</h1>
              </Col>
             
            </Row>
          </Container>
        </section>
        <section id="n">
        <section id="n" class="speakers-section" style= {{backgroundImage: `url("https://i.ibb.co/92HJxz2/team-bg.jpg")`}}>
        <div class="parallax-scene parallax-scene-2 anim-icons">
            <span data-depth="0.40" class="parallax-layer icon icon-circle-5"></span>
            <span data-depth="0.99" class="parallax-layer icon icon-circle-5"></span>
        </div>

        <div class="container">
            <div class="sec-title light text-center">
               <h1> <span class="title">Our Team</span> </h1>
                <h6>Meet the Team</h6>
            </div>

            <div class="row">
          
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img src="https://gateway.pinata.cloud/ipfs/QmU6hxsav4NGAgNLBBtMLZnonbm8JjpY3Y3As79HdAWr5n/49.jpg" alt=""/>
                              
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Leon  </a></h4>
                            <span class="designation">Supreme Commander </span>
                        </div>
                    </div>
                </div>

           
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img src="https://gateway.pinata.cloud/ipfs/QmfS1eJarJJ3VJA99P2YUGRJ1yx3WMhiydRhfLfFr5WGaE" alt=""/>
                               
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Shahidaasy</a></h4>
                            <span class="designation">Graphic Designer </span>
                        </div>
                    </div>
                </div>

         
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img src="https://gateway.pinata.cloud/ipfs/QmU6hxsav4NGAgNLBBtMLZnonbm8JjpY3Y3As79HdAWr5n/22.jpg" alt=""/>
                              
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">TWA-D3 </a></h4>
                            <span class="designation">Blockchain developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
        <Footer />
      </div>
    </>
  )
}
