import { useState } from "react";
import banana from './images/banana.png';
import strawberry from './images/strawberry.png';
import leaves from './images/leaves-new.png';
import leavesTable from './images/leaves-table-new.png';
import mainVector from './images/main-vector.svg';
import styles from './MainPage.module.scss';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

import Modal from "../../components/Modal";

function MainPage() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = (forceHide = false) => {
    if (forceHide) {
      setShowModal(false);
      return;
    }
    setShowModal(!showModal);
  }

  return (
    <div className={styles['main']}>
      <div className={styles['main__content']}>
        <h1 className={styles['main__title']}>
          Розрахуйте добову норму калорій прийом прямо зараз
        </h1>
        <DailyCaloriesForm />
        {showModal &&
          <Modal onClose={toggleModal}>
            <button type="button" onClick={() => toggleModal(true)}>close</button>
          </Modal>
        }
      </div>

      <div className={styles['main__img--wrapper']}>
        <div className={styles['leaf-first']}></div>
        <div className={styles['leaf-second']}></div>
        <div className={styles['leaf-third']}></div>
        <div className={styles['leaf-fourth']}></div>

        <img src={leavesTable} className={styles['leavesTable']} alt="leaves" />
        <img src={leaves} className={styles['leaves']} alt="leaves" />
        <div id={styles['banana']}>
          <img src={banana} className={styles['banana']} alt="banana" />
        </div>
        <img
          src={strawberry}
          className={styles['strawberry']}
          alt="strawberry"
        />
        <img
          src={mainVector}
          className={styles['mainVector']}
          alt="backround-vector"
        />
      </div>
    </div>
  );
}

export default MainPage;
