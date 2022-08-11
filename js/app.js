import { vipArr } from "../js/VIP.js"
let elem = document.getElementById('root');
let hide = document.getElementsByClassName('my-div');
let richPeople = [];


class VipWorth {
    constructor(name, worth, img) {
            this.name = name,
            this.worth = worth,
            this.img = img
    }
};



for (let vipName of vipArr) {
    let worthBil = new VipWorth(
        vipName.name,
        vipName.worth,
        vipName.image
    );
    richPeople.push(worthBil);

    window.render =()=>{
        elem.innerHTML += `
        <div class="my-div" onclick="hideMe()">
    <h3> Name : ${vipName.name}</h3>
    <p> My Worth is : ${vipName.worth}</p>
    <img src="${vipName.image}">
    </div>
        `
    };

};
 hideMe=()=>{
hide.style.display="none"
}



console.log(richPeople);
render(richPeople);
render(richPeople[1])
