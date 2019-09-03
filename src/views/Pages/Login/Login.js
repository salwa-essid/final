import React, { Component } from 'react';
import { Button, Col,  Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './style.css'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import  axios from 'axios';
import JwtDecode from 'jwt-decode';



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value })
    }
   
    if (e.target.name === "password") {
      this.setState({ password: e.target.value })
    }
  }


  login = () => {
    
    if(this.state.email==="" || this.state.password===""){
      ToastsStore.error("Enter password and email")
    } else {
      axios.post("http://127.0.0.1:5001/auth/admin/login",{
        email:this.state.email,
        password:this.state.password
      }).then(success=>{
        if(success.data.error===""){
          localStorage.setItem('token',success.data.data.data)
          var payload = JwtDecode(success.data.data.data)
          if(payload.role){
            if(payload.role==="SUPER_ADMIN"){
               this.props.history.push("/admin/list");
            }
          } else {
            localStorage.removeItem('token')
          }
        }else {
         ToastsStore.error(success.data.error);
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  }
  render() {
    return (
     
      <div className="app ">
		
        <nav className="navbar nav navbar-expand-lg ">
          
          <a className="navbar-brand " >
            <img className="logo"src='https://i.pinimg.com/originals/20/c4/39/20c4393dd9ffd6fa5402cc70404e4b97.png'alt=""/></a>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  >
              <div className="toggler-btn">
                     <div className ="bar bar1"></div>
                     <div className ="bar bar2"></div>
                     <div className ="bar bar3"></div>   
                     <div className ="bar bar4"></div>
              </div>
           </button>
           
           
       
          
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                    <a className=" nav-link text-capitalize" href="index.html">Acceuil </a>
               </li>
             
             <li className="nav-item">
              <a className=" nav-link text-capitalize" href="#histoire"> Histoire </a>
         </li>
           
          
           <li className="nav-item">
              <a className=" nav-link text-capitalize" href="#service">Facteurs Succés </a>
         </li>
         <li className="nav-item">
              <a className=" nav-link text-capitalize" href="#chiffre"> Chiffre D'Affaire </a>
         </li>
            
         <li className="nav-item">
          <a className=" nav-link text-capitalize" href="#contact">Contact </a>
      </li>
            </ul>
            {/* <form className="form-inline d-none d-lg-block mr-5">
              <button className="btn btn-secondary  text-capitalize" type="button">
                <a className="btn-res" href="./res.html"> Reservations</a></button>
          
            </form> */}
          </div>
        
      
      
      
      </nav>
        
        
      <header id="header top-icon ">
      <ToastsContainer store={ToastsStore} />
              <div className="container" >
                <div className="row height-90 align-items-center
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
                        <Input type="text" name="email" onChange={this.handleChange} placeholder="E-mail" autoComplete="off" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" onChange={this.handleChange} placeholder="Password" autoComplete="current-password" />
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
              <a href="#articles-speciales" className="btn header-link px-2
              "> <i className="fa fa-phone fa-5x"></i></a>
            </header>
    
            <div className="container-fluid  info p-3" id="top-icons">
        <div className="row ">
          <div className="col d-flex justify-content-between 
          align-items-baseline flex-wrap">
            <div className="info-icons p-2">
               <a fref="#" className=" mr-2 primary-color">
                
                 <i className=" i fa fa-facebook fa-2x"></i>
                
               </a>
               <a fref="#" className="  mr-2 primary-color">
                <i className=" i fa fa-instagram fa-2x"></i>
              </a>
              <a fref="#" className=" mr-2 primary-color">
                <i className=" i fa fa-twitter fa-2x"></i>
              </a>
              <a fref="#" className="  mr-2 primary-color">
                <i className=" i fa fa-yelp fa-2x"></i>
              </a>
            </div>
            <h3 className="primary-color p-2 text-capitalize corniche">Corniche/sahloul,4000 Sousse
            </h3>
          </div>
        </div>
      </div>
    <section id="histoire" className="py-2 my-1">
        <div className="container back">
          <div className="row">
            <div className="col">
              <div className="histoire-text text-center">
                  <h2 className="h2-histoire display 1 text-capitalize py-5">
                      À PROPOS DE NOUS 
                     
                   </h2>
                   <p className="paragraphe1 text-center text-dark text-capitalize " >
                   Le centre d'ppels permet de prendre en charge la relation à distance entre une marque et son marché.
                    Il est le plus souvent concrétisé par un ou plusieurs espace(s) de bureaux où
                     sont distribués des appels téléphoniques, mais aussi des courriels, des courriers,
                      etc. Ces appels peuvent être qualifiés d'entrants, lorsqu'ils sont reçus par les 
                      conseillers clientèle du centre, ou à l'inverse de sortants lorsqu'ils sont émis par eux.
                       Équipés des dernières évolutions de la technologie des télécommunications, 
                   de nombreux centres d'appels traitent ces deux types d'appels.</p>
                   <p className="paragraphe2 text-center text-dark text-capitalize py-1">
                   Le nombre des centres d’appels croît de façon exponentielle. 
                   De nombreuses entreprises industrielles ou de services offrent aujourd’hui à
                    leurs clients un service d’accès à distance par téléphone. Il faut distinguer
                     les centres d'appel internes aux entreprises et les centres externalisés, confiés 
                     à des prestataires de service. De grands donneurs d'ordre, 
                     les opérateurs de télécommunications, en particulier, tels Orange ou SFR, ont recours aux deux et font appel pour sous-traiter à des sociétés leaders telle que Teleperformance. Les TPE, PME ainsi que les PMI renforcent aussi leur stratégie relationnelle et choisissent pour humaniser leur relation client
                    des centres d'appels basés en France et plus particulièrement proches de chez eux.
                   </p>
                   <p className="paragraphe2 text-center text-dark text-capitalize py-1">
                   Les centres sont au cœur de la relation client de beaucoup d'entreprises aujourd’hui. 
                   L'intégration de la téléphonie avec l'informatique permet de personnaliser
                    le contact en présentant à l'opérateur l'ensemble des données client pertinentes au moment de l'appel et d'optimiser 
                   la distribution des appels et donc l'utilisation du temps des conseillers de clientèle. </p>
                 
                   <h3 className="h2-histoire display 1 text-capitalize py-2">
                    Appels entrants 
                   </h3>
                   <p>Un client constitue un élément clé. Le placer au centre des stratégies
                      relationnelles est le moyen le plus sûr pour développer l'activité d'une entreprise. 
                      Appréhender les points d'interaction qui jalonnent le parcours client et maximiser 
                      le potentiel de chaque contact téléphonique font partie des nouvelles stratégies des
                       entreprises. La gestion des appels entrants couvre tous les canaux de communication qu’ont les clients pour contacter les entreprises : numéro vert, callback, SAV, help desk… Pour renforcer l'accueil téléphonique client, le traitement des appels 
                     s’appuie sur des outils CRM et télécoms, comme le CTI, les ACD, le SVI...</p>
                     <h3 className="h2-histoire display 1 text-capitalize py-2">
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
       
        
        
      <div id="service" className="services">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title">Facteurs Clés de <span className='success py-'>Succès</span> </div>
          <h2 className='py-5 bnf'>Les bénéfices majeurs que vous gagnerez en vous associant à Perfect Solution</h2>
					
				</div>
			</div>
      <div className='row'>
        <div className='col-sm-12 col-xs-12 module_cont  pb65'>
          <div className="shortcode_diagram items4">
            <ul className="diagram_list py-5" data-bg="#ffffff" data-color="#f25253" data-width="5px" data-size="140px"
            data-fontsize="45px">
              <li className="diagram_li">
                <div className="diagram_wrapper">
                  <div className="diagram_item">
                   
                      <div className="chart_wrapper">
                        <div className="icoo">
                         <img src="http://www.tuniscallcenter.com/img/retina/icons/40.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/retina/icons/40.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div className="diagram_content">
                            <h5 className='parag' style={{color:'#FFF'}} >En productivité</h5>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
            
            
              <li className="diagram_li">
                <div className="diagram_wrapper">
                  <div className="diagram_item">
                   
                      <div className="chart_wrapper">
                        <div className="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/50.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/icons/50.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div className="diagram_content">
                            <h3 className='parag' style={{color:'#FFF'}} >En qualité perçue</h3>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
           
              <li className="diagram_li">
                <div className="diagram_wrapper">
                  <div className="diagram_item">
                   
                      <div className="chart_wrapper">
                        <div className="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/30.png" className="image icon_def" width="140" height="140" />
                         <img src="hhttp://www.tuniscallcenter.com/img/icons/30.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div className="diagram_content">
                            <h3 className='parag' style={{color:'#FFF'}} >Pour le taux de résolution<br/>
                               au premier contact</h3>
                        </div>
                      
                 
                  </div>
                </div>
              </li>
              <li className="diagram_li">
                <div className="diagram_wrapper">
                  <div className="diagram_item">
                   
                      <div className="chart_wrapper">
                        <div className="icoo">
                         <img src="http://www.tuniscallcenter.com/img/icons/20.png" className="image icon_def" width="140" height="140" />
                         <img src="http://www.tuniscallcenter.com/img/icons/20.png" className="image icon_retina" width="140" height="140" />
                        </div>
                        </div>
                        <div className="diagram_content">
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
    <div id="chiffre" className="container-fluid boostez"> 
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
         <a> </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/00.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/00.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Acquisition - Télévente</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/retina/icons/01.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/retina/icons/01.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Fidélisation -Rétention</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/03.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/03.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Service Client</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/06.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/06.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Etudes Marketing</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/04.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/04.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Téléprospection</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/09.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/09.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title"> Hôtel Call Center</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/05.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/05.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title">  Délégation Compétences</h3>
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
         <a > </a>
         <div className="iconbox_wrapper">
         <a > </a>
         <div className="icon_title_wrap">
           <a > </a>
           <div className="ico">
             <a ></a>
             <a >
             <img src="http://www.tuniscallcenter.com/img/icons/07.png" className="icon_def" width="80" height="80" alt="Service Télévente" />
             <img  src="http://www.tuniscallcenter.com/img/icons/07.png" className="icon_retina" width="80" height="80" /></a>
           </div>
           <a >
             <h3 className="iconbox_title"> Recouvrement amiable et rappel d’échéances </h3>
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

  <footer className="footer">
		<div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/footer.jpg" data-speed="0.8"></div>
		<div className="footer_content">
			<div className="container">
				<div className="row">

					
					<div id="contact" className="col-lg-3 footer_col">
						<div className="footer_about">
							<div className="logo">
								<a >Call Center<span></span></a>	
							</div>
							<div className="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
							<div className="footer_social">
								<ul className="d-flex flex-row align-items-center justify-content-start">
									<li className='lst'><a ><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li className='lst'><a ><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li className='lst'><a ><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li className='lst'><a ><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
									<li className='lst'><a ><i className="fa fa-behance" aria-hidden="true"></i></a></li>
									<li className='lst'><a ><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
								</ul>
							</div>
							<div className="copyright">
               
Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a  className='essid'href="Essid" target="_blank">Essid</a>

</div>
						</div>
					</div>
					
					
					<div className="col-lg-5 footer_col">
						<div className="footer_contact">
							<div className="footer_contact_title">Quick Contact</div>
							<div className="footer_contact_form_container">
								<form action="#" className="footer_contact_form" id="footer_contact_form">
									<div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
										<input type="text" className="footer_contact_input" placeholder="Name" required="required"/>
										<input type="email" className="footer_contact_input" placeholder="E-mail" required="required"/>
									</div>
									<textarea className="footer_contact_input footer_contact_textarea" placeholder="Message" required="required"></textarea>
									<button className="footer_contact_button">send message</button>
								</form>
							</div>
						</div>
					</div>

					
					<div className="col-lg-4 footer_col">
						<div className="footer_hours">
							<div className="footer_hours_title">Opening Hours</div>
							<ul className="hours_list">
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div>Monday – Thursday</div>
									<div className="ml-auto">8.00 – 19.00</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div>Friday</div>
									<div className="ml-auto">8.00 - 18.30</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div>Saturday</div>
									<div className="ml-auto">9.30 – 17.00</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div>Sunday</div>
									<div className="ml-auto">9.30 – 15.00</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="footer_bar">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
							<nav className="footer_nav">
								<ul className=" lst d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
									<li className="active"><a href="index.html">Home</a></li>
									<li><a href="about.html">Histoire</a></li>
									<li><a href="services.html">Facteurs Succés</a></li>
									<li><a href="news.html">Chiffre D'Affaire</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>
							<div className="footer_links">
						</div>
							<div className="footer_phone ml-lg-auto">
								<i className="fa fa-phone" aria-hidden="true"></i>
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
