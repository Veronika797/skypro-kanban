import style from "./Loader.module.css";
import Card from "../card/Card";
import Column from "../column/Column";
import { columnsData } from "../../data";
import Skeleton from "../skeleton/Skeleton";

const Loader = ({ showSkeleton, cards }) => {
  return (
    <div className={style.columns}>
      {columnsData.map((column, index) => {
        const filteredCards =
          column.status === "без статуса"
            ? cards.filter((card) => card.status === "без статуса")
            : cards.filter((card) => card.status === column.status);

        return (
          <Card key={index} title={column.title}>
            {showSkeleton ? (
              // showSkeleton = true
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              // showSkeleton = false
              filteredCards.map((card) => <Card key={card.id} card={card} />)
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default Loader;
