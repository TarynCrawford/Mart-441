// Below is the code for the console.log and the answers to my questions.

console.log("My three favorete websites are: Youtube, RPNation, and Roll20. Three of my favorete games are: Dungeons and Dragons, Legend of Zelda, and Story of Seasons. Three of my favorite artists are: Hayao Miyazaki, Rumiko Takahashi, and Tetsuya Nomura. Miyazaki and Takahashi are both Manga artists what have really inspired and paved the road for others in their field. Miyazaki was at the forfrount for bringing popularity of Japanese Animation to America, while Rumiko Takahashi became known as one of the best Manga Artists of all time. Tetsuya Nomura ia a Japanese video game artist for Square Enix. He created the character designs for the famous Final Fantasy and Kingdom Hearts games.")

//Adds a funtion to allow button to display image of artists work in body. Created just for fun!
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    document.body.appendChild(img);
}