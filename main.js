var lnk = "https://rickandmortyapi.com/api/character?page=";
for (let k = 1; k <=42 ; k++){
    $.ajax({
        url: lnk + k,
        contentType: "application/json",
        dataType: 'json',
        success: function(data){
                data.results.forEach(element => {
                    console.log(element)
                    let name = element.name;
                    let img = element.image;
                    let state = element.status;
                    let tarj = '<article><div class="image-container"><img src="'+img+'" alt="Personaje"></img></div><h2></h2>' + name + '</h2><br><span>' + state + '</span></article>';
                    $("#main").append(tarj);
                });
                data.info.next;
        }
    });    
}


//Model
/* <article>
    <div class="image-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/10.jpeg" alt="Personaje"></img>
    </div>
    <h2>Personaje</h2>
    <span>Estado de Personaje</span>
</article> */


