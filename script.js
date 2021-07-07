const cards = document.querySelectorAll('.card');
let hasflipCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasflipCard) {
        hasflipCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasflipCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
 }
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoart();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoart();
        }, 1500)
    }


    function resetBoart() {
        [hasflipCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

   ( function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.getElementsByClassName.order = ramdomPosition;
    })
})();


    cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

