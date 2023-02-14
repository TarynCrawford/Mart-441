function restartStory() {

}
function getChoice1() {
    var myChoice = document.getElementById("choice").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Yes") {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice2").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";

        document.getElementById("mainImage").src = "./images/OldMan.jpg"

        myQuestion.innerHTML = "You leave your post and run to the hall, with your sword at the ready. As you turn the corner to the scream, your eyes settle onto an old man wearing a worn black hooded cloak. The floor around him runs red with blood, but there is no body to be seen. Do you attack the man or try to talk to him?";
    }
    else if (myChoice === "No") {
        myQuestion.innerHTML = "In your Knight training, you were always told to never leave your post, as anything could be a trick for others to gain access to the chambers. Other than that short scream, you hear nothing out of the ordinary, but you can feel the hairs on the back of your neck standing from the possible danger. Should you stand your ground, or go into the chambers to check on the king?";
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice10").style.display = "block";
        document.getElementById("btnSubmit10").style.display = "block";

        document.getElementById("mainImage").src = "./images/Door.jpg"
    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}
function getChoice2() {
    var myChoice = document.getElementById("choice2").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Attack") {
        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit2").style.display = "none";

        document.getElementById("choice3").style.display = "block";
        document.getElementById("btnSubmit3").style.display = "block";

        document.getElementById("mainImage").src = "./images/Cloak.jpg"

        myQuestion.innerHTML = "There is no mistaking that this man is an intruder, and no doubt dangerous. With both power and speed, you swing your sword to cut him down. However, as your blade cuts though the black cloak.. that is all you cut. The man inside vanished. Do you investigate the area or go back to your post?";
    }
    else if (myChoice === "Talk") {
        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit2").style.display = "none";

        document.getElementById("choice7").style.display = "block";
        document.getElementById("btnSubmit7").style.display = "block";

        document.getElementById("mainImage").src = "./images/Jail.jpg"

        myQuestion.innerHTML = "'What is going on here?' You ask, as a smirk sits on top of the olf mans face. In the old man's hand was a vile of green liquid. Dropping it, the vile shatters across the floor and the green gas instantly envelops the area. You feel dizzy and lose consciousness. You don't know how long it has been, but you wake up in the palace dungeon. Your armor covered in blood and your weapon no longer at your side. There is a guard sleeping outside of your cell. You recognize him as one of the king's knights. On his side are the keys. Do you talk to him or steal the keys to escape?";
    }
}

