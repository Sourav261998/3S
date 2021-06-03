import { Component,OnInit  } from '@angular/core';  
import { FormGroup, FormControl, FormArray, FormBuilder ,Validators} from '@angular/forms' ;
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ServicesService} from '../services/services.service';
@Component({  
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})  
export class   AddDetailsComponent implements OnInit{  
  name = 'Angular';  
    
  productForm: FormGroup;  
     
  constructor(private activatedRouter:ActivatedRoute, 
    private fb:FormBuilder,
    private router:Router,
    private sr:ServicesService) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }  
  ngOnInit() {
    this.sr.getAllRecord().subscribe((records:any) =>{
    this.recordDisplay(records);
    })
  }
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '', 
      id:'' 
    })  
  }  
     
  addQuantity() {  
   
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(name:any) {  
    alert(name);
    this.quantities().removeAt(name);  
  }
     
  onSubmit() {
    let x=this.productForm.value;
    let totaiqun=x.quantities;
    let payload;
    totaiqun.map((a:any) =>{
      if(!a.id){
        payload=a;
      }
    }) 
    this.sr.addQuantity(payload).subscribe((records:any) =>{
      this.recordDisplay(records);
    }) 
    console.log(this.productForm.value);  
  }
  detailQuantity(i:number){

    this.router.navigate(["details"]);
  }
    private recordDisplay(records:any){
      if(records.success){
        this.quantities().setValue([]);
        records.data.map((a:any) =>{
          this.quantities().push(this.fb.group({qty:a.qty,price:a.price,id:a.id
          }));
        });
       
      }
    }
   
  //updateQuantity(i:number){}

}