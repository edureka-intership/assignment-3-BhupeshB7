// 1->Ans:-
class resturant_Manager{        //ResturantManager class, Type- Array 
    resturant_list =[
        {
            name:"punjabi Tadka", address:"Gurgaon",city:"Delhi"
        },
        {
            name:"Malaka soice", address:"Baner Road",city:"pune"
        },
        {
            name:"Starbucks", address:"Noida sector 18",city:"Delhi"
        },
        {
            name:"Domino's", address:"Dda Market",city:"Delhi"
        },
        {
            name:"Dakshin", address:"Sudershan Nagar",city:"Hyderabad"
        }
    ];

// PrintAllResturantNames, Type- Function , Arguments type-none 
             printAllResturantNames(){
    this.resturant_list.forEach((restro) => {
        console.log(restro.name);
    });
}
// 
// FilterResturant
filterResturantByCity(city){
    return this.resturant_list.filter(item=>item.city==city);
}

}

let obj = new resturant_Manager();
obj.printAllResturantNames();
obj.filterResturantByCity("Delhi");

// 2->Ans.
orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    }; 


    // 2(a)->
    const total = Object.values(orderData).reduce(( val1, val2 ) => val1 + val2, 0);
    // 2(a)-Output:
    console.log(`Total number of orders placed = ${total}`);

    // 2(b):-
     const proportion = Object.keys(orderData).map((key, index)=>({
        id: index + 1
      }))
      // 2(b)-Output:
      console.log(`Total number of order proportions = ${proportion.length}`);


    // 2(c)->
    const result =Object.keys(orderData).map((key, index)=>({
      id: index + 1,
      order: key,
      order_percentage: (100 * orderData[key] / total).toFixed(2),
      'restaurant': 'Punjabi Tadka'
    }))

    // 2(c)-Output:
    console.log(result)