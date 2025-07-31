function solve() {

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    function getRandomSentence() {
        let names = ["Peter", "Michell", "Jane", "Steve"];
        let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
        let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
        let verbs = ["eats", "holds", "sees", "plays with", "brings"];
        let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
        let details = ["near the river", "at home", "in the park"];

        function getRandomWord(array){
            return array[Math.floor(Math.random() * array.length)];
        }

        let randomName = getRandomWord(names);
        let randomPlace = getRandomWord(places);
        let randomNoun = getRandomWord(nouns);
        let randomVerb = getRandomWord(verbs);
        let randomAdverb = getRandomWord(adverbs);
        let randomDetails = getRandomWord(details);

        let who = `${randomName} from ${randomPlace}`;
        let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;

        return `${who} ${action} ${randomDetails}`;
    }


    console.log("Hello, this is your first random-generated sentence:");
    console.log(getRandomSentence());

    function recursiveAync() {
        readLine.question('Click [Enter] to generate a new one.', (str) => {
            console.log(getRandomSentence());
            recursiveAync();
        })
    }
    recursiveAync();
}

solve();