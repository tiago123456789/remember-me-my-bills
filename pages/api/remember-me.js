import { getRows } from "../../backend/GoogleSheet"
import { notifyBillsToPay, getBillsToNotify } from "../../backend/Bill"

export default async function handler(
    request,
    response
) {

    if (request.query.key !== process.env.VALIDATE_KEY) {
        response.status(200).json();
        return;
    }

    const rows = await getRows()
    const messageToNotify = getBillsToNotify(rows)
    await notifyBillsToPay(messageToNotify.join("\n"))
    
    response.status(200).json();
}
