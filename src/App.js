import React, {Component} from 'react';
import profil from "./zoro.jpg";
import './App.css';
import Progress from './components/progress';
import Detail from './components/details';

class App extends Component{
  render(){
    return (
      <div class="centerscreen">
          <div class="divLeft">
              <h4>Iadh Khalfallah</h4>
              <h5>Software engineer</h5>
              <img class="border border-dark" src={profil} alt="crew" class="AppImg"/>
              <h5 class="title-left">Personal Info</h5>
              <p class="parag">
                  Adress <br/>
                  Lac2, Tunis<br/>
                  Phone <br/>
                  +216 99 999 999 <br/>
                  Email <br/>
                  xxxx@gmail.com <br/>
                  Date of birth <br/>
                  12/12/90<br/>
                  Linkedin<br/>
                  Linkedin.com/tn/IadhKhalfallah12346

              </p>
              
              <h5 class="title-left">Skils</h5>
              <p class="parag">
                C/C++
                <Progress prog='75%'/>
                Java/J2EE
                <Progress prog='35%'/>
                HTML5
                <Progress prog='75%'/>
                CSS3
                <Progress prog='65%'/>
                Javascript
                <Progress prog='65%'/>
                PHP5
                <Progress prog='35%'/>
                SQL
                <Progress prog='65%'/>
                Symphony
                <Progress prog='35%'/>
                Hibernate
                <Progress prog='35%'/>
                LDA
                <Progress prog='35%'/>

              </p>
          </div>
              
          <div class="divRight">
              <p class="parag">Ambitious, sociable and creative student in second year of SW engineering, aiming to build a solid 
              technical profil in professional environement. <br/>
              Active member in both Insttitute of Electronics Engineers Computer Society chapeter and ACM club
              (Problem solving) of the National Institute Of Applied Science and Technology (INSAT). <br/>
              organizational member in INSAT radio club.
              </p>
              <hr/>
              <h5 class="title-right">Experience</h5>
              <hr/>
              <Detail startDate="2017-10" title="Contestant" place= "IEEEXtream, Tunisia " descrip="24H programming competition."/>
              <Detail startDate="2017-12" title="Trainer" place= "Hour of code Tunisia " descrip="training sessions to primary school students."/>
              <Detail startDate="2018-01" title="Contestant" place= "INSAT Collegiate Programming Contest" descrip=" 5H programming competition, 
                          promoted to the Tunisian Collegiate Programming Contest (TCPC)."/>
              <Detail startDate="2018-01" title="Web Developer" place="Started a journey in web development, created a 
                          website aiming to manage tasks in a hospital."/>
              <Detail startDate="2018-07" title="Contestant" place= "Tunisian Collegiate Programming Conest (TCPC)" descrip=" Anational 
                          programming competition, ranked 30/100."/>
              <Detail startDate="2018-07" title="Intern" place= "BFI group " descrip="A website that manages bank clients using a 
                          linear discriminant analysis algorithm, and J2EE frameworks and APIs."/>
              <Detail startDate="2018-05" endDate="2019-05" title="Chairman" place="IEEE Computer Society Chapter of INSAT Student Branch."/>
              <Detail startDate="2017-10" title="Community Manager" place= "ACM INSAT Collegiate Programming Conest."/>
              <Detail startDate="2015-03" endDate="present" title="Freelance Guitarist"/>

              <hr/>
              <h5 class="title-right">Education</h5>
              <hr/>
              <Detail startDate="2011-09" endDate="2016-06" title="Carthage Byrsa High School" place="graduated with honors"/>
              <Detail startDate="2015-03" endDate="present" title="National Institute of Applied Science and Technology (INSAT)" place="SW engineering field"/>

          </div>
      </div>
    );
  }
}

export default App;
