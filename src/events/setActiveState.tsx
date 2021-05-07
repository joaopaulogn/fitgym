function setActiveState({ currentTarget }: React.MouseEvent, selector: string) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.remove('active');
  });

  currentTarget.classList.add('active');
}

export default setActiveState;
