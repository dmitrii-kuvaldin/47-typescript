// import styles from './ShopProductInfo.module.css'

import { useParams } from 'react-router-dom';

const ShopProductInfo = () => {
  const {id, nam} =useParams()


  return (
    <div className='lesson-container'>
      <h2>Product info: {id} {nam}</h2>
    </div>
  );
};

export default ShopProductInfo;
