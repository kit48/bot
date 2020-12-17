// https://github.com/motdotla/dotenv#dotenv
import dotenv from "dotenv";
import path from "path";
import { utils } from "el-bot";
import El from "el-bot/dist/el";

dotenv.config();

const elConfig: El = {
  qq: parseInt(process.env.BOT_QQ!),
  // 你可以直接解析 mirai-api-http 的配置
  setting: utils.config.parse(
    path.resolve(__dirname, "../mirai/plugins/MiraiAPIHTTP/setting.yml")
  ),
  db: {
    enable: false,
    uri: process.env.BOT_DB_URI,
    analytics: true,
  },
  config: utils.config.parse(path.resolve(__dirname, "./index.yml")),
  webhook: {
    enable: true,
    path: "/webhook",
    port: 7777,
    secret: "mirai-bot",
  },
};

export default elConfig;
