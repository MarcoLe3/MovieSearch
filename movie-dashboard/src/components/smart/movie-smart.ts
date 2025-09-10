import { HttpRequest } from "@angular/common/http";

export class Remote {

    async searchMovie(){
        const url = ``;

        this.http.get(url).subscribe(
            ()=>{

            };
            (err)=>{
                console.log(err)
            };
        );
    }
}