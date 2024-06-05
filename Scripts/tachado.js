function tachar() {
    const checkbox = document.querySelectorAll(".checkboxTachar");

    checkbox.forEach(box => {
        box.addEventListener("click", () => {
            const spanPadre = box.parentNode;
            const trPadre = spanPadre.parentNode;
            const lineaTachado = trPadre.querySelector('.lineaTachado')

            if (box.checked) {
                trPadre.classList.add('grayscale');
                    lineaTachado.style.width = '90%';
                setTimeout(() => {
                    trPadre.style.width = '90%';
                    trPadre.classList.add('grayscale');
                }, 100);
            } else {
                lineaTachado.style.width = '0%';
                trPadre.style.width = '0%';
                trPadre.classList.remove('grayscale');
            }
        });
    });
}