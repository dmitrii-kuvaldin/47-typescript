// import styles from './StarWarsHeroes.module.css'
import { v4 } from "uuid";

// интерфейс описывающий объект props, который мы деструктуризируем в круглых скобках компонента и передаем из родителя (там где был вызван компонент)

interface IStarWarsHeroProps {
  name: string
  age: number
  image: string
  lightsaberColors:string[]
}

const StarWarsHero = ({name, age, image, lightsaberColors}: IStarWarsHeroProps) => {
  return (
    <div >
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <img src={image} width={200} alt="img" />
      <p>
        Lightsaber colors:{" "}
        {lightsaberColors.map(el => (
          <span style={{ color: `${el}` }} key={v4()}>
            {el}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default StarWarsHero;
