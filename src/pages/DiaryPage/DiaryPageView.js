import Container from "../../components/Container";
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

export default function DiaryPageView() {

    return (
        <Container>
            <LeftSideBar>
                <DiaryDateСalendar />
            </LeftSideBar>
            <RightSideBar/>
        </Container>
    );
}
