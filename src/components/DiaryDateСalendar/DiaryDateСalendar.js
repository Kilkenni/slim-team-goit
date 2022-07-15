import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import styles from './DiaryDateCalendar.module.scss'
import { ReactComponent as Calendar } from "./calendar.svg";

export default class MyDTPicker extends React.Component {
    constructor(props ) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);  
    }

    onChangeDate = (event) => {
        this.props.onChangeDate(event._d);
    }

    render(){
        return <Datetime renderInput={ this.renderInput } onChange={this.onChangeDate} value={this.props.date} dateFormat="DD.MM.YYYY" timeFormat={false}/>;
    }

    renderInput( props, openCalendar ){
        return (
            <div className={styles.calendar}>
                <input {...props} className={styles.input}/>
                <button onClick={openCalendar} className={styles.button}><Calendar height={20} width={20} /></button>
            </div>
        );
    }
}