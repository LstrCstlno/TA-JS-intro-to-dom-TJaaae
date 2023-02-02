{/* <li class="box width32">
            <div class="flex between">
              <img class = "img" src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="ned">
              <h2>Eddard "Ned" Stark</h2>
            </div>
            <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
            <button>
              <a href="http://gameofthrones.wikia.com/wiki/House_Stark">Learn More!</a>
            </button>
          </li> */}

let ul = document.querySelector("ul")
got.houses[0].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[1].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[2].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[3].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[4].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[5].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[6].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[7].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[8].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[9].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})

got.houses[10].people.forEach((item) => {
    let li = document.createElement("li")
    li.classList.add("box", "width32")
    let div = document.createElement("div")
    div.classList.add("flex", "between")
    let img = document.createElement("img")
    img.classList.add("img")
    img.src = item.image
    img.alt = item.name
    let h2 = document.createElement("h2")
    h2.innerText = item.name
    div.append(img,h2)
    let p = document.createElement("p")
    p.innerText = item.description
    let button = document.createElement("button")
    let a = document.createElement("a")
    a.href = item.wikiLink
    a.innerText = "Learn More!"
    button.append(a)
    li.append(div,p,button)
    ul.append(li)
})