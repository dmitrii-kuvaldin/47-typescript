import { Link } from 'react-router-dom';
import MyButton from '../myButton/MyButton';
import styles from './shopProduct.module.css';

interface IShopProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

const ShopProduct = ({ price, image, title, id }: IShopProductProps) => {

  // эта функция обрезает строку если она больше 25 символов
  const shortTitle = (str: string) => {
    return str.length > 25 ? str.slice(0, 25) + '...' : str
  }

  return (
    <div className={styles.card}>
      <h3>{shortTitle(title)}</h3>
      <span>Price: {price}</span>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      {/* c помощью навигационного элемента Link мы дописываем в строку url id нужного продукта */}
      <Link to={String(id)}><MyButton isPrimary={true} text='more info'/></Link>
    </div>
  );
};

export default ShopProduct;
