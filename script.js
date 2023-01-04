const newNoteBtn = document.querySelector(".create-note")

const modalOverlay = document.querySelector(".initial")
const modal = document.querySelector(".initial .modal")

const notesContainer = document.querySelector(".my-notes")

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

	const title = event.submitter.parentElement[0].value
	const content = event.submitter.parentElement[1].value

	if (title.length === 0 && content.length === 0) {
		modalOverlay.classList.remove("active")
		modal.classList.remove("active")
		document.querySelector("body").style.overflow = "initial"
	} else {
		const noteClone = document.querySelector(".for-cloning").cloneNode(true)

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

const modalOverlayEdit = document.querySelector(".edit")
const modalEdit = document.querySelector(".edit > .modal")
const note = [...document.querySelectorAll(".my-notes, .notes")]

note.forEach((note) => {
	note.addEventListener("click", (event) => {
		const mainElement = event.target

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

		const inputTitle = document.querySelector(".edit-form input")
		const textAreaContent = document.querySelector(".edit-form textarea")

		const h3Value = event.target.firstChild.textContent
		const paragraphValue = event.target.lastChild.textContent

		inputTitle.value = h3Value
		textAreaContent.value = paragraphValue

		const h3Element = event.target.firstChild
		const pElement = event.target.lastChild

		document.querySelector(".edit-form").addEventListener("submit", (event) => {
			event.preventDefault()

			const title = event.target[0].value
			const content = event.target[1].value

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

		document.querySelector(".delete-btn").addEventListener("click", (event) => {
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