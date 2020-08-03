import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contactService';
import{Contact} from '../contact/contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  dummy:Contact[];
  dum:string;
  s:string;
 searched:Contact[];
 sea:boolean;
 count:number;
 content:boolean;
 disp:boolean;
  constructor(private contactService:ContactService) { 
   
    this.contacts=[];
    this.searched=[];
    this.contacts=this.contactService.contacts;
   
this.sea=false;
this.count=0;
this.content=false;
this.disp=false;
  }
  

 
delete(del:Contact){
  this.dummy=[];
  for(let index=0;index<this.contacts.length;index++)
  {
    if(this.contacts[index].name!=del.name)
    {
      this.dummy.push(this.contacts[index]);
    }
    
  }
  this.contacts=this.dummy;
  this.dummy=[];
  for(let index=0;index<this.searched.length;index++)
  {
    if(this.searched[index].name!=del.name)
    {
      this.dummy.push(this.searched[index]);
    }
    
  }
  this.searched=this.dummy;
 

}
display(cntName:string){
this.disp=true;
this.dum=cntName;
}
update(nName:string,nNum:number){
  for(let index=0;index<this.contacts.length;index++)
  {
    if(this.contacts[index].name==this.dum)
    {
      this.contacts[index].name=nName;
      this.contacts[index].num=nNum;
      break;
    }
    
  }
  for(let index=0;index<this.searched.length;index++)
  {
    if(this.searched[index].name==this.dum)
    {
      this.searched[index].name=nName;
      this.searched[index].num=nNum;
      break;
    }
    
  }
  this.dum=null;
  this.disp=false;
}
  search(){
    this.content=false;
    if(this.s!="")
    {
      this.sea=true;
    }
    this.searched=[];
     for(let index=0;index<this.contacts.length;index++)
     {
       if(this.s==this.contacts[index].name)
       {
         this.searched.push(this.contacts[index]);
         this.count++;
       }
     }
     if(this.count==0)
     {
this.content=true;
     }
     this.count=0;
  }

  ngOnInit(): void {
  }

}
