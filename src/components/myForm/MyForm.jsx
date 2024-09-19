import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './myForm.css'

function MyForm() {


  
  return (
    <form className='myForm'>
      <MyInput label={'login'} placeholder={'login'} type={'text'} />
      <MyInput label={'pass'} placeholder={'password'} type={'password'} />
      <MyInput label={'email'} placeholder={'email'} type={'email'} />
      <MyButton text={'авторизация'} type='submit' onClick={() => console.log('login!!')}  />
    </form>
  );
}

// label, placeholder, type, name

export default MyForm;
