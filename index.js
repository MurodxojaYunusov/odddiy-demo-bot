TELEGRAM_BOT_TOKEN = '6191046244:AAFG28bFASot7WLdFUATdJh6g0TQaWo2_Pw';
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds =[];
const CronJob = require('cron').CronJob;
const job = new CronJob('/5 * * * * *', function() {
    console.log('You will see this message  every second ');

}, null, true, 'America/Lose_Angeles');
job.start();

