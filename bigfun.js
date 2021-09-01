token= "xWM8yU6M-VMKl2OzbjHNwupgDGhlW1MIQqF0"
cookie = "LIVE_BUVID=AUTO7015755500790514; rpdid=|(umYu~luRk)0J'ul~lll||)|; blackside_state=1; CURRENT_FNVAL=80; _uuid=8EAC2421-D5C7-7A9E-49A7-55FF983D930031020infoc; buvid3=B8D03925-A613-407A-830B-FF5A7C3160FA18561infoc; fingerprint=e205b4d447215d5db5147a226beb6b4a; buvid_fp=B8D03925-A613-407A-830B-FF5A7C3160FA18561infoc; buvid_fp_plain=B8D03925-A613-407A-830B-FF5A7C3160FA18561infoc; SESSDATA=5ccb48ad,1642463845,3e870*71; bili_jct=1ed2576f45c42dafdfabbd1d2bf5e0a2; DedeUserID=177936577; DedeUserID__ckMd5=4ec13987f2485f61; sid=53btjxl9; PVID=1; bsource=search_google; _csrf=DvpR7Sx7tjBUDY3TTJ34_Ltv; session-api=tvi4jahnq0mi568lsj77tkv9sg; UM_distinctid=17b9fc854129f1-063f4c9761a755-c343365-144000-17b9fc85413576; CNZZDATA1275376637=2103570526-1630416940-|1630416940"

const axios = require("axios")
const comment = ["早", "路过", "哦哈呦", "每日打卡", "<p>[大黄脸_妙啊]</p>"]
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
var loginStatus = true

async function bigfun() {
    await bget("checkIn", "")
    if(loginStatus){
    await bget("like", {"type": 1,"action": 1,"id": 1175302})  //给我点赞
    await bget("follow",{"type":1,"to_user_id":"17995983"}) //关注我
    let formData = await bget("getForumPostList&forum_id=1&page=1&limit=25&sort=time&get_sub_forum_posts=1","","get")
    let ForumPostList = formData.data
    for (i = 0; i < 5; i++) {
        let formId = ForumPostList[i].id
        console.log(`第${i+1}次点赞 ${formId}`)
        await bget("like", {"type": 1,"action": 1,"id": formId})
        await sleep(5000)
        console.log(`第${i+1}次评论 ${formId}`)
        if(i<3) await bget("newComment",{"content":comment[Math.round(Math.random() * 4)],"at":[],"images":[],"videos":[],"post_id":formId})
        await sleep(5000)
    }
    myInfo = await bget("getUserProfile", "", "get")
    if (myInfo && myInfo.data) {
        let Info = myInfo.data[0]
        let info = `【bigfun】：  \n昵称：${Info.nickname}  \n等级：Lv${Info.level}  \n签到：连签${Info.continued_check_in_days}天/共签${Info.check_in_days}天    \n经验值：${Info.current_exp} / ${Info.upgrade_exp}`
        console.log(info)
        return info
    }    
    }else{
    return `【BigFun】：token或cookie已失效`    
    }
   
}

function bget(method, data, postMethod) {
    return new Promise(async (resolve) => {
        try {
            let headers = {
                "x-csrf-token": token,
                "referer": "https://bigfun.bilibili.com/",
                "cookie": cookie,
                "User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
            }
            if (postMethod) res = await axios.get(`https://bigfun.bilibili.com/api/client/web?method=${method}`, {
                headers
            })
            if (!postMethod) res = await axios.post(`https://bigfun.bilibili.com/api/client/web?method=${method}`, data, {
                headers
            })
            if (!postMethod) console.log(JSON.stringify(res.data))
            resolve(res.data)
        } catch (err) {
            console.log(err.response.data.errors);
            if (err.response.data.errors.code == 403) {
                loginStatus = false
                console.log("cookie或token已失效,结束任务")
               // return;
            }
        }
        resolve();
    });
}


bigfun()
// module.exports = bigfun;