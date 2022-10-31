import "./header.css";

const Header = (props) => {
  const { turn, wins } = props;
  return (
    <div className="header">
      <span> X: {wins.xWins}</span>
      <span> O: {wins.oWins}</span>
      <span>{turn + "turn"} </span>
    </div>
  );
};

export default Header;
