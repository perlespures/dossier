

const initialState = {
     MainImage: "https://tn.jumia.is/ZWa0IuACSPWZcT3ByqzdNwpHg2g=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/1.jpg?4656",
     ImagesList: ["https://tn.jumia.is/tFEa1JmKeAhgySp72zIIbawJiWc=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/2.jpg?4656","https://tn.jumia.is/04GimaEvcrDrmaQ7J5YTHjEyyMY=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/3.jpg?4656","https://tn.jumia.is/Yw2rjO4jMOZ46f7WCkUftcrTwR4=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/4.jpg?4656","https://tn.jumia.is/1fRfJvdGn4hbUO5e5-3oO74vEX8=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/5.jpg?4656"],
     Nom: "Cadeau veilleuse Saint valentin - Love - Rouge", 
     Prix: "20 DT", 
     Reduction:"-50%",
     Disponibilite: true,
     Livraison: 
         {
           Delai: '5 jours',
           Place: 'Toute la tunisie'   
         }
     ,
     CommentList:[
         {
          Person: 'p1',
          Avis: 'c\'est un très joli cadeau pour un partenaire romantique' ,
          Date:'14/02/2019'
         },
         {
          Person: 'p2',
          Avis: 'c\'est un très joli cadeau pour un partenaire romantique' ,
          Date:'14/02/2019'
         },
         {
          Person: 'p3',
          Avis: 'c\'est un très joli cadeau pour un partenaire romantique' ,
          Date:'14/02/2019'
         },
     ],
    
    ImgProduitSimilaire:"https://tn.jumia.is/ig1hqMBTkIHDGgxE2uJw9dAJg04=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/41/2621/1.jpg?7124",
    NomProduitSimilaire:"Cadeau veilleuse Saint valentin - Love - Rouge", 
    PrixProduitSimilaire:"20 DT", 
    //  ListCaraImg:
    //  Rating:

    confirmationPageData : {
        clientData:{
        nom:"baha eddine ben othmane",
        email:"baha@gmail.com",
        mobile:"52625290",
        },
        commandData:{
        paymentDate:"2019/05/02-20:20:20",
        shipement:{
        place:"7 rue cite intilika tunis",
        time:"2019/12/20-20:20:20"
        },
        totalQuantity:4,
        totalPrice:200,
        
        },
        commandItems:[
        {
        id:120,
        itemName:"tablette samsung",
        itemQuantity:1,
        itemPrice:50,
        discount:"15%"
        },
        {
        id:125,
        itemName:"tablette Apple",
        itemQuantity:3,
        itemPrice:150,
        discount:"0%"
        },
        ],
        legalMentions:{
        warranty:"le garatie sur ces produits est une année pour chacun",
        rembourcement:[
        {
        productId:120,
        remoubrourcement:"100%"
        },
        {
        productId:125,
        remoubrourcement:"100%"
        }
        ]
        }
        }
        
     
};

const initialAction = {type:"a"}

const reducer = ( state = initialState , action=initialAction) => {
    return {
        ...state
    }
    
};

export default reducer;