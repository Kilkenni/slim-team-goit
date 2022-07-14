import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import styles from './DiaryDateCalendar.module.scss'
import { ReactComponent as Calendar } from "./calendar.svg";

export default class MyDTPicker extends React.Component {
    render(){
        return <Datetime renderInput={ this.renderInput } dateFormat="DD.MM.YYYY" timeFormat={false}/>;
    }
    renderInput( props, openCalendar, closeCalendar ){
        return (
            <div className={styles.calendar}>
                <input {...props} className={styles.input}
                placeholder="Введіть дату*"/>
                <button onClick={openCalendar} className={styles.button}><Calendar height={20} width={20} /></button>
            </div>
        );
    }
}