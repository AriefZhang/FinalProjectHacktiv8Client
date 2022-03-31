import { MidtransClient } from 'midtrans-node-client'
const CLIENT_KEY = 'SB-Mid-client-yD7_B8N68TSAEE2y';
const AUTHORIZATION = 'SB-Mid-server-4uicAo5bDl73OrC29YDcG7Fg';

// import {midtransClient} from "midtrans-client";
// Midtrans.serverKey = "YOUR_SERVER_KEY";
// Midtrans.clientKey = "YOUR_CLIENT_KEY";
// Midtrans.isProduction = false;

// // CoreApi Request with global config
// JSONObject result = CoreApi.chargeTransaction(param);

// // SnapApi request with global config
// JSONObject result = SnapApi.createTransaction(param);

export let snap = new MidtransClient.Snap({
  isProduction: false,
  serverKey: AUTHORIZATION,
  clientKey: CLIENT_KEY,
});

export let core = new MidtransClient.CoreApi({
  isProduction: false,
  serverKey: AUTHORIZATION,
  clientKey: CLIENT_KEY,
});

export let apiClient = new MidtransClient.Snap({
  isProduction : false,
  serverKey : AUTHORIZATION,
  clientKey : CLIENT_KEY
});



//! HIT KE MIDTRANS

//! GET STATUS TRANSACTION
apiClient.transaction.status('59c22bce-b428-472c-a52e-8b33677cda85')
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