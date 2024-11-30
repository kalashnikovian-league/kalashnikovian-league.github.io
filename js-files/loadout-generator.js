// very pro project of mine, i am proud of it rael

// !add buttons for including/excluding auction, gamepasses, bows, general stores, event items, axes, roles required etc.

// https://thewild-west.fandom.com/wiki/Guns_%26_Items
// ALL IMAGES OF THE GUNS BELONG TO STARBOARD STUDIOS

// !normal #################################################################
let riflesFull = ["Volcanic Rifle", "YellowBoy Rifle", "Lynx Bolt Action Rifle", "Longbow", "Mule Shotgun", "Sharps Rifle", "Horse Bow", "Harmonica Rifle", "Winchester Rifle", "Martini Henry", "Hartford Rifle", "1855 Revolving Shotgun"];
let sidearmsFull = ["Volcanic Pistol", "Peacekeeper Revolver", "Model 3", "Lemat Revolver", "Sawed-Off Shotgun", "Navy Revolver", "Dragoon Pistol", "Lindsay Doubleshot Pistol", "Lockhe Revolver", "Hammerless Revolver"];
let meleesFull = ["Knife", "Bowie Knife", "Tier One Axe", "Tier Two Axe", "Tier Three Axe", "Baton"];
let otherWeaponsFull = ["Smoke Bomb", "Dynamite", "Tomahawk", "Lasso", "Blow Dart Gun"];

let rifles = ["volcanic-rifle","yellowboy", "lynx", "longbow", "mule", "sharps", "horsebow", "harmonica", "winch", "henry", "hartford", "1855shotgun"];
let sidearms = ["volcanic-pistol", "peacekeeper", "model3", "lemat", "sawed-off", "navy", "dragoon", "lindsay", "lockhe", "hammerless"];
let melees = ["knife", "bowie-knife", "axe1", "axe2", "axe3", "baton"];
let otherWeapons = ["smoke-bomb", "dynamite", "tomahawk", "lasso", "blow-dart-gun"];

// !event #################################################################
let eventRiflesFull = ["Occult Mule", "Frozen Horn Bow", "Frozen Volcanic Rifle", "Rednose Rifle", "Lightning Recurve Bow", "Skin Walker Bow"];
let eventSidearmsFull = ["Cursed Volcanic Pistol", "Occult Sawed Off", "Model3 Lightning"];
let eventMeleesFull = ["Ceremonial Dagger", "Skin Walker Spear", "Occult Blade", "Extractor", "Frozen Axe"];
let eventOtherWeaponsFull = ["Snowball"];

let eventRifles = ["occult-mule", "frozen-bow", "frozen-volc-rifle", "rednose-rifle", "lightning-bow", "skin-walker-bow"];
let eventSidearms = ["cursed-volcanic", "occult-sawed-off", "model3-lightning"];
let eventMelees = ["ceremonial-dagger", "skin-walker-spear", "occult-blade", "extractor", "frozen-axe"];
let eventOtherWeapons = ["snowball"];

// !auction #################################################################
let auctionRiflesFull = ["Guycot Chain Carbine", "Spitfire Revolving Sniper"];
let auctionSidearmsFull = ["Guycot Chain Pistol", "Schwarzlose Prototype Pistol", "Lancaster Pistol", "Paterson Navy", "Admiral's Axegonne"];
let auctionMeleesFull = ["Kukri"];
// let auctionOtherWeaponsFull = [];

let auctionRifles = ["guycot-carbine", "spit"];
let auctionSidearms = ["guycot-pistol", "proto", "lanc", "pat", "axegonne"];
let auctionMelees = ["kukri"];
// let auctionOtherWeapons = [];

// !gamepass #################################################################

let gamepassRiflesFull = ["Mare's Leg"];
let gamepassSidearmsFull = ["Golden Dragoon", "Mauser"];
// let gamepassMeleesFull = [];
// let gamepassOtherWeaponsFull = [];

let gamepassRifles = ["mares-leg"];
let gamepassSidearms = ["golden-dragoon", "mauser"];
// let gamepassMelees = [];
// let gamepassOtherWeapons = [];



function generate(list) {
  return list.indexOf(list[Math.floor(Math.random() * list.length)]);
}

