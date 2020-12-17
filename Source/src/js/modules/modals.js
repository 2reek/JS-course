const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventlistener("click", (event) => {
      if (event.target) {
        event.preventDefault();
      }

      modal.style.display = "block";
      document.body.style.overflow = "hideen";
    });

    close.addEventlistener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  const btnCallEngineer = document.querySelector(".popup_engineer_btn"),
        modalEngineer = document.querySelector('.popup')
};

export default modals;
