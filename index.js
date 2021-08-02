// Add your code here



// function submitData() {

//     let formData = {
//         name: name,
//         email: email
//       }
      
//       let configObj = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//       };
      
//       let data = fetch("http://localhost:3000/users", configObj) //grabs info from users, the second paramenter configObj will later describe what we do with this information
//         .then( resp => response.json() ) // returns the response and converts it to a json object that can be understood by code. Think of the arrow as a conversion or something we want to do with the data. In this casec converting response to JSon.
//         .then( json => document.querySelector('body').textContent = json["id"]) //takes in json data recieved and looks to find the first body element and sets that to the id of the json
//         .catch( error =>document.querySelector('body').textContent = error.message )
//     return data
// }


// function submitData(name, email) {

//     let formData = {
//         name: name,
//         email: email
//     }

//     let configObj = {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     }


//     let data = fetch('http://localhost:3000/users', configObj)
//         .then( resp => resp.json() )
//         .then( json => document.querySelector('body').textContent = json["id"] )
//         .catch( error => document.querySelector('body').textContent = error.message )
//     return data
// }

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",      //makes a POST request to /users with a name and email
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {      //handles the POST request response
          return response.json();
        })
        .then(function(object) { // the object in this line is really just the response.json above which converted the response from the browser into a json object using response.json() that we can access in later code to manipulate/change etc.
            let h2 = document.createElement('h2'); //creates a new header to store the object id inside of
            h2.innerHTML = object.id;  //retrieves the id value of the data with object.id method and stores it in the variable created. well in this case it stores it inside of.innerHTML
            document.body.appendChild(h2); //appends this stored value t to the DOM
            console.log(object);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message; //assings error message we could possibly get if something goes wrong to inner html of header. since header is a heder, and the response is a string, we must put the response inside the header with innerHTML where it can be a string
            document.body.appendChild(h3); //appends the error message to the body so it can be read
            console.log(error.message); //prints out error message
        });
}