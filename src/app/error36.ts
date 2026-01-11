import { HttpClient } from "@angular/common/http";
export class Error36 {
constructor(private http:HttpClient){}
async method(){
const data=await this.http.get("/api").toPromise()
console.log(data)
}
}
