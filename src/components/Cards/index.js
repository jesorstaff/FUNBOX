import {useState} from "react";
import './style.scss'
import {products} from "../../data/products";

const Card = ({item}) => {
  const [isActive, setIsActive] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    if (!isActive) return setIsHover(false)
  }

  const hoverCard = () => {
    if (isActive) return setIsHover(true)
  }

  const leaveMouse = () => {
    if (isActive) return setIsHover(false)
  }

  const checkStatus = !item.status ? ' disabled' : ''

  return (
    <div className={`cards__item${isActive ? ' active' : ''}${checkStatus}`}>
      <div
        className="card"
        onClick={handleClick}
        onPointerEnter={hoverCard}
        onPointerLeave={leaveMouse}
      >
        <div className="card__subtitle">
          {isActive && isHover ? item.subtitleSelected : item.subtitle}
        </div>
        <div className="card__title">
          <p>{item.name}</p>
          <span>{item.type}</span>
        </div>
        <div className="card__info">
          <b>{item?.portionCount} </b>{item.portion}<br/>
          <b>{item?.presentCount} </b>{item.present}
        </div>
        <img src={item.image} alt="cat" className="card__img"/>
        <div className="card__circle">
          <p>{item.weight}</p>
          <span>кг</span>
        </div>
        {checkStatus && <div className="overlay"></div>}
      </div>
      <div className="card-information">
        {checkStatus ?
          <p>{item.descriptionDisabled}</p> :
          isActive ?
            <p>{item.descriptionSelected}</p> :
            <p>
              {item.description}
              <span onClick={handleClick}> {item.descriptionBtn}</span>
            </p>
        }
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__title">Ты сегодня покормил кота?</div>
      <div className="container">
        <div className="cards__wrapper">
          {products.map(item => <Card key={item.id} item={item}/>)}
        </div>
      </div>
    </div>
  )
}

export {Cards}
