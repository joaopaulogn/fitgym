function toggleCheckbox() {
  // TODO: consertar o erro do texto sumindo e reaparecendo na primeira vez que a página carrega
  const checkboxes = document.querySelectorAll('label .checkbox');
  checkboxes.forEach((checkbox) => checkbox.classList.toggle('hidden'));
}
export default toggleCheckbox;
