const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = botResult.src = "rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active");
        }); 

            gameContainer.classList.add("start");

            let time = setTimeout(() => {
                gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;

                userResult.src = imageSrc;

                let randomNumber = Math.floor(Math.random() * 3);
        
                let botImages = ["rock.png","paper.png","scissors.png"];
                botResult.src = botImages[randomNumber];

                let botValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];
                let outcomes = {
                    RR: "Draw",
                    RP: "Bot",
                    RS: "User",
                    PP: "Draw",
                    PR: "Bot",
                    PS: "User",
                    SS: "Draw",
                    SR: "Bot",
                    SP: "User"
                };

            let outComeValue = outcomes[userValue + botValue];

            result.textContent = userValue === botValue ? "Match Draw" : `${outComeValue} Won!`;

        }, 2500);
    });
});
