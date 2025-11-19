import style from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={style.skeleton__cards}>
      <div className={style.skeleton__card}>
        <div className={style.skeleton__cards__card}>
          <div className={style.skeleton__card__group}>
            <div className={style.skeleton__card__theme}>
              <p className={style.skeleton__theme__text}></p>
            </div>
            <div className={style.skeleton__card__btn}></div>
          </div>
          <div className={style.skeleton__card__content}>
            <div className={style.skeleton__card__title}></div>
            <div className={style.skeleton__card__description}></div>
            <div className={style.skeleton__card__date}>
              <svg></svg>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skeleton;
