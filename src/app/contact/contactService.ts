import{Contact} from './contact';

export class ContactService{
    contact:Contact;
    contacts:Contact[];
    dum:Contact;
    constructor(){
        this.contacts=[];
        this.dum=new Contact(null,null);
        this.contact=new Contact("Shamu",8952842478); 
        this.contacts.push(this.contact);
        this.contact=new Contact("Ramu",7542186978); 
        this.contacts.push(this.contact);
        this.sort(this.contacts);
    }
    sort(contacts:Contact[]){
        for(let index=0;index<this.contacts.length-1;index++)
        {
          for(let i=index+1;i<this.contacts.length;i++)
          {
             if(this.contacts[index].name>this.contacts[i].name)
             {
               this.dum=this.contacts[index];
               this.contacts[index]=this.contacts[i];
               this.contacts[i]=this.dum;
             }
          }
        }
    
      }
}