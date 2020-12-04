import {requests} from "@/network/requests";

export function getHomeMultiData(){
  return requests({
    url: 'home/multidata'
  })
}
