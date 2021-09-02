/*
批量查询任务需手动抓包查询之后的exportkey 并替换 见118行
*/

const axios = require("axios")
const cookie_aiqicha = "BIDUPSID=0343D5498EE8D0841372C9431EF4F2E7; PSTM=1575441756; __yjs_duid=1_1b4d9cb4db78c6ea1ba7d48b1458f5801618925965577; BAIDUID=17B6E1EDF1453C7B0EF45B90DE1C963B:FG=1; BDSFRCVID=xTKOJexroG0YRbTH3zi92MensdNbUdrTDYrEQ-mAp1wm6V8VJeC6EG0Pts1-dEu-EHtdogKK0eOTHk8F_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=fn4JoC0atCvDqTrP-trf5DCShUFs0tjRB2Q-XPoO3KJZetoCbqrPMRjXXfoXb-biWKQXbxbgylRM8P3y0bb2DUA1y4vpKMPftgTxoUJ23Uo6s-Jcqt5OyU_ebPRiJPQ9QgbWVpQ7tt5W8ncFbT7l5hKpbt-q0x-jLTnhVn0MBCK0MCtCej8ajjPy5q3j2bjJHDOjQnA8Kb7Vbn09MUnkbJkXhPtjXlOeLCTT3lQRBR7rqx3LKt782JK7Qbrr0lOqWGcqhxc_Lp5MSR3O2M7pQT8r5ModJ4TP2-jrQ-Pyab3vOIJNXpO1MUtzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjKjJJKJoCKQKt8_HRjYbb__-P4DePb9BMRZ56bHWh0Mylo1Dn5k55jbXt4mKRJLtx67KDQnKUT-3l7boMJRK5bdQUIT3xJ9a6543bRTLpb4LhnlET6sKnAWhP-UyN3-Wh37227lMKoaMp78jR093JO4y4Ldj4oxJpOJ5JbMopCafDD3qbjkq45HMt00qxby26nEye79aJ5y-J7nhMT--lO1DnIFh4cyybjUfmoa-Rb-QpbZql5hqtcNK5_WhHjpqp5Z5mAqKl0MLPb5hj6gQJ_VQfk3bMnMBMPj5mOnanvn3fAKftnOM46JehL3346-35543bRTLnLy5KJYMDFlen3HhCCV-frb-C62aKDsXUbcBhcqJ-ovQT3Z04D7yabEa6FHBCTXQbbkKf5fqxbeWJ5p0DuDLq0D--uqQJbpaJ5nJq5nhMJmKTLVbML0qto7-P3y523ion5vQpnObhQ3DRoWXPIqbN7P-p5Z5mAqKl0MLPbtbb0xXj_0-nDSHH-DJ5Kf3H; BDSFRCVID_BFESS=xTKOJexroG0YRbTH3zi92MensdNbUdrTDYrEQ-mAp1wm6V8VJeC6EG0Pts1-dEu-EHtdogKK0eOTHk8F_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=fn4JoC0atCvDqTrP-trf5DCShUFs0tjRB2Q-XPoO3KJZetoCbqrPMRjXXfoXb-biWKQXbxbgylRM8P3y0bb2DUA1y4vpKMPftgTxoUJ23Uo6s-Jcqt5OyU_ebPRiJPQ9QgbWVpQ7tt5W8ncFbT7l5hKpbt-q0x-jLTnhVn0MBCK0MCtCej8ajjPy5q3j2bjJHDOjQnA8Kb7Vbn09MUnkbJkXhPtjXlOeLCTT3lQRBR7rqx3LKt782JK7Qbrr0lOqWGcqhxc_Lp5MSR3O2M7pQT8r5ModJ4TP2-jrQ-Pyab3vOIJNXpO1MUtzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjKjJJKJoCKQKt8_HRjYbb__-P4DePb9BMRZ56bHWh0Mylo1Dn5k55jbXt4mKRJLtx67KDQnKUT-3l7boMJRK5bdQUIT3xJ9a6543bRTLpb4LhnlET6sKnAWhP-UyN3-Wh37227lMKoaMp78jR093JO4y4Ldj4oxJpOJ5JbMopCafDD3qbjkq45HMt00qxby26nEye79aJ5y-J7nhMT--lO1DnIFh4cyybjUfmoa-Rb-QpbZql5hqtcNK5_WhHjpqp5Z5mAqKl0MLPb5hj6gQJ_VQfk3bMnMBMPj5mOnanvn3fAKftnOM46JehL3346-35543bRTLnLy5KJYMDFlen3HhCCV-frb-C62aKDsXUbcBhcqJ-ovQT3Z04D7yabEa6FHBCTXQbbkKf5fqxbeWJ5p0DuDLq0D--uqQJbpaJ5nJq5nhMJmKTLVbML0qto7-P3y523ion5vQpnObhQ3DRoWXPIqbN7P-p5Z5mAqKl0MLPbtbb0xXj_0-nDSHH-DJ5Kf3H; H_WISE_SIDS=107314_110085_127969_164326_171234_174754_175755_176677_177058_177409_177473_177953_178329_178530_178602_179350_179436_179483_180314_180407_181125_181135_181158_181400_181483_181588_181611_181712_181731_182000_182001_182026_182100_182163_182193_182273_182283_182530_182593_182683_182848_182888_183002_183035_183270_183313_183325_183330_183404_183431_183548_183584_183629_183759_183867_183975_184010_184146_184245_184351_184464_184556_184579_184716_184723_184789_184794_184810_184826_184892; BDUSS=ZsUFRyc0ZRMllONzh0d0RCR2IxbzlpLTlTbTJGT1MxZFBGV2w5Z0JjbGhOazFoRVFBQUFBJCQAAAAAAAAAAAEAAABJIvyhX8SqwOTErgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGpJWFhqSVhYW; BDUSS_BFESS=ZsUFRyc0ZRMllONzh0d0RCR2IxbzlpLTlTbTJGT1MxZFBGV2w5Z0JjbGhOazFoRVFBQUFBJCQAAAAAAAAAAAEAAABJIvyhX8SqwOTErgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGpJWFhqSVhYW; delPer=0; PSINO=6; H_PS_PSSID=34440_34496_31660_33848_34092_34107_26350_34420_34391; BAIDUID_BFESS=17B6E1EDF1453C7B0EF45B90DE1C963B:FG=1; ZD_ENTRY=google; __yjs_st=2_YWM2MWEyYTJiNDk4YjRlNmI3MTIxYTZjNjAwMDczZGE0NjAyYzJlZWMxNjJlYjZlZmYyZDk3NWNjYTE0OGExZjYyMzM3OWQxMTJiNGY0ZTg3MTQyYjRmZjYyNDAwNTlhZDdkZDc3ZDljOGVlZjMwOTI2YjhlYjBmMTMxZDNlMzgwZGY5YmViMGQ3NjczOTBiNGE3ZDU2MzZiOWVhMGU0YjA4ODMzZTI3NWJjZTgzMTdkNmRlMzJkNDk4YTAxMGE1ZDUwNjk5ZTdkYWJlYzc2NWNiOWJlMTZhMGE2MTU1NzExNTg4NDU1NTMxNTU0M2ZiZTViNzkyZThiYTFkMGVlMF83XzFlOTEzM2Ni; RT=\"z=1&dm=baidu.com&si=nf0sjymt03a&ss=kt1107yc&sl=2&tt=exh&bcn=https://fclog.baidu.com/log/weirwood?type=perf&ld=vwc&cl=955w&ul=96iw&hd=96jn\"; ab_sr=1.0.1_MGYzNDc5ZGU3YWUwMTg0YjRiZGQ1MjhmYWJlNDQzYjEyMjdkNzU3YmE0YWEwYjg2YzI0MDZmN2I0NjRiYzA2ZTZjMzkwMjNhNjUxYzM5MGQyN2Q2YWU2NWM3NGU2OWQzYmI2YWY1N2ZmMmUyOThiZDEzNzJmODE4NjVjMzY0YzMyY2Q1NjMxY2Y3MGQ5YmFhMjIyNTQ1ZDE2MjIwZDQwZTFhMjI1ZjFiZjE1ZmU0ODk4ZTc0ZWFkYzczZTlhNzNk";

