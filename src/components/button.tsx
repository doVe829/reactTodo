interface ButtonProps {
  text?: string;
  btnIcon: string;
  clickHandler?: Function;
}
export const ButtonComponent = ({
  text,
  btnIcon,
  clickHandler,
}: ButtonProps) => {
  const clickEvent = () => {
    if (clickHandler) {
      clickHandler();
    }
  };

  return (
    <button onClick={clickEvent} className="btn">
      <i className={btnIcon}></i>
      <span className="btn-text">{text}</span>
    </button>
  );
};
