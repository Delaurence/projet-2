function generate(){

    let  quotes = 
        ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
         "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.", 
         "Trois sortes d'amis sont utiles, trois sortes d'amis sont néfastes. Les utiles : un ami droit, un ami fidèle, un ami cultivé. Les néfastes : un ami faux, un ami mou, un ami bavard.",
          "La nature fait les hommes semblables, la vie les rend différents.",
          "Agis avec gentillesse, mais n'attends pas de la reconnaissance.",
           "Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide.",
            "Sous un bon gouvernement, la pauvreté est une honte ; sous un mauvais gouvernement, la richesse est aussi une honte.",
             "Je ne cherche pas à connaître les réponses, je cherche à comprendre les question.",
              "Notre plus grande gloire n'est point de tomber, mais de savoir nous relever chaque fois que nous tombons.",
               "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuve."];
     
     let authors = Object.keys(quotes);
     console.log(authors);
     let author = authors[Math.floor(Math.random() * authors.length)];
     console.log(author);
     let quote = quotes[author];
     console.log(quote);
     document.getElementById("quote").innerHTML = quote;
     document.getElementById("author").innerHTML = author;
 
 
 } 