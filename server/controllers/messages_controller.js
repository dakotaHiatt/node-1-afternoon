let messages = [];
let messageId = 0;

module.exports = {
    create: (req, res) => {
        const { time, text } = req.body;
        messages.push({messageId, text, time});
        messageId++;
        res.status(200).send( messages );
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.messageId == updateID );
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send( messages );
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).send( messages )
    }
};