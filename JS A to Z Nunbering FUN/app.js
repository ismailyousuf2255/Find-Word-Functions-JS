var words = {
    'A': ['Apple', 'Animal', 'Ali', 'Ant', 'Aeroplane'],
    'B': ['Bat', 'Banana', 'Book', 'Ball', 'Box'],
    'C': ['Cat', 'Car', 'Cake', 'Cloud', 'Cup'],
    'D': ['Dog', 'Duck', 'Diamond', 'Door', 'Design'],
    'E': ['Elephant', 'Egg', 'Engine', 'Ear', 'Empire'],
    'F': ['Fish', 'Flower', 'Flag', 'Farm', 'Fox'],
    'G': ['Goat', 'Goal', 'Guest', 'Grape', 'Grass'],
    'H': ['Hashir', 'House', 'Home', 'Hassan', 'Helicopter'],
    'I': ['Ice', 'Island', 'Igloo', 'Ink', 'Iron'],
    'J': ['Jacket', 'Jar', 'Jam', 'Jellyfish', 'Jet'],
    'K': ['Key', 'Kite', 'King', 'Kangaroo', 'Kettle'],
    'L': ['Lion', 'Lamp', 'Laptop', 'Leaf', 'Lemon'],
    'M': ['Monkey', 'Moon', 'Map', 'Milk', 'Mouse'],
    'N': ['Nest', 'Necklace', 'Nose', 'Nuts', 'Notebook'],
    'O': ['Orange', 'Octopus', 'Owl', 'Ocean', 'Oil'],
    'P': ['Pencil', 'Paradise', 'Panda', 'Plane', 'Pizza'],
    'Q': ['Queen', 'Quilt', 'Quail', 'Quiver', 'Question'],
    'R': ['Rabbit', 'Rose', 'Rainbow', 'Robot', 'Rocket'],
    'S': ['Sun', 'Star', 'Snake', 'Spider', 'Ship'],
    'T': ['Table', 'Tiger', 'Tree', 'Train', 'Turtle'],
    'U': ['Umbrella', 'Unicorn', 'Uniform', 'Utensil', 'Under'],
    'V': ['Van', 'Violin', 'Volcano', 'Vegetable', 'Vase'],
    'W': ['Watch', 'Water', 'Wheel', 'Window', 'Whale'],
    'X': ['Xylophone', 'X-ray', 'Xenon', 'Xerox', 'Xylograph'],
    'Y': ['Yak', 'Yarn', 'Yacht', 'Yogurt', 'Yellow'],
    'Z': ['Zebra', 'Zipper', 'Zoo', 'Zombie', 'Zero']
};

function showWords() {
    var letterInput = document.getElementById('letterInput').value.toUpperCase();
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 
    if (words.hasOwnProperty(letterInput)) {
        var wordList = words[letterInput];
        outputDiv.innerHTML +=  '<h2>' + letterInput + '</h2>'; 
        outputDiv.innerHTML += '<ul>';
        for (var i = 0; i < wordList.length; i++) {
            outputDiv.innerHTML += '<li>' + wordList[i] + '</li>';
        }
        outputDiv.innerHTML += '</ul>';
    } else {
        outputDiv.innerHTML = 'Sorry, no words found for the letter ' + letterInput + '.';
    }
}