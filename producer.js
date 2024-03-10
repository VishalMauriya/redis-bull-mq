const { Queue } = require("bullmq");

const notificationQueue = new Queue('email-queue');

async function init() {
    const result = await notificationQueue.add('email send', {
        name: 'vishal',
        email: 'vishal@gmail.com',
        subject: 'New Queuing sevice',
        body: 'This email is regarding the new queueing service in node using bull mq'
    })

    console.log(`email added with id: ${result.id}`);
}

init();