import Container from "../../components/Container";
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import { useState } from 'react';
import DiaryProduct from '../../components/DiaryProduct';
import DiaryProductList from '../../components/DiaryPtoductList';

export default function DiaryPageView() {
    const [date, setDate] = useState(new Date());
    const [item, setItem] = useState();
    return (
        <Container date={date}>
            <LeftSideBar>
                <DiaryDateСalendar onChangeDate={setDate} date={date} />
                <DiaryProduct />
                <DiaryProductList/>
            </LeftSideBar>
            <RightSideBar date={date} />
        </Container>
    );
}
