import { getRows } from "../../backend/GoogleSheet"
import { notifyBillsToPay, getBillsToNotify } from "../../backend/Bill"

export default async function handler(
    request,
    response
) {

    const key = request.body.key;
    if (key !== process.env.VALIDATE_KEY) {
        response.status(200).json();
        return;
    }

    const rows = await getRows()
    const messageToNotify = getBillsToNotify(rows)
    await notifyBillsToPay(messageToNotify.join("\n"))
    
    response.status(200).json();
}
