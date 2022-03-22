const CLIENT_KEY = 'SB-Mid-client-yD7_B8N68TSAEE2y';
const AUTHORIZATION = 'SB-Mid-server-4uicAo5bDl73OrC29YDcG7Fg';

const midtransClient = require("midtrans-client");

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: AUTHORIZATION,
  clientKey: CLIENT_KEY,
});

let core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: AUTHORIZATION,
  clientKey: CLIENT_KEY,
});

let apiClient = new midtransClient.Snap({
  isProduction : false,
  serverKey : AUTHORIZATION,
  clientKey : CLIENT_KEY
});

// module.exports = { snap, core, apiClient };

//! HIT KE MIDTRANS

//! GET STATUS TRANSACTION
apiClient.transaction.status('OTOSIC-02-1647788435530-2')
.then((resp) => console.log(resp, '<<<<< STATUS >>>>>'))
.catch(err => console.log(err.ApiResponse, '<<<<< ERROR STATUS >>>>>'))

//! REGISTER CARD FIRST PAYMENT
const payload = {
  client_key: CLIENT_KEY,
  card_number: '5211111111111117',
  card_cvv: '123',
  card_exp_month: '12',
  card_exp_year: '2025'
}

core.cardToken(payload)
.then(resp => console.log(resp, '<<<<< CARD >>>>>'))
.catch(err => console.log(err.ApiResponse, '<<<<< CARD ERROR >>>>>'))

//! REGISTER CARD NEXT PAYMENT
const params = {
  client_key: CLIENT_KEY,
  token_id: '521111bOTBrmSVloNsxMrGjcCUol1117',
  card_cvv: '123',
}

core.cardToken(params)
.then(resp => console.log(resp, '<<<<< NEXT CARD >>>>>'))
.catch(err => console.log(err.ApiResponse, '<<<<< NEXT CARD ERROR >>>>>'))
