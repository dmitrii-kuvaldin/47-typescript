import { useState } from "react";
import MyButton from "../myButton/MyButton";
import './feedback.css';

function Feedback() {
  const [like, setLike] = useState<number>(5);
  const [dislike, setDislike] = useState<number>(0);

  const handleLike = (): void => {
    setLike(prev => prev + 1);
  };
  const handleDislike = (): void => {
    setDislike(prev => prev + 1);
  };

  const handleReset = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className='lesson-container'>
      <h3>Dog API</h3>
      <div className="counter-container">
        <span>{like}</span>
        <MyButton isPrimary={true} onClick={handleLike} text={"👍"} />
        <MyButton onClick={handleDislike} text={"👎"} />
        <span>{dislike}</span>
      </div>
      <div className="lesson-container">
        <MyButton text={"Reset results ♻️"} onClick={handleReset} />
      </div>
    </div>
  );
}

export default Feedback;
