interface ButtonProps {
  text?: string;
  btnIcon: string;
}
export const ButtonComponent = ({ text, btnIcon }: ButtonProps) => (
  <button className="btn">
    <i className={btnIcon}></i>
    <span className="btn-text">{text}</span>
  </button>
);
