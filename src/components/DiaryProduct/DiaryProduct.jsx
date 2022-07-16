// import React from 'react';
import { useState ,useEffect } from 'react';
import DiaryProductList from '../DiaryPtoductList';
import DiaryProductForm from '../DiaryPtoductForm';
import s from './DiaryProduct.module.scss';
import { useMediaQuery } from 'react-responsive';


const DiaryProduct = () => {
  const [visibleForm, setVisibleForm] = useState(true);
  const [visibleList, setVisibleList] = useState(true)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })  

  useEffect(() => {
    if(!isDesktopOrLaptop){
      setVisibleForm(false)
      
    }else{
      setVisibleForm(true)
      setVisibleList(true)
    }
    
  },[isDesktopOrLaptop])

  return (
    <div className={s.block}>
    <DiaryProductForm visibleForm={visibleForm} />
    {visibleList && <DiaryProductList  setVisibleForm={setVisibleForm} setVisibleList={setVisibleList} /> }
    </div>
  );
};

export default DiaryProduct;
// import React, { useState } from 'react';

// function DiaryProduct (props) {
//     const [isVisibleIn, setIsVisibleIn] = useState(false);
 
//     const handleDiaryProductForm = () => setIsVisibleIn(true);
//     const handleDiaryProductList = () => setIsVisibleIn(false);

//     let button;
//     if (isVisibleIn) {
//         button = <DiaryProductFormButton onClick={handleDiaryProductList} />;
//     } else {
//         button = <DiaryProductListButton onClick={handleDiaryProductForm} />;
//     }
  
//     return (
//         <div className={s.block}>
//           <Render isVisibleIn={isVisibleIn} />
//           {button}
//         </div>
//     );
// }
  
// function FormRender(props) {
//     return <DiaryProductForm />;
// }
  
// function ListRender(props) {
//     return <DiaryProductList />;
// }
  
// function Render(props) {
//     const isVisibleIn = props.isVisibleIn;
//     if (isVisibleIn) {
//       return <FormRender />;
//     }
//     return <ListRender />;
// }
  
// function DiaryProductFormButton(props) {
//     return (
//       <button className={s.buttonAdd} onClick={props.onClick}>
//         <span className={s.add}>Додати</span>        
//       </button>
//     );
// }
  
// function DiaryProductListButton(props) {
//     return (
//       <button className={s.buttonPlus} onClick={props.onClick}>
//         <span className={s.plus}>+</span>
//       </button>
//     );
// }
  
// export default DiaryProduct;



// import DiaryProductList from '../DiaryPtoductList';
// import DiaryProductForm from '../DiaryPtoductForm';
// import s from './DiaryProduct.module.scss';
// import React, { useState } from 'react';

// function DiaryProduct (props) {
//     const [isVisibleIn, setIsVisibleIn] = useState(false);
 
//     const handleDiaryProductForm = () => setIsVisibleIn(true);
//     const handleDiaryProductList = () => setIsVisibleIn(false);

//     let button;
//     if (isVisibleIn) {
//         button = <DiaryProductFormButton onClick={handleDiaryProductList} />;
//     } else {
//         button = <DiaryProductListButton onClick={handleDiaryProductForm} />;
//     }
  
//     return (
//         <div className={s.block}>
//           <Render isVisibleIn={isVisibleIn} />
//           {button}
//         </div>
//     );
// }
  
// function FormRender(props) {
//     return <DiaryProductForm />;
// }
  
// function ListRender(props) {
//     return <DiaryProductList />;
// }
  
// function Render(props) {
//     const isVisibleIn = props.isVisibleIn;
//     if (isVisibleIn) {
//       return <FormRender />;
//     }
//     return <ListRender />;
// }
  
// function DiaryProductFormButton(props) {
//     return (
//       <button className={s.buttonAdd} onClick={props.onClick}>
//         <span className={s.add}>Додати</span>        
//       </button>
//     );
// }
  
// function DiaryProductListButton(props) {
//     return (
//       <button className={s.buttonPlus} onClick={props.onClick}>
//         <span className={s.plus}>+</span>
//       </button>
//     );
// }
  
// export default DiaryProduct;