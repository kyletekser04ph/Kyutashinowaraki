module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("🌹𝐒𝐚𝐥𝐮𝐭 𝐭𝐨𝐢...😊 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐭𝐮 𝐭𝐞 𝐩𝐨𝐫𝐭𝐞𝐬😋 🌹?");
}
}
