

function MyInput({ label, placeholder, type, name }) {
  return (
    <>
      {/* сопроводительный текст из label */}
      <label>{label}</label>
      <input placeholder={placeholder} type={type} name={name} />
    </>
  );
}

export default MyInput;
