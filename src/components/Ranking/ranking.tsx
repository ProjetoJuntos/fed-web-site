import React from "react";
import ranking1 from '../../img/ranking1.png'
import ranking2 from '../../img/ranking2.png'
import ranking3 from '../../img/ranking3.png'
import style from '../../css/rankingFotos.module.css'

class Ranking extends React.Component{

    render(){
        return(
            <div>
                <div className={style.rankingFotos}>
                    <h1>1°</h1>
                   <img className={style.ft} src={ranking1}></img>
                   <h3>Marcela Dias</h3>
                </div>
                <div className={style.rankingFotos}>
                    <h1>2°</h1>
                    <img className={style.ft2} src={ranking2}></img>
                    <h3>Marcos Santos</h3>
                </div>
                <div className={style.rankingFotos}>
                    <h1>3°</h1>
                    <img className={style.ft} src={ranking3}></img>
                    <h3>Luciano Almeida</h3>
                </div>
               
            </div>
        );
    }
}

export default Ranking; 