import React, { Component } from 'react'
import './Home.css'
import Kontaktamig from './Kontaktamig'

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div>

				<div className="header mx-auto">
					<img src="https://media-exp1.licdn.com/dms/image/C4D03AQHQKH9oyvGNKg/profile-displayphoto-shrink_800_800/0/1619195660348?e=1626307200&v=beta&t=Gilb2Q7uUqHwVBSit7HZ2-qzIDZAMWrDWgNMb17H1nk"
						width="400"
						height="400" />
				</div>

				<body><center><h2 style={{ color: "Black" }}>NINMAR ACAR</h2>
				<h2 style={{ color: "#C8C8C8;" }}>STUDENT - SYSTEMUTVECKLARE</h2>

				<div className="row mx-auto" />
				<div className="column mx-auto"/>
				<h2 style={{ color:"#C8C8C8" }}>Profil</h2>
				<p>Jag är en positiv och ambitiös kille som
				studerar till systemutvecklare i Göteborg.
				Mina erfarenheter har format mig till en
				skicklig teamspelare som man alltid kan räkna med.</p>
				<h2 style={{ color: "#C8C8C8" }}>KOMPETENSER</h2>
				<h4 style={{ color: "Black" }}>Kodningsspråk - grundläggande</h4>
				C#, UML, ASP.NET, JavaScript, SQL, <a href="https://github.com/NinmarAcar">GitHub</a>
				<h2 style={{ color: "#C8C8C8;" }}>Språk</h2>
				<p>
						Svenska | Engelska | Assyriska
				</p>
					<Kontaktamig></Kontaktamig>
				<div className="column"/>
				<h2 style={{ color: "#C8C8C8" }}>UTBILDNING</h2>
				<p>Yrkeshögskoleexamen 400 Yh-p
				Handelsakademin│2020-2022
				Systemutvecklare - Objektorienterad systemutveckling<br />
				Igelstavikens gymnasium│2011-2014
				Samhällsvetenskapliga programmet</p>
				<h2 style={{ color: "#C8C8C8" }}>ARBETSLIVSERFARENHETER</h2>
				<h4 style={{ color: "black" }}>Processoperatör
				Lantmännen | 2020</h4>
				<p>

					<li>Deltog i daglig produktion och råvaruhantering</li>
					<li>Processuppföljning och förbättringsarbete</li>
					<li>Interna och externa revisioner, riskbedömningar
						samt hygienarbete</li>
				</p>
				<h4 style={{ color: "black" }}>Maskinoperatör
					AstraZeneca | 2017-2019</h4>
				<p>

					<li>Övervakade produktionen och hanterade maskiner</li>
					<li>Kontrollerade och säkerställde kvalitén</li>
					<li>Dokumenterade arbetsmoment och uppföljde
						problemanalyser</li>
				</p>
				<h4 style={{ color: "black" }}>Operatör
				Scania Industrial Maintenance AB | 2014-2017</h4>
				<p>

					<li>Började som montör där jag arbetade i team med
					produktion</li>
					<li>Befordrades till teamleader med olika ansvarsområden, bl.a. produktionsansvarig & schemaläggning </li>
					</p>
				</center></body>
				<br></br>
				<body><center><h8 style={{ color: "grey" }}>REFERENSER SAMT BILAGOR LÄMNAS PÅ BEGÄRAN</h8></center>
				</body>
			</div>
		  )
}
}