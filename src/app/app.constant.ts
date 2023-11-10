import { environment } from '../environments/environment';

const INSERTROOM_URL = environment.callInsertRoom_url;
const SELECTROOM_URL = environment.callSelectRoom_url;
const INSERTCUS_URL = environment.callInsertCustomer_url;
const SELECTCUS_URL = environment.callSelectCustomer_url;
const UPDATEROOM_URL = environment.callUpdateRoom_url;
const MONGODB_URL = environment.mongodb_url;



export const API_URL = {
  callInsertRoom_url: INSERTROOM_URL,
  callSelectRoom_url:SELECTROOM_URL,
  callInsertCus_url:INSERTCUS_URL,
  callSelectCus_url:SELECTCUS_URL,
  callUpdateRoom_url :UPDATEROOM_URL,
  mongodb_url : MONGODB_URL
};