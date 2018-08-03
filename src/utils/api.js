import axios from 'axios'
import * as Types from './../constants/ApiCall'

export default function API(endpoint,method='get',body){
   return axios({
      method: method,
      url: `${Types.API_URL}/${endpoint}`,
      data: body
   })
   .catch(err => console.log(err))
}