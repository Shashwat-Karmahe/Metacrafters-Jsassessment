// create a variable to hold your NFT's
const NFTs_Football = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT_Football (Name, AnimalType, FanClub, Sponsor, Position) {
  const NFT_f = {
    "NAME":Name,
    "ANIMALTYPE":AnimalType,
    "FANCLUB":FanClub,
    "SPONSOR":Sponsor,
    "POSITION":Position
  }
  NFTs_Football.push(NFT_f);
  console.log("MINTING COMPLETE: " + Name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFT_Football () {
  for(i=0;i<NFTs_Football.length;i++){
    console.log("\nFID: \t\t" + (i+1));
    console.log("NAME: \t\t" + NFTs_Football[i].NAME);
    console.log("ANIMALTYPE: " + NFTs_Football[i].ANIMALTYPE);
    console.log("FANCLUB: \t" + NFTs_Football[i].FANCLUB);
    console.log("SPONSOR: \t" + NFTs_Football[i].SPONSOR);
    console.log("POSITION: \t" + NFTs_Football[i].POSITION);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply_Football() {
  console.log("\n" + NFTs_Football.length);
}

// call your functions below this line
mintNFT_Football("Messi", "Lion", "Barcelona", "Adidas", "Cenetr forward");
mintNFT_Football("Ronaldo", "Tiger", "Real Madrid", "Nike", "Left Wingwe");
mintNFT_Football("Kaka", "Cheetah", "AC Milan", "Puma", "Right Winger");
mintNFT_Football("Dybala", "Fox", "Roma", "Ltto", "Midfielder");
mintNFT_Football("Ramos", "Dog", "Sporting", "Umbro", "Center Back");
listNFT_Football();
getTotalSupply_Football();
