"use strict"

let newNoteBtn = document.querySelector(".create-note")

let modalOverlay = document.querySelector(".initial")
let modal = document.querySelector(".initial .modal")

let notesContainer = document.querySelector(".my-notes")

newNoteBtn.addEventListener("click", () => {
	modalOverlay.classList.add("active")
	modal.classList.add("active")
	document.querySelector("body").style.overflow = "hidden"

	document.querySelector(".close-modal").addEventListener("click", () => {
		modalOverlay.classList.remove("active")
		modal.classList.remove("active")
		document.querySelector("body").style.overflow = "initial"
	})
})

document.querySelector(".modal-content").addEventListener("submit", (event) => {
	event.preventDefault()

	let title = event.submitter.parentElement[0].value
	let content = event.submitter.parentElement[1].value

	if (title.length === 0 && content.length === 0) {
		modalOverlay.classList.remove("active")
		modal.classList.remove("active")
		document.querySelector("body").style.overflow = "initial"
	} else {
		let noteClone = document.querySelector(".for-cloning").cloneNode(true)

		noteClone.firstElementChild.textContent = title
		noteClone.lastElementChild.textContent = content
		noteClone.classList.remove("for-cloning")
		noteClone.style.display = "flex"

		notesContainer.appendChild(noteClone)

		modalOverlay.classList.remove("active")
		modal.classList.remove("active")
		document.querySelector("body").style.overflow = "initial"

		event.target.reset()
	}
})

let modalOverlayEdit = document.querySelector(".edit")
let modalEdit = document.querySelector(".edit > .modal")
let note = [...document.querySelectorAll(".my-notes, .notes")]

note.forEach((note) => {
	note.addEventListener("click", (event) => {
		let mainElement = event.target

		modalOverlayEdit.classList.add("active")
		modalEdit.classList.add("active")
		document.querySelector("body").style.overflow = "hidden"

		document
			.querySelector(".edit > .modal > .close-modal")
			.addEventListener("click", () => {
				modalOverlayEdit.classList.remove("active")
				modalEdit.classList.remove("active")
				document.querySelector("body").style.overflow = "initial"
			})

		let inputTitle = document.querySelector(".edit-form > input")
		let textAreaContent = document.querySelector(".edit-form > textarea")

		let h3Value = event.target.firstChild.textContent
		let paragraphValue = event.target.lastChild.textContent

		inputTitle.value = h3Value
		textAreaContent.value = paragraphValue

		let h3Element = event.target.firstChild
		let pElement = event.target.lastChild

		document.querySelector(".edit-form").addEventListener("submit", (event) => {
			event.preventDefault()

			let title = event.target[0].value
			let content = event.target[1].value

			if (title.length === 0 && content.length === 0) {
				modalOverlayEdit.classList.remove("active")
				modalEdit.classList.remove("active")
				document.querySelector("body").style.overflow = "initial"
			} else {
				h3Element.textContent = title
				pElement.textContent = content

				modalOverlayEdit.classList.remove("active")
				modalEdit.classList.remove("active")
				document.querySelector("body").style.overflow = "initial"
			}
		})

		document.querySelector(".delete-btn").addEventListener("click", () => {
			mainElement.remove()

			modalOverlayEdit.classList.remove("active")
			modalEdit.classList.remove("active")
			document.querySelector("body").style.overflow = "initial"
		})
	})
})

/* 
  Erros:
    - Update e delete, não funcionam as vezes.
*/
