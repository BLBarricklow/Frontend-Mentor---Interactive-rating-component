document.querySelector("#submit-btn").addEventListener('click', hiddenToggle);

function hiddenToggle() {
    const radioNum = document.querySelector('input[name=rating-number]:checked').value;
    document.querySelector('#radio-value').innerText = (radioNum);
    document.querySelector('#rating-card').classList.toggle('hidden');
    document.querySelector('#thanks-card').classList.toggle('hidden');
}