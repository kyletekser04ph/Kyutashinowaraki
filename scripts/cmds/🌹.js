module.exports = {
    config: {
        name: "🌹",
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
    if (event.body && event.body.toLowerCase() == "🌹") return message.reply("🌹 𝐣𝐞 𝐯𝐨𝐢𝐬 𝐥𝐞𝐬 𝐫𝐨𝐬𝐞𝐬 𝐝𝐞 𝐦𝐚 𝐯𝐢𝐞 🩸🩸𝐦𝐞𝐫𝐜𝐢 𝐛𝐞𝐚𝐮𝐜𝐢𝐮𝐩 🩸🩸  𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮?");
}
}
