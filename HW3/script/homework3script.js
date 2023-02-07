function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
//First Choices
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You leave your post and run to the hall, with your sword at the ready. As you turn the corner to the scream, your eyes settle onto an old man wearing a worn black hooded cloak. The floor around him runs red with blood, but there is no body to be seen. Do you attack the man or try to talk to him?";
        document.getElementById("choice1").innerHTML = "Attack";
        document.getElementById("choice2").innerHTML = "Talk";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "In your Knight training, you were always told to never leave your post, as anything could be a trick for others to gain access to the chambers. Other than that short scream, you hear nothing out of the ordinary, but you can feel the hairs on the back of your neck standing from the possible danger. Should you stand your ground, or go into the chambers to check on the king?";
        document.getElementById("choice1").innerHTML = "Stand your ground";
        document.getElementById("choice2").innerHTML = "Go into the Royal Chambers";
//Second Set
    } else if (choice == 1 && answer1 == "Attack") {
        document.getElementById("story").innerHTML = "There is no mistaking that this man is an intruder, and no doubt dangerous. With both power and speed, you swing your sword to cut him down. However, as your blade cuts through the black cloak.. that is all you cut. The man inside vanished. Do you investigate the area or go back to your post?";
        document.getElementById("choice1").innerHTML = "Investigate";
        document.getElementById("choice2").innerHTML = "Go back";
    } else if (choice == 2 && answer2 == "Talk") {
        document.getElementById("story").innerHTML = "“What is going on here?” You ask, as a smirk sits on top of the old mans face. In the old man’s hand was a vile of green liquid. Dropping it the vile shatters across the floor and a green gas instantly envelops the area. You feel dizzy and lose consciousness. You don’t know how long it has been, but you wake up in the palace dungeon.Your armor covered in blood and your weapon no longer at your side.";
        document.getElementById("choice1").innerHTML = "Talk to the Guard";
        document.getElementById("choice2").innerHTML = "Steal the keys";
    } else if (choice == 1 && answer1 == "Stand your ground") {
        document.getElementById("story").innerHTML = "You stand your ground, not moving an inch from your station. Eventually the morning came along with the usual maid tasked with bringing the kings breakfast. You let her in as it is your job to do so, but when the door opens you are both shocked by the sight of the King, laying dead on the floor. What could have happened?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Go into the Royal Chambers") {
        document.getElementById("story").innerHTML = "You throw open the doors to the Royal Chamber to see the King and the young prince, getting ready for the night. It seems like they are safe for now. Should you go back on guard or warn them of potential danger?";
        document.getElementById("choice1").innerHTML = "Go back to your post";
        document.getElementById("choice2").innerHTML = "Warn them of danger";
//Third Set
    } else if (choice == 1 && answer1 == "Investigate") {
        document.getElementById("story").innerHTML = "As you pick up the cloak a small glass vial rolls across the floor. Inside of it is a green swirling liquid. Should you open it to find out what it is, or put it in your pocket for later?";
        document.getElementById("choice1").innerHTML = "Open it";
        document.getElementById("choice2").innerHTML = "Take it";
    } else if (choice == 2 && answer2 == "Go back") {
        document.getElementById("story").innerHTML = "As you turn the corner to go back to the royal chambers, you see its doors wide open. In a panic you run into the chambers and find the king surrounded by numerous assassins. Do you try and save the king, or desert to save your own life?";
        document.getElementById("choice1").innerHTML = "Save the King";
        document.getElementById("choice2").innerHTML = "Desert";
    } else if (choice == 1 && answer1 == "Talk to the Guard") {
        document.getElementById("story").innerHTML = "The guard makes a snort as you wake him up, but he turns around to look at you. His eyes are filled with anger. “I hope your comfy in their king killer. It is only a matter of time before you head to the block.”" + "<br> Do you try and reason with him, or steal the keys?";
        document.getElementById("choice1").innerHTML = "Reason";
        document.getElementById("choice2").innerHTML = "Take the keys";
    } else if (choice == 2 && answer2 == "Steal the keys") {
        document.getElementById("story").innerHTML = "You manage to steal the keys without waking up the guard, using them to unlock the cell. It was unlikely that the guards where going to listen to what you had to say.. You hardly understood it yourself. So the best option is to get out of here.. right?" + "<br> On your way our of the dungeons you run into another guard who immediately pulls out his sword." + "<br> Fight or flight?";
        document.getElementById("choice1").innerHTML = "Fight";
        document.getElementById("choice2").innerHTML = "Flight";
    } else if (choice == 1 && answer1 == "Go back to your post") {
        document.getElementById("story").innerHTML = "You already look foolish for busting into their bedroom, so why would you tell them about the scream. After all, you only heard it once and nothing else happened. You were probaby just imagining it." + "<br>Leaving the room you shut the door behind you, continuing your task as guard... but the next morning when you went to check on the king, he was dead and the prince has gone missing. Their must be something you are missing.." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Warn them of danger") {
        document.getElementById("story").innerHTML = "No matter what is going on outside of these doors, the King must be protected! You tell them of the yell in the halls, and quickly user the King and prince to safety though their secret tunnel. Now you must decide if you should go with them or stay back to buy them time.";
        document.getElementById("choice1").innerHTML = "Buy them time";
        document.getElementById("choice2").innerHTML = "Go with them";
//Forth Set
    } else if (choice == 1 && answer1 == "Open it") {
        document.getElementById("story").innerHTML = "You open the vial, smelling its contents. Immediately you become nauseous and collapse onto the floor. A raging migraine filling your mind with panic. When you closed your eyes to relive some of the pain.. they never opened back up. That vial is very dangerous. Maybe it was best left unopened…?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Take it") {
        document.getElementById("story").innerHTML = "You take the vial and make your way back to the kings chambers. As you arrive you see the king being attacked by numerous assassins." + "<br> Should you jump in to help, or use the vial?";
        document.getElementById("choice1").innerHTML = "Help";
        document.getElementById("choice2").innerHTML = "Use vial";
    } else if (choice == 1 && answer1 == "Save the King") {
        document.getElementById("story").innerHTML = "You fought long and hard as you tried to fight off the large number of assassins. One by one cutting them down to save your king. It wasn’t until you cut down the final assassin that you collapsed from all the wounds that you received. Regretfully, you didn’t make it… but you will be honored the hero who saved the king." + "<br> Perhaps there is a way to save you both?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Desert") {
        document.getElementById("story").innerHTML = "Fearing for your own life, you run out of the castle and into the countryside. It didn’t take long for news to spread of the kings death and that you are now wanted for the murder of the king. You are no longer safe and are forced into hiding forever or risk execution." + " < br > Would you like to try a different path? ";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 1 && answer1 == "Reason") {
        document.getElementById("story").innerHTML = "You tell the man about the scream, the cloaked man, and the vial of green liquid, but he looked at you full of skepticism. “You expect me to believe that when you are covered in enough blood to fill a tub? We found no old man, nor a vial.” He stated, standing up and moving out of your reach and taking the keys along with him. He refused to converse with you any longer. Leaving you to quietly wait for your execution.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Take the keys") {
        document.getElementById("story").innerHTML = "The man notices you as you reach for the keys at his side. He immediately acts. Grabbing your hand he pulls you hard against the bars before driving his sword through your abdomen. Now you lay dying on the cold stone floor… perhaps there was a different path you could take?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 1 && answer1 == "Fight") {
        document.getElementById("story").innerHTML = "You don’t know why you where arrested, but you had a strong feeling that it was going to lead to your death. No former comrade is going to keep you from survival. You hold up your fists and do your best to fight against the guards, but fists are no match for a sword. It didn’t take long for you to lose the battle and your life..";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Flight") {
        document.getElementById("story").innerHTML = "Thankfully you managed to slip past him, but not without suffering a deep wound from his blade. You ran for as long and as fast as you could before eventually falling in the grassy forest behind the castle. After some time, shoes of a small child stopped in front of your gaze. With the last of your strength, you look up at the boy. You recognize him as the young prince... and on his face was the same smirk as the old man.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 1 && answer1 == "Buy them time") {
        document.getElementById("story").innerHTML = "You send the King and the Prince though the secret passageway alone. After what seems like only a few seconds, assassins begin to enter the room though the window. Their where tons of them, but as they came into the room one by one, you were able to dispatch them all without getting overrun. Your quick thinking saved the royal family... but did it? The next morning, news broke out as the king was found dead inside of the secret tunnels and the young prince had gone missing.What happened while you were fighting?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Go with them") {
        document.getElementById("story").innerHTML = "It is not safe to have them go alone, the secret tunnels can be dangerous and the King needs to be watched at all times. As you make your way down the tunnel, you see a glimpse of what looks like glass in the Young Prince’s hand. Do you ask about it, or attack the Prince?";
        document.getElementById("choice1").innerHTML = "Ask";
        document.getElementById("choice2").innerHTML = "Attack him";
//Fifth Set
    } else if (choice == 1 && answer1 == "Help") {
        document.getElementById("story").innerHTML = "You fight your hardest to save the king, but it is too late as one of the assassins where already at his neck. The sheer number of assassins quicky overwhelmed you as well. Perhaps if you had something to take them all out, or if got to the king sooner to save him.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Use vial") {
        document.getElementById("story").innerHTML = "You toss the vial onto the ground hoping that it will be of some help, or at least a distraction. As it shatters, a green mist appears from its contents, quickly filling the room. In the confusion you managed to run in and grab the king, pulling him outside of the chambers to safety. All the assassins getting knocked unconscious from the gas. You managed to save the king, yourself and became a hero in the process! Although you can’t help but wonder, who was that old man ?";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 1 && answer1 == "Ask") {
        document.getElementById("story").innerHTML = "As you ask the prince what he has in his hands, he responds with a laugh as he drops it onto the floor. You are unable to see what it was in the tight, dark tunnels as it fell, but you heard it shatter… and now you are no longer awake.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
    } else if (choice == 2 && answer2 == "Attack him") {
        document.getElementById("story").innerHTML = "You immediately step into action, grabbing the object and shoving the boy away from the king. Though it is hard to see in the dark cave, the boy began to transform into a tall hooded figure. This must be the true intruder. Taking your sword, you fought the hooded figure and in doing so you possibly saved the King.  It was morning by the time the King and you made it out of the tunnels to safety, and by afternoon the castle was declared safe. The real prince was found tied up and all was well. The King rewarded your bravery and intuition with gold and land, leaving your family and you comfortable for the rest of your days.";
        document.getElementById("choice1").innerHTML = "Restart?";
        document.getElementById("choice2").innerHTML = "Quit.";
// restart&end
    } else if (choice == 1 && answer1 == "Restart?") {
        document.getElementById("story").innerHTML = "You are a knight tasked with guarding the royal family. On this night, you are standing alone while guarding the royal chambers doors. Down the hall you hear a yell, do you go to investigate?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit.") {
        document.getElementById("story").innerHTML = "Thank you for playing!";

    }


}