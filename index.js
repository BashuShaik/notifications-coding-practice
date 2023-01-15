const Notification = (props) => {
  //  Write your code here.

  const { className, text } = props;
  return <p className={`${className}`}>{text}</p>;
};

const element = (
  //  Write your code here.
  // info-icon
  // <i className="fa-regular fa-circle-check info-icon"></i>
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="con">
      <div className="info">
        <img
          className="info-icon"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification className="info-text" text="Information Message" />
      </div>
      <div className="success">
        <i className="fa-regular fa-circle-check success-icon"></i>
        <Notification className="success-text" text="Information Message" />
      </div>

      <div className="warning">
        <i className="fa-solid fa-bell warning-icon"></i>
        <Notification className="warning-text" text="Warning Message" />
      </div>

      <div className="error">
        <i className="fa-solid fa-exclamation error-icon"></i>
        <Notification className="error-text" text="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
