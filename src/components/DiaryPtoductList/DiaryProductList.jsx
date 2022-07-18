import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/products/products-operations';
import PropTypes from 'prop-types';
import DiaryProductItem from '../DiaryPtoductItem/DiaryProductItem';
import s from './DiaryProductList.module.scss';

const DiaryProductList = ({ products, onDeleteProduct, isLoading, setVisibleForm, setVisibleList}) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  const handleChange = () => {
    setVisibleForm(true)
    setVisibleList(false)
  }

  return (
    
    <div className={s.block}>
      {isLoading ? (
        <h1 style={{ textAlign: 'center', marginTop: 20 }}>Loading...</h1>
      ) :
      (<ul className={s.list}>
        {products?.map(({ id, name, number, calory }) => (
          <DiaryProductItem 
            key={id}
            name={name}
            number={number}
            calory={calory}
            onClick={() => onDeleteProduct(id)}
          />
        ))}
      </ul>)}  
      <button onClick={handleChange} className={s.button}>
        <span className={s.plus}>+</span>
      </button>     
    </div>
  );
};

DiaryProductList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
      calory: PropTypes.string,
    })
  ),
};

const getVisibleContacts = (products, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return products.filter(product =>
    product.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ products: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductList);