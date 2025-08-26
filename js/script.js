
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('anotacoes');
  const savedNotes = localStorage.getItem('minhasAnotacoes');
  if (savedNotes) {
    textarea.value = savedNotes;
  }

  textarea.addEventListener('input', () => {
    localStorage.setItem('minhasAnotacoes', textarea.value);
  });
});