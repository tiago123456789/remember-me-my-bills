import { GoogleSpreadsheet } from 'google-spreadsheet'

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

const getRows = async () => {
    const doc = await getDoc()
    const sheet = doc.sheetsByIndex[0]
    return sheet.getRows();
}

export {
    getRows
}