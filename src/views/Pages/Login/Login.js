import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './style.css'
import './magnific-popup/magnific-popup.css'

class Login extends Component {
  login = () => {
    console.log("nex future");
  }
  render() {
    return (
     
      <div className="app ">
		
        <nav class="navbar nav navbar-expand-lg ">
          
          <a class="navbar-brand " href="#">
            <img class="logo"src='https://i.pinimg.com/originals/20/c4/39/20c4393dd9ffd6fa5402cc70404e4b97.png'alt=""/></a>
        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  >
              <div class="toggler-btn">
                     <div class ="bar bar1"></div>
                     <div class ="bar bar2"></div>
                     <div class ="bar bar3"></div>   
                     <div class ="bar bar4"></div>
              </div>
           </button>
           
           
       
          
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul class="navbar-nav mx-auto ">
                <li class="nav-item">
                    <a class=" nav-link text-capitalize" href="index.html">Acceuil </a>
               </li>
             <li class="nav-item">
                  <a class=" nav-link text-capitalize" href="index.html">Service Client </a>
             </li> 
             <li class="nav-item">
              <a class=" nav-link text-capitalize" href="index.html"> Histoire </a>
         </li>
           
          
           <li class="nav-item">
              <a class=" nav-link text-capitalize" href="index.html">Facteurs Succés </a>
         </li>
         <li class="nav-item">
              <a class=" nav-link text-capitalize" href="index.html"> Chiffre D'Affaire </a>
         </li>
            
         <li class="nav-item">
          <a class=" nav-link text-capitalize" href="index.html">Contact </a>
      </li>
            </ul>
            {/* <form class="form-inline d-none d-lg-block mr-5">
              <button class="btn btn-secondary  text-capitalize" type="button">
                <a class="btn-res" href="./res.html"> Reservations</a></button>
          
            </form> */}
          </div>
        
      
      
      
      </nav>
        
        
      <header id="header top-icon">
              <div class="container" >
                <div class="row height-90 align-items-center
                justify-content-center">
                  <Form>
                      <h1 className="text-muted" >Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="success" className="s px-5 " onClick={this.login}><span>Login</span></Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="success" className=" s px-0"><span>Forgot password?</span></Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
              </div>
              <a href="#articles-speciales" class="btn header-link px-2
              "> <i className="fa fa-phone fa-5x"></i></a>
            </header>
        
      <div class="container-fluid  info p-3" id="top-icons">
        <div class="row ">
          <div class="col d-flex justify-content-between 
          align-items-baseline flex-wrap">
            <div class="info-icons p-2">
               <a fref="#" class=" mr-2 primary-color">
                
                 <i className=" i fa fa-facebook fa-2x"></i>
                
               </a>
               <a fref="#" class="  mr-2 primary-color">
                <i className=" i fa fa-instagram fa-2x"></i>
              </a>
              <a fref="#" class=" mr-2 primary-color">
                <i className=" i fa fa-twitter fa-2x"></i>
              </a>
              <a fref="#" class="  mr-2 primary-color">
                <i className=" i fa fa-yelp fa-2x"></i>
              </a>
            </div>
            <h3 class="primary-color p-2 text-capitalize corniche">Corniche/sahloul,4000 Sousse

            </h3>
          </div>
        </div>
      </div>
      <section class="py-5" id="Service Client">
        <div class="container my-5">
          <div class="row parent-container">
           
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src='https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg'
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 
                 <a href="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
           
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src='https://voxbaysolutions.com/wp-content/uploads/2019/07/iStock-897528636.jpg'
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 <a href="https://voxbaysolutions.com/wp-content/uploads/2019/07/iStock-897528636.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
         
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg"
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 <a href="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
          
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg"
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 <a href="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
           
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg"
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 <a href="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
           
            <div class="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                <div class="articles-container">
                  <img src="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg"
                 class="img-fluid img-thumbnail item-img "   alt="img1"/>
                 <a href="https://socialway.cl/blog/wp-content/uploads/2019/01/bigstock-Call-Center-79077622.jpg">
                <h1 class=" text-uppercase text-center item-link px-3">
                Service Client
                </h1></a>

                </div>
            </div>
          </div>
        </div>

      </section>
   
      <section id="histoire" class="py-2 my-1">
        <div class="container back">
          <div class="row">
            <div class="col">
              <div class="histoire-text text-center">
                  <h2 class="h2-histoire display 1 text-capitalize py-5">
                      À PROPOS DE NOUS 
                     
                   </h2>
                   <p class="paragraphe1 text-center text-dark text-capitalize " >
                   Le centre d'ppels permet de prendre en charge la relation à distance entre une marque et son marché.
                    Il est le plus souvent concrétisé par un ou plusieurs espace(s) de bureaux où
                     sont distribués des appels téléphoniques, mais aussi des courriels, des courriers,
                      etc. Ces appels peuvent être qualifiés d'entrants, lorsqu'ils sont reçus par les 
                      conseillers clientèle du centre, ou à l'inverse de sortants lorsqu'ils sont émis par eux.
                       Équipés des dernières évolutions de la technologie des télécommunications, 
                   de nombreux centres d'appels traitent ces deux types d'appels.</p>
                   <p class="paragraphe2 text-center text-dark text-capitalize py-1">
                   Le nombre des centres d’appels croît de façon exponentielle. 
                   De nombreuses entreprises industrielles ou de services offrent aujourd’hui à
                    leurs clients un service d’accès à distance par téléphone. Il faut distinguer
                     les centres d'appel internes aux entreprises et les centres externalisés, confiés 
                     à des prestataires de service. De grands donneurs d'ordre, 
                     les opérateurs de télécommunications, en particulier, tels Orange ou SFR, ont recours aux deux et font appel pour sous-traiter à des sociétés leaders telle que Teleperformance. Les TPE, PME ainsi que les PMI renforcent aussi leur stratégie relationnelle et choisissent pour humaniser leur relation client
                    des centres d'appels basés en France et plus particulièrement proches de chez eux.
                   </p>
                   <p class="paragraphe2 text-center text-dark text-capitalize py-1">
                   Les centres sont au cœur de la relation client de beaucoup d'entreprises aujourd’hui. 
                   L'intégration de la téléphonie avec l'informatique permet de personnaliser
                    le contact en présentant à l'opérateur l'ensemble des données client pertinentes au moment de l'appel et d'optimiser 
                   la distribution des appels et donc l'utilisation du temps des conseillers de clientèle. </p>
                 
                   <h3 class="h2-histoire display 1 text-capitalize py-2">
                    Appels entrants 
                   </h3>
                   <p>Un client constitue un élément clé. Le placer au centre des stratégies
                      relationnelles est le moyen le plus sûr pour développer l'activité d'une entreprise. 
                      Appréhender les points d'interaction qui jalonnent le parcours client et maximiser 
                      le potentiel de chaque contact téléphonique font partie des nouvelles stratégies des
                       entreprises. La gestion des appels entrants couvre tous les canaux de communication qu’ont les clients pour contacter les entreprises : numéro vert, callback, SAV, help desk… Pour renforcer l'accueil téléphonique client, le traitement des appels 
                     s’appuie sur des outils CRM et télécoms, comme le CTI, les ACD, le SVI...</p>
                     <h3 class="h2-histoire display 1 text-capitalize py-2">
                    Appels sortants
                   </h3>
                   <p>Les centres spécialisés dans les appels sortants peuvent :<br/>

Effectuer des sondages : la collecte des informations est aisée, leur informatisation et leur traitement peuvent être effectués immédiatement ;<br/>
faire de la publicité pour une marque, voire de la prospection ou de la vente à distance : c'est là le remplacement des colporteurs et de la vente au porte à porte.<br/>
Les secteurs qui ont eu recours aux centres d'appels sortants :<br/>

les FAI ;<br/>
les cuisinistes ;<br/>
les conseillers en gestion de patrimoine ;<br/>
les banques ;<br/>
les opérateurs télécoms ;<br/>
les opérateurs d'électricité.</p>
                </div>
          </div>
        </div>
        </div>
      </section>
       
        
        
      <div className="services">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div className="section_title">Facteurs Clés de <span className='success py-'>Succès</span> </div>
          <h2 className='py-5 bnf'>Les bénéfices majeurs que vous gagnerez en vous associant à Perfect Solution</h2>
					
				</div>
			</div>
      <div className='row'>
        <div className='col-sm-12 col-xs-12 module_cont  pb65'>
          <div class="shortcode_diagram items4">
            <ul class="diagram_list py-5" data-bg="#ffffff" data-color="#f25253" data-width="5px" data-size="140px"
            data-fontsize="45px">
              <li class="diagram_li">
                <div class="diagram_wrapper">
                  <div class="diagram_item">
                   
                      <div class="chart_wrapper">
                        <div class="icoo">
                         <img src="http://www.tuniscallcenter.com/img/retina/icons/40.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/retina/icons/40.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div class="diagram_content">
                            <h5 className='parag' style={{color:'#FFF'}} >En productivité</h5>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
            
            
              <li class="diagram_li">
                <div class="diagram_wrapper">
                  <div class="diagram_item">
                   
                      <div class="chart_wrapper">
                        <div class="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/50.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/icons/50.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div class="diagram_content">
                            <h3 className='parag' style={{color:'#FFF'}} >En qualité perçue</h3>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
           
              <li class="diagram_li">
                <div class="diagram_wrapper">
                  <div class="diagram_item">
                   
                      <div class="chart_wrapper">
                        <div class="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/30.png" className="image icon_def" width="140" height="140" />
                         <img src="hhttp://www.tuniscallcenter.com/img/icons/30.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div class="diagram_content">
                            <h3 className='parag' style={{color:'#FFF'}} >Pour le taux de résolution<br/>
au premier contact</h3>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
              <li class="diagram_li">
                <div class="diagram_wrapper">
                  <div class="diagram_item">
                   
                      <div class="chart_wrapper">
                        <div class="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/20.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/icons/20.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div class="diagram_content">
                            <h3 className='parag' style={{color:'#FFF'}} >Pour le temps moyen <br/>
de traitement d’un contact</h3>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
           
            
            </ul>

          </div>
        </div>
      </div>
	</div>
	</div>
    <div className="container-fluid boostez"> 
	 <div className="row pt10 ">
     <div className="bg_title">
       <h2 className='client'>
         <span className='kra' style={{color:'#ffc91a'}}>Boostez votre Chiffre d’Affaire</span><br/>
         Fidélisez vos Clients 
       </h2>
     </div>
   </div>
  
   <div className="row  pt46 ">
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/00.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/00.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Acquisition - Télévente</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Télévente, cross selling, up selling, réactivation de contrats,<br/> renouvellement... </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/retina/icons/01.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/retina/icons/01.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Fidélisation -Rétention</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Scoring client, cellule de rétention, optimisation des scripts et technique de rétention, campagnes anti-churn</p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/03.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/03.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Service Client</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Service client, demande de renseignement, hotline technique, SAV </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/06.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/06.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Etudes Marketing</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Terrain CATI, enquêtes de satisfaction, sondages, baromètres </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/04.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/04.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Téléprospection</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Génération de leads, détection d’opportunités, prise de Rendez-vous, qualification de fichiers, création de trafic sur point de vente </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/09.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/09.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title"> Hôtel Call Center</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Location de positions staffées ou non staffées, mise à disposition d’un espace de travail adapté à vos besoins  </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/05.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/05.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title">  Délégation Compétences</h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">La garantie de la proximité active avec vos métiers, l’assurance de la synergie des équipes dédiées à vos projets. </p>
         </div>
       </div>
     </div>
     <div className="col-sm-3 module_cont pb80 module_iconboxes ">
       <div className="module_content shortcode_iconbox">
         <a href="#"> </a>
         <div class="iconbox_wrapper">
         <a href="#"> </a>
         <div class="icon_title_wrap">
           <a href="#"> </a>
           <div class="ico">
             <a href="#"></a>
             <a href="#">
             <img src="http://www.tuniscallcenter.com/img/icons/07.png" class="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/07.png" class="icon_retina" width="80" height="80" /></a>
           </div>
           <a href="#">
             <h3 class="iconbox_title"> Recouvrement amiable et rappel d’échéances </h3>
           </a>
         </div>
         </div>
         <div className="iconbox_body text-center">
           <p className="para">Voice broadcast, relance amiable, process de recouvrement  </p>
         </div>
       </div>
     </div>
   
   </div>
	 
	 </div>

  <footer class="footer">
		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/footer.jpg" data-speed="0.8"></div>
		<div class="footer_content">
			<div class="container">
				<div class="row">

					
					<div class="col-lg-3 footer_col">
						<div class="footer_about">
							<div class="logo">
								<a href="#">Call Center<span></span></a>	
							</div>
							<div class="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
							<div class="footer_social">
								<ul class="d-flex flex-row align-items-center justify-content-start">
									<li className='lst'><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li className='lst'><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li className='lst'><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li className='lst'><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
									<li className='lst'><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
									<li className='lst'><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
								</ul>
							</div>
							<div class="copyright">
               
Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a  className='essid'href="Essid" target="_blank">Essid</a>

</div>
						</div>
					</div>
					
					
					<div class="col-lg-5 footer_col">
						<div class="footer_contact">
							<div class="footer_contact_title">Quick Contact</div>
							<div class="footer_contact_form_container">
								<form action="#" class="footer_contact_form" id="footer_contact_form">
									<div class="d-flex flex-xl-row flex-column align-items-center justify-content-between">
										<input type="text" class="footer_contact_input" placeholder="Name" required="required"/>
										<input type="email" class="footer_contact_input" placeholder="E-mail" required="required"/>
									</div>
									<textarea class="footer_contact_input footer_contact_textarea" placeholder="Message" required="required"></textarea>
									<button class="footer_contact_button">send message</button>
								</form>
							</div>
						</div>
					</div>

					
					<div class="col-lg-4 footer_col">
						<div class="footer_hours">
							<div class="footer_hours_title">Opening Hours</div>
							<ul class="hours_list">
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div>Monday – Thursday</div>
									<div class="ml-auto">8.00 – 19.00</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div>Friday</div>
									<div class="ml-auto">8.00 - 18.30</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div>Saturday</div>
									<div class="ml-auto">9.30 – 17.00</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div>Sunday</div>
									<div class="ml-auto">9.30 – 15.00</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer_bar">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
							<nav class="footer_nav">
								<ul class=" lst d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
									<li class="active"><a href="index.html">Home</a></li>
									<li><a href="about.html">Articles specials</a></li>
									<li><a href="services.html">Services</a></li>
									<li><a href="news.html">News</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>
							<div class="footer_links">
						</div>
							<div class="footer_phone ml-lg-auto">
								<i class="fa fa-phone" aria-hidden="true"></i>
								<span>+216 58 778 889</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>

	 
	  </div>
   
   
   
   
   
   
    );
  }
}

export default Login;
