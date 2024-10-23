console.log ("Hello!")

const parts = {
    frogToes: { min: 1, max: 10 },
    newtEyes: { min: 1, max: 10 },
    batWools: { min: 1, max: 20 }
  };
  
  function getRandomAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateMonsters() {
    const monsters = [
      { name: 'Agatha', elementId: 'agatha' },
      { name: 'Bellatrix', elementId: 'bellatrix' },
      { name: 'Maleficent', elementId: 'maleficent' }
    ];
  
    monsters.forEach(monster => {
      const frogToes = getRandomAmount(parts.frogToes.min, parts.frogToes.max);
      const newtEyes = getRandomAmount(parts.newtEyes.min, parts.newtEyes.max);
      const batWools = getRandomAmount(parts.batWools.min, parts.batWools.max);
  
      document.getElementById(monster.elementId).textContent = `${monster.name} has ${frogToes} frog toes, ${newtEyes} newt eyes, and ${batWools} bat wools.`;
    });
  }