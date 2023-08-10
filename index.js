const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

// console.log(tasks);
//   const tasks=[];
showAllTasks();
   function   showAllTasks(){
      
      tasks.forEach((value ,index) => {
          
         const div=document.createElement("div");
            div.setAttribute("class","task");
            container.append(div);
        
        const innerdiv=document.createElement("div");         
           div.append(innerdiv);
         const para=document.createElement("p");
         para.innerText=value.title;
         innerdiv.append(para);
         const span=document.createElement("span");
         span.innerText=value.description;
         innerdiv.append(span);
         const btn=document.createElement("button");
         btn.setAttribute("class", "deleteBtn");
         btn.innerText = "-";
         div.append(btn);
       
          btn.addEventListener("click",()=>{
                Removetasks();
                tasks.splice(index, 1);
                showAllTasks();
          });
        
             
      });
   }
    
   function Removetasks(){
         tasks.forEach(()=> {
            const div=document.querySelector(".task");
            div.remove();
         });
   }
   
 
form.addEventListener("submit", (e) => {
    e.preventDefault();
     Removetasks();
    tasks.push({
      title: title.value,
      description: description.value,
    });
   
  localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
  });
