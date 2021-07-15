const info = document.getElementById('userProfile');

fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    return users.map((user) => {


        const parentDiv = document.createElement('div');
        const childDiv = document.createElement('div');
        const frame = document.createElement('div');
        const card = document.createElement('div');
        const mainDiv = document.createElement('div')
        const img = document.createElement('img');
        const profName = document.createElement('h2');
        const contentSpan = document.createElement('span')
        const x = document.createElement('p');
        const y = document.createElement('p');
        const z = document.createElement('p');

        info.appendChild(parentDiv);
        parentDiv.appendChild(childDiv)
        childDiv.append(mainDiv, frame);
        frame.appendChild(card);
        mainDiv.appendChild(img);
        

        parentDiv.classList.add("card", "mb-3");
        childDiv.classList.add("row", "g-0");
        mainDiv.classList.add("col-md-4");
        frame.classList.add("col-md-8");
        card.classList.add("card-body");
        img.classList.add("img-fluid", "profImg");
        profName.classList.add("card-title");

    
        let firstName = user.name.first;
        let lastName = user.name.last;
        let emailAddress = user.email;
        let nat = user.location.country;
        let city = user.location.city;

        let profile = card.appendChild(profName);
        let cSpan = card.appendChild(contentSpan);
        let eMail = card.appendChild(x);
        let locC = card.appendChild(y);
        let nationality = card.appendChild(z);

        
        profile.innerHTML = `${firstName} ${lastName}`; 
        eMail.innerHTML = `${emailAddress}`;
        nationality.innerHTML = ` Nationality: ${nat}`; 
        locC.innerHTML = `City: ${city}`;
        cSpan.innerHTML = "Email:"

        let image = mainDiv.appendChild(img);
        image.src = user.picture.large;
    });
})

.catch(function (error) {
    console.log(error);
});