// console.log("Main Firearm: " + mains[mainFirearm]);
// console.log("Sidearm 1: " + sidearms[sidearm1]);
// console.log("Sidearm 2: " + sidearms[sidearm2]);
// console.log("Melee Weapon: " + melees[meleeWeapon]);

function generateLoadout() {
  let tempRiflesFull = [...riflesFull];
  let tempSidearmsFull = [...sidearmsFull];
  let tempMeleesFull = [...meleesFull];
  let tempOtherWeaponsFull = [...otherWeaponsFull];

  let tempRifles = [...rifles];
  let tempSidearms = [...sidearms];
  let tempMelees = [...melees];
  let tempOtherWeapons = [...otherWeapons];

  if(document.getElementById("includeEvent").checked) {
    tempRiflesFull = tempRiflesFull.concat(eventRiflesFull);
    tempSidearmsFull = tempSidearmsFull.concat(eventSidearmsFull);
    tempMeleesFull = tempMeleesFull.concat(eventMeleesFull);
    tempOtherWeaponsFull = tempOtherWeaponsFull.concat(eventOtherWeaponsFull);
  
    tempRifles = tempRifles.concat(eventRifles);
    tempSidearms = tempSidearms.concat(eventSidearms);
    tempMelees = tempMelees.concat(eventMelees);
    tempOtherWeapons = tempOtherWeapons.concat(eventOtherWeapons);
  }
  
  if(document.getElementById("includeAuction").checked) {
    tempRiflesFull = tempRiflesFull.concat(auctionRiflesFull);
    tempSidearmsFull = tempSidearmsFull.concat(auctionSidearmsFull);
    tempMeleesFull = tempMeleesFull.concat(auctionMeleesFull);
    // tempOtherWeaponsFull = tempOtherWeaponsFull.concat(auctionOtherWeaponsFull);
    
    tempRifles = tempRifles.concat(auctionRifles);
    tempSidearms = tempSidearms.concat(auctionSidearms);
    tempMelees = tempMelees.concat(auctionMelees);
    // tempOtherWeapons = tempOtherWeapons.concat(auctionOtherWeapons);
  }
  
  if(document.getElementById("includeGamepass").checked) {
    tempRiflesFull = tempRiflesFull.concat(gamepassRiflesFull);
    tempSidearmsFull = tempSidearmsFull.concat(gamepassSidearmsFull);
    // tempMeleesFull = tempMeleesFull.concat(gamepassMeleesFull);
    // tempOtherWeaponsFull = tempOtherWeaponsFull.concat(gamepassOtherWeaponsFull);
  
    tempRifles = tempRifles.concat(gamepassRifles);
    tempSidearms = tempSidearms.concat(gamepassSidearms);
    // tempMelees = tempMelees.concat(gamepassMelees);
    // tempOtherWeapons = tempOtherWeapons.concat(gamepassOtherWeapons);
  }

  let rifle = generate(tempRifles);
  let sidearm1, sidearm2;

  do {
    sidearm1 = generate(tempSidearms);
    sidearm2 = generate(tempSidearms);
  } while (sidearm1 === sidearm2);

  let meleeWeapon = generate(tempMelees);
  let otherWeapon = generate(tempOtherWeapons);

  document.getElementById("rifleName").textContent = tempRiflesFull[rifle];
  document.getElementById("side1Name").textContent = tempSidearmsFull[sidearm1];
  document.getElementById("side2Name").textContent = tempSidearmsFull[sidearm2];
  document.getElementById("meleeName").textContent = tempMeleesFull[meleeWeapon];
  document.getElementById("otherWeaponName").textContent = tempOtherWeaponsFull[otherWeapon];

  document.getElementById("rifleImg").src = `loadout-generator/rifles/${tempRifles[rifle]}.png`;
  document.getElementById("side1Img").src = `loadout-generator/sidearms/${tempSidearms[sidearm1]}.png`;
  document.getElementById("side2Img").src = `loadout-generator/sidearms/${tempSidearms[sidearm2]}.png`;
  document.getElementById("meleeImg").src = `loadout-generator/melees/${tempMelees[meleeWeapon]}.png`;
  document.getElementById("otherWeaponImg").src = `loadout-generator/otherWeapons/${tempOtherWeapons[otherWeapon]}.png`;
}