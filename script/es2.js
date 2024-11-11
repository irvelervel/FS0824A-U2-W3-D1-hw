// 2) Classe "Pet" con 4 proprietà + 1 metodo, dati raccolti da form

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  compareOwners(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
    // pro version :)
    // return this.ownerName === anotherPet.ownerName
  }
}

// creiamo un array vuoto in cui inserire i nostri Pets man mano che li creiamo
const petsArray = []

// recuperare i riferimenti necessari dal DOM
const form = document.getElementById('pet-form')
const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

// agganciamo ora un event listener al "submit"
form.addEventListener('submit', function (e) {
  e.preventDefault() // altrimenti la pagina si riavvia e ciao ciao dati del form
  // so che i valori dei campi del form sono "nomeVariabileDellInput.value"
  const addedPet = new Pet(
    petNameInput.value, // 'Fufy'
    ownerNameInput.value, // 'Stefano'
    speciesInput.value, // 'Gatto'
    breedInput.value // 'Soriano'
  )
  console.log('addedPet', addedPet)
  petsArray.push(addedPet)
  console.log('PETS ARRAY', petsArray)

  // tocco finale: azzeriamo i campi del form dopo aver "salvato" il pet
  petNameInput.value = '' // azzero il campo nome pet
  ownerNameInput.value = '' // azzero il campo nome owner
  speciesInput.value = '' // azzero il campo nome species
  breedInput.value = '' // azzero il campo nome breed

  //   form.reset() // scorciatoia
})

// aggiungiamo un comportamento al bottone di comparazione
const compareButton = document.getElementById('compare-button')
compareButton.addEventListener('click', function () {
  alert(
    petsArray[petsArray.length - 1].compareOwners(
      petsArray[petsArray.length - 2]
    )
  )
})
