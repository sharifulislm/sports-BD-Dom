const allPlayers = () => {
    const inputValue = document.getElementById("search-box").value;
    
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayer(data.player))
}

const showPlayer =(players) => {
    for( const player of players) {
     console.log(player);
 const playerShowspace = document.getElementById("prent-contanar");
 const div = document.createElement('div');
 div.classList.add("col-6");
//  div.classList.add("cards");
 div.innerHTML=`
 <div class="card text-center" style="width: 80%;  margin-bottom: 10px;">
 <div class="card-body">
 <img style="width: 70%;" src="${player.strThumb}" class="card-img-top" alt="...">
   <h5 class="card-title">Name:${player.strPlayer} </h5>
   <h6 class="card-title">country:${player.strNationality} </h6>
   <p class="card-text"></p>
   <a onclick="delete()" href="#" class="btn btn-danger">Delete</a>
   <a onclick="details('${player.idPlayer}')" href="#" class="btn btn-primary ">Details</a>
 </div>
</div>
 
 `;
 playerShowspace.appendChild(div);
    }

};
const details = (player) => {
   console.log(player);
   const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${player}`
   fetch(url)
   .then(res => res.json())
   .then(data => setDtails(data.players[0]));

}
const setDtails = (data) => {
console.log(data);

        
    const detailsShow = document.getElementById("Detalis-contanar");
    const div = document.createElement('div');
    div.classList.add("col-6");
   //  div.classList.add("cards");
    div.innerHTML=`
    <div class="card text-center" style="width: 80%;  margin-bottom: 10px;">
    <div class="card-body">
    <img style="width: 70%;" src="${data.strThumb}" class="card-img-top" alt="...">
      <h5 class="card-title">Name:${data.strPlayer} </h5>
      <h6 class="card-title">country:${data.strNationality} </h6>
      <h6 class="card-title">Position:${data.strPosition} </h6>
      <p class="card-text"> Weight: ${data.strWeight}</p>
      <a href="#" class="btn btn-danger">Delete</a>

    </div>
   </div>
    
    `;
    detailsShow.appendChild(div);
       








}
