import { Component, Input } from '@angular/core';

enum Link {
  LINK_ACCOUNT = "/link-account",
  INVITE_PEOPLE = "/invite-people",
  SET_GOAL = "/set-goal",
  SET_GOAL_2 = "/set-goal-2",
  STATUS = "/status"
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  listItems = [
    { title: 'Link Bank Account', link: Link.LINK_ACCOUNT, clicked: true},
    { title: 'Invite People', link: Link.INVITE_PEOPLE, clicked: false},
    { title: 'Set Goal - Part I', link: Link.SET_GOAL, clicked: false},
    { title: 'Set Goal - Part II', link: Link.SET_GOAL_2, clicked: false},
  ]
  
  selectedLink : any = this.listItems[0].link;

  handleClick( listItem : any ) {
    this.selectedLink = listItem.link;
    this.updateClick(listItem);
  }

  listenForUpdatePageEvent(link: any) {   

    if (link == Link.LINK_ACCOUNT) {
      this.selectedLink = this.listItems[0].link;
      this.updateClick(this.listItems[0]);

    } else if (link == Link.INVITE_PEOPLE) {
      this.selectedLink = this.listItems[1].link;
      this.updateClick(this.listItems[1]);

    } else if (link == Link.SET_GOAL) {
      this.selectedLink = this.listItems[2].link;
      this.updateClick(this.listItems[2]);
      
    } else if (link == Link.SET_GOAL_2) {
      this.selectedLink = this.listItems[3].link;
      this.updateClick(this.listItems[3]);

    } 
  }

  updateClick(listItem: any) {
    for (let item of this.listItems) {
      if ( item != listItem ) {
        item.clicked = false;
      } else {
        item.clicked = true;
      }
    }
  }

}
