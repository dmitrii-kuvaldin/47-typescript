import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import styles from './genderForm.module.css';

// описание данных в объекте из input из формы
interface IFormGender {
  client: string;
}

// описание входящих данных из объекта, который приходит с API с сервера
interface IFormData {
  count: number;
  gender: string;
  name: string;
  probability: number;
}

const schema = Yup.object().shape({
  client: Yup
    .string()
    .required('введите ваше имя и ничего лишнего 😑')
    .required('без имени нечего не получится 😥')
    .min(2, 'слишком короткое имя 🙅‍♂️')
    .max(15, 'сомневаемся что у вас такое длинное имя...')
});

const GenderForm = () => {

  const [genderData, setGenderData] = useState<IFormData>({
    gender: '',
    name: '',
    count: 0,
    probability: 0,
  });

  const fetchGender = async (client: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${client}`);
    const data = await res.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      client: ''
    } as IFormGender,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormGender, { resetForm }) => {
      // делаем запрос к API через созданную выше асинхронную функцию
      fetchGender(values.client);
      resetForm();
    }
  });


  return (
    <div className='lesson-container'>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        {/* мы увидим этот элемент только если в formik.errors.client есть значение  */}
        {formik.errors.client && (
          <div className={styles.error}>{formik.errors.client}</div>
        )}
        <label htmlFor="">✨ Know your gender 🔮</label>
        <input value={formik.values.client} onChange={formik.handleChange} name='client' placeholder='type your name to analyze' type="text" />
        <button type="submit">send request</button>
      </form>
      {genderData.name && (
        <p className={styles.genderOutput}>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
      )}
    </div>
  );
};

export default GenderForm;
