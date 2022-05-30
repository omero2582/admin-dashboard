function addProject(){
    let outer = document.createElement('div');
    outer.classList.add('project');

    let title = document.createElement('h2');
    title.textContent = 'Title';

    let description = document.createElement('p');
    description.textContent ='this is a long paragraph description. Yes it is. Or it should be getting to that point. Aha.';

    //buttons
    let bottomRow = document.createElement('div');
    bottomRow.classList.add('bottom-buttons');

    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');

    button1.classList.add('favorite');
    button2.classList.add('watch');
    button3.classList.add('share');

    bottomRow.appendChild(button1);
    bottomRow.appendChild(button2);
    bottomRow.appendChild(button3);
    //

    
    
    outer.appendChild(title);
    outer.appendChild(description);
    outer.appendChild(bottomRow)




    const projects = document.querySelector('.my-projects');
    projects.appendChild(outer);

}    

for (let i=0; i<8; i++){
    addProject();
}
