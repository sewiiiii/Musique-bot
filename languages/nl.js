const language = {
 loadevent: "Speler event geladen",
 loadcmd: "Command geladen",
 ready: " successvol verbonden.",
 loadslash: "Applicatie [/] commando's succesvol herladen .",
 error1: "De Bot Token die je in je project hebt ingevoerd is onjuist of de 'Intents' van je Bot zijn UIT!",
 error2: "Stel de bot token in token.js of in je .env bestand in voor jou project!",
 loadclientevent: "Client event geladen",
 embed1: "Je moet de <@&{djRole}>(DJ) rol op deze server hebben ingesteld om dit commando te kunnen gebruiken. Gebruikers zonder deze rol kunnen de {cmdMAP} niet gebruiken",
 message1: "Je bent niet verbonden met een audiokanaal. <:cross:1023313041854570558>",
 message2: "Je zit niet in hetzelfde audiokanaal als ik. <:cross:1023313041854570558>",
 message3: "Ik mis permissie",
 msg4: "Er ging iets fout",
 msg5: "Er speelt momenteel geen muziek. <:cross:1023313041854570558>",
 msg6: "Bewaar muziek",
 msg7: "Schrijf de naam van de afspeellijst.",
 msg8: "Dit nummer wordt live gestreamd, geen gegevens om de duur ervan te geven. <:casque:1041604142730317914>",
 msg9: "**<:valid:1021966974877696050> Succes:** Tijdstip bijgewerkt.",
 msg10: "Je hebt nog geen afspeellijst met deze naam. <:cross:1023313041854570558>",
 msg11: "Deze muziek staat al in deze afspeellijst. <:cross:1023313041854570558>",
 msg12: "toegevoegd aan je muziek afspeellijst.",
error3: "Error met laden van application [/] commands: ",
error4: "WAARSCHUWING: Het ziet er naar uit dat je geen MongoDB URL hebt geschreven? Als je geen geldige mongodb url invult in het config.js bestand, zal je de bot niet kunnen gebruiken.",
msg13: `<:microphone:1037468298633289758> Nu aan het spelen: **{track?.title}** -> Kanaal: **{queue?.connection.channel.name}** <:casque:1041604142730317914>`,
msg14: "De lijst is leeg. Je kunt nog wat muziek spelen, doei... <:valid:1021966974877696050>",
msg15: "Ik heb de verbinding verbroken omdat er niemand meer in mijn kanaal is. <:cross:1023313041854570558>",
msg16: "Ik heb problemen om verbinding te maken met het stem kanaal. Alsof iemand mijn verbinding verbroken heeft? Ik ben erg verdrietig. 😔",
msg17: "Er is geen vorig nummer! <:cross:1023313041854570558>",
msg18: "Nu aan het spelen **{queue.previousTracks[1].title}**. <:valid:1021966974877696050>",
msg19: " Bot statistieken",
msg20: "Hervers",
msg21: "**Je tijd is om!**",
msg22: "**<:valid:1021966974877696050> Gegevens bijgewerkt**",
msg23: "De lijst is leeg. <:cross:1023313041854570558>",
msg24: "De lijst is zojuist leeggemaakt. <a:poubelle:1041604786916708413>",
msg26: "Als je geen DJ rol specificeert, zul je het commando niet kunnen gebruiken!",
msg25: "De DJ rol is succesvol ingesteld op <@&{role}>.",
msg27: "De DJ rol is successvol verwijderd.",
msg28: "De DJ rol is nog niet ingesteld.",
msg29: `Voer een geldige filternaam in.<:cross:1023313041854570558>\n{filters}`,
msg30: `Ik kon geen filter vinden met die naam. <:cross:1023313041854570558>\n{filters}`,
msg31: `Toegepast: **{filter}**, Filterstatus: **{status}** **Opgelet, als de muziek lang is, kan de filtertoepassingstijd dienovereenkomstig langer zijn.**`,
msg32: "Het is tijd om naar muziek te luisteren op uw discordserver met een volledig gratis en geavanceerde interface. Music bot dat het afspelen van muziek op veel platforms ondersteunt waardoor je server zich speciaal voelt. n [My Networks](https://nekzy.ml)",
msg33: "Bot Commandos",
msg34: "Je hebt hier al een actief commando. <:cross:1023313041854570558>",
msg35: "Wachtrij",
msg36: "Nu muziek aan het spelen",
msg37: "Stop herhalen",
msg38: "Herhaal Systeem",
msg39: `**Hoe zit het met het maken van een keuze?**
* **Queue:** Zet de wachtrij op herhalen.
** **Now Playing Music:** Herhaalt het huidige nummer.
> **Close Loop:** Stop het herhalen.`,
msg40: "wachtrij op herhalen modus",
msg41: "Er is iets fout gegaan. <:cross:1023313041854570558>",
msg42: "Nu spelende muziek met herhaal modus",
msg43: "Herhaal modus is al inactief. <:cross:1023313041854570558>",
msg44: `Herhaal modus **Gesloten** 🔁`,
msg45: "Tijd is op",
msg46: "Herhaal Systeem - Beéindigd",
msg47: 'Bewaar afspeellijst',
msg48: "muziek gepauseert! <:valid:1021966974877696050>",
msg49: `Bericht Ping`,
msg50: `Bericht Latency`,
msg51: `API Latency`,
msg52: `Er is geen afspeellijst. <:cross:1023313041854570558>`,
msg53: `Je hebt geen toestemming om deze afspeellijst af te spelen. <:cross:1023313041854570558>`,
msg54: `Je hebt nog geen muziek met deze naam. <:cross:1023313041854570558>`,
msg55: `Ik kan je voicekanaal niet joinen. <:cross:1023313041854570558>`,
msg56: `Afspeellijst geladen... <:valid:1021966974877696050>`,
msg57: `<@{interaction.member.id}>, **{music_filter.length}** muzieknummers toegevoegd aan de wachtrij. <:valid:1021966974877696050>`,
msg58: `Er is geen afspeellijst met deze naam. <:cross:1023313041854570558>`,
msg59: `Schrijf de naam van het nummer dat u wilt zoeken. <:cross:1023313041854570558>`,
msg60: `Geen resultaten gevonden! <:cross:1023313041854570558>`,
msg61: "Muziek(s) laden... <:casque:1041604142730317914>",
msg62: "naamlijst toegevoegd aan de afspeellijst. <:valid:1021966974877696050>",
msg63: `De wachtrij is leeg. <:cross:1023313041854570558>`,
msg64: "Server Muziek Lijst",
msg65: "Momenteel aan het spelen",
msg66: "Aangevraagd door",
msg67: "Pagina",
msg68: `De commandoprocessor is geannuleerd. <:valid:1021966974877696050>`,
msg69: `Server Muziek Lijst - Tijd is over!`,
msg70: `Je tijd om dit commando te gebruiken is voorbij, je kunt \`/queue\` typen om het commando opnieuw te gebruiken.`,
msg71: `Er is iets misgegaan. Het is alsof je nog nooit de muziek hebt gestopt.`,
msg72: "Muzieknummer hervat! <:valid:1021966974877696050>",
msg73: `Voer een geldige naam voor het liedje in. <:cross:1023313041854570558>`,
msg74: `Geen zoekresultaten gevonden! <:cross:1023313041854570558>`,
msg75: "Gezochte muziek",
msg76: "Kies een nummer van **1** tot **{maxTracks.length}** ⬇️",
msg77: `Muziek zoeken geannuleert. <:valid:1021966974877696050>`,
msg78: `Laden... <:casque:1041604142730317914>`,
msg79: "Toegevoegd aan de wachtrij. <:valid:1021966974877696050>",
msg80: `NUmmer zoektijd over <:cross:1023313041854570558>`,
msg81: "Annuleren",
msg82: `Het nummer dat u hebt ingevoerd is hoger dan het aantal nummers in de wachtrij. <:cross:1023313041854570558>`,
msg83: "Nummer overgeslagen <:valid:1021966974877696050>",
msg84: `Dit nummer wordt live gestreamd, geen gegevens over hoe lang dit nummer duurt om weer te geven. <:casque:1041604142730317914>`,
msg85: `Muziek gestopt. Tot de volgende keer. <:valid:1021966974877696050>`,
msg86: "Update",
msg87: `Huidig volume: **{queue.volume}** 🔊**Om het volume te veranderen, typ een getal tussen \`1\` en \`{maxVol}\.**`,
msg88: `Het volume dat u wilt wijzigen is al het huidige volume <:cross:1023313041854570558>`,
msg89: `**Typ een getal tussen \`1\` en \`{maxVol}\` om het volume te veranderen.** <:cross:1023313041854570558>`,
msg90: "Volume bijgewerkt:",
msg91: `Schrijf de naam van de afspeellijst die u wilt maken. <:cross:1023313041854570558>`,
msg92: `Er bestaat al een afspeellijst met deze naam. <:cross:1023313041854570558>`, 
msg93: `Je kunt niet meer dan 30 afspeellijsten hebben. <:cross:1023313041854570558>`,
msg94: "Afspeellijst maken... <:casque:1041604142730317914>",
msg95: "Afspeellijst gemaakt! <:casque:1041604142730317914>",
msg96: `Je hebt nog geen afspeellijst met deze naam. <:cross:1023313041854570558>`,
msg97: "Afspeellijst verwijderen... <:casque:1041604142730317914>",
msg98: "Afspeellijst verwijderd! <:casque:1041604142730317914>",
msg99: `Schrijf de naam van het nummer dat je wil zoeken. <:cross:1023313041854570558>`,
msg100: `Noteer de naam van de afspeellijst waaraan je de muziek aan wil toevoegen. <:cross:1023313041854570558>`,
msg101: `Je kunt niet meer dan {max_music} nummers hebben in een afspeellijst. <:cross:1023313041854570558>`,
msg102: "Nummer(s) aan het laden... <:casque:1041604142730317914>",
msg103: "Alle muziek toegevoegd aan uw afspeellijst! <:casque:1041604142730317914>",
msg104: `Deze muziek staat al in deze afspeellijst. <:cross:1023313041854570558>`,
msg105: "toegevoegd aan de afspeellijst! <:casque:1041604142730317914>",
msg106: `Schrijf de naam van de afspeellijst waarven je de muziek wil verwijderen. <:cross:1023313041854570558>`,
msg107: `Je hebt nog geen muziek met deze naam. <:cross:1023313041854570558>`,
msg108: "Muziek verwijderen... <:casque:1041604142730317914>",
msg109: "Muziek verwijderd! <:casque:1041604142730317914>",
msg110: "Schrijf de naam van de afspeellijst die u wilt zoeken. <:cross:1023313041854570558>",
msg111: `Je hebt geen muziek in deze afspeellijst. <:cross:1023313041854570558>`,
msg112: "Top Openbare Afspeellijsten",
msg113: `Uw tijd om dit commando te gebruiken is verstreken, u kunt \`/playlist top\` typen om het commando opnieuw te gebruiken.`,
msg114: `Er is geen publieke afspeellijst. <:cross:1023313041854570558>`,
msg115: "Your Playlists",
msg116: `muzieken`,
msg117: `Je hebt geen afspeellijst. <:cross:1023313041854570558>`,
msg118: "Je tijd om dit commando te gebruiken is verstreken, je kan \`/playlist list {name}\` typen om het commando opnieuw te gebruiken.",
msg119: "Gebruik het commando **/play playlist <list-name>** om deze afspeellijsten te beluisteren.\nTyp **/playlist list <list-name>** om de muziek in een lijst te zien.",
msg120: "Gelieve een tekstkanaal te specificeren.",
msg121: "<#{channel}> toegevoegd aan de lijst met kanalen voor het gebruik van commando's, nu kan het bot-commando alleen worden gebruikt op de kanalen in de lijst.",
msg122: "Er zijn nog geen gegevens geregistreerd.",
msg123: "<#{channel}> verwijderd uit de lijst met opdrachtgebruikskanalen.",
msg124: "Dit kanaal staat al op de commando gebruik kanaal lijst.",
msg125: "Dit kanaal is geen tekstkanaal",
msg126: "<:cross:1023313041854570558> Hier is een lijst van kanalen waar je de commandos kunt gebruiken: {channel_filter}",
msg127: "Commando niet gedefinieert.",
error7: "Probeer deze command later opnieuw. Mogelijke bug gemeld aan botontwikkelaars.",
msg128: "Je mute me terwijl de muziek speelde. Daarom ben ik gestopt met de muziek. Als je me unmute ga ik verder. 😔",
msg129: "Spelen",
msg130: "Schrijf A.U.B een geldig nummer.",
msg131: "om de opdrachten in de lijst te gebruiken, moet je op de bot stemmen.",
msg132: "Er is nog geen muziek gestopt.",
msg133: "Ik heb de volgorde in de afspeellijst verprutst."
}
module.exports = language;
