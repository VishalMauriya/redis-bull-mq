const { Worker } = require("bullmq");

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

// Define your Redis connection options
const connectionOptions = {
    connection: {
        host: 'localhost', // Hostname of the Redis container
        port: 6379,          // Redis server port
        // Add other connection options if needed (e.g., password)
    }
};

const worker = new Worker('email-queue', async (job) => {
    console.log(`Message recieved with id: ${job.id}`);
    console.log(`Processing message..........`);
    console.log(`sending email to ${job.data.name}`);
    await sendEmail();
    console.log('email sent!');
}, connectionOptions);