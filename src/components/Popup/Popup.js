import './Popup.scss';

export const Popup = (props) => {
  const text = props.text;
  const changeVisibility = props.changeVisibility;
  const styleClass = props.isVisible ? 'popup' : 'popup--hidden'
  
  const handleClick = () => {
    changeVisibility(!props.isVisible)
  };

  return (
    <div className={styleClass}>
      <p className='popup__text'>{text}</p>
      <span className='popup__icon' onClick={handleClick}></span>
    </div>
  );
};
