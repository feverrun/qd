const rules = {
  name: "【Hires后花园】： ",
  type: 2, //签到类型 2 需要formhash
  op: "签到",
  url1: "https://dsdlove.com/plugin.php?id=dc_signin", //用于获取formhash的链接
  cookie: config.dsdlove.cookie,
  reg1: 'formhash=(.+)"', //formhash正则
  verify: "抱歉，您尚未登录，无法进行此操作", //验证cookie状态
  signmethod: "post", //签到请求方式 get/post
  signdata:"formhash=@formhash&signsubmit=yes&handlekey=signin&emotid=1&referer=https%3A%2F%2Fdsdlove.com%2Fplugin.php%3Fid%3Ddc_signin&content=%E8%AE%B0%E4%B8%8A%E4%B8%80%E7%AC%94%EF%BC%8Chold%E4%BD%8F%E6%88%91%E7%9A%84%E5%BF%AB%E4%B9%90%EF%BC%81",
  signurl: "https://dsdlove.com/plugin.php?id=dc_signin:sign&inajax=1", //签到链接
  reg2: "", //重复签到判断
  reg3: "", //签到成功判断
  info: "", //签到成功返回信息
};

async function abooky(){
const template = require("../Template");
return rules.name+await template(rules)
}
module.exports=abooky