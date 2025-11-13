const Loader = ({ width = 230, heigth = 30 }) => {
  return (
    <div
      className="loader"
      style={{ width: width + "px", height: heigth + "px" }}
    ></div>
  );
};

export default Loader;
