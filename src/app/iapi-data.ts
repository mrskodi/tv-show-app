// Define the data that needs to be extracted from the API
// The format of the Interface should exactly be the same as the API data
export interface IapiData {
    id:number,
    url: string,
    name: string,
    language: string
    schedule: {
      time: number,
      days: string[]
    },
    network: {
       name: string
     }
    image: {
      medium: string
    },
    summary: string
  
  
}