function getChoice3() {
    var myChoice = document.getElementById("choice3").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Investigate") {
        document.getElementById("choice3").style.display = "none";
        document.getElementById("btnSubmit3").style.display = "none";

        document.getElementById("choice4").style.display = "block";
        document.getElementById("btnSubmit4").style.display = "block";

        document.getElementById("mainImage").src = "./images/GreenVial.jpg"

        myQuestion.innerHTML = "As you pick up the cloak a small glass vial rolls across the floor. Inside of it is a green swirling liquid. Should you open it to find out what it is, or put it in your pocket for later?";
    }
    else if (myChoice === "Go Back") {
        myQuestion.innerHTML = "As you turn the corner to go back to the royal chambers, you see its doors wide open. In a panic you run into the chambers and find the king surrounded by numerous assassins. Do you try and save the king, or desert to save your own life?";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("btnSubmit3").style.display = "none";

        document.getElementById("choice6").style.display = "block";
        document.getElementById("btnSubmit6").style.display = "block";

        document.getElementById("mainImage").src = "./images/King.jpg"
    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice4() {
    var myChoice = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Open it") {
        
        document.getElementById("mainImage").src = "./images/Death.jpg"

        myQuestion.innerHTML = "You open the vial, smelling its contents. Immediately you become nauseous and collapse onto the floor. A raging migraine filling your mind with panic. When you closed your eyes to relive some of the pain... they never opened back up. That vial is very dangerous. Maybe it was best left unopened...";
    }
    else if (myChoice === "Take it") {
        document.getElementById("choice4").style.display = "none";
        document.getElementById("btnSubmit4").style.display = "none";

        document.getElementById("choice5").style.display = "block";
        document.getElementById("btnSubmit5").style.display = "block";

        document.getElementById("mainImage").src = "./images/King.jpg"

        myQuestion.innerHTML = "You take the vial and make your way back to the kings chambers. As you arrive you see the king being attacked by numerous assassins. Should you jump in to help, or use the vial?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice5() {
    var myChoice = document.getElementById("choice5").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Help") {

        document.getElementById("mainImage").src = "./images/Death.jpg"

        myQuestion.innerHTML = "You fight your hardest to save the king, but it is too late as one of the assassins where already at his neck. The sheer number of assassins quicky overwhelmed you as well. Perhaps if you had something to take them all out, or if got to the king sooner to save him.";
    }
    else if (myChoice === "Use vial") {

        document.getElementById("mainImage").src = "./images/Knight.jpg"

        myQuestion.innerHTML = "You toss the vial onto the ground hoping that it will be of some help, or at least a distraction. As it shatters, a green mist appears from its contents, quickly filling the room. In the confusion you managed to run in and grab the king, pulling him outside of the chambers to safety. All the assassins getting knocked unconscious from the gas. You managed to save the king, yourself and became a hero in the process! Although you can’t help but wonder, who was that old man?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice6() {
    var myChoice = document.getElementById("choice6").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Save the King") {

        document.getElementById("mainImage").src = "./images/Statue.jpg"

        myQuestion.innerHTML = "You fought long and hard as you tried to fight off the large number of assassins.One by one cutting them down to save your king.It wasn’t until you cut down the final assassin that you collapsed from all the wounds that you received.Regretfully, you didn’t make it… but you will be honored the hero who saved the king.Perhaps there is a way to save you both?";
    }
    else if (myChoice === "Desert") {

        document.getElementById("mainImage").src = "./images/Ship.jpg"

        myQuestion.innerHTML = "Fearing for your own life, you run out of the castle and into the countryside. It didn’t take long for news to spread of the kings death and that you are now wanted for the murder of the king. You are no longer safe and are forced into hiding forever or risk execution. Would you like to try a different path?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice7() {
    var myChoice = document.getElementById("choice7").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Talk to the Guard") {
        document.getElementById("choice7").style.display = "none";
        document.getElementById("btnSubmit7").style.display = "none";

        document.getElementById("choice8").style.display = "block";
        document.getElementById("btnSubmit8").style.display = "block";

        document.getElementById("mainImage").src = "./images/Guard.jpg"

        myQuestion.innerHTML = "The guard makes a snort as you wake him up, but he turns around to look at you. His eyes are filled with anger. “I hope your comfy in their king killer. It is only a matter of time before you head to the block.” Do you try and reason with him, or steal the keys?";
    }
    else if (myChoice === "Steal the keys") {
        document.getElementById("choice7").style.display = "none";
        document.getElementById("btnSubmit7").style.display = "none";

        document.getElementById("choice9").style.display = "block";
        document.getElementById("btnSubmit9").style.display = "block";

        document.getElementById("mainImage").src = "./images/Keys.jfif"

        myQuestion.innerHTML = "You manage to steal the keys without waking up the guard, using them to unlock the cell. It was unlikely that the guards where going to listen to what you had to say.. You hardly understood it yourself. So the best option is to get out of here.. right? On your way our of the dungeons you run into another guard who immediately pulls out his sword.Fight or flight?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice8() {
    var myChoice = document.getElementById("choice8").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Reason") {

        document.getElementById("mainImage").src = "./images/Jail.jpg"

        myQuestion.innerHTML = "You tell the man about the scream, the cloaked man, and the vial of green liquid, but he looked at you full of skepticism. “You expect me to believe that when you are covered in enough blood to fill a tub? We found no old man, nor a vial.” He stated, standing up and moving out of your reach and taking the keys along with him.He refused to converse with you any longer.Leaving you to quietly wait for your execution.";
    }
    else if (myChoice === "Take the keys") {

        document.getElementById("mainImage").src = "./images/Death.jpg"

        myQuestion.innerHTML = "The man notices you as you reach for the keys at his side. He immediately acts. Grabbing your hand he pulls you hard against the bars before driving his sword through your abdomen. Now you lay dying on the cold stone floor… perhaps there was a different path you could take?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice9() {
    var myChoice = document.getElementById("choice9").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Fight") {

        document.getElementById("mainImage").src = "./images/Death.jpg"

        myQuestion.innerHTML = "You don’t know why you where arrested, but you had a strong feeling that it was going to lead to your death. No former comrade is going to keep you from survival. You hold up your fists and do your best to fight against the guards, but fists are no match for a sword. It didn’t take long for you to lose the battle and your life..";
    }
    else if (myChoice === "Flight") {

        document.getElementById("mainImage").src = "./images/Forest.jpg"

        myQuestion.innerHTML = "Thankfully you managed to slip past him, but not without suffering a deep wound from his blade.You ran for as long and as fast as you could before eventually falling in the grassy forest behind the castle.After some time, shoes of a small child stopped in front of your gaze.With the last of your strength, you look up at the boy.You recognize him as the young prince... and on his face was the same smirk as the old man.";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice10() {
    var myChoice = document.getElementById("choice10").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Stand your ground") {

        document.getElementById("mainImage").src = "./images/Knight.jpg"

        myQuestion.innerHTML = "You stand your ground, not moving an inch from your station. Eventually the morning came along with the usual made tasked with bringing the kings breakfast. You let her in as it is your job to do so, but when the door opens you are both shocked by the sight of the King, laying dead on the floor. What could have happened?";
    }
    else if (myChoice === "Go into the Royal Chambers") {
        document.getElementById("choice10").style.display = "none";
        document.getElementById("btnSubmit10").style.display = "none";

        document.getElementById("choice11").style.display = "block";
        document.getElementById("btnSubmit11").style.display = "block";

        document.getElementById("mainImage").src = "./images/King.jpg"

        myQuestion.innerHTML = "You throw open the doors to the Royal Chamber to see the King and the young prince, getting ready for the night. It seems like they are safe for now. Should you go back on guard or warn them of potential danger?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice11() {
    var myChoice = document.getElementById("choice11").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Go back to your post") {

        document.getElementById("mainImage").src = "./images/Door.jpg"

        myQuestion.innerHTML = "You already look foolish for busting into their bedroom, so why would you tell them about the scream. After all, you only heard it once and nothing else happened. You were probably just imagining it. Leaving the room you shut the door, continuing your task as guard… but the next morning when you when to check on the king, he was dead and the prince has gone missing. Their must be something you are missing..";
    }
    else if (myChoice === "Warn them of danger") {
        document.getElementById("choice11").style.display = "none";
        document.getElementById("btnSubmit11").style.display = "none";

        document.getElementById("choice12").style.display = "block";
        document.getElementById("btnSubmit12").style.display = "block";

        document.getElementById("mainImage").src = "./images/King.jpg"

        myQuestion.innerHTML = "No matter what is going on outside of these doors, the King must be protected! You tell them of the yell in the halls, and quickly user the King and prince to safety though their secret tunnel. Now you must decide if you should go with them or stay back to buy them time.";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice12() {
    var myChoice = document.getElementById("choice12").value;
    var myQuestion = document.getElementById("question");
    if (myChoice === "Buy them time") {

        document.getElementById("mainImage").src = "./images/Fail.jpg"

        myQuestion.innerHTML = "You send the King and the Prince though the secret passageway alone. After what seems like only a few seconds, assassins begin to enter the room though the window. Their where tons of them, but as they came into the room one by one, you were able to dispatch them all without getting overrun. Your quick thinking saved the royal family... but did it? The next morning, news broke out as the king was found dead inside of the secret tunnels and the young prince had gone missing.What happened while you were fighting?";
    }
    else if (myChoice === "Go with them") {
        document.getElementById("choice12").style.display = "none";
        document.getElementById("btnSubmit12").style.display = "none";

        document.getElementById("choice13").style.display = "block";
        document.getElementById("btnSubmit13").style.display = "block";

        document.getElementById("mainImage").src = "./images/Passage.jpg"

        myQuestion.innerHTML = "It is not safe to have them go alone, the secret tunnels can be dangerous and the King needs to be watched at all times. As you make your way down the tunnel, you see a glimpse of what looks like glass in the Young Prince’s hand. Do you ask about it, or attack the Prince?";

    }
    else {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice13() {
    var myChoice = document.getElementById("choice13").value;
    var myQuestion = document.getElementById("question");

    if (myChoice === "Ask") {

        document.getElementById("mainImage").src = "./images/Death.jpg"

        myQuestion.innerHTML = "As you ask the prince what he has in his hands, he responds with a laugh as he drops it onto the floor. You are unable to see what it was in the tight, dark tunnels as it fell, but you heard it shatter… and now you are no longer awake.";
    }

    else {
        var chanceEncounter = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (chanceEncounter == 1) {
            document.getElementById("choice13").style.display = "none";
            document.getElementById("btnSubmit13").style.display = "none";

            document.getElementById("congrats").style.display = "block";

            document.getElementById("mainImage").src = "./images/Hero.jpg"
            myQuestion.innerHTML = "You immediately step into action, grabbing the object and shoving the boy away from the king. Though it is hard to see in the dark cave, the boy began to transform into a tall hooded figure. This must be the true intruder. Taking your sword, you fought the hooded figure and in doing so you possibly saved the King.  It was morning by the time the King and you made it out of the tunnels to safety, and by afternoon the castle was declared safe. The real prince was found tied up and all was well. The King rewarded your bravery and intuition with gold and land, leaving your family and you comfortable for the rest of your days. (True End)";
        }

        else {
            document.getElementById("choice13").style.display = "none";
            document.getElementById("btnSubmit13").style.display = "none";

            document.getElementById("mainImage").src = "./images/Death.jpg"
            myQuestion.innerHTML = "You immediately step into action, but you fumble. Dropping the object onto the floor you breath in a toxic smelling gas and die. Try this again and you might have better luck!";
        }
          }

}

function rewardCongrats() {
    for (var i = 0; i < 10; i++) {
        document.write("You Win!!!");
    }
}