import "./myButton.css";

// мы забираем переданные данные в круглых скобках
// обычно мы используем деструктуризацию для того чтобы достать значения пропсов по ключам и положить их в соответствующие переменные
function MyButton({text = 'click me!', onClick, type, isPrimary = false}) {
  return <button type={type} onClick={onClick} className={`myButton ${isPrimary ? 'primary' : ''}`}>{text}</button>;
}

export default MyButton;
