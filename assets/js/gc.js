// Sample data for game cards (customize as needed)
const gameData = [
    { id: 0, title: "Recommendation", link: "/" },
    { id: 0, title: "1v1 lol", link: "/games/1v1lol" },
    { id: 2, title: "1", link: "/games/1" },
    { id: 0, title: "10 Minutes Till Dawn", link: "/games/10-minutes-till-dawn" },
    { id: 0, title: "10-103", link: "/games/10-103" },
    { id: 0, title: "2048", link: "/games/2048/" },
    { id: 0, title: "9007199254740992", link: "/games/9007199254740992/" },
    { id: 0, title: "Achievement Unlocked", link: "/games/achievementunlocked/" },
    { id: 0, title: "A Dance of Fire and Ice", link: "/games/a-dance-of-fire-and-ice/" },
    { id: 0, title: "A Dark Room", link: "/games/adarkroom/" },
    { id: 0, title: "Adventure Drivers", link: "/games/adventure-drivers/" },
    { id: 0, title: "Ages of Conflict", link: "/games/ages-of-conflict/" },
    { id: 0, title: "AcsiiSpace", link: "/games/acsiispace/" },
    { id: 0, title: "Aquapark Slides", link: "/games/aquapark-slides/" },
    { id: 0, title: "A Small World Cup", link: "/games/smallworldcup/" },
    { id: 0, title: "Awesome Tanks 1", link: "/games/awesometanksfiles/" },
    { id: 0, title: "Awesome Tanks 2", link: "/games/awesometanks2/" },
    { id: 0, title: "Bad Ice Cream", link: "/games/bad-ice-cream/" },
    { id: 0, title: "Bad Ice Cream 2", link: "/games/bad-ice-cream-2/" },
    { id: 0, title: "Bad Ice Cream 3", link: "/games/bad-ice-cream-3/" },
    { id: 0, title: "Bacon May Die 2016", link: "/games/bacon-may-die/" },
    { id: 0, title: "Basketball Stars", link: "/games/basketball-stars/" },
    { id: 0, title: "Basketbros IO", link: "/games/bascketbros-io/" },
    { id: 0, title: "Baldis Basics", link: "/games/baldis-basics/" },
    { id: 0, title: "Burger and Frights", link: "/games/burger-and-frights/" },
    { id: 0, title: "Bitlife", link: "/games/bitlife-life-simulator/play" },
    { id: 0, title: "Backrooms", link: "/games/backrooms/" },
    { id: 0, title: "Backrooms 2d", link: "/games/backrooms2d/backrooms2d" },
    { id: 0, title: "Bloons TD 1", link: "/games/bloonstd1/" },
    { id: 0, title: "Bloons TD 2", link: "/games/bloonstd2" },
    { id: 0, title: "Bloons TD 6", link: "/games/external/b6" },
    { id: 0, title: "Bloxors", link: "/games/bloxors/" },
    { id: 0, title: "Bob The Robber", link: "/games/bobtherobber/" },
    { id: 0, title: "Bottle Flip 3D", link: "/games/bottle-flip-3d/" },
    { id: 0, title: "Cannon Basketball 4", link: "/games/cannon-basketball-4/" },
    { id: 0, title: "Cell Machine", link: "/games/cell-machine/" },
    { id: 0, title: "CSGO Clicker", link: "/games/csgo-clicker/" },
    { id: 0, title: "Chrome Dino", link: "/games/chrome-dino/" },
    { id: 0, title: "Crossy Road", link: "/games/crossyroad/" },
    { id: 0, title: "Crossy Road Space", link: "/games/crss-rd-space/" },
    { id: 0, title: "Cut The Rope", link: "/games/ctr/" },
    { id: 0, title: "Cut The Rope | Time Travel", link: "/games/cuttherope-timetravel/" },
    { id: 0, title: "Cookie Clicker Alt", link: "/games/cookieclickeralt/" },
    { id: 0, title: "Cookie Clicker", link: "/games/cookieclicker/" },
    { id: 0, title: "Chill Radio", link: "/games/chillradio/" },
    { id: 0, title: "Clicker Heroes", link: "/games/clicker-heroes/" },
    { id: 0, title: "Cluster Rush", link: "/games/cluster-rush/" },
    { id: 0, title: "Death Run 3D", link: "/games/death-run-3d/" },
    { id: 0, title: "Deepest Sword", link: "/games/deepest-sword/" },
    { id: 0, title: "Defend The Tank", link: "/games/defend-the-tank/" },
    { id: 0, title: "Dead Trigger 2", link: "/games/dead-trigger-2/" },
    { id: 0, title: "DOOMORI", link: "/games/doomori/" },
    { id: 0, title: "Drive Mad", link: "/games/drive-mad/" },
    { id: 0, title: "Doodle Jump", link: "/games/doodle-jump/" },
    { id: 0, title: "Doom 2", link: "/games/external/doom2" },
    { id: 1, title: "Doom Blocked? Browse Down to GBA.", link: "/games/gba/launcher#" },
    { id: 0, title: "Drift Hunters", link: "/games/drift-hunters/" },
    { id: 0, title: "Dumb Ways to Die", link: "/games/dumbwaystodie/dumbwaystodie" },
    { id: 0, title: "Dreader", link: "/games/dreader/" },
    { id: 0, title: "Duck Life 1", link: "/games/ducklife1/" },
    { id: 0, title: "Earth Taken 1", link: "/games/et/" },
    { id: 0, title: "Earth Taken 3", link: "/games/earthtaken3/" },
    { id: 0, title: "Earn to Die", link: "/games/earntodie/" },
    { id: 0, title: "Edge Not Found", link: "/games/edgenotfound/" },
    { id: 0, title: "Eaglercraft 1.5.2", link: "/games/eagl1.5.2/" },
    { id: 0, title: "Elasticman", link: "/games/elasticman/" },
    { id: 0, title: "Evil Glitch", link: "/games/evilglitch/" },
    { id: 0, title: "Fear the Spotlight", link: "/games/fearthespotlight/" },
    { id: 0, title: "Fireboy Watergirl 1", link: "/games/fireboywatergirlforesttemple/" },
    { id: 0, title: "Fireboy Watergirl 2", link: "/games/fireboy-and-watergirl-2/" },
    { id: 0, title: "Fireboy Watergirl 3", link: "/games/fbwg3/" },
    { id: 0, title: "Five Nights at Winstons", link: "/games/fnaw/" },
    { id: 0, title: "FNAF 1", link: "/games/fnaf/fnaf1" },
    { id: 0, title: "FNAF 2", link: "/games/fnaf/fnaf2" },
    { id: 0, title: "FNAF 3", link: "/games/fnaf/fnaf3" },
    { id: 0, title: "FNAF 4", link: "/games/fnaf/fnaf4" },
    { id: 0, title: "FNAF 5 | Sisters Location", link: "/games/fnaf/fnaf5" },
    { id: 0, title: "Fruit Ninja", link: "/games/fruitninja/" },
    { id: 0, title: "Full Screen Mario", link: "/games/mario/" },
    { id: 0, title: "Funny Shooter 2", link: "/games/funny-shooter2/" },
    { id: 0, title: "Henry Stickmin | Breaking the Bank", link: "/games/henrystickmin/breakingthebank" },
    { id: 0, title: "Henry Stickmin | Escaping the Prison", link: "/games/henrystickmin/escapetheprison" },
    { id: 0, title: "Henry Stickmin | Stealing the Diamond", link: "/games/henrystickmin/stealingthed" },
    { id: 0, title: "Henry Stickmin | Infiltrating The Airship", link: "/games/henrystickmin/infilitrating" },
    { id: 0, title: "Henry Stickmin | Fleeing the Complex", link: "/games/henrystickmin/fleeingthecomp" },
    { id: 0, title: "Gimme The Airpod", link: "/games/gimme-the-airpod/" },
    { id: 0, title: "Geometry Dash Classic", link: "https://scratch.mit.edu/projects/105500895/embed" },
    { id: 0, title: "Geometry Dash Subzero", link: "/games/external/subzero" },
    { id: 0, title: "Gun Spin", link: "/games/gunspinn/" },
    { id: 0, title: "Gun Master", link: "/games/gun-master/" },
    { id: 0, title: "Gun Mayhem 1", link: "/games/gunmayhem1/" },
    { id: 0, title: "Gun Mayhem 2", link: "/games/gunmayhem2/" },
    { id: 0, title: "Gun Night", link: "/games/gun-night/html/35224996/" },
    { id: 0, title: "HackerType", link: "/games/hackertype/" },
    { id: 0, title: "Hex GL", link: "/games/hexgl/" },
    { id: 0, title: "Idle Breakout", link: "/games/idlebreakout/" },
    { id: 0, title: "Run 1", link: "/games/run/" },
    { id: 0, title: "Run 2", link: "/games/run2/" },
    { id: 0, title: "Run 3", link: "/games/run3/" },
    { id: 0, title: "Game Inside a Game", link: "/games/game-inside/" },
    { id: 0, title: "Getaway Shootout", link: "/games/getaway-shootout/" },
    { id: 0, title: "Happy Wheels", link: "/games/happwheels/" },
    { id: 0, title: "Horde Killer", link: "/games/horde-killer-you-vs-100/" },
    { id: 0, title: "Hungry Lamu", link: "/games/hungryl/" },
    { id: 0, title: "Impossible Quiz 1", link: "/games/impossiblequiz.html" },
    { id: 0, title: "Impossible Quiz 2", link: "/games/tiq2.html" },
    { id: 0, title: "Just One Boss", link: "/games/just-one-boss/" },
    { id: 0, title: "Just Fall", link: "/games/just-fall/" },
    { id: 0, title: "Jetpack Joyride", link: "/games/jetpack-joyride/" },
    { id: 0, title: "Johnny Trigger", link: "/games/johnnytriggerhtml/" },
    { id: 0, title: "Learn to Fly", link: "/games/learntofly/" },
    { id: 0, title: "Learn to Fly 2", link: "/games/learntofly2/" },
    { id: 0, title: "Make Sure It's Closed", link: "/games/makesureitsclosed/" },
    { id: 0, title: "Mario 64", link: "/games/mario64/sm64/" },
    { id: 0, title: "Mandalin Stunt Cars 2", link: "/games/mandalin-stunt-cars-2/" },
    { id: 0, title: "Mandalin Stutn Cars 3", link: "/games/mandalin-stunt-cars-3/" },
    { id: 0, title: "Minecraft", link: "/games/minecraft-18/" },
    { id: 0, title: "Moto x3m", link: "/games/motox3m/" },
    { id: 0, title: "Moto x3m | 2", link: "/games/motox3m2/" },
    { id: 0, title: "Moto x3m | Pool", link: "/games/motox3m-pool/" },
    { id: 0, title: "Moto x3m | Spooky", link: "/games/motox3m-spooky/" },
    { id: 0, title: "Moto x3m | Winter", link: "/games/motox3m-winter/" },
    { id: 0, title: "Monkey Mart", link: "/games/monkey-mart/" },
    { id: 0, title: "Mini Shooters", link: "/games/mini-shooters/unblocked" },
    { id: 0, title: "Mini Zombie Shooters", link: "/games/mini-zombie-shooters/" },
    { id: 0, title: "Mr Bullet", link: "/games/mr-bullet/" },
    { id: 0, title: "My Friend Pedro", link: "/games/mfp" },
    { id: 0, title: "Narrow", link: "/games/narrow.one/" },
    { id: 0, title: "Night Walk", link: "/games/nightwalk/" },
    { id: 0, title: "Ovo", link: "/games/ovo/" },
    { id: 0, title: "Ovo 2", link: "/games/ovo2/" },
    { id: 0, title: "Pandemic 2", link: "/games/pandemic2/" },
    { id: 0, title: "Particle Clicker", link: "/games/particleclicker/" },
    { id: 0, title: "Picohot", link: "/games/picohot/" },
    { id: 0, title: "Pixel Gun Survival", link: "/games/pixel-gun-survival/" },
    { id: 0, title: "Push The Square", link: "/games/push-the-square/" },
    { id: 0, title: "Pixel Gun Apocalypse 2", link: "/games/pixelgun/" },
    { id: 0, title: "Raft Wars", link: "/games/raftwars/" },
    { id: 0, title: "Riddle School", link: "/games/riddleschool/" },
    { id: 0, title: "Riddle School 2", link: "/games/riddleschool2/" },
    { id: 0, title: "Riddle School 3", link: "/games/riddleschool3/" },
    { id: 0, title: "Riddle School 4", link: "/games/riddleschool4/" },
    { id: 0, title: "Riddle School 5", link: "/games/riddleschool5/" },
    { id: 0, title: "Riddle Transfer", link: "/games/riddletransfer/" },
    { id: 0, title: "Riddle Transfer 2", link: "/games/riddletransfer2/" },
    { id: 0, title: "Rocket League 2D", link: "/games/rocket-league/" },
    { id: 0, title: "Plants vs Zombies 1", link: "/games/pvz1/" },
    { id: 0, title: "Rooftop Snipers", link: "/games/rooftopsnipers-master/" },
    { id: 0, title: "Retro Bowl", link: "/games/retro/" },
    { id: 0, title: "Subway Surfers San Francisco", link: "/games/subway-surfers-sf/" },
    { id: 0, title: "Subway Surfers Beijing", link: "/games/subway-surfers-beijing/" },
    { id: 0, title: "Santy is Here", link: "/games/santy/" },
    { id: 0, title: "Superhot", link: "/games/superhot/" },
    { id: 0, title: "Slope", link: "/games/slope/" },
    { id: 0, title: "Slope 2", link: "/games/slope-2/" },
    { id: 0, title: "Smash Karts", link: "/games/smashkarts-main/" },
    { id: 0, title: "Snow Rider 3D", link: "/games/snow-rider3d/" },
    { id: 0, title: "Stickman Hook", link: "/games/stickman-hook/" },
    { id: 0, title: "Stick Merge", link: "/games/stick-merge/" },
    { id: 0, title: "Tabs", link: "/games/tabs/tabs" },
    { id: 0, title: "Thermomorph", link: "/games/thermomorph/" },
    { id: 0, title: "Thwack", link: "/games/thwack/" },
    { id: 0, title: "There is no Game", link: "/games/there-is-no-game/" },
    { id: 0, title: "This is the Only Level", link: "/games/thisistheonlylevel/" },
    { id: 0, title: "Time Shooter 2", link: "/games/time-shooter-2/" },
    { id: 0, title: "Tunnel Rush", link: "/games/tunnel-rush/" },
    { id: 0, title: "Tunnel Rush 2", link: "/games/tunnel2/" },
    { id: 0, title: "Tomb of the Mask", link: "/games/tomb/" },
    { id: 0, title: "Ultimate Flash Sonic", link: "/games/ultsonic/" },
    { id: 0, title: "Unnecessary Evil", link: "/games/unnecessaryevil/" },
    { id: 0, title: "Vex 3", link: "/games/vex3/" },
    { id: 0, title: "Vex 4", link: "/games/vex4/" },
    { id: 0, title: "Vex 6", link: "/games/vex6/" },
    { id: 0, title: "Vex 7", link: "/games/vex7/" },
    { id: 0, title: "Worlds Hardest Game", link: "/games/worlds-hardest-game/" },
    { id: 0, title: "WebGL Fluid", link: "/games/webgl-fluid-simulation/" },
    { id: 0, title: "We Become What We Behold", link: "/games/webecome/html/300364/" },
    { id: 0, title: "xx142-b2exe", link: "/games/xx142-b2exe/" },
    { id: 0, title: "You Are Jeff Bezos", link: "/games/youarejeffbezos/" },
    { id: 1, title: "GBA Games", link: "/games/2048/" },
    { id: 1, title: "Controls | Don't know them? Go to Cheats", link: "/games/2048/" },
    { id: 0, title: "007", link: "/games/gba/launcher#007" },
    { id: 0, title: "Dragon Ball Z | Supersonic Warriors", link: "/games/gba/launcher#dbz_supersonic" },
    { id: 0, title: "Donkey Kong Country", link: "/games/gba/launcher#dkc" },
    { id: 0, title: "Donkey Kong Country 2", link: "/games/gba/launcher#dkcs2" },
    { id: 0, title: "Doom", link: "/games/gba/launcher#dm" },
    { id: 0, title: "Doom 2", link: "/games/gba/launcher#dm" },
    { id: 0, title: "FIFA 4", link: "/games/gba/launcher#fifa4" },
    { id: 0, title: "FIFA 5", link: "/games/gba/launcher#fifa5" },
    { id: 0, title: "FIFA 6", link: "/games/gba/launcher#fifa6" },
    { id: 0, title: "FIFA 7", link: "/games/gba/launcher#fifa7" },
    { id: 0, title: "FIFA World Cup 2006", link: "/games/gba/launcher#fifawc6" },
    { id: 0, title: "Final Fantasy IV", link: "/games/gba/launcher#ff4s" },
    { id: 0, title: "Final Fantasy VI", link: "/games/gba/launcher#ff6" },
    { id: 0, title: "Ford Racing 3", link: "/games/gba/launcher#fr3" },
    { id: 0, title: "Jurassic Park III | Dna Factor", link: "/games/gba/launcher#jp3dna" },
    { id: 0, title: "Jurassic Park III | Island Attack", link: "/games/gba/launcher#jp3ia" },
    { id: 0, title: "Kirby Nightmare", link: "/games/gba/launcher#kirbynightmare" },
    { id: 0, title: "Kirby | Amazing Mirror", link: "/games/gba/launcher#kirbymirror" },
    { id: 0, title: "Lego Island 2", link: "/games/gba/launcher#li2" },
    { id: 0, title: "Lego Racers 2", link: "/games/gba/launcher#lr2" },
    { id: 0, title: "Lego Star Wars", link: "/games/gba/launcher#lsw" },
    { id: 0, title: "Mario Kart", link: "/games/gba/launcher#mariokart" },
    { id: 0, title: "Mario Land", link: "/games/gba/launcher#marioland" },
    { id: 0, title: "Mario Party", link: "/games/gba/launcher#marioparty" },
    { id: 0, title: "Metal Slug", link: "/games/gba/launcher#metalslug" },
    { id: 0, title: "Monopoly", link: "/games/gba/launcher#monopoly" },
    { id: 0, title: "Mortal Kombat", link: "/games/gba/launcher#mortal_kombat" },
    { id: 0, title: "Need For Speed | Underground", link: "/games/gba/launcher#nfsu" },
    { id: 0, title: "Need For Speed | Underground 2", link: "/games/gba/launcher#nsfu2" },
    { id: 0, title: "One Piece", link: "/games/gba/launcher#onepiece" },
    { id: 0, title: "Pacman World", link: "/games/gba/launcher#pacman_world" },
    { id: 0, title: "Pacman World 2", link: "/games/gba/launcher#pacman_world2" },
    { id: 0, title: "Pokemon Emerald ", link: "/games/gba/launcher#pokemonemerald" },
    { id: 0, title: "Pokemon Green", link: "/games/gba/launcher#pokemongreen" },
    { id: 0, title: "Pokemon Red", link: "/games/gba/launcher#pokemonred" },
    { id: 0, title: "Pokemon Ruby", link: "/games/gba/launcher#pokemonruby" },
    { id: 0, title: "Pokemon Sapphire", link: "/games/gba/launcher#pokemonsapphire" },
    { id: 0, title: "Simpsons", link: "/games/gba/launcher#simpsons" },
    { id: 0, title: "Sims 2", link: "/games/gba/launcher#sims2" },
    { id: 0, title: "Sonic Advanced", link: "/games/gba/launcher#sonic_advance" },
    { id: 0, title: "Sonic Advanced 2", link: "/games/gba/launcher#sonic_advance2" },
    { id: 0, title: "Sonic Advanced 3", link: "/games/gba/launcher#sonic_advance3" },
    { id: 0, title: "Sonic Battle", link: "/games/gba/launcher#sonicbattle" },
    { id: 0, title: "Super Street Fighter 2 | Turbo Revival", link: "/games/gba/launcher#super_street_fighter_2_turbo_revival" },
    { id: 0, title: "Super Street Fighter 3 | Alpha", link: "/games/gba/launcher#super_street_fighter_3_alpha" },
    { id: 0, title: "Tony Hawk Pro Skater 2", link: "/games/gba/launcher#thpk2" },
    { id: 0, title: "Tony Hawk Pro Skater 3", link: "/games/gba/launcher#thpk3" },
    { id: 1, title: "Flash Games", link: "/games/2048/" },




    { id: 0, title: "Achievement Unlocked", link: "/games/flash/?swf=dagobah_Achievement_Unlocked.swf'>" },
    { id: 0, title: "Achievement Unlocked 2", link: "/games/flash/?swf=dagobah_achievement_unlocked_2.swf" },
    { id: 0, title: "Angry Birds", link: "/games/flash/?swf=Angry%20Birds%20HD.swf" },
    { id: 0, title: "Angry Birds | Halloween", link: "/games/flash/?swf=Angry%20Birds%20HD%20Halloween.swf" },
    { id: 0, title: "Age Of War", link: "/games/flash/?swf=Age_of_war.swf" },
    { id: 0, title: "Bloxors", link: "/games/flash/?swf=bloxorz.swf" },
    { id: 0, title: "Burgeria", link: "/games/flash/?swf=burgeria.swf" },
    { id: 0, title: "Formula Racer 2012", link: "/games/flash/?swf=FormulaRacer2012.swf" },
    { id: 0, title: "Hobo 1", link: "/games/flash/?swf=hobo.swf" },
    { id: 0, title: "Hobo 2", link: "/games/flash/?swf=hobo2.swf" },
    { id: 0, title: "Hobo 3", link: "/games/flash/?swf=hobo3.swf" },
    { id: 0, title: "Hobo 4", link: "/games/flash/?swf=hobo4.swf" },
    { id: 0, title: "Hobo 5", link: "/games/flash/?swf=hobo5.swf" },
    { id: 0, title: "Hobo 6", link: "/games/flash/?swf=hobo6.swf" },
    { id: 0, title: "Hobo 7", link: "/games/flash/?swf=hobo7.swf" },
    { id: 0, title: "Mario Kart but Flash", link: "/games/flash/?swf=mariokartflash.swf" },
    { id: 0, title: "Papas Freezeria", link: "/games/flash/?swf=papas%20freezeria.swf" },
    { id: 0, title: "Papas Pancakeria", link: "/games/flash/?swf=papas%20pancakeria.swf" },
    { id: 0, title: "Papas Bakeria", link: "/games/flash/?swf=papasbakeria.swf" },
    { id: 0, title: "Papas Cheeseria", link: "/games/flash/?swf=papascheeseria.swf" },
    { id: 0, title: "Papas Cupcakeria", link: "/games/flash/?swf=papascupcakeria.swf" },
    { id: 0, title: "Raft Wars", link: "/games/flash/?swf=raftwars.swf'" },
    { id: 0, title: "Raft Wars 2", link: "/games/flash/?swf=raftwars2.swf" },
    { id: 1, title: "IO Games", link: "/games/2048/" },
    { id: 0, title: "Surviv IO", link: "/games/starve.io/" },
    { id: 0, title: "Paper IO 2", link: "/games/paperio2/" },
    { id: 0, title: "Territorial IO", link: "/games/territorial.io/" },





























];

// Function to generate game cards
function generateGameCards() {
    const container = document.getElementById("gameCardsContainer");

    gameData.forEach((game) => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.setAttribute("data-id", game.id); // Add a data-id attribute
        card.innerHTML = `
            <h1 class="game-title">${game.title}</h1>
            <a href="${game.link}" class="play-button ${game.id === 1 ? 'hide-button' : ''}">Play Now</a>
        `;
        container.appendChild(card);
    });
    
}

generateGameCards();

// Add search functionality
document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card) => {
        const title = card.querySelector(".game-title").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