var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Safari/537.36",
    referer: "https://aiqicha.baidu.com/m/s?t=3&q=%E5%B0%8F%E7%B1%B3&VNK=e73b55ef",
    "X-Requested-With": "XMLHttpRequest",
    "Host": "aiqicha.baidu.com",
    cookie: cookie_aiqicha
}
ytaskList = []
taskList = []
claimList = []
alltaskList = []

function rand() {
    let key = ["苹果", "华为", "百度", "中兴", "小米", "oppo", "vivo", "一加"]
    let i = Math.floor((Math.random() * key.length))
    return key[i]
}

let oo = {
    CX10002: "每日签到",
    CX10001: "每日登陆",
    CX11001: "查询企业",
    CX11002: "查询老板",
    CX11003: "查询老赖",
    CX11004: "查询商标",
    CX11005: "查询地图",
    CX11006: "浏览新闻",
    CX11007: "浏览监控日报",
    CX11009: "查询关系",
    CX11010: "批量查询",
    CX12001: "添加监控",
    CX12002: "添加关注",
    CX12005: "分享任务",
    CX12006: "邀请任务",
    CX12007: "高级搜索",
    CX12008: "高级筛选"
}

function get(api, method, data) {
    return new Promise(async (resolve) => {
        try {
            let url = `https://aiqicha.baidu.com/${api}`
            if (method == "get") res = await axios.get(url, {
                headers
            })
            if (method == "post") res = await axios.post(url, data, {
                headers
            })
            if (res.data.status == 0) console.log("\n操作成功")
            else console.log("    " + res.data.msg)
            resolve(res.data)
        } catch (err) {
            console.log(err)
        }
        resolve();
    });
}

