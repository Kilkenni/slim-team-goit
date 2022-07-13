import Container from "../../components/Container";
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

import DiaryProductList from '../../components/DiaryPtoductList';
import DiaryProductForm from '../../components/DiaryPtoductForm';

export default function DiaryPageView() {

    return (
        <Container>
            <LeftSideBar>
                <DiaryDateСalendar />
                <DiaryProductForm />
                <DiaryProductList />
            </LeftSideBar>
            <RightSideBar/>
        </Container>
    );
}
