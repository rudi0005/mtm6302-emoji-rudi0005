// Array of emoji objects, each containing the HTML entity code and their decimal codes

const emojiArray = [
    { emoji: '&#128512;', code: '128512' }, // 😀
    { emoji: '&#128515;', code: '128515' }, // 😁
    { emoji: '&#128521;', code: '128521' }, // 😉
    { emoji: '&#128525;', code: '128525' }, // 😍
    { emoji: '&#128527;', code: '128527' }, // 😏
    { emoji: '&#128528;', code: '128528' }, // 😐
    { emoji: '&#128540;', code: '128540' }, // 😜
    { emoji: '&#128541;', code: '128541' }, // 😝
    { emoji: '&#128561;', code: '128561' }, // 😱
    { emoji: '&#128562;', code: '128562' }, // 😲
    { emoji: '&#128563;', code: '128563' }, // 😳
    { emoji: '&#128577;', code: '128577' }, // 🙁
    { emoji: '&#128104;', code: '128104' }, // 👨 
    { emoji: '&#128105;', code: '128105' }, // 👩
    { emoji: '&#128640;', code: '128640' }, // 🚀
    { emoji: '&#127774;', code: '127774' }, // 🌞 
    { emoji: '&#128293;', code: '128293' }, // 🔥 
    { emoji: '&#127800;', code: '127800' }, // 🌸
    { emoji: '&#127881;', code: '127881' }, // 🎉 
    { emoji: '&#128077;', code: '128077' }, // 👍 
    { emoji: '&#128520;', code: '128520' }, // 😈 
    { emoji: '&#128561;', code: '128561' }, // 😱 
    { emoji: '&#127942;', code: '127942' }, // 🏆 
    { emoji: '&#127866;', code: '127866' }  // 🍺 
];

// Selects the emoji gallery section from the HTML using its ID
const gallery = document.getElementById('emoji-gallery');

// Loops through the array of emoji objects to create and display each emoji and its code
emojiArray.forEach(item => {
    
    // Creates a div element for each emoji
    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji-item'); // Adds a class for styling each emoji item

    // Sets the inner HTML of the div to include the emoji and its corresponding decimal code
    emojiDiv.innerHTML = `
        <span>${item.emoji}</span>  <!-- Displays the emoji -->
        <code>${item.code}</code>   <!-- Displays the decimal code below the emoji -->
    `;

    // Appends the newly created emoji div to the emoji gallery section in the HTML
    gallery.appendChild(emojiDiv);
});