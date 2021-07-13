const addNoteButton = document.querySelector('.form__button');
const textArea = document.querySelector('.form__textarea');

addNoteButton.addEventListener('click', doNoteAdd);

let notesCounter = 0;

function doNoteAdd(e) {
	e.preventDefault();
	let text = textArea.value;
	formNoteAndAdd(text);
	textArea.value = '';
};

function formNoteAndAdd(text) {
	notesCounter++;
	let noteItemOpenTag = '<div class="notes__item">';
	let noteHeaderOpenTag = '<div class="notes__item-head">';
	let noteBodyOpenTag = '<div class="notes__item-body">';
	let noteMoreButton = `<button class="notes__item-btn notes__item-btn-${notesCounter} button">Больше</button>`;
	let noteItemCloseTag = '</div>';
	let note = `${noteItemOpenTag}${noteHeaderOpenTag}Заметка ${notesCounter}${noteItemCloseTag}${noteBodyOpenTag}${text}${noteItemCloseTag}${noteMoreButton}${noteItemCloseTag}`;
	placeNote(note, notesCounter);
};

function placeNote(note, btnNum) {
	let e = document.querySelector('.notes__empty');
	if (e) {
		e.remove();
	};
	let notesContent = document.querySelector('.notes__content');
	notesContent.insertAdjacentHTML('beforeEnd', note);
	let btn = document.querySelector(`.notes__item-btn-${btnNum}`);
	btn.addEventListener('click', showWholeNote);
};

function showWholeNote() {
	let wholeNote = this.parentElement.querySelector('.notes__item-body').innerHTML;
	formModalNote(wholeNote);
};

function formModalNote(text) {
	let modalBgOpenTag = '<div class="modal-bg">'
	let modalOpenTag = '<div class="modal">';
	let modalCrest = '<div class="modal-crest">'
	let modalCloseTag = '</div>';
	let modal = `${modalBgOpenTag}${modalOpenTag}${modalCrest}${modalCloseTag}${text}${modalCloseTag}${modalCloseTag}`;
	document.querySelector('body').insertAdjacentHTML('afterBegin', modal);
	let modalButtonCrest = document.querySelector('.modal-crest');
	modalButtonCrest.addEventListener('click', disableWholeNote);
};

function disableWholeNote() {
	document.querySelector('.modal-bg').remove();
}