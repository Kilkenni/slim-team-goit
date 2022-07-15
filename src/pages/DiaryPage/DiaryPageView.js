import Container from "../../components/Container";
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import { useState } from 'react';
import DiaryProductList from '../../components/DiaryPtoductList';
import DiaryProductForm from '../../components/DiaryPtoductForm';

export default function DiaryPageView() {
    const [date, setDate] = useState(new Date());

    return (
        <Container date={date}>
            <LeftSideBar>
                <DiaryDateСalendar onChangeDate={setDate} date={date} />
                <DiaryProductForm />
                <DiaryProductList />
            </LeftSideBar>
            <RightSideBar date={date} />
        </Container>
    );
}
