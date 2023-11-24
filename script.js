let key
let node_for_insert = document.getElementById("node_for_insert")
for (key in content) {
    node_for_insert.innerHTML += `
    <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
    <img style="width: 180px" class="align-self-center" src=${content[key].img}>
    <h5 class="card-title">${content[key].title}</h5>
    </li>
}
