import { Component, OnInit } from '@angular/core';
import{Contact} from './contact';
import { ContactService } from '../contact/contactService';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:Contact;
disp:boolean;
  constructor(private contactService:ContactService) {
    this.contact=new Contact(null,null);
    this.disp=false;
   }
add(){
if(this.contact.name!=null)
{
this.contactService.contacts.push(this.contact);
this.contact=new Contact(null,null);
this.contactService.sort(this.contactService.contacts);

this.disp=false;
}
}
display(){
this.disp=true;
}
  ngOnInit(): void {
  }

}
