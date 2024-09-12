import Role from './role';

const roles: Role[] = [
  {
    index: 11,
    description:
      "ABANDONED: Describe the war-torn country where you learned to live on nothing and fight to survive as a child. Advance if you adequately contributed your part to the mission without anybody else's help.",
  },
  {
    index: 12,
    description:
      'AMNESIAC: Describe the most recent event you remember (like waking up in a vat a week ago, or learning your name from the unfamiliar wallet in your coat). Advance if your understanding of yourself or the world changes dramatically over the course of the mission.',
  },
  {
    index: 13,
    description:
      'AVENGER: Describe someone who wronged you, and what they did. Advance if something you did brought you closer to exacting your revenge, or decisively stopped a similar injustice.',
  },
  {
    index: 14,
    description:
      'CHESSMASTER: Describe what you plan to do with absolute power. Advance if something you did brought you closer, on a long-term scale, to holding a position of extreme power over a large group of people.',
  },
  {
    index: 15,
    description:
      'CLEANUP: Describe a far-reaching and complex catastrophe which you are responsible for. Advance if you meaningfully healed some piece of its aftermath, or the aftermath of a similar catastrophe.',
  },
  {
    index: 16,
    description:
      'CRUSADER: Describe an ethical ideal you hold dear that is difficult to achieve. Advance if something you did aligned with that ethical ideal, even though sticking to your scruples made your life harder.',
  },
  {
    index: 21,
    description:
      'CULTIST: Describe the esoteric religious sect to which you belong, and the chilling prophecy in which you believe. Advance if you drafted someone of significant importance or power into your cult, or if you turned the cosmic clock closer to your hallowed day of reckoning.',
  },
  {
    index: 22,
    description:
      'DEALMAKER: Describe the foolproof strategy you have devised to close any deal. Advance if you end the mission with significantly more wealth, influence, or capital than you had coming in.',
  },
  {
    index: 23,
    description:
      'DIPLOMAT: Describe the types of relationships you like to form. Advance if you forged a brand new one or kept a relationship in jeopardy intact, and it changed the course of the mission.',
  },
  {
    index: 24,
    description:
      'ENEMY: Describe the front of plausible deniability which you maintain in order to keep working for FIST. Advance if you completed the mission objective relayed to you by CYCLOPS (divulged to you by the referee in secret when the mission begins) without outing yourself to the team.',
  },
  {
    index: 25,
    description:
      'FIREBRAND: Describe your hot-blooded hopes for the future. Advance if an event during the mission was a key moment in your coming-of-age, or if you proved your competence to a more experienced teammate.',
  },
  {
    index: 26,
    description:
      'FLUX: Describe why your motivations and worldview are in a constant state of flux. When each mission begins, roll a random role (66, answer the “describe" section as succinctly as possible, and play as though that role were yours for the duration of the mission.',
  },
  {
    index: 31,
    description:
      "FUGITIVE: Describe a high-caliber crime: one that you did commit, or one that you actually didn't commit (and if so, who framed you). Advance if something you did made significant progress towards clearing your name, or if you fought off the long arm of the law.",
  },
  {
    index: 32,
    description:
      'GLADIATOR: Describe an honorable, legendary warrior whom you admire and aspire to emulate. Advance if you fought and bested a powerful enemy using their combat philosophy.',
  },
  {
    index: 33,
    description:
      'HEALER: Describe your medical philosophy, and tell the table the story of your teacher, a renowned and unconventional practitioner of medicine. Advance if none of your teammates died under your watch.',
  },
  {
    index: 34,
    description:
      'ICON: Describe how you want to go down in history. Advance if something you did brought you closer to becoming a legend, or ensured a group of people would never forget your name.',
  },
  {
    index: 35,
    description:
      'MASK: Describe your vice as you would for the WILDCARD role, and describe why you pretend to be eccentric and unpredictable. Advance if you took off the mask to protect someone in your path of chaos, without giving your true nature away to your enemies.',
  },
  {
    index: 36,
    description:
      'MAVERICK: Describe the moment you lost your faith in everyone else. Advance if you did something during a mission that no one else did, in a way that no one will ever forget.',
  },
  {
    index: 41,
    description:
      'MERCENARY: Describe how you ended up working with the rest of these bleeding-heart weirdos. Advance if you completed the mission according to its original parameters—no funny business—and made sure to collect your pay.',
  },
  {
    index: 42,
    description:
      'MUDDLER: Describe a piece of simple, common knowledge which is in fact wrong, and attempt to describe the infinitely more complex correct answer. Advance if you made things more complicated in a major way, or catastrophically obfuscated the truth about something important.',
  },
  {
    index: 43,
    description:
      'NIHILIST: Describe how you arrived at the ultimate conclusion—nothing truly matters. Advance if you showed no fear of death and no selfpreservation instinct at any point during the mission.',
  },
  {
    index: 44,
    description:
      'PARTISAN: Describe your experiences with the creation, mistreatment, or erasure of ultrahuman beings. Advance if you proved that ultrahumans can and should stand on their own, or if you created a new ultrahuman.',
  },
  {
    index: 45,
    description:
      'PEACEMAKER: Describe your vision for a world without war, and your opinion on the use of violence. Advance if you prevented, stopped, or eased a violent geopolitical conflict.',
  },
  {
    index: 46,
    description:
      'PUNK: Describe a long-standing oppressive establishment that hurt you. Advance if something you did weakened that establishment, or meaningfully helped people who are also being oppressed by it.',
  },
  {
    index: 51,
    description:
      'PROVIDER: Describe the person or entity that cannot survive without you and your work. Advance if you found something that would make them deeply happy and brought it to the end of the mission.',
  },
  {
    index: 52,
    description:
      'REPENTANT: Describe a shameful and horrible decision from your past. Advance if something you did atoned for your sins in a meaningful way, or completely changed the context in which you view your past deeds.',
  },
  {
    index: 53,
    description:
      'REPRESENTATIVE: Describe your vision for a world where the ultrahuman condition has been publicized and normalized. Advance if you created empathy and understanding between ultrahumans and the world.',
  },
  {
    index: 54,
    description:
      'RETURN: Describe the faraway place or time from which you hail, and the improbable circumstances that found you stranded here. Advance if you made progress in your quest to go home, or if you made contact with someone from the place-before.',
  },
  {
    index: 55,
    description:
      "RETIRED: Describe your past exploits, your retirement, how you ended up back in action, and why you can't go home just yet. Advance if you made significant progress toward returning home, or if you showed how an old dog can still learn new tricks.",
  },
  {
    index: 56,
    description:
      "ROOKIE: Describe your ideal “first mission\" experience. Advance (and choose a new role) if a mission goes exactly how you'd always hoped it would. If it doesn't, advance (and keep this role) if your teammates stepped in at the last moment to save you from certain death.",
  },
  {
    index: 61,
    description:
      'SCHOLAR: Describe the esoteric and obscure subject you are most curious about. Advance if something you learned brought you closer to unlocking the ultimate secrets of that subject, or if you brought a prize specimen to the end of the mission.',
  },
  {
    index: 62,
    description:
      'SKEPTIC: Describe your rational and meticulously vetted worldview. Advance if you venture a real, reasonable explanation for something paranormal and unfamiliar you encounter (and you’re proven right).',
  },
  {
    index: 63,
    description:
      'UNKNOWN: Describe how difficult it is to find a cause, a purpose, or something to fight for. Advance if you overcame a challenge or secured a valuable item far beyond your expected level of ability.',
  },
  {
    index: 64,
    description:
      'WANDERER: Describe the event which sent you drifting from place to place. Advance if you have left behind no lasting trace of your presence by the end of a mission, or if someone you met will always miss you.',
  },
  {
    index: 65,
    description:
      'WILDCARD: Describe your primary vice or source of pleasure, such as money, romance, thrills, or pain. Advance if you got your fix during a mission in a way nobody, including yourself, expected.',
  },
  {
    index: 66,
    description:
      'WRETCH: Describe the uniquely horrible misfortune which has befallen you. Advance if something happens to you which makes your suffering poetically worse, or if you give your misery some company.',
  },
];

export default roles;
