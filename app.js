fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let produit = ""
        afficherProduits(data.produits)
        afficherServices(data.services)
        afficherTemoignages(data.temoignages)
    });



//rôle : afficher les cartes produits
//Paramètre :tableau des produits
//retourne : rien
function afficherProduits(tableauProduits) {
    //boucle
    tableauProduits.forEach(produit => {
        document.getElementById("cardProduits").innerHTML += `
                <div class="cardProduit top70">
                    <div class="card-image">
                        <img src="${produit.imageurl}" class="img" alt="">
                        <div class="card-description">
                            <p>${produit.description}</p>
                        </div>
                        <h3 class="textCenter top20">${produit.nom}</h3>
                    </div>
                </div>
`
    });
}

//rôle: afficher nos services
//paramètres: tableau des services
//retourne: rien 
function afficherServices(tableauServices) {
    tableauServices.forEach(service => {
        document.getElementById("cardServices").innerHTML += `
        <div class="w30 card">
                    <div>
                        <img src= ${service.image} class="img" alt="">
                    </div>
                    <h3 class="top20"> ${service.nom} </h3>
                    <P class="top20">${service.description}</P>
        </div>
        `

    });
}

//rôle: afficher les avis
//paramètres: tableau des avis
//retourne: rien 
function afficherTemoignages(tableauAvis){
    tableauAvis.forEach(avis => {
        document.getElementById("cardAvis").innerHTML+=`
        <div class="w30 cardAvis">
                    <div class="flex gap40 alignCenter leftAvis">
                        <p>${avis.prenom}</p>
                        <p>${avis.note}</p>
                    </div>


                    <div>
                        <h3 class="top20">${avis.typeExperience}</h3>
                        <p>${avis.commentaire}
                        </p>
                    </div>
                </div>
        `
        
    });
}