window.addEventListener('DOMContentLoaded', fetchcharacters);

async function fetchcharacters() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
        console.log(response);
    } catch (error) {
        
    }
}