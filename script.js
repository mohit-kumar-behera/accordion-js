
const QUESTION = document.querySelectorAll('.question');

for (let i = 0; i < QUESTION.length; i++) {
	QUESTION[i].addEventListener('click', toggleAnswer);
}

function toggleAnswer() {
	this.classList.toggle('active');
	const active = this.classList.contains('active');

	const answer = this.nextElementSibling;
	const answerHeight = answer.scrollHeight;

	answer.style.height = active ? `${answerHeight}px` : 0;
}