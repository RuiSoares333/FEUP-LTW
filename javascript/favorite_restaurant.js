const buttons = document.querySelectorAll('.miniPreview > button');

for(const button of buttons){
    button.addEventListener('click', async function (){
        const data = new FormData();
        data.append("restaurant", this.parentElement.dataset.id);
        data.append("add", this.classList.contains("checked") ? 0 : 1);

        const response = await fetch("../api/api_favorite_restaurants.php", {
            method: "POST",
            body : data,
        });

        const code = await response.json();

        this.classList.toggle("checked");

        if(code.statusCode === 201)
            alert("SERVER ERROR!");
    });
}