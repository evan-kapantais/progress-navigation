var liTitle = document.getElementById('title');
var liDesc = document.getElementById('desc');
var liConfirm = document.getElementById('confirm');
var textTarget = document.getElementsByClassName('text-target')[0];
var btnTarget1 = document.getElementsByClassName('btn1')[0];
var btnTarget1 = document.getElementsByClassName('btn2')[0];

liTitle.addEventListener('click', SetTitle);
liDesc.addEventListener('click', SetDescription);
liConfirm.addEventListener('click', SetConfirm);

function SetTitle() {
  textTarget.innerHTML = "Choose title content.";
  liTitle.classList.add('active');

  if (liDesc.classList.contains('active')) {

    if (liConfirm.classList.contains('active')) {
      liConfirm.classList.remove('active');
    }

    liDesc.classList.remove('active');
  }
}

function SetDescription() {
  textTarget.innerHTML = "Choose description content."
  liDesc.classList.add('active');
  // liConfirm.classList.remove('disabled');

  if (liConfirm.classList.contains('active')) {
    liConfirm.classList.remove('active');
  }
}

function SetConfirm() {
  if (liDesc.classList.contains('active')) {
    liConfirm.classList.add('active');
    textTarget.innerHTML = "Are you happy now?"
  }
}