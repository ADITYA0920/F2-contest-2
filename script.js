let users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];


  // onclick on filter btn

  function fillUsers(){
        const newUsers = document.getElementById("container") ;
        newUsers.innerHTML = "";

        users.forEach(user => {
            const obj = document.createElement("div");

            obj.innerHTML =`
            <div class="newData">
            <p>${user.id}.</p>
            <p>Name:${user.name}</p>
            <p>Age: ${user.age}</p>
            <p>Profession: ${user.profession}</p>
            </div>
            `;

            newUsers.appendChild(obj) ;
        });
  }



  function filterUsers(){

    const selectedProfession = document.getElementById("profession").value;
    console.log(selectedProfession) ;
    if(selectedProfession === ""){
        alert("Please select a profession before filtering.");
        return;
    }

    const FUsers = users.filter((user) => user.profession === selectedProfession) ;

    users = FUsers ;
    fillUsers();
  }

  //onclick on addUser btn



  function addUser(){
       // fetching details from the loginpage

       console.log("addUser");
       const name = document.getElementById("name").value;
       const age= document.getElementById("age").value;
       const profession = document.getElementById("professionn").value;

    if(name === "" || age ==="" || profession ===""){
        alert("something is missing");
        return;
    }
        const newUser = {
            id: users.length + 1,
            name : name ,
            age : age ,
            profession : profession 
        
    };

    users.push(newUser);
    fillUsers() ;
  }

  fillUsers();

