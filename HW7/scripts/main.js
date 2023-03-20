var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, image, description, author, imageYear)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }

    toString()
    {
        return "[TITLE]: " + this.title + "---[DESCRIPTION]: " + this.description +
        "---[AUTHOR]: " + this.author + "---[IMAGE YEAR]: " + this.imageYear;
    }

    showImage()
    {
        //returns the text for the image for use in the HTML.
        return this.image;
    }

}

function initializeArray()
{
    //This sets up my objects to be displayed
    var myViewFinder = new ViewFinder("Boy on a Wall", "images/BoyOnWall.png", "My first digital artwork. Features a young boy sitting on a wall.", "Taryn Crawford", "05/04/2011");
    var myViewFinder1 = new ViewFinder("Akiko in the Metaverse", "images/Metaverse.png", "Digital art of anime style phantom thief. Inspired by Persona 5.", "Taryn Crawford", "01/15/2020");
    var myViewFinder2 = new ViewFinder("Hero's of Shadowfell", "images/Heros.jpg", "Created with my twin sister to feature all of our friends characters in our D&D Group.", "Taryn & Tifani Crawford", "12/02/2020");
    var myViewFinder3 = new ViewFinder("Thistle", "images/Thistle.png", "An anime style pixie adventurer I drew to represent my future D&D Character.", "Taryn Crawford", "04/27/21");
    var myViewFinder4 = new ViewFinder("Lunch of Melon Bread", "images/Melon.jpg", "A piece of digital artwork featuring an school girl in an anime style.", "Taryn Crawford", "10/21/2022");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}
function accessInformation()
{
    //This randomizes what object is displayed each time the button is pressed.
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length)
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("image").src = myViewFinderArray[randomNumber].showImage();
}
