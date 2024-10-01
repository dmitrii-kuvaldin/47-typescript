// import styles from './shop.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface IFormValue {
  amount: string;
}

const schema = Yup.object().shape({
  amount: Yup
    .number()
    .typeError('кол-во продуктов - это число 🥲')
    .required('ввод данных обязателен!')
    .integer('введите целое число')
    .min(1, 'кол-во должно быть больше 1!')
    .max(20, 'кол-во не больше 20!')
});


const Shop = () => {



  const getProducts = async (amount: string) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    const data = await res.json()
    console.log(data)
  }



  const formik = useFormik({
    initialValues: {
      amount: ''
    } as IFormValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (value: IFormValue, { resetForm }) => {
      getProducts(value.amount)
      resetForm();
    }
  });



  return (
    <div className='lesson-container'>
      <h2>Shop 🛒</h2>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.amount} name='amount' placeholder='amount of products' type="text" />
        <button type="submit">show products</button>
      </form>
      <p style={{ color: 'red' }}>{formik.errors.amount}</p>
    </div>
  );
};

export default Shop;
