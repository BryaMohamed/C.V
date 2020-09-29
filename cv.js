function copyMail() {
	navigator.clipboard.writeText("bryamohamed1@gmail.com").then(copyMailConfirm)
}
function copyMailConfirm() {
	document.querySelector(".email-note").innerHTML =
		"Copié dans votre presse-papiers !"
}
