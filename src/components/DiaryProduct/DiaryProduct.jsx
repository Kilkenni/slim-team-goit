// import { useState ,useEffect } from 'react';
// import DiaryProductList from '../DiaryPtoductList';
import DiaryProductForm from '../DiaryPtoductForm';
import s from './DiaryProduct.module.scss';

// import { useMediaQuery } from "../../js/hooks";

const DiaryProduct = ({setItem, date}) => {
  // const [visibleForm, setVisibleForm] = useState(true);
  // eslint-disable-next-line
  // const [visibleList, setVisibleList] = useState(true)

  // const tabletSize = getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-tablet");
  // const isMobile = useMediaQuery(`(max-width: ${tabletSize})`);

  // useEffect(() => {
  //   if(isMobile){
  //     setVisibleForm(false)
      
  //   }else{
  //     setVisibleForm(true)
  //     setVisibleList(true)
  //   }
    
  // },[isMobile])


// const addProd = ()=>{

// }

  return (
    <div className={s.block}>
    <DiaryProductForm onSubmit={setItem} date={date}/>
    {/* <DiaryProductForm visibleForm={visibleForm} /> */}

    {/* {visibleList && <DiaryProductList  setVisibleForm={setVisibleForm} setVisibleList={setVisibleList} /> } */}
    </div>
  );
};

export default DiaryProduct;