async function getaskList() {
    let tres = await get("usercenter/checkTaskStatusAjax", "get")
    let obj = tres.data
    if (tres.status == 0) {
        Object.keys(obj).forEach(function (key) {
            if (oo[key]) {
                let task = obj[key]
                task.title = key
                alltaskList.push(task)
                if (task.count == task.totalcount) ytaskList.push(task)
                if (task.canClaim != 0) claimList.push(key)
                if (task.count != task.totalcount) taskList.push(task)
            }
        });
    }
    console.log(`共 ${alltaskList.length}任务 已完成 ${ytaskList.length} 任务 可做 ${taskList.length}任务 ${claimList.length}任务可领取奖励`)
}

async function dotask(taskList) {
    for (var o of taskList) {
        switch (o.title) {
            case "CX10002": //每日签到
                console.log("开始任务：" + oo[o.title])
                await get(`usercenter/userSignAjax`, "get")
                break
            case "CX10001": //每日登陆
                console.log("开始任务：" + oo[o.title])
                break
            case "CX11001": //查询企业 
                console.log("开始任务：" + oo[o.title])
                await get(`s/getHeadBrandAndPersonAjax?q=${encodeURI(rand())}`, "get")
                await sleep(2000)
                break
            case "CX11002": //查询老板 
                console.log("开始任务：" + oo[o.title])
                await get(`person/relevantPersonalAjax?page=1&q=${encodeURI(rand())}&size=10`, "get")
                await sleep(2000)
                break
            case "CX11003": //查询老赖
                console.log("开始任务：" + oo[o.title])
                await get(`c/dishonestAjax?q=${encodeURI(rand())}&t=8&s=10&p=1&f=%7B%22type%22:%221%22%7D`, "get")
                await sleep(2000)
                break
            case "CX11004": //查询商标
                console.log("开始任务：" + oo[o.title])
                await get(`c/markproAjax?q=${encodeURI(rand())}&p=1&s=10&f=%7B%7D&o=%7B%7D`, "get")
                await sleep(2000)
                break
            case "CX11005": //查询地图
                console.log("开始任务：" + oo[o.title])
                await get(`map/getAdvanceFilterListAjax?longitude=113.76343399&latitude=23.04302382&distance=2&page=1`, "get")
                await sleep(2000)
                break
            case "CX11006": //浏览新闻
                console.log("开始任务：" + oo[o.title])
                await get("m/getYuqingDetailAjax?yuqingId=993090dcb7574be014599996098459e3", "get")
                break
            case "CX11007": //浏览监控日报
                console.log("开始任务：" + oo[o.title])
                let jk = await get("zxcenter/monitorDailyReportListAjax?page=1&size=10", "get")
                let list = jk.data.list
                if (list) {
                    for (p = 0; p < 2 && p < list.length; p++) {
                        await get(`zxcenter/monitorDailyReportDetailAjax?reportdate=${list[p].reportDate}`, "get")
                    }
                }
                break
            case "CX11009": //查询关系
                console.log("开始任务：" + oo[o.title])
                await get(`relations/findrelationsAjax?from=e07a8ef1409bff3987f1b28d118ff826&to=6f5966de4af2eb29085ffbcc9cc0116a&pathNum=10`, "get")
                await sleep(2000)
                break
            case "CX11010": //批量查询 
                console.log("开始任务：" + oo[o.title])
                await get(`batchquery/show?exportkey=xlTM-TogKuTwFXlQeIXL0-ZSYg3hsic*l8GeygZ33JY5yKM7wIuRZJ9YNE*8CciQoAU5UjsmI-hdmd`, "get")
                await sleep(2000)
                break
            case "CX12001": //添加监控
                console.log("开始任务：" + oo[o.title])
                for (id of [29829264524016, 28696417032417, 31370200772422, 31242153386614]) {
                    await get(`zxcenter/addMonitorAjax?pid=${id}`, "get")
                }
                await get(`zxcenter/addMonitorAjax?pid=29710155220353`, "get")
                await get(`zxcenter/cancelMonitorAjax?pid=29710155220353`, "get")
                await sleep(2000)
                break
            case "CX12002": //添加关注
                console.log("开始任务：" + oo[o.title])
                await get(`my/addCollectAjax`, "post", `pid=34527616977197`)
                await get(`my/delCollectAjax`, "post", `pid=34527616977197`)
                await sleep(2000)
                break
            case "CX12005": //分享好友
                console.log("开始任务：" + oo[o.title])
                console.log("666")
                let shres = await get(`usercenter/getShareUrlAjax`, "get")
                uid = shres.data.match(/uid=(.+)/)[1]
                headers["cookie"] = ""
                let t = Date.now()
                headers["referer"] = "https://" + shres.data + "&VNK=" + t
                headers["Zx-Open-Url"] = "https://" + shres.data + "&VNK=" + t
                console.log(headers)
                await get(`m/?uid=${uid}`, "get")
                await get(`m/getuserinfoAjax?uid=${uid}`, "get")
                headers.cookie = cookie_aiqicha
                await sleep(2000)
                break
            case "CX12007": //高级搜索
                console.log("开始任务：" + oo[o.title])
                await get(`search/advanceSearchAjax?q=${encodeURI(rand())}&t=11&p=1&s=10&o=0&f=%7B%22searchtype%22:[%221%22]%7D`, "get")
                break
            case "CX12008": //高级筛选
                console.log("开始任务：" + oo[o.title])
                await get(`search/advanceFilterAjax?q=%E7%A6%8F%E5%B7%9E%E6%AF%8F%E6%97%A5&t=0&p=1&s=10&o=0`, "get")
                break
            default:
                break
        }
        await sleep(2000)
        console.log("  去领取爱豆")
        let clres = await get(`zxcenter/claimUserTaskAjax?taskCode=${o.title}`, "get")
        if (clres.status == 0) console.log(`  领取成功！获得${clres.data.totalScore}爱豆`)
    }
}

async function aqc() {
    console.log("爱企查每日任务开始")
    if (cookie_aiqicha) {
        let logininfo = await get("m/getuserinfoAjax", "get")
        if (logininfo.data.isLogin == 1) {
            await getaskList()
            await dotask(taskList)
            await dotask(taskList)
            await sleep(2000)
            claimList = []
            await getaskList()
            for (task of claimList) {
                console.log(`领取爱豆：${oo[task]}`)
                let clres = await get(`zxcenter/claimUserTaskAjax?taskCode=${task}`, "get")
                if (clres.status == 0) console.log(`  领取成功！获得${clres.data.totalScore}爱豆`)
            }
            console.log("去查询爱豆积分")
            let userinfo = await get("usercenter/getvipinfoAjax", "get")
            msg = `账号 【${logininfo.data.userName}】 共${userinfo.data.consume}爱豆`
        } else {
            msg = "cookie已失效"
        }
    } else {
        msg = "请填写百度爱企查cookies(同百度贴吧"
    }
    console.log(msg)
    return "【爱企查】：" + msg
}

// module.exports = aqc
aqc()