//https://picsum.photos/id/1002/4312/2868

window.onload = (event) => {
    const params = new URLSearchParams(window.location.search)
    const cardsCount = setLevel(params.get("level"));
    console.log(cardsCount);

    const puzzle = document.querySelector('.puzzle');

    if (cardsCount > 6) {
        puzzle.style["grid-template-columns"] = "repeat(6,1fr)";
    }

    for (let index = 0; index < cardsCount; index++) {
        const card =`<div id="card-${index}" class="card hidden-card" onclick={attempt('card-${index}')}>
                        <img id="img-${index}" src="https://www.clipartmax.com/png/full/282-2828778_question-mark-icon-interrogation-icon.png"></img>
                    </div>`;
        puzzle.innerHTML += card
    }
};

function setLevel(level){
    switch (level) {
        case "1":
            return 6;
        case "2":
            return 12;
        case "3":
            return 30;
        default:
            return 6
    }
}

function attempt(cardId)
{
    const id = cardId.split('-')[1];
    const canShowMore = canShowMoreCards(id);
    console.log("can show more cards ", canShowMore);
    if (canShowMore) {
        const card = document.getElementById(`card-${id}`)
        card.classList.remove("hidden-card");

        const img = document.getElementById(`img-${id}`)
        img.src = "https://picsum.photos/id/1002/4312/2868"

        const attempts = document.getElementById(`attempts`)
        attempts.innerHTML = Number(attempts.innerText) + 1;
    }
    else{
        hideCards()

    }

}

function canShowMoreCards(id){
    const hidden = document.getElementById("cards");
    const elements = hidden.value.split(",");
    if (elements.length < 3) {
        hidden.value += id + ","
        return true;
    }

    return false;
}

function hideCards(){
    console.log("hideCards");
    const hidden = document.getElementById("cards");
    const elements = hidden.value.split(",");
    elements.forEach((id) =>{
        debugger
        const card = document.getElementById(`card-${id}`)
        card.classList.add("hidden-card");
    })
}