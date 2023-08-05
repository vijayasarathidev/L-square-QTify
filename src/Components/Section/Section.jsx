import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

function Section({ title, dataSource, filterSource, type }) {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectFilterIndex, setSelectFilterIndex] = useState(0);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
    // eslint-disable-next-line
  }, []);

  const filteredCards = cards.filter((card) =>
    selectFilterIndex !== 0
      ? card.genre.key === filters[selectFilterIndex].key
      : card
  );

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={styles.showAll} onClick={handleToggle}>
          <h4>{!isShowAll ? "Show All" : "Collapse"}</h4>
        </div>
      </div>
      {filterSource && (
        <Filter
          data={filters}
          selectFilterIndex={selectFilterIndex}
          setSelectFilterIndex={setSelectFilterIndex}
        />
      )}
      <div className={styles.cardsWrapper}>
        {isShowAll ? (
          filteredCards.map((card) => (
            <Card
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              type={type}
            />
          ))
        ) : (
          <Carousel
            data={filteredCards}
            renderComponent={(data) => <Card data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
