import Trait from './trait';

const traits: Trait[] = [
  {
    index: 111,
    description:
      "ACCOUNTANT: Financial number-crunching is your raison d'être. You may identify inconsistencies in ledgers without rolling the dice, and you can always spot a counterfeit bill. Once per mission, you may ask the referee where and how a given entity is spending its money, and receive an honest answer (including offshore accounts, tax write-offs, and employee embezzlement). If you notice and correct an inconsistency in your FIST game, like lost HP that was never marked or a WAR DIE someone forgot they had, gain a WAR DIE.",
    equipment: 'Coffee thermos (+1D6 HP, one use)',
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 112,
    description:
      'ACE: You can do tricky vehicular maneuvers, like drifting or doing a barrel roll, without rolling the dice. If it’s something really difficult, like flying sideways through a small opening or riding a motorcycle across a tightrope, you can do it, but a key component of your vehicle will be destroyed—the referee will tell you what. When you have downtime to repair it, you can use it again.',
    equipment: 'Fuzzy dice (gives any vehicle +2 maxHP)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 113,
    description:
      'ACHILLES: In exchange for great power, you have a terrible weakness to a common substance, such as salt, iron, or silver. It could also be something considered uncommon (like a specific mineral from space), but the referee will make sure it appears often enough to be a problem. If this substance physically touches you, you are completely incapacitated until you have downtime to receive medical care.',
    equipment: 'Substance detector (pings on proximity)',
    modifiers: { key: 'maxHP', value: 6 },
  },
  {
    index: 114,
    description:
      'AIMBOT: You can only attack one target at a time. You are unable to engage another until your target has either left your line of fire or died. While attacking your target, partial successes become full ones.',
    equipment: 'Hand cannon (1D6+1 DAMAGE)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 115,
    description:
      'AKIMBO: You can wield any two weapons at once, but your accuracy is decreased: when an attack lands, roll DAMAGE for both weapons, then drop one die from the total.',
    equipment: 'Two SMGs (1D6 DAMAGE each)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 116,
    description:
      'AMATEUR: You have no formalized military training. Civilians always listen to you and tend to trust you, but you can never pass as a soldier.',
    equipment: 'Civilian outfit (0 ARMOR, blend into crowds)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 121,
    description:
      'ANALYST: You are trained in the art of war, and your judgment in the field of combat analysis is impeccable. When a fight breaks out, you may always ask the referee for any nearby exits, as well as what tactics your enemies plan to use (e.g. flanking, a bum rush, or picking off the weak), and receive an honest answer.',
    equipment: 'Bolt-action rifle (1D6+1 DAMAGE)',
    modifiers: { key: 'tactical', value: 2 },
  },
  {
    index: 122,
    description:
      'ANIMUS: Your touch grants sapience. Once per mission, you may touch an object or animal to give it human intelligence, movement and speech. Those you “awaken” in this way are under no obligation to take it well.',
    equipment: 'Lighter (your longtime companion)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 123,
    description:
      'AQUATIC: You’re a water-breather—perhaps due to spliced-on fish genes or cybernetic gills—and you may stay submerged indefinitely with no ill effects. When you roll the dice to do something risky underwater, roll 3D6 and take the best two. On land, roll 3D6 and take the worst two.',
    equipment: 'Heavy harpoon launcher (1D6+2 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 124,
    description:
      'ARMORED: You are fused with a cumbersome suit of power armor that you cannot remove. Once per mission, you can completely ignore any amount of DAMAGE dealt to you.',
    equipment: 'Power armor (2 ARMOR, cannot be unequipped)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 125,
    description:
      'ARTIST: If you have a reasonable amount of time and complete safety, you can create something with your art supplies and it will become real until the end of the mission.',
    equipment: 'Art supplies (one use)',
    modifiers: { key: 'creative', value: 2 },
  },
  {
    index: 126,
    description:
      'ASSASSINATION: Once per mission, you may instantly kill up to three weak enemies (3 HP or less) who are completely unaware of your presence, without rolling the dice. If you do not have a way of measuring an enemy’s HP, you may have to gauge their condition based upon referee description.',
    equipment: 'Wrist blade (3 DAMAGE, does not count as equipped)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 131,
    description:
      'ASTRONAUT: You have been to (or are from) outer space. When you would roll the dice to do something risky which involves aliens, spaceships, airless environments, or irregular gravity, roll 3D6 and take the best two.',
    equipment: 'Space suit (1 ARMOR, constant oxygen supply)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 132,
    description:
      'ATMOKINESIS: You can always change the weather within a mile of you. Once per mission, you can make it something particularly severe/ dangerous (tornadoes, extreme heat, freezing blizzards, etc.) Once changed, it’s difficult to undo.',
    equipment: 'Lightning grenade (1D6 DAMAGE, one use)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 133,
    description:
      'AURA: You can perceive the auras of yourself and others; their qualities are up to your interpretation. You may also regulate and amplify your aura to conduct it between bodies—while doing so, NPCs who are touching you won’t CHOKE, and anyone who remains in constant physical contact with you for about ten minutes regains 1D6 HP.',
    equipment: 'Psionic grenade (scrambles emotions, one use)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 134,
    description:
      'BERSERKER: For you, there are no tactics—only the thrill of battle. If you rush into combat with no precaution or pre-planning, your first attack will deal double DAMAGE.',
    equipment: 'Minigun (1D6+2 DAMAGE)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 135,
    description:
      'BOMBER: If you have a reasonable amount of prep time, you can use your bomb kit and attempt to destroy any structure by rolling +TACTICAL. You may also spend a WAR DIE at any time to create a small, throwable explosive that deals 1D6 DAMAGE.',
    equipment: 'Bomb kit (one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 136,
    description:
      'BOTTLENECK: If you put yourself between something you are defending and a large amount of enemies, you deal +1 DAMAGE per 5 enemies attempting to harm you for as long as you hold your position. You may sacrifice yourself to ensure that an oncoming horde does not pass.',
    equipment: 'Antique shortsword (1D6+1 DAMAGE)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 141,
    description:
      'BOUNCE: When you deal damage to an enemy in melee combat, they are tossed 1D6 × 10 feet with enough force to knock them clear through a wall (though this deals no additional DAMAGE).',
    equipment: 'Kinetic gauntlet (1D6 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 142,
    description:
      'BREAKDOWN: A directive burns in the back of your mind. When you take this trait, randomly roll a CHOKE score for your character (D66, p. 148)—and roll against it when appropriate, as the ref would with an NPC. If you CHOKE, you must either perform the listed action immediately or release a psionic shockwave from your skull, ten feet in diameter with the concussive force of a frag grenade. This shockwave deals 1D6+2 DAMAGE to everyone caught inside (not including yourself) and, if you spend a WAR DIE, additionally functions as a short-range EMP burst which shorts out power lines, burns out lights, and disables electronics.',
    equipment: 'Needle gun (1D6+1 DAMAGE)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 143,
    description:
      'BUDDY: You and another player who possesses the BUDDY trait are best friends. When you work together, you become an unstoppable force of nature, adding +1 whenever you apply a WAR DIE to your buddy’s roll. If your buddy dies, your maxHP is halved by grief (rounded down) until you dedicate a mission to delivering a special possession, such as their gun, their dog tags, or their favorite book, to a proper final resting place.',
    equipment: 'Friendship bracelet (matches another)',
    modifiers: { key: 'forceful', value: 2 },
  },
  {
    index: 144,
    description:
      'BUILDER: Given enough time, the right materials, and relative safety, you can build any common structure (guaranteed to be sound, sturdy, and reliable) without rolling the dice. You build things simple, solid, and square, so special structures and rush jobs will have complications—the referee will tell you what.',
    equipment: 'Tool belt (produce any hardware store tool, one use)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 145,
    description:
      'BUM: Years of homelessness have been harsh on your bones, but you are skilled in the art of survival sans income and shelter. You may roll the dice +CREATIVE to panhandle in the presence of enemies—on a success, at least one enemy will give you something they have, free of charge. Those who ignore poor and homeless people will never notice you, even if you’re hiding in plain sight.',
    equipment: 'Shabby coat (new Item (p. 85) in pocket each mission)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 146,
    description:
      'CAMOUFLAGE: You have an impressive collection of face paints and situationally-appropriate patterned fatigues, and you know how to use them. When you begin a mission, describe your current camo pattern, such as “desert,” “forest,” “jungle,” or “urban.” Take +1 to your roll whenever you roll to avoid detection in the corresponding environment.',
    equipment: 'Camouflage fatigues (multiple patterns)',
    modifiers: { key: 'reflexive', value: 2 },
  },
  {
    index: 151,
    description:
      "CANNIBAL: Your power grows when you feast upon human flesh. When you have privacy, you may dine upon any corpse and gain 1D6 HP. If you imply to someone that you're going to eat them, roll 1D6—if the result is less than or equal to the amount of people you've eaten during this mission, they lose their nerve and capitulate or flee (referee's choice). ",
    equipment: 'Chainsaw (1D6+1 DAMAGE)',
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 152,
    description:
      'CENTIPEDE: You have a worm-like parasite living inside you. You may roll +FORCEFUL to bite someone. On a success, the parasite travels through your mouth and latches on, controlling their body. The parasite may then travel through the secondary body, and so on, creating a “chain” of bodies. For each body you add to the chain, gain their HP and any special abilities they have, but take a cumulative -1 penalty to REFLEXIVE. You may release a body from the end of the chain at any time; they quickly regain control.',
    equipment: 'Muzzle (contains the centipede, accessory)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 153,
    description:
      'CHAMPION: You live for the righteous thrill of triumph. When you are the only one to survive a fight, immediately gain 2D6 maxHP and fully heal.',
    equipment: 'Spear (1D6+1 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 154,
    description:
      'CHARM: You can always manipulate people into doing what you want without rolling the dice, but you will have to make a significant sacrifice or maintain a difficult lie—the referee will tell you how.',
    equipment: 'Combat tuxedo (1 ARMOR)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 155,
    description:
      'CHEF: You can cook a good meal in almost any situation without rolling the dice. When you need to cook an exquisite meal, roll +CREATIVE and choose one of the following effects on a partial success, or two on a full success: grants +1 to any attribute for one roll, heals 1D6+CRE HP, pacifies and nourishes those who eat it.',
    equipment: 'Meat cleaver (1D6 DAMAGE), +1 WAR DIE per mission',
  },
  {
    index: 156,
    description:
      'CHEMIST: If you have a reasonable amount of prep time and complete safety, you can set up your portable lab and synthesize any common chemical, such as isopropyl alcohol, lighter fluid, or chloroform. Synthesizing esoteric or experimental compounds will require special supplies—the referee will tell you what.',
    equipment: 'Portable lab (three uses)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 161,
    description:
      'CLASSY: You are well-versed in the aesthetics, logistics, and mores of high society. Your name always ends up on VIP lists, and rich socialites tend to share gossip with you freely. Lower-class people will never trust you, and you struggle to hide the sticky psychic stench of wealth.',
    equipment: 'Diamond jewelry (quietly bribe someone, one use)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 162,
    description:
      'CLIMBER: You can climb surfaces with hand- and footholds without rolling the dice, and stick to smooth surfaces by rolling +REFLEXIVE. If you do so during a dangerous situation, you must roll +REFLEXIVE again to unstick yourself without falling or getting hurt.',
    equipment: 'Grapple gun (50 feet of cable)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 163,
    description:
      "COMMANDO: You're a real life action hero. You deal +1 DAMAGE during any solo fight where you are clearly outmatched, but take a -2 DAMAGE penalty when someone is fighting alongside you. ",
    equipment: 'Rocket launcher (1D6+2 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 164,
    description:
      'CONCEAL: You can always take weapons and contraband through patdowns, checkpoints, and metal detectors without rolling the dice. Once per mission, if you have no weapon equipped and no weapons in your inventory, you may reveal a random weapon (roll D66 on the weapons table, p. 83) and say that you had it hidden away the whole time.',
    equipment: 'Leather trenchcoat (1 ARMOR)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 165,
    description:
      "CONTORTIONIST: You can always fit through small openings and perform feats of flexibility without rolling the dice. If you contort yourself in a particularly difficult way, you've pulled something—decrease your REFLEXIVE attribute by 2 until the end of the mission. ",
    equipment: 'Skin-tight suit (1 ARMOR)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 166,
    description:
      'CRUEL: Merely shooting, burning, or stabbing someone is never enough for you—without fail, you always double down and twist the knife. While dealing DAMAGE, you may reroll any dice which show up as 1.',
    equipment:
      'Micro-blade stiletto (1D6+RFX DAMAGE), +1 DAMAGE vs. fleeing targets',
  },
  {
    index: 211,
    description:
      "CUT: You can easily cut any mundane object (such as a tree, a dumpster, or an oil tanker) into several pieces given enough time. You may also instantly cut something perfectly in half, as long as you identify its unique fracture point by rolling 1D6 and correctly predicting the result. When someone damages you, and you're wielding a cutting weapon, you may roll DAMAGE to counter theirs. On a mismatch, they hurt you as usual and your damage roll means nothing, but on a tie, you are unscathed... and your opponent is revealed to have been cut in half. ",
    equipment: 'Katana (1D6+1 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 212,
    description:
      'CYBORG: You have augmented ultrahuman agility. You can reroll one damage die—dealing or receiving—once per fight.',
    equipment: 'Cyborg exoskeleton (1 ARMOR)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 213,
    description:
      'DEBATEUR: If you change an NPC’s mind or convincingly win an argument against them, you may immediately deal 6 DAMAGE to them (ignoring armor) in a psychic attack.',
    equipment: 'Debate notes (use to cite inarguable statistics, one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 214,
    description:
      'DEFUSE: When you would attempt to defuse a bomb or bomb-like device, you may open it up to reveal a mess of wires. Ask the referee to roll 1D6 and choose an amount of wire colors equal to the number rolled (the ref should choose from the following list: red, orange, yellow, green, blue, purple). The referee should secretly decide which wire, when cut, defuses the bomb, assuming that all others will detonate it. You may roll 1D6 to receive a list of that many wire colors which are unsafe to cut. If you roll equal to or over the amount of wire colors, you have no idea.',
    equipment: 'Wire cutters (3 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 215,
    description:
      'DETECTIVE: At the beginning of each mission, the referee will privately tell you a secret, such as the identity of a killer or the truth behind a conspiracy. Every time you do something which produces conclusive, show-stopping evidence towards revealing the secret, gain a WAR DIE.',
    equipment: 'Notepad (provides details about someone, three uses)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 216,
    description:
      'DETONATOR: You can explode, once. Doing so kills you, messily, destroys nearby structures, and deals 2D6 DAMAGE to everyone around you.',
    equipment: 'Bomb suit (2 ARMOR)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 221,
    description:
      'DIRECTOR: Once per mission, you may firmly announce, “CUT!" The camera pulls back, revealing a set, and you may give direction to the other characters and NPCs as if they were actors in a movie. When ready to play again, say “ACTION!” and start again from the beginning of the scene or fight (essentially rewinding time, allowing characters to make different decisions and rolls).',
    equipment: 'Stupid hat',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 222,
    description:
      'DIRTY: You fight using underhanded and dishonorable methods. When you trick-attack an enemy, roll DAMAGE twice and take the higher result.',
    equipment: 'Pocket sand (+1 to attack rolls vs. sand victim, one use)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 223,
    description:
      'DISGUISE: You can disguise yourself as anyone as long as you have a reasonable amount of prep time; however, your cover will be blown if you either speak, move quickly, or get hurt—the referee decides which.',
    equipment: 'Bulletproof vest (1 ARMOR)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 224,
    description:
      'DOORS: When you enter through a door, you may emerge through any other door you have encountered. You have a method for pushing through locked/barricaded doors (like lockpicks, bombs, or a heavy boot) that works every time, but always has an inconvenient downside— the referee will tell you what.',
    equipment: 'Keyring (3 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 225,
    description:
      'DRUID: You are a philosopher of science and prophecy. If an eligible sacrifice is at hand, you may observe the trajectory and resulting patterns of its spilled blood for a simple yes-or-no answer to any question, however complicated.',
    equipment: 'Psychoactive herb (cures a psionic ailment, one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 226,
    description:
      'DUELIST: You deal +1 DAMAGE during a fair fight with a single opponent. You deal another +1 DAMAGE if you attempt to intimidate, taunt, or seduce that opponent.',
    equipment: 'Laser katana (1D6+2 DAMAGE), +1 DAMAGE with melee weapons',
  },
  {
    index: 231,
    description:
      'ECHO: You can create 1D6 shadow-clones of yourself at will. Doing so stretches you thin, and costs you HP equal to the amount summoned. The clones appear incorporeal, but can physically affect the world as you can. Each clone has maxHP equal to your maxHP minus the number of clones, does not think or feel, and behaves roughly as you behave.',
    equipment: 'Quantum duplicator (copies any object, one use)',
    modifiers: { key: 'maxHP', value: 2 },
  },
  {
    index: 232,
    description:
      'EMPATHY: You can sense how anyone is feeling without rolling the dice. Whenever you do something risky to prevent needless pain and death, roll 3D6 and take the best two. Any time you do something violent or harmful, roll 3D6 and take the worst two.',
    equipment: 'Invisibility cloak (room for two people)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 233,
    description:
      'EXPERT: Your encyclopedic knowledge of a scientific discipline exceeds professional and borders on obsessive. When you take this trait, choose an “-ology,” such as sociology, entomology, or cryptozoology. When you roll the dice to do something risky related to your field of expertise, roll 3D6 and take the best two.',
    equipment: 'Textbook (answer any field-related question, one use)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 234,
    description:
      'FASHIONABLE: You may combine multiple pieces of body-sized armor and wear them all at once to gain their cumulative ARMOR score, if you can convincingly explain how they work together as a cohesive outfit.',
    equipment: 'Leather jacket (1 ARMOR)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 235,
    description:
      'FATALITY: Once per mission, you may describe the creative and brutal finishing move you perform on an enemy with less than 3 HP (if you do not have a way of measuring an enemy’s HP, you may have to gauge their condition based upon referee description). Once you’ve performed your finisher, the enemy is permanently killed and cannot be revived by any means.',
    equipment: 'Kunai chain (1D6 DAMAGE)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 236,
    description:
      'FATE: You are able to manipulate the threads of chance, perhaps through careful study of reality’s emergent properties or by some connection to the divine. When you would roll a WAR DIE, roll two instead and use either one as your result. If you roll doubles, use both.',
    equipment: 'Loaded dice (difficult to detect)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 241,
    description:
      'FIELD: Once per mission, you may project a bubble of solid psionic force ten feet in diameter which is centered on you and provides anyone inside 3 ARMOR against outside attacks. If you roll the dice +CREATIVE, you may attempt to fashion the field into a different shape. Failing this roll or getting hurt while projecting the field immediately dissipates it.',
    equipment: 'Paint gun (clearly marks a surface or area)',
    modifiers: { key: 'forceful', value: 2 },
  },
  {
    index: 242,
    description:
      'FIEND: You utilize amphetamines to enhance your focus. When you have a second free, you can pop some pills and take +2 to your next TACTICAL roll.',
    equipment: 'Pill bottle (one use), +1 WAR DIE per mission',
  },
  {
    index: 243,
    description:
      'FIGHTER: Your study of hand-to-hand, the basis of all combat, has made your body itself into a lethal weapon. You may choose to deal 1D6 DAMAGE when attacking with no weapon equipped. Once per mission, you may launch a special, unarmed super attack which deals 1D6+2 DAMAGE and knocks most living things unconscious. When you do, state the name of your super attack.',
    equipment: 'Flashy outfit (1 ARMOR)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 244,
    description:
      'FIREFIGHTER: You are professionally trained to fight fires (or you are a seasoned volunteer). Once per mission, you may entirely put out any fire which has spread no further than the confines of a single structure (particularly large or nasty fires may keep you occupied for a while). Add +2 whenever you roll the dice to do something risky while navigating a burning or collapsing environment.',
    equipment: 'Hydro-gun with backpack tank (3 DAMAGE, 55 gal.)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 245,
    description:
      'FLIGHT: You have the ability to fly, perhaps using wings, a jetpack, or telekinetic levitation. If you take damage while in the air, you must roll +REFLEXIVE to avoid a dangerous fall or collision with something nearby.',
    equipment: 'AR goggles (let you see enemies’ HP)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 246,
    description:
      'FLOW: You live in the moment and can be like water, moving with the currents of reality. Whenever you roll a failure, mark down a plus sign— you can have up to three. When you do something risky, you can spend any amount of plus signs to add that much to your roll.',
    equipment: 'Staff (1D6 DAMAGE, 3-in-1D6 chance to knockout)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 251,
    description:
      'FLURRY: Once per mission, you may enter a “flurry state” during combat. In your flurry state, you may choose to instantly roll DAMAGE against anyone who hurts you; doing so ends the state. When you leave your flurry state, take 1D6 DAMAGE from overexertion.',
    equipment: 'Energy drink (+1D6 HP, one use)',
    modifiers: { key: 'reflexive', value: 2 },
  },
  {
    index: 252,
    description:
      'FOCUS: When you have a moment of utter tranquility to rest and digest the day’s events (like a drink at an empty bar or a gorgeous view), gain a WAR DIE. You lose this WAR DIE if you fail to use it during this mission.',
    equipment: 'Stress ball (squeeze for +1 to any WAR DIE roll)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 253,
    description:
      'FORAGE: When you have some prep time, you can ask the referee about the local flora and fauna. If you present a convincing reason why one of these things could work for the ailment you’re trying to treat, you may heal yourself or someone else for 1D6 HP.',
    equipment: 'Machete (1D6 DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 254,
    description:
      'FREEZE: Once per mission, you may freeze time for ten minutes and move around freely. You may not harm or otherwise alter any living things (as this would cause a superposition-collapse cascade), but you can do anything else that fits in the span of ten minutes, such as constructing a barricade, moving to a different location, or taking a short rest. To outside observers, you will look like a blur, and your actions will appear to have happened almost instantly. Your stasis grenade creates a zone of frozen time ten feet in diameter which stops anything that enters it.',
    equipment: 'Stasis grenade (ten minute duration, one use)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 255,
    description:
      'GADGETS: You always carry a treasure trove of bulky, delicate electronics. If you have space to work, you can use your electronics kit to create a device (equivalent in function to a trait-granted item of your choice), or a robot (has a trait of your choice, 1 HP, and 1 ARMOR).',
    equipment: 'Electronics kit (three uses)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 256,
    description:
      'GANGSTER: You are part of an organized crime group such as a mafia syndicate, a yakuza clan, a cartel, or a triad. The referee will always tell you where to find illegal items. You can intimidate enemies without rolling, but cops and law-abiding civilians will always mistrust you.',
    equipment: 'Silencer (attach to any gun)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 261,
    description:
      'GENIUS: You’re really smart. You have to make sure everyone else knows it. Whenever you correct someone, especially on something pedantic (and you’re actually right), heal 1 HP.',
    equipment: 'Glasses (you can’t see without them)',
    modifiers: { key: 'tactical', value: 2 },
  },
  {
    index: 262,
    description:
      'GOONS: You begin each mission accompanied by 1D6 disposable goons. Each goon comes with 3 maxHP and all standard issue items. You can roll +TACTICAL to command your goons. They tend to misinterpret commands, shoot themselves in the foot (figuratively or literally), and often make bizarre non-sequitur decisions under pressure.',
    equipment: 'Walkie-talkie (summons goons to your position)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 263,
    description:
      'GROUND: You know how to cut through the noise, for better or for worse. Once per mission, you may plant yourself firmly and beckon your team to “form up” on you. If they do, mark the occasion with a firm gesture (like pointing forward or reloading your shotgun), and choose a bonus to activate for the next ten minutes: everyone in the area adds +2 to their DAMAGE dealt and adds +2 when rolling to do something risky, or all anomalous abilities and phenomena in the area are nullified.',
    equipment: 'Pump-action shotgun (1D6+1 DAMAGE)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 264,
    description:
      'GROW: You may double your size at will, as long as your spatial manipulator belt is intact. Each time you do, increase your maxHP by 1D6 (and gain that much HP), increase your FORCEFUL score by 1, and decrease your REFLEXIVE score by 1. While enlarged, you may also add your current HP to any unarmed or melee DAMAGE you deal.',
    equipment: 'Spatial manipulator belt (accessory)',
    modifiers: { key: 'maxHP', value: -2 },
  },
  {
    index: 265,
    description:
      'HACKER: If you have a reasonable amount of prep time and direct access, you can attempt to gain control of any computer or electronic machine by rolling the dice +TACTICAL. If you do not have direct access, you can attempt to hack in from a safe place using your briefcase computer.',
    equipment: 'Briefcase computer (remotely access electronics)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 266,
    description:
      'HAPPY: You don’t let anything get you down. You have +1 on all rolls to make a person or situation happier (but not necessarily better). If you ask the referee “What does this character enjoy?”, they will always answer truthfully.',
    equipment: 'Bundle of lollipops (heal 1 HP, three uses)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 311,
    description:
      'HARVEST: When you would deal a killing blow with a melee weapon, you may roll 1D6 to attempt to harvest an internal organ before death—on a 4 or above, consume it, and choose to a) gain a WAR DIE, or b) heal for 1D6 HP. On a 3 or below, your killing blow doesn’t land.',
    equipment: 'Bloody axe (1D6 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 312,
    description:
      'HATE: Something about you just rubs people the wrong way, and you don’t mind that at all. When you meet someone, roll +CREATIVE—on anything but a success, they hate or strongly dislike you. When you attack someone because you truly hate them—not just for money, or because they were a threat, but because you hate them, and you can explain why—they will be absolutely obliterated, HP notwithstanding.',
    equipment: 'Bubblegum (funny comic included)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 313,
    description:
      'HAZARD: You are unusually hardy when faced with toxins and pathogens. Once per mission, you may expose yourself to a hazardous substance and either a) suffer no ill effects at all, or b) receive a useful fact from the referee about the substance’s effects, nature, or origin.',
    equipment: 'Gas mask (ignore breathing-based damage)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 314,
    description:
      'HEADSPACE: You walk softly among the myriad glimmering beauties and horrors of the subconscious mind made manifest. Once per mission, you (and anyone physically touching you) may leap into the subconscious of a thinking being and explore it as a physical space, complete with objects, flora, fauna, and in some cases enemies. Even the slightest alteration to this physicalized headspace can have rippling consequences on the gestalt consciousness above, so it is imperative that any psychonaut be deliberate and controlled during their expedition into thought.',
    equipment: 'Psycho-recorder (makes a mind backup tape, one use)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 315,
    description:
      'HEAVYWEIGHT: You can tear through most inanimate obstacles with ease. If it’s something really tough, like solid concrete or metal, it will be more difficult and complicated—the referee will explain how.',
    equipment: 'Break-action shotgun (1D6+1 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 316,
    description:
      'HENSHIN: Using your device, you can take on another form. This alternate form has 1D6 HP (reroll each time) and starts with one additional trait. If you reach 0 HP while transformed, you’re knocked out for a few minutes, revert to normal, and can’t transform again until the next mission.',
    equipment: 'Mystery device (wearable), -1 to ARMOR in normal form',
  },
  {
    index: 321,
    description:
      'HEX: You can place any being under a hex, depriving them of good luck. For as long as you hold someone in your web of tainted fate, something of your choice always goes wrong—guns always jam, vehicles always fail to start, etc. Until you break the hex, it applies to you as well.',
    equipment: 'Ritual dagger (1D6 DAMAGE, double vs. divine beings)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 322,
    description:
      'HIGHLANDER: When you kill someone important, you may gain a trait, but not the associated stat bonus or item, based on any special abilities they may have. The referee decides who is important.',
    equipment: 'Ancient longsword (1D6+1 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 323,
    description:
      'HIJACK: You can take control of any occupied vehicle and toss aside its operator without rolling the dice, as long as the operator is exposed. For closed and/or armored vehicles, the process of hijacking will be more difficult and complicated—the referee will tell you how.',
    equipment: 'Hotwiring kit (hotwire any inert vehicle, one use)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 324,
    description:
      'HOLY: You may be a god, an angel, a pious believer, or a power-drunk zealot—whatever your relationship is to the divine, choose a conceptual domain to which you belong (such as balance, love, or war). Once per mission, you may trace a holy circle upon the ground (ten feet in diameter), over which all things antithetical to your domain cannot cross. The referee has the final say on which things are truly antithetical, unless you spend one WAR DIE to preach over them.',
    equipment:
      'Bow of solid light (1D6+CRE DAMAGE), +1 DAMAGE vs. antithetical',
  },
  {
    index: 325,
    description:
      'HUNTER: You can track anything that leaves a trail, as though the ability were instinctual. When you find it, you can roll +TACTICAL to observe it without detection.',
    equipment: 'Compound bow (1D6 damage, silent)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 326,
    description:
      "HYBRID: You are genetically spliced with an animal of your choice. You gain +1 to an attribute that you and the referee agree makes sense for your animal (+1 FORCEFUL for a shark, +1 REFLEXIVE for a hummingbird, etc.). Animals of the same type will always see you as one of their own, and tend towards trusting anyone you're with. Unfortunately, all worn armor is 1 point less effective due to its incorrect fit.",
    equipment: 'Animal feed (+1D6 HP, one use), +1 to chosen attribute',
  },
  {
    index: 331,
    description:
      'HYPNOSIS: Your sustained state of self-hypnosis maximizes efficiency, but requires a suspended sense of self. Any time you do something risky while hypnotized, you can reroll one die (keeping lower results). If you muster any sentiment, your hypnosis ends for the rest of the mission.',
    equipment: 'Nutrient slurry (+2D6 HP, one use)',
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 332,
    description:
      'ICEBREAKER: You know how to get the party started. When you land the first strike in a fight, gain a WAR DIE and deal double DAMAGE. Take double DAMAGE whenever you are struck by an unexpected attack.',
    equipment: 'Tactical battleaxe (1D6+1 DAMAGE)',
    modifiers: { key: 'forceful', value: 2 },
  },
  {
    index: 333,
    description:
      "ILLUSION: If you're free to gesture, you can attempt to manipulate another person into hallucinating anything of your choice by rolling +CREATIVE. Rolling higher creates a more believable illusion, and illusions born of lower rolls may be influenced by the contents of the victim's psyche. ",
    equipment: 'Whip (1D6 DAMAGE)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 334,
    description:
      'IMPROVISE: You can improvise a weapon from two or more common objects to instantly kill a single enemy once per mission. You can always create this makeshift weapon discreetly and quickly, even while restrained or otherwise incapacitated, without rolling the dice.',
    equipment: 'Slingshot (3 DAMAGE)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 335,
    description:
      'INJECTION: You are addicted to an experimental serum that increases your combat ability. During combat, you can inject and deal double damage until the fight is won. Each time you inject, decrease your MAX HP by 3. At the end of a mission, your maxHP returns to its normal amount.',
    equipment: 'Automatic injection suit (2 ARMOR)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 336,
    description:
      'INSURANCE: When you take this trait, write your “will.” Your will may be modified, but only once per mission. If you die permanently, your traits (not including this one), skill modifiers (positive and negative), and items are distributed to other characters according to your will.',
    equipment:
      'Briefcase full of cash (a small fortune), +1 to chosen attribute',
  },
  {
    index: 341,
    description:
      'INTERROGATION: You can lock an unsuspecting enemy in a chokehold and ask them one question, which they will always answer truthfully before trying to escape.',
    equipment: 'Combat knife (1D6 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 342,
    description:
      'JANITOR: You can clean up any mess in minutes and always have the supplies on hand to do so. If someone interrupts your cleaning or makes the mess worse, you have +2 on DAMAGE rolls against them.',
    equipment: 'Mop (3 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 343,
    description:
      'JINX: Bad luck has followed you for your entire life. Once per mission, you can say “I feel like something really bad is about to happen” or an equivalent phrase, and it does. It will be bad for you and all nearby characters. The resulting catastrophe completely interrupts the scene and can cancel incoming damage, disorient enemies, etc.',
    equipment:
      'Mirror (break to reroll any roll and take the lower result), +1D6 maxHP',
  },
  {
    index: 344,
    description:
      'JOKER: You never take anything too seriously. If you choose to do something risky not because it is right or good, but because it would be funny (and everyone playing agrees), roll 3D6 and take the best two.',
    equipment: 'Joke pistol (shoots “BANG!” flag)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 345,
    description:
      'KNIGHT: You follow a strict code of honor and unquestioningly serve a powerful person or organization of your choice (note that FIST is not a powerful organization). You deal +1 DAMAGE if you have not yet broken your code of honor during a mission. Your role is irrelevant: you can only advance by increasing the wealth, power, or status of those you serve. Should your superiors die, your role becomes WANDERER.',
    equipment: 'Medieval helmet (1 ARMOR, accessory)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 346,
    description:
      'LIMBS: You have many appendages (additional arms, spider-like legs, tentacles, etc.) When you are attempting to catch something or grapple someone, roll twice and take the best result.',
    equipment: 'Many knives (1D6+1 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 351,
    description:
      'LIMIT: When pushed to the brink of your capacity for punishment, you unlock new wells of power. If you have already fulfilled your role during the course of a mission and your HP is equal to 1, you may immediately advance now, instead of when the mission ends.',
    equipment: 'Mercury-core executioner’s sword (1D6+FRC DAMAGE)',
    modifiers: { key: 'maxHP', value: 2 },
  },
  {
    index: 352,
    description:
      'LINK: Touching someone’s skin bonds their soul to yours. When you take damage, they take the same amount and vice versa. You may speak telepathically and share each other’s senses (one at a time).',
    equipment: 'Thick gloves (must be removed to establish link)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 353,
    description:
      'LISTEN: You have incredibly sensitive and specific hearing, but a tumultuous relationship with the rest of your senses. You may always perfectly eavesdrop on conversations, listen for tell-tale sounds, and approximate the locations of things you can’t see without rolling the dice, but loud noises, bright lights, strong smells, grating textures, and intense tastes all deal 1 DAMAGE when you are first exposed to them.',
    equipment: 'Blindfold (helps you focus)',
    modifiers: { key: 'reflexive', value: 2 },
  },
  {
    index: 354,
    description:
      'LOVER: If you and another player both have this trait, you can choose, together, to become lovers. If you rescued your lover from the brink of death during the mission, you both gain 1 WAR DIE at the end. There is no limit to how many lovers you can have, but if a lover of yours dies, your character can no longer gain new traits when advancing.',
    equipment:
      'Silver handgun (1D6 damage, double vs. undead), +1 ARMOR when protecting others',
  },
  {
    index: 355,
    description:
      'LUSH: You prefer to fight at least half in the bag. When you have some free time, you can tip back your liquor bottle and take +2 to your next FORCEFUL roll.',
    equipment: 'Liquor bottle (one use), +1 WAR DIE per mission',
  },
  {
    index: 356,
    description:
      'LYCANTHROPE: At night, you transform and gain the HYBRID trait (but not the associated item). If you have transformed during a mission, your role becomes irrelevant, and you can only advance by fulfilling a specific animal desire—roll 1D6 to let it wash over you (1-2: Challenge yourself as hunter or prey, 3-4: Consume the lifeforce of several human beings, 5-6: Stage a grand sacrifice to the gods of the Moon).',
    equipment: 'Handcuffs (titanium-reinforced), +6 maxHP in animal form',
  },
  {
    index: 361,
    description:
      'MASCOT: You are the beautifully fragile glue which bolsters the team’s spirit and binds them together. Your maxHP is irrelevant—for the purposes of play, it is always equal to 1. As long as you are alive, your remaining maxHP is divided as evenly as possible and added onto the maxHP of every other player (e.g. a 6 maxHP MASCOT in a four-player team grants 1, 2, and 2 maxHP to the other three players).',
    equipment: 'Extravagant costume (draws enemy fire)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 362,
    description:
      'MECHANIC: With a reasonable amount of prep time, you can use your toolbox to repair any machine for 1D6+TACTICAL HP.',
    equipment: 'Toolbox (repair 1D6+TAC HP, three uses)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 363,
    description:
      'MEDIC: With a reasonable amount of prep time, you can use your medkit to heal any ailment. For other healing items, add your TAC to the HP regained.',
    equipment: 'Medkit (heal 1D6+TAC HP, three uses)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 364,
    description:
      'MERCY: When you would deal a killing blow to a non-player character, you may choose to instead approach them, help them up, and show them mercy. Characters who have been shown your mercy can never take DAMAGE again, and will always treat you (but not necessarily anyone else) as a trustworthy and reliable friend.',
    equipment: 'Halo (make someone change their ways, one use)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 365,
    description:
      'MIMIC: You can shapeshift, but only into inanimate objects. Once per mission, you may transform into a single item no larger than a car. If you transform into a tool, machine, etc., you are fully functional and may be used as such by others.',
    equipment: 'Varnish (+1D6 HP while mimic, one use)',
    modifiers: { key: 'maxHP', value: 2 },
  },
  {
    index: 366,
    description:
      'MINDREADER: You can read anyone’s thoughts and general state of mind without rolling. You may roll +CREATIVE to scan for specific information, such as names, passwords, memories, and images. Unfortunately, you are particularly susceptible to interference, and the thoughts of others often cloud your psyche. Your mindreading ability is neutralized in the presence of another mindreader, and vice versa.',
    equipment: 'X-ray specs (see through walls)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 411,
    description:
      "MOBILITY: Your customized mobility aid (e.g. a titanium cane with spring-loaded feet, or a wheelchair with adaptive tank treads) is tricked out with additional gadgets and features. Choose one of the following add-ons, active when you're using the aid: 1) +1 to an attribute of your choice, 2) an always-concealable weapon that deals 1D6 DAMAGE, or 3) +1 to your ARMOR. If you roll the dice to do something risky that would normally involve your mobility aid, but you don't have access to it, roll 3D6 and take the worst two. When you advance, you can get another add-on instead of taking one of the usual advancement rewards. ",
    equipment: 'Mobility aid (comes with an add-on)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 412,
    description:
      'MOMENTUM: You are able to enter a state of cumulative momentum at will, harnessing inertia to your advantage. Each time you succeed on a REFLEXIVE roll, gain +1 REFLEXIVE. This bonus accumulates until you stop moving, at which point your REFLEXIVE attribute reverts back to normal. Rolling a failure with a cumulative bonus from this trait will incur DAMAGE equal to the bonus, and cause you to stop moving.',
    equipment: 'Rail-grinding boots (grind on any edge)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 413,
    description:
      'MONOLOGUE: When you give an impassioned ethical, political, or philosophical speech, roll +CREATIVE. On a partial success, you engage your target in the melodramatic speech, temporarily distracting them. On a full success, they see your line of reasoning and make an effort to join your school of thought.',
    equipment: 'Yorick’s skull prop (very realistic)',
    modifiers: { key: 'creative', value: 2 },
  },
  {
    index: 414,
    description:
      "MONSTERS: Once per mission, you may use your computerized monster index to summon and command a monster from the barcode of any real-life object you have with you. Arrange the numbers in the barcode from lowest to highest and derive your monster's stats as follows: DAMAGE equal to 1D6 + the lowest number, HP equal to the highest number, and ARMOR equal to the middle number (if there are two, split the difference and round down). State and record the monster's appearance and name, and work out a special power with the referee that reflects the origin object (e.g. belches of flame from a bottle of hot sauce or answering any one question from a library card). ",
    equipment: 'Monster index (hold aloft to summon a monster)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 415,
    description:
      'MORBID: You have some kind of relationship with death. Describe how, and what form death takes. If you or another character dies, you can call death to your side. Death will give you some task or challenge and a time limit, then the dead character is healed by 1D6. If you don’t complete the task within the time limit, death takes you both.',
    equipment: 'Gifted scythe (2D6 DAMAGE)',
    modifiers: { key: 'maxHP', value: -2 },
  },
  {
    index: 416,
    description:
      'MURDER: You’re followed by a heckling murder of crows that spout various ominous phrases (some helpful). The crows circle when someone is soon to die, foreshadowing danger. You may command the crows to circle around an enemy, who takes +1 DAMAGE from all sources until the crows get bored and leave.',
    equipment: 'Birdseed (guarantee a helpful omen, one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 421,
    description:
      'MUTANT: You are a picture of evolution in microcosm, always changing form as your unstable genome shifts. At the beginning of each mission, roll 1D6. On a 4+, drop any one trait you already have (except MUTANT), and permanently replace it with another, recalculating your attributes.',
    equipment: 'Toxic grenade (1D6+2 damage, one use)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 422,
    description:
      'NEUROMANCER: Given a few hours in a quiet place, you can remove brains from their bodies and put them in new ones. Body transplantation is not a perfect science, and those who have undergone the process may not always come back the same.',
    equipment: 'Brain jar (keeps one brain alive)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 423,
    description:
      'NINJA: Due to your training in the dark arts of subterfuge, any acrobatic or athletic action you take will always be completely silent, even when you roll failures. You may choose your current ninja weapon at the beginning of each mission: shuriken (1D6 DAMAGE), kunai (3 DAMAGE, usable for climbing), or smoke bomb (temporarily disorient 1D6 targets).',
    equipment: 'Ninja weapon (six uses)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 424,
    description:
      'NOIR: You’re from the old days, when crime ran the streets, the cigarettes were plentiful, and hard work meant something. You gain +1 on rolls you provide an appropriate monologue for.',
    equipment: 'Trench coat (1 ARMOR)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 425,
    description:
      'NUMBERS: All numbers have meaning. At the beginning of each mission, roll 1D6. Once per mission, you may replace any number with the number rolled. This can be another roll (such as damage) or a number-based fact spoken by the referee (five enemies, ten days, six stars, etc.)',
    equipment: 'Sudoku workbook (keep someone occupied, one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 426,
    description:
      'OBJECTS: You may attack with any non-weapon object within reach—if you describe a unique, creative way of causing harm with this object, it functions as a weapon which deals 1D6 DAMAGE. Subsequent objects you attack with add a cumulative +1 DAMAGE bonus per new object; this cumulative bonus resets to 0 when you roll a failure, reuse an attack description, or switch to a conventional weapon.',
    equipment: 'Leather belt (3 DAMAGE)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 431,
    description:
      'OOZE: You can transform into a gelatinous substance at will. While in your gelatinous form, you have -2 REFLEXIVE and -2 FORCEFUL, but you can squeeze through grates, fit inside containers, and split into pieces.',
    equipment: 'Bucket (5 gallon)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 432,
    description:
      'PAINLESS: You cannot feel pain, and being hurt will never cause you to flinch or stop what you’re doing. At the beginning of each mission, the referee will roll 1D6 and keep the result hidden from you. The first time you reach 0 HP during the mission, you will regain HP equal to the result.',
    equipment: 'Wrist and ankle weights (1 ARMOR, accessory)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 433,
    description:
      'PARKOUR: You can easily swing, jump, and free-run across rooftops and rafters without rolling the dice. If it’s something really precarious, like barrels floating in toxic waste or a rope bridge full of people shooting at you, you can still do it, but you’ll drop one of your items in an inconvenient spot—the referee decides what, and where.',
    equipment: 'Baseball bat (1D6 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 434,
    description:
      'PATHETIC: You are entirely unintimidating and almost universally pitied. Enemies often underestimate you. Once per mission, before you take damage, you may look into an enemy’s eyes and nullify it.',
    equipment: 'Box of tissues (hides a pistol inside, 1D6 DAMAGE)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 435,
    description:
      "PET: You have a small pet (1-3 HP, referee's choice) which you always keep on your person—perhaps in a shirt pocket, on your shoulder, or leashed to your belt. Describe your pet and choose a bonus for them: 1) grants 1 ARMOR and functions as an accessory, 2) grants +1 to an attribute of your choice for a single roll when fed a treat, 3) deals 3 DAMAGE to an enemy when fed a treat. If your pet dies, you can start the next mission with a new one, but not with the same bonus as before. ",
    equipment: 'Pet treats (three uses)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 436,
    description:
      'PHONE: You may make telepathic “calls” to anyone regardless of time, distance, or interdimensional status—these calls may be routed through local telephones and radios, or may simply appear as a disembodied voice. Those you call are not guaranteed to answer. Sometimes, you’ll receive calls you’d prefer not to.',
    equipment: 'Rolodex (3 strange and important people are listed)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 441,
    description:
      "PIRATE: You're a free spirit who prefers a life of spontaneous adventure on the high seas. Whenever you roll the dice to do something risky involving the ocean, stealing, or taking over a crewed vessel, roll 3D6 and take the best two. ",
    equipment: 'Illegally modified LMG (1D6+2 DAMAGE)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 442,
    description:
      'POCKET: You can fit pretty much anything into your personal pocket dimension (and retrieve it at will) as long as you are not restrained or particularly distracted. Your pocket-space might be accessed through a bottomless bag, a door that follows you between rooms, or a wormhole you can summon with a wish.',
    equipment: 'Refrigerator (well-stocked)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 443,
    description:
      'POLYGLOT: You can understand and communicate in any mundane language, written or verbal. You can also roll +TACTICAL to understand languages which are supernatural in origin.',
    equipment: 'Universal phrasebook (can teach anyone one phrase)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 444,
    description:
      "PRECOGNITION: Once per mission, before you roll the dice to do something risky, you may declare a state of precognition—have everyone mark down where they are, their HP and items, and any other useful notes to capture the current situation. Roll the dice and continue play as normal. Next time you're prompted to roll the dice, decide if what's happened was your destined path, or in fact a mere possible future—if so, rewind the story using everyone's notes, keeping in mind that small distortions in reality are a normal consequence of precognitive radiation. ",
    equipment: 'Stopwatch (waterproof)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 445,
    description:
      'PREPPER: You are perpetually awaiting the moment when the world goes to shit. When each mission starts, choose a specific survival skill you’ve been practicing (e.g. knot-tying, finding water, or securing shelter). Add +2 whenever you roll the dice to do something risky involving your current survival skill, and gain an additional +1 HP whenever you heal from eating MREs or other non-perishables.',
    equipment: 'Hatchet (3 DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 446,
    description:
      'PROJECTION: You can project your spirit from your body to access any faraway place remotely, as long as your physical body is safe. You can also cheat death and keep 1 HP once per mission by abandoning your body, but you will be stuck in spirit form until it gets medical attention.',
    equipment: 'Flowing garment (1 ARMOR)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 451,
    description:
      'PROSTHETIC: One of your limbs is replaced with any weapon you own, and you can equip another weapon to use. When you roll the maximum damage possible with an equipped weapon, you can roll damage again with your limb-weapon for an extra powerful combo attack.',
    equipment: 'Light machine gun (1D6+1 DAMAGE)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 452,
    description:
      'PSYCHOMETRY: Once per mission, you can ask any inanimate object you are touching a psychic question. Objects will answer truthfully, but are limited by their experience—a photograph cannot comprehend the passage of time, and a gun can only think in terms of killing.',
    equipment: 'Scrapbook (contains one mission-relevant photo)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 453,
    description:
      'PUNCTUAL: You always know what time it is, down to the second. When you need to get to a time-sensitive event, appointment, or meeting, you will always get there in the nick of time. If arriving on time is particularly unlikely, the referee will tell you in what way you are unprepared for it when you get there.',
    equipment: 'Gold stopwatch (always works)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 454,
    description:
      'PUPPETMASTER: You can implant a command in someone’s brain by rolling the dice +FORCEFUL. If you succeed, they are forced to comply.',
    equipment: 'Strappy leather harness (1 ARMOR)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 455,
    description:
      'PYROMANIAC: If there is something flammable nearby, you can always ignite it, but the fire will uncontrollably spread somewhere inconvenient— the referee will tell you where.',
    equipment: 'Flamethrower (1D6+2 DAMAGE)',
    modifiers: { key: 'forceful', value: 2 },
  },
  {
    index: 456,
    description:
      'QUANTUM: If another player’s character dies, you may rewind time to shortly before their death and permanently swap characters with them, giving you a second chance to save their life. Swapping back into a body you’ve inhabited before kills the one you’re leaving.',
    equipment: 'Quantum stabilizer suit (2 ARMOR)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 461,
    description:
      'QUILLS: You are covered in quills, spines, or thorns. When an enemy deals damage to you in melee combat, they take 1 DAMAGE in return. In addition, you may shoot the spines out of your body for 1D6 DAMAGE to everyone in the area, though you’ll need a day to grow them back.',
    equipment: 'Ripped jacket (1 ARMOR)',
    modifiers: { key: 'maxHP', value: 2 },
  },
  {
    index: 462,
    description:
      'RADIOACTIVE: When you aren’t wearing your treated bandages, radiation bursts forth from your body and deals 2D6 DAMAGE to anyone near you. When this occurs, you may attempt to direct the attack at a single target by rolling +FORCEFUL. After the damage is dealt, the radiation temporarily dissipates, but you will quickly waste away and die if your treated bandages are not reapplied.',
    equipment: 'Treated bandages (accessory)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 463,
    description:
      'RAGE: Whenever you do something risky that’s loud, bloody, and violent, roll 3D6 and take the best two. Any other time you do something risky, roll 3D6 and take the worst two. Enemies who you hurt have a 1 in 6 chance of immediately attempting to flee the scene.',
    equipment: 'Ultra-shotgun (2D6 DAMAGE)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 464,
    description:
      'RECRUIT: If you bring an unconscious enemy back to base with you at the end of a mission, you may take them with you on future missions as another character you control. Recruits retain their currently equipped weapon and armor and may have up to one trait, decided by the referee. Recruits start with 1D6 maxHP and gain 3 maxHP for each mission they complete alongside you.',
    equipment: 'Tranq pistol (0 DAMAGE, 3-in-1D6 chance to knockout)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 465,
    description:
      'RELOAD: When you’re about to attack with a ranged weapon, you can choose to dig in your heels, slam in another mag, and unload a whole clip. You will deal double DAMAGE, but any damage you take until finding cover will also be doubled.',
    equipment: 'Grenade (1D6 DAMAGE, one use)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 466,
    description:
      'RETREAT: You have a place in your head (a cozy cabin, a crystal palace, a concrete cell, etc.) that you can manifest physically. Once per mission, you may roll +CREATIVE to transport yourself and up to four other people there. The specifics of the retreat may be changed at will, resting there heals 1D6 HP, and you or your guests may leave at any time.',
    equipment: 'Polaroid camera (for memories)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 511,
    description:
      'RIVAL: Choose any other player to be your rival. Each time you spectacularly one-up or humiliate your rival, heal 1D6 HP. If your rival thoroughly one-ups you, you lose any WAR DICE you have. When you take this trait, you gain a new aesthetic feature, like a streak of dyed hair, an eyepatch, or a cool scar.',
    equipment: 'Carbine (1D6 DAMAGE), +1 DAMAGE when showing off',
  },
  {
    index: 512,
    description:
      'ROBOT: You are a man-made automaton bound by your rigid programming. When you take this trait, select another player to be your programmer (or allow all of the players to program you democratically). When a mission begins, your programmer(s) should define a three-word core directive for you to follow, such as “ELIMINATE ALL HOSTILES," “SEARCH NEW AREAS," or “PROTECT THE TEAM." Your programmer(s) should also select a broad concept which “does not compute," such as love, music, or peace. When you roll the dice to do something risky while acting on your core directive, roll 3D6 and take the best two. When you are exposed to something which does not compute, drop what you\'re doing and shut down for ten minutes, or take 1D6 DAMAGE.',
    equipment: 'Laser rifle (1D6+1 DAMAGE)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 513,
    description:
      'RUNNER: You possess ultrahuman speed. Once per mission, you may outpace someone or something. If it’s something really fast, like a hunting cheetah or a flying bullet, there will be a complication from over-exertion—the referee will tell you what.',
    equipment: 'Experimental sneakers (indestructible)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 514,
    description:
      'SAWBONES: You’re a doctor, but you don’t have a medical license. Once per mission, when a player character dies, you can roll +CREATIVE to perform surgery and resurrect them with full health. You must swap out one of their traits for a new one as part of your experimental surgery, and explain why your operation changed their trait.',
    equipment: 'Bone saw (1D6+1 DAMAGE)',
    modifiers: { key: 'maxHP', value: -2 },
  },
  {
    index: 515,
    description:
      "SCAVENGER: You understand that everything can be repurposed and that nothing need go to waste. If the referee narrates that you've run out of a finite resource (like ammo, medicine, or food), you may spend a WAR DIE and roll it to negate the referee and reveal your backup reserves, equal to the result rolled (e.g. 2 clips of ammo, 4 doses of antivenom, or 6 MREs). You always gain a WAR DIE at rendezvous points. ",
    equipment: 'Semi-automatic rifle (1D6+1 DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 516,
    description:
      'SCOUT: You always get the lay of the land before starting a mission. You can find a good vantage point or hiding place anywhere, any time. The referee will always tell you about ambushes and hidden traps.',
    equipment: 'Ghillie suit (disguise self as plant)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 521,
    description:
      'SEAL: You are a living lock for the cage of something horrible (you don’t know what). You have complex tattoos and carvings across your entire body. If you die before the appointed time (also unknown), you release whatever you’re holding back into the world.',
    equipment: 'Wards and charms (accessory)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 522,
    description:
      'SECURITY: If you have a reasonable amount of prep time and the coast is clear, you can use your anti-security kit and attempt to breach any lock or crack any safe by rolling +REFLEXIVE. You may also disarm traps you know about and can physically reach by rolling +TACTICAL.',
    equipment: 'Anti-security kit (three uses)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 523,
    description:
      "SEDUCE: When someone wants to get with you, you can fade to black and get with them too. After you return from a nearby private retreat, roll +CREATIVE and choose one result on a partial success, or two on a full success: they want to help you, they trust you with their secrets, or they want to get with you again. On a failure, you're old news, and they'll dislike your company from now on. ",
    equipment: 'Little black dress (0 ARMOR, stand out anywhere)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 524,
    description:
      'SEER: When you have a moment of peace and quiet, you may read your divination tool (perhaps a deck of playing cards or a set of polyhedral dice) and roll +CREATIVE. If you succeed, the referee will answer one question about the current mission honestly. If it’s a partial success, they’ll answer vaguely. A failure brings a grim and terrible omen.',
    equipment: 'Divination tool',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 525,
    description:
      'SEXY: You’re so hot, and everyone knows it, you most of all. When you’re wearing your fetching outfit, you can stun another person with your beauty without rolling the dice. If you take damage in the outfit, you have to stay out of the fight until it’s over to attend to chipped nails, untucked shirts, and messed up hairdos.',
    equipment: 'Fetching outfit (0 ARMOR)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 526,
    description:
      'SHARPSHOOTER: If you name a specific body part, possession, or component of something you’re attacking with a ranged weapon, you will always hit it, temporarily disabling that part but dealing 0 DAMAGE.',
    equipment: 'Revolver (1D6+1 DAMAGE)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 531,
    description:
      'SHIELD: You can use any shield as a weapon which bashes enemies for 1D6 DAMAGE plus the shield’s ARMOR bonus. If you throw the shield as a ranged weapon, you can roll +REFLEXIVE to ricochet it back to you.',
    equipment: 'Combat shield (0 ARMOR, accessory)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 532,
    description:
      'SHOW: Your performance art (perhaps music, dance, acrobatics, or comedy) has inexplicable mind-altering effects on its audience. While performing, choose one of the following: your allies have +1 to an attribute of your choice, enemies are dazed (they deal -1 DAMAGE), or one enemy gives in to fun. You take -1 to any rolls made while performing.',
    equipment: 'Performing accoutrement (e.g. instrument, baton, mic)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 533,
    description:
      "SHRINK: Your unique atomic structure allows you to compress yourself down to a millimeter tall without rolling the dice. If you go smaller, you must roll +TACTICAL to avoid slipping through a hole in the quantum foam. Those who slip through the foam suffer mind-bending consequences, like becoming marooned or losing their sense of time (referee's call). ",
    equipment: 'Stainless steel syringe (contains a miniature submarine)',
    modifiers: { key: 'maxHP', value: 2 },
  },
  {
    index: 534,
    description:
      'SKELETON: You have no flesh—explain why. You have 2 ARMOR against weapons that pierce or slash, and take +1 DAMAGE from weapons that bludgeon. If you reach 0 HP but all your bones are intact, you may rise with 1 HP after someone else completely reassembles you.',
    equipment: 'Ownerless femur (1D6 DAMAGE)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 535,
    description:
      'SLACKER: You abide by the universe in all things and appreciate simple pleasures. In addition to the single rendezvous point all player characters can use, you may always access an additional, second rendezvous point which is typically easy to reach and additionally contains snacks, substances, a hammock, or similar amenities.',
    equipment: 'Shabby clothes (0 ARMOR, always unthreatening)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 536,
    description:
      'SLEEPER: Your personality is but a programmed front to hide the dormant sleeper agent beneath (or maybe it’s the other way around). When you take this trait, everyone at the table but you should come to a consensus on what your activation phrase is (like “the woman in white walks backwards through Prague,” or “Epsilon orange Manila seventeen”). Once it’s decided, write it down, and create a new, second FIST character who shares none of your traits—this is your sleeper persona (if you have already advanced, advance the persona an equal number of times, but do not choose the same advancement options). Any time you hear your activation phrase, you swap between personas, but the items in your inventory do not change to match your traits until you start a new mission.',
    equipment: 'Tape recorder (plays activation phrase)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 541,
    description:
      'SLOW-MO: You may slow time to a crawl (at a 1-to-1 seconds-to-minutes ratio) at will, turning volleys of gunfire into glittering armadas of hot lead ships. Doing so costs you 1 HP for every second of time you slow. Slow-time affects your actions and physical processes but does not change the speed of your thoughts, giving you lightning-fast cognition relative to those around you. During slowed time, your REFLEXIVE score is increased by 4.',
    equipment: 'Machine pistol (1D6 DAMAGE)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 542,
    description:
      'SMASH: You break things. You deal +1 DAMAGE against any man-made construct, and another +1 DAMAGE against anything that is grossly expensive or has exquisitely fragile components.',
    equipment: 'Sledgehammer (1D6+1 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 543,
    description:
      'SMITH: You may deploy your portable workbench once per mission to add a new effect to an existing weapon (you can choose a premade weapon tag or negotiate a custom effect with the referee). The effect will be successfully added if you leave the weapon at the workbench, acquire three integral but difficult-to-reach components, and return to combine the components and weapon. The referee will tell you what and where the components are; they are usually scattered throughout the mission area. You may also employ a similar process of deploying your workbench and collecting materials to forge new pieces of armor.',
    equipment: 'Portable workbench (one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 544,
    description:
      'SMOKER: You are addicted to nicotine. When you have some downtime, you can calm your nerves with a cigarette and take +2 to your next REFLEXIVE roll.',
    equipment: 'Cigarette case (one use), +1 WAR DIE per mission',
  },
  {
    index: 545,
    description:
      'SNATCHER: You are an alien poorly puppeteering a technically dead human body, with a killing touch. If you do not consume one human brain without anyone finding out once per mission, you will melt into a puddle and die.',
    equipment: "Poison fingertips (2D6 damage, don't count as equipped)",
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 546,
    description:
      'SNEAK: If you hold still in a good hiding spot, no one will detect you until you make your presence known. You can also easily fit into small containers like barrels and cardboard boxes.',
    equipment: 'Sneaking suit (1 ARMOR)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 551,
    description:
      'SNIPER: If you have prep time, the enemy is unaware of your presence, and you remain stationary, you can roll 3D6 to attack and use the best two dice. If you succeed, you deal the maximum possible DAMAGE for your weapon.',
    equipment: 'Sniper rifle (1D6+2 DAMAGE), +1 DAMAGE with ranged weapons',
  },
  {
    index: 552,
    description:
      'SOAK: You know how to grin and bear it. When you take damage, you may roll a WAR DIE and subtract that much from the DAMAGE taken. You may also apply this effect to anyone standing immediately behind you.',
    equipment: 'Kinetic shock shield (2 ARMOR, equip as weapon)',
    modifiers: { key: 'reflexive', value: -2 },
  },
  {
    index: 553,
    description:
      'SOCIAL: You have a likable personality and a familiar face. Take +1 to your roll whenever you do something risky that involves a social interaction.',
    equipment: 'Cyanide pill (one use)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 554,
    description:
      'SPY: You are a dashing and clever international person of mystery. Major antagonists tend to behave in contrived and theatrical ways around you. If you are captured, you may ask the referee to give you an easy opportunity to escape and they will give it to you.',
    equipment: 'Laser watch (3 DAMAGE, can cut any restraints)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 555,
    description:
      'STAND: You command a flamboyant spirit with its own trait, tangible only to you but able to affect the corporeal world. Roll a random trait for your stand (D666) and choose a hyper-specific additional bonus, like “can be used twice per mission if my blood is removed and replaced” or “deals double DAMAGE if the target is left-handed.” Everyone else at the table should democratically decide on a hyper-specific condition or downside, such as “can only be used when Mercury is in retrograde” or “causes a random bone in the user’s body to break when used.”',
    equipment: 'Stand (immortal and invisible)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 556,
    description:
      'STATIC: You can enter and travel between electronic screens of any kind as long as the screen isn’t too “busy” (plain backgrounds and static work best).',
    equipment: 'Chaff grenade (disables electronics, one use)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 561,
    description:
      'STATUESQUE: You’re made of something hard (stone, metal, gems, etc.) Once per mission, you can reflect any projectile back at the attacker. If you are also wearing armor, decrease your REFLEXIVE score by 2.',
    equipment: "Tough exterior (2 ARMOR, doesn't count as equipped)",
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 562,
    description:
      'STICKY: You can secrete a sticky substance from your body which dries in seconds and is comparable in strength to the most powerful mundane adhesives. It can only be dissolved with a common substance of your choice (water, alcohol, blood, etc.)',
    equipment: 'Flask of dissolving fluid (8 ounces)',
    modifiers: { key: 'reflexive', value: -1 },
  },
  {
    index: 563,
    description:
      'STONER: You function much better while high. When you have the time, you can enjoy your favorite strain using any method of your choice. State the name of the strain (e.g. “Green Giant" or “Nuclear Winter"), and choose a bonus: +1D6 HP, or +2 to your next roll.',
    equipment: 'Personal stash (one use), +1 WAR DIE per mission',
  },
  {
    index: 564,
    description:
      'STRETCH: You can stretch any of your limbs to a length of ten feet × your maxHP by rolling the dice +REFLEXIVE. Stretched out limbs can be pushed even further, but will incur 1 DAMAGE for every additional ten feet of stretch. You take +1 DAMAGE when enemies specifically target stretched-out limbs.',
    equipment: 'Elastic bodysuit (0 ARMOR, up to 1000 sq. ft. of fabric)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 565,
    description:
      "STUBBORN: You're one tough son of a bitch, and not even God can keep you down for long. When you roll a failure and the referee narrates what happens next, you can spend a WAR DIE and declare that it doesn't, forcing the referee to narrate an entirely different failure outcome instead. ",
    equipment: 'Special cigar (+1D6 HP, one use)',
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 566,
    description:
      'SUMMONER: You know the deepest, truest names of two phantasmagoric entities (demons, elementals, Platonic ideals, etc.) and their domains of power (such as grief, fire, or logic). You can summon them via fire-circle with ten minutes of unbroken ritual, or instantly by spending a WAR DIE. Each of these spirits will carry out a single magical command related to their domain of power before vanishing, and tend towards bad-faith or misguided interpretations of vaguely worded instructions. Magical attacks from summoned spirits deal 2D6 DAMAGE, and double DAMAGE if their domain is well-suited to the attack (like fire against ice, or silver against werewolves). When you advance, you may add another spirit to your roster instead of taking one of the usual advancement rewards.',
    equipment: "Box of tea lights (one circle's worth, one use)",
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 611,
    description:
      'SUNDER: Using your psionic powers, you may sunder the mind of anyone you presently perceive, dealing 1D6 DAMAGE which ignores ARMOR. You may roll additional six-sided dice and add them to the total DAMAGE at will. Opening a psionic channel strains your body (perhaps causing nosebleeds, shaking, or confusion), and you will always take DAMAGE equal to half of what you deal, rounded down.',
    equipment: 'Grippy socks (prevent you from slipping)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 612,
    description:
      'SUPPLY: You know secret frequencies and can use your radio to get any item delivered in a pinch; however, there will be a catch, like an inconvenient pickup spot or a fault with the item—the referee decides.',
    equipment: 'Supply radio (three uses)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 613,
    description:
      'SURVEILLANCE: You can install your camera drone somewhere stationary and surveil without detection. You can also keep it mobile and control it at will, but it will be exposed to enemy attacks.',
    equipment: 'Camera drone (1 HP, one use)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 614,
    description:
      'SYMBIOTE: You’re bonded to a violent symbiotic lifeform with whom you share a tumultuous and intimate relationship. The constant commentary by a chorus of alien voices makes it difficult to hold on to your thoughts or focus on tasks. Your role is irrelevant—you can only advance by following the whims of the creature (roll D6, 1-2: Trust no one, not even for a moment, 3-4: Destroy something important, 5-6: Backstab a teammate before they backstab you).',
    equipment: 'In-vivo symbiote (+2 ARMOR vs. attacks from behind)',
    modifiers: { key: 'tactical', value: -1 },
  },
  {
    index: 615,
    description:
      'SYNTHETIC: You are a human-like android. Your positronic brain can make thousands of calculations per second, and you never have to roll the dice for tasks like solving equations and calculating trajectories. You take 1D6 DAMAGE when your innards are exposed to water.',
    equipment: 'Infantry-scale railgun (1D6+2 DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 616,
    description:
      'TACTICIAN: If you explain an elaborate plan of action to the team, all partial success rolls count as total success rolls while the plan is being executed—until someone rolls a failure, at which point the plan falls apart catastrophically.',
    equipment: 'Night vision goggles (can see at night)',
    modifiers: { key: 'tactical', value: 2 },
  },
  {
    index: 621,
    description:
      'TEACHER: You are a wise mentor who fosters an inquisitive and confident attitude in your pupils. You can take on any player as a pupil—they can ask the referee for one useful fact of any type, once per mission. When you complete a mission, lose 1D6 maxHP if you did not have a teachable moment with every pupil.',
    equipment: 'Pins and medals (command respect)',
    modifiers: { key: 'tactical', value: 2 },
  },
  {
    index: 622,
    description:
      'TECHNIQUE: Your special technique targets a series of critical pressure points. When you would deal DAMAGE, you can choose to roll 2D6 and execute your technique instead—on a 9 or below, you deal no damage. If you roll 10 or more, the victim instantly dies.',
    equipment: 'Tattered gi (1 ARMOR)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 623,
    description:
      'TELEKINETIC: You have telekinetic control over a single substance of your choice—it could be something simple like water or metal, or something more esoteric like blood or flies. You have a unique talisman, such as a mask or a pendant, through which you channel your power. If this psychic amplifier is damaged or lost, you are no longer telekinetic until you repair or replace it.',
    equipment: 'Psychic amplifier (accessory)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 624,
    description:
      'TELEPORT: You can teleport yourself (and any items you are wearing or holding) to a safe location at will, but not directly through opaque objects. If you want to teleport under fire, through an object, or beyond the immediate perceivable area, roll +TACTICAL to avoid accidents.',
    equipment: 'Flare gun (1D6 DAMAGE)',
    modifiers: { key: 'reflexive', value: 2 },
  },
  {
    index: 625,
    description:
      'THEATRICS: You command attention. When you enter a room, everyone inside is guaranteed to look at you. When you’re trying to cause a distraction, partial successes count as full successes.',
    equipment: 'Sweeping cape (1 ARMOR, accessory)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 626,
    description:
      'THIEF: You may roll +REFLEXIVE to teleport an object you can perceive into your possession. On a failure, you take something else as well—the referee will tell you what.',
    equipment: 'Smoke grenade (one use)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 631,
    description:
      'THRALL: You are bound to an anomalous artifact, a weapon which drives you to commit evil. When you start a mission, roll 1D6 to receive its command (1-2: Make a good person suffer. 3-4: Spread chaos and permanent destruction. 5-6: Sabotage your teammates). Your role is irrelevant—you can only advance if you have completed this task. All damage dealt with your anomalous weapon is increased +1D6.',
    equipment: 'Anomalous weapon (choose any)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 632,
    description:
      'TRAPS: You are an expert in the art of trapping and misdirection. Whenever you create or set a trap (e.g. covering a hole with leaves or wiring a grenade to a doorknob), you may declare that one passing enemy who is completely unaware of you becomes hurt or ensnared.',
    equipment: 'Claymore mine (2D6 DAMAGE, one use)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 633,
    description:
      'TRIPPER: You are a psychedelics enthusiast. When you have some time to unwind, you can drop a tab to expand your consciousness and take +2 to your next CREATIVE roll.',
    equipment: 'Acid tab (one use), +1 WAR DIE per mission',
  },
  {
    index: 634,
    description:
      'TRUTH: Through rigorous meditation and study of the natural world, you have determined that your reality is merely a consensus illusion enjoyed by beings from a “realer" reality as a leisurely game. Once per session, if you have a completely serene moment to achieve lucidity, you may speak through your “player" and contact the “referee" with requests for assistance (such as HP, items, or the sudden death of your enemies). Keep in mind that even if you are able to appeal to the referee\'s guilt or curiosity to get what you want, overuse of this power may see you branded “broken," “gimmicky," or “unfair" by the higher beings, spelling the end of your existence as a playable character.',
    equipment: 'Copy of FIST: Ultra Edition',
    modifiers: { key: 'creative', value: 2 },
  },
  {
    index: 635,
    description:
      'TURNCOAT: At one point, you belonged to an enemy faction of your choice. You no longer serve them. When you run up against this faction, the referee will tell you something tactically important about them.',
    equipment: 'Enemy uniform (1 ARMOR, blend in with faction)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 636,
    description:
      "TURRET: You have a portable mini-turret which can be deployed on any flat surface without rolling the dice. If it's somewhere difficult like a ceiling or dangerous outcropping, placing it will be more difficult and arduous—the referee will tell you how. Your mini-turret begins with 3 maxHP and 1 ARMOR, but you may increase its HP by 1D6 or its ARMOR by 1 as an alternative reward when you advance. Whenever you or one of your allies successfully deal DAMAGE, you may command the turret to deal DAMAGE as well to any unobstructed target in the combat scene. ",
    equipment: 'Mini-turret (1D6+TAC DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 641,
    description:
      'UNARMED: You are skilled in general unarmed self-defense, as well as one or more styles of martial art. You can silently knock any enemy unconscious, but they might make noise on the way down, or wake up at an inconvenient time—the referee will tell you the downside.',
    equipment: 'Hand wraps (3 DAMAGE)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 642,
    description:
      'UNDEAD: That which should kill you only makes your rotting flesh weaker. When you would die, lower all of your attributes by 1 and revive next mission with full health. Each time this happens, you gain a new aesthetic quirk, like bolts in your neck or stitched-together skin. You may still die voluntarily.',
    equipment: 'Full-body bandages (1 ARMOR)',
    modifiers: { key: 'creative', value: -2 },
  },
  {
    index: 643,
    description:
      "UNFEELING: You experience no emotional interoception, and must rely on some other rationale to motivate your decisions under pressure. When you would roll CREATIVE to deal with something emotional, you may describe how you're using a different attribute and roll using that instead, adding your inverted CREATIVE score on top (e.g. +1 if you have -1 CRE, or -2 if you have +2 CRE). ",
    equipment: 'Brain teaser puzzle (e.g. Rubik’s cube)',
    modifiers: { key: 'creative', value: -1 },
  },
  {
    index: 644,
    description:
      'VAMPIRE: You are pale and shadowy, starved for blood. If you have recently fed on a new victim, your next roll will be one degree of success higher. If you are currently exposed to sunlight, all your rolls will be one degree of success lower.',
    equipment: 'Gothic amulet (used to turn into a bat and back)',
    modifiers: { key: 'forceful', value: -2 },
  },
  {
    index: 645,
    description:
      'VEHICLE: You have a customized civilian vehicle of your choice. It could be a common vehicle like a motorcycle or pickup truck; it could be something unique like a snowmobile or horse. You can permanently mount any of your weapons on the vehicle, for yourself and for secondary gunners. You can also permanently scrap any armor you have and add it to your vehicle’s armor rating. At 0 HP, the vehicle is unusable, but you can repair 1D6 HP between missions.',
    equipment: "Signature vehicle (player's choice of type)",
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 646,
    description:
      'VENOMOUS: You can excrete a substance (perhaps as spit, or from your skin) that corrodes most materials and is fatal if ingested. Doing so is unpleasant and strenuous, and pushing out large amounts (i.e. more than a few drops, or a thin coating on a surface) will cost you 3 HP.',
    equipment: 'Indestructible vial (easily concealed)',
    modifiers: { key: 'forceful', value: -1 },
  },
  {
    index: 651,
    description:
      "VETERAN: You've seen war, plenty of it, and you know in your gut where to start looking when there's a target on your head. Whenever you enter a new area, you can ask the referee if there is a hidden danger and get an honest answer. ",
    equipment: 'Assault rifle (1D6+1 DAMAGE)',
    modifiers: { key: 'armor', value: 1 },
  },
  {
    index: 652,
    description:
      "VOLATILE: Your menagerie of ultrahuman abilities is virtually infinite in scope, but which powers manifest themselves (and when) is completely unpredictable. At the beginning of each mission, roll a trait (D666). That trait replaces this trait (VOLATILE) until the end of the mission (although you also retain VOLATILE's containment armor and -2 TACTICAL penalty). Reroll your trait when you rest, use a WAR DIE, or take 6+ DAMAGE. ",
    equipment: 'Containment armor (2 ARMOR)',
    modifiers: { key: 'tactical', value: -2 },
  },
  {
    index: 653,
    description:
      'WALLBANG: You can shoot any form of ammunition through solid matter as though it were air. When you do so, there is a 3-in-1D6 chance that the shot will ricochet and harm someone else (possibly yourself) instead.',
    equipment: 'Laser sight (attach to weapon for +1 on attack rolls)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 654,
    description:
      'WEAPONMASTER: At the beginning of each mission, declare a specific type of weapon which you are currently training yourself to defend against. It shouldn’t be too vague; pick something like “bolt-action rifles” or “two-handed swords." If an enemy attacks you with the weapon type you chose, their DAMAGE is cut in half, rounded down. You cannot choose the same weapon type twice in a row.',
    equipment: 'Arms handbook (see enemies’ DAMAGE)',
    modifiers: { key: 'tactical', value: 1 },
  },
  {
    index: 655,
    description:
      'WEB: Your web-shooters spray pressurized jets of sticky, artificial fiber with high tensile strength and a slow-dissolving chemical makeup. You may roll +REFLEXIVE to incapacitate anyone by wrapping them in webs, and you may always deftly hang or swing from your webs without rolling the dice.',
    equipment: 'Web-shooters (accessory)',
    modifiers: { key: 'reflexive', value: 1 },
  },
  {
    index: 656,
    description:
      'WEIGHTLIFTER: You can always easily lift things close to your own weight. If it’s something really heavy, like a huge tank or part of a crumbling building, there will be a complication from over-exertion—the referee will tell you what.',
    equipment: 'Heavy riot shield (2 ARMOR, equip as weapon)',
    modifiers: { key: 'forceful', value: 1 },
  },
  {
    index: 661,
    description:
      'WHISPERER: You can understand the thoughts of animals, and ask them for information or favors. They are not obligated to comply, and may not always have the necessary context to communicate with you effectively.',
    equipment: 'Fur cloak (pacifies nearby animals, accessory)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 662,
    description:
      'WINNER: You can always win low-stakes contests of skill, mettle, or chance without rolling the dice. If it’s a high-stakes game (like fivefinger fillet, Russian roulette, or an all-in poker hand), you can push yourself to win automatically at the cost of 1D6 maxHP.',
    equipment: 'Platinum chip (extremely valuable), +1 when you roll WAR DICE',
  },
  {
    index: 663,
    description:
      'WITCH: You are a cunning practitioner of ancient magic who can cast spells at will. Magic spells may change any single situational detail which only you perceive at the moment of casting (such as making a shoe untied or causing a highway exit to be missed), but may not outright break the laws of physics. Words of magic burn the tongue, and each spell you cast costs 1 HP. Your odd charm never returns upon use, but you may choose to gain a new one as an advancement reward.',
    equipment: 'Odd charm (ignore death and fully heal, consumable)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 664,
    description:
      'WITTY: If you deliver a clever (or cheesy) one-liner that makes the other players laugh, groan, or cheer after overcoming a particularly difficult challenge, your HP is refilled to maximum.',
    equipment: 'Old sunglasses (see through disguises)',
    modifiers: { key: 'creative', value: 1 },
  },
  {
    index: 665,
    description:
      'WIZARD: You are an arrogant meddler in the arcane otherworld, and many mischievous sorceries have taken up residence in your head. Once per mission, you may roll 1D6, gesture wildly, and unleash a torrent of magic upon any target: 1. Caster becomes a small animal for 30 minutes. 2. Target gains magical armor which negates an attack, then shatters. 3. Misaimed fireball which deals 2D6 DAMAGE to anyone in the way. 4. Target completely heals. 5. Target enters cadaverous but reversible sleep. 6. Target and caster both disintegrate. You may spend one WAR DIE to reroll the result, and spend more to reroll as many times as you like. If you advance, you can replace one of the 1D6 results with a new spell you and the ref agree upon, instead of taking the usual advancement reward. The azure bolts from your magic missile launcher are ontologically guaranteed to always hit someone— though not necessarily the intended target.',
    equipment: 'Magic missile launcher (1D6 DAMAGE)',
    modifiers: { key: 'creative', value: 2 },
  },
  {
    index: 666,
    description:
      'XENO: You do not look, think, or act like a human. You are clearly an alien, and cannot blend into groups of humans without a very good disguise. Describe what type of alien you are—other aliens of the same type will never be hostile to you.',
    equipment: 'Plasma pistol (1D6 DAMAGE, or charge up for 1D6+1)',
    modifiers: { key: 'creative', value: 1 },
  },
];

export default traits;
