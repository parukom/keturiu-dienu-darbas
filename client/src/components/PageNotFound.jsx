import noPage from "./img/404.gif";

const Nopage = () => {
  return (
    <div>
      <img
        src={noPage}
        alt="404"
        style={{
          width: "calc(100% + 60px)",
          height: "calc(100vh + 30px)",
        }}
      />
    </div>
  );
};
export default Nopage;
