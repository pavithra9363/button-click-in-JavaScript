 let students=[
    {
        Name:"s.pavithra",
        EmailId:"pavithra@gmail.com",
        registernum:"131"
    },
    {
        Name:"kiruthika",
        EmailId:"kiruthi@gmail.com",
        registernum:"132"
    },
    {
        Name:"esther",
        EmailId:"esther@gmail.com",
        registernum:"133"
    },
    {
        Name:"thamarai",
        EmailId:"thamarai@gmail.com",
        registernum:"134"
    }
 ];

  let stu=document.querySelector("#buttons");
   let red=document.createElement("div");
   red.style.border="5px solid red";
//    red.style.padding="100px";
    red.className="redbox";
   stu.appendChild(red);
  


   let stuDetail=students.map((student)=>{
     let blue=document.createElement("div");
     blue.style.border="4px solid blue";
     blue.className="blu";
     red.appendChild(blue);


   let h1=document.createElement("h2");
   h1.innerHTML=`Name:${student.Name}`;
   blue.appendChild(h1);
   
   let email=document.createElement("h2");
   email.innerHTML=`Email:${student.EmailId}`;
   blue.appendChild(email);


   let reg=document.createElement("h2");
   reg.innerHTML=`RegNo:${student.registernum}`;
   blue.appendChild(reg);

   let button=document.createElement("button");
   blue.appendChild(button)
   button.innerHTML="Delete";
   button.className="green";
    button.addEventListener("click",
    function(){
         red.removeChild(blue);
       

    });
   

  })


 