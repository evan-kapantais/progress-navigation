var liTitle = document.getElementById('title');
var liDesc = document.getElementById('desc');
var liConfirm = document.getElementById('confirm');
var textTarget = document.getElementsByClassName('text-target')[0];
var btnTarget1 = document.getElementsByClassName('btn1')[0];
var btnTarget2 = document.getElementsByClassName('btn2')[0];

liTitle.addEventListener('click', SetTitle);
liDesc.addEventListener('click', SetDescription);
liConfirm.addEventListener('click', SetConfirm);

function SetTitle() {
  textTarget.innerHTML = 'Choose title content.';
  liTitle.classList.add('active');

  if (liDesc.classList.contains('active')) {

    if (liConfirm.classList.contains('active')) {
      liConfirm.classList.remove('active');
    }

    liDesc.classList.remove('active');
    btnTarget1.innerText = 'Submit Title';
    btnTarget2.style.display = 'none';
  }
}

function SetDescription() {
  textTarget.innerHTML = 'Choose description content.'
  liDesc.classList.add('active');

  if (liConfirm.classList.contains('active')) {
    liConfirm.classList.remove('active');
  }

  btnTarget1.innerText = 'Back';
  btnTarget2.style.display = 'inline-block';
  btnTarget2.innerText = 'Submit Description';
}

function SetConfirm() {
  if (liDesc.classList.contains('active')) {
    liConfirm.classList.add('active');
    textTarget.innerText = 'Are you happy now?';
    btnTarget1.innerText = 'No, go back';
    btnTarget2.innerText = 'Yes, go ahead';
  }
}