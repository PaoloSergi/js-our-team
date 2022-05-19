const myTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photoPath: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photoPath: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photoPath: "img/walter-gordon-office-manager.jpg"
    },{
        name: "Angela Lopez",
        role: "Social Media Manager",
        photoPath: "img/angela-lopez-social-media-manager.jpg"
    },{
        name: "Scott Estrada",
        role: "Developer",
        photoPath: "img/scott-estrada-developer.jpg"
    },{
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photoPath: "img/barbara-ramos-graphic-designer.jpg"
    }
];

for (let i=0; i < myTeam.length; i++){
    createCardMember(myTeam[i].name, myTeam[i].role, myTeam[i].photoPath);
}

const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImage = document.getElementById("image");
const addMemberBtn = document.querySelector("button");

addMemberBtn.addEventListener("click",
    function(){
        createCardMember(inputName.value, inputRole.value, inputImage.value);
        createNewMember(inputName.value, inputRole.value, inputImage.value);
    }
);

function createNewMember(memberName, memberRole, memberImage){
    const myNewMember = {
        name: memberName,
        role: memberRole,
        photoPath: memberImage
    }
    myTeam.push(myNewMember);
}

function createCardMember(memberName, memberRole, memberImage){
    const teamContainer = document.querySelector(".team-container");

    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    teamContainer.append(teamCard);

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    teamCard.append(cardImage);
    cardImage.innerHTML = `<img src='${memberImage}' alt='${memberName}'/>`;

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    teamCard.append(cardText);
    cardText.innerHTML = `<h3>${memberName}</h3> <p>${memberRole}</p>`;
}