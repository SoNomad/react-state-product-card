import { useState } from "react";
import Product from "./Product";

function Card() {
  const [disp, setDisp] = useState(false);
  const [inCard, setInCard] = useState(true);

  const detailsHandler = () => {
    return setDisp((prev) => !prev);
  };

  const addHandler = () => {
    return setInCard((prev) => !prev);
  };

  return (
    <div className="item-card">
      <div className="image-section">
        <img src={Product[0].img}></img>
      </div>

      {/* Основная инфа о товаре */}

      <div className="info-seсtion">
        <div className="main-info-section">
          <div className="name-price">
            <h4 className="name">{Product[0].name}</h4>
            <h3 className="price">{Product[0].price}</h3>
          </div>

          <div className="details">
            <button className="details-btn" onClick={detailsHandler}>
              Details
            </button>

            {disp && (
              <div className="details-info">
                <button className="close-btn" onClick={detailsHandler}>
                  ×
                </button>
                <span className="details-text">{Product[0].details}</span>
              </div>
            )}
          </div>
        </div>

        <hr />

        {/* Описание товара */}

        <div className="secondary-info-section">
          <p>{Product[0].description}</p>
        </div>

        {/* Секция кнопки добавления и удаления товара */}

        <div className="add-item-section">
          <button
            className={`addBtn ${!inCard ? "addedBtn" : ""}`}
            onClick={addHandler}
            disabled={!inCard}
          >
            {inCard ? "Добавить в корзину" : "Уже в корзине"}
          </button>
          {!inCard && (
            <div className="remove-from-card" onClick={addHandler}>
              Убрать товар из корзины
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
