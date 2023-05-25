import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit{
  formdata:any;
  results:any;
  id:any;

  Data:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.id = 0;
    this.load();

    this.api.getdata().subscribe((result:any)=>{
      this.Data = result.map(function (user:any) {
        return user.name;
      });
    })

  }

  load(){
    this.formdata = new FormGroup({
      name:new FormControl(""),
      createdAt:new FormControl(""),
      university:new FormControl("")
    })
    this.api.get("usersCrud").subscribe((result:any)=>{
      this.results = result;
    })

  }

  submit(data:any){
    if(this.id == 0){
      this.api.post("usersCrud",data).subscribe((result:any)=>{
        this.load();
      })
    }
    else{
      this.api.put("usersCrud/" + this.id,data).subscribe((result:any)=>{
        this.load();
      })
    }
  }

  edit(id:any){
    this.id = id;
    this.api.edit("usersCrud/" + this.id).subscribe((result:any)=>{
      console.log(result);

      this.formdata.patchValue({
        name : result.name,
        createdAt : result.createdAt,
        university:result.university
      })
    })
  }

  delete(id:any){
    this.api.delete("usersCrud/" + id).subscribe((result:any)=>{
      this.load();
    })
  }

  cancel(){
    this.ngOnInit();
  }

}
