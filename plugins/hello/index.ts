import Bot from "el-bot";
import { Contact } from "mirai-ts";

const getSenderName = (sender: Contact.Friend | Contact.Member) => {
  return (sender as any).nickname || (sender as any).memberName;
};

export default (ctx: Bot) => {
  const mirai = ctx.mirai;
  mirai.on("message", (msg) => {
    msg.reply(`hello, ${getSenderName(msg.sender)}`);
  });
};
