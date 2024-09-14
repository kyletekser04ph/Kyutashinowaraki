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
    if (event.body && event.body.toLowerCase() == "🌹") return message.reply("🌹 𝐖𝐨𝐰😍🤩... 𝐥𝐚 𝐫𝐨𝐬𝐞 🩸🩸𝐦𝐞𝐫𝐜𝐢 𝐛𝐞𝐚𝐮𝐜𝐨𝐮𝐩 🩸🩸 𝐉𝐞 𝐯𝐚𝐢 𝐥𝐞 𝐜𝐨𝐧𝐬𝐞𝐫𝐯𝐞𝐫  𝐩𝐨𝐮𝐫 𝐦𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞  ");
}
}
