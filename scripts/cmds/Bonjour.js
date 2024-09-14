module.exports = {
    config: {
        name: "bonjour",
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
    if (event.body && event.body.toLowerCase() == "bonjour") return message.reply("🌹𝐁𝐎𝐍𝐉𝐎𝐔𝐑🩸 𝐡𝐮𝐦𝐚𝐢𝐧 𝐜̧𝐚 𝐯𝐚 ?");
}
}
