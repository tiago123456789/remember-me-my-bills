import axios from "axios"

const getBillsToNotify = (rows) => {
    let bills = [];
    const currentDate = new Date();
    currentDate.setUTCHours(0)
    currentDate.setUTCMinutes(0)
    currentDate.setUTCSeconds(0)
    currentDate.setUTCMilliseconds(0)
    for (let index = 0; index < rows.length; index++) {
        const isNotifyToPayBill = new Date(rows[index].DueDate).getTime() == currentDate.getTime();
        if (isNotifyToPayBill) {
            bills.push(`Bill => ${rows[index].Name} | Due => ${rows[index].DueDate} | Price => ${rows[index].Value}`)
        }
    }

    return bills;
}

const notifyBillsToPay = async (messageToNotify) => {
    if (messageToNotify.length > 0) {
        return axios.post(process.env.DISCORD_WEBHOOK_URL,
            {
                content: `Good morning! You @here have bills to pay today\n${messageToNotify}`
            })
    }

    return;
}

export {
    notifyBillsToPay,
    getBillsToNotify
}