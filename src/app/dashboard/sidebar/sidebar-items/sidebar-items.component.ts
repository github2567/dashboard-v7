import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-items',
  templateUrl: './sidebar-items.component.html'
})
export class SidebarItemsComponent {
  GroupList = [
    { Link: '', Active: 'active', Name: 'Applications' }
  ];  
  MenuList = [
    { Link: './', Active: 'active', Name: 'Users', Tag: `<user-icon></user-icon>` },
    { Link: './admin/medias', Active: 'active', Name: 'Medias', Tag: `<media-icon></media-icon>` },
    { Link: './admin/contacts', Active: 'active', Name: 'Contacts', Tag: `<contact-icon></contact-icon>` }
  ];
}
