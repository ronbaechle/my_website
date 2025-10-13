document.querySelectorAll('.question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;

    if (answer.style.display === 'block') {
      // If the answer is currently shown, hide it
      answer.style.display = 'none';
    } else {
      // Otherwise, show it
      answer.style.display = 'block';
    }
  });
});

const question = document.getElementById("question");