import Bot from "el-bot";

import config from "../el";

const bot = new Bot(config);
// bot.start()
bot.start((msg: any) => {
  console.log(msg);
});

// 监听消息
// bot.mirai.on("message", (msg) => {
//   console.log(msg)
// })
