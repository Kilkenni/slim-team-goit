import React from "react";
import banana from "./images/banana.png";
import strawberry from "./images/strawberry.png";
import leaves from "./images/leaves-new.png";
import leavesTable from "./images/leaves-table-new.png";
import mainVector from "./images/main-vector.svg";
import '../App.scss'
import DailyCaloriesForm from '../DailyCaloriesForm/index'

function MainPage() {
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">Розрахуйте добову норму калорій прийом прямо зараз</h1>
       <DailyCaloriesForm/>
      </div>

      <div className="main__img--wrapper">
        <div className="leaf leaf-first"></div>
        <div className="leaf leaf-second"></div>
        <div className="leaf leaf-third"></div>
        <div className="leaf leaf-fourth"></div>

        <img src={leavesTable} className="main__img leavesTable" alt="leaves" />
        <img src={leaves} className="main__img leaves" alt="leaves" />
        <div id="banana">
        <img src={banana} className="main__img banana" alt="banana" />
        </div>
        <img src={strawberry} className="main__img strawberry" alt="strawberry" />
        <img src={mainVector} className="main__img mainVector" alt="backround-vector" />
      </div>
    </div>
  );
}

export default MainPage;
