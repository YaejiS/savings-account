import { Component, Input } from '@angular/core';

enum Link {
  LINK_ACCOUNT = "/link-account",
  INVITE_PEOPLE = "/invite-people",
  SET_GOAL = "/set-goal"
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  // clicked = false;

  listItems = [
    { title: 'Link Bank Account', link: Link.LINK_ACCOUNT, clicked: true},
    { title: 'Invite People', link: Link.INVITE_PEOPLE, clicked: false},
    { title: 'Set Goal', link: Link.SET_GOAL, clicked: false}
  ]
  
  selectedLink : any = this.listItems[0].link;

  handleClick( listItem : any ) {
    this.selectedLink = listItem.link;
    this.updateClick(listItem);
    // listItem.clicked = !listItem.clicked
  }

  listenForUpdatePageEvent(link: any) {   
    console.log("LINK: " + link);

    if (link == Link.LINK_ACCOUNT) {
      this.selectedLink = this.listItems[0].link;
      this.updateClick(this.listItems[0]);
      console.log("LINK ACCOUNT: " + this.listItems[0].title);

    } else if (link == Link.INVITE_PEOPLE) {
      this.selectedLink = this.listItems[1].link;
      this.updateClick(this.listItems[1]);

      console.log("INVITE PEOPLE: " + this.listItems[1].title);

    } else {
      this.selectedLink = this.listItems[2].link;
      this.updateClick(this.listItems[2]);

      console.log("SET GOAL: " + this.listItems[2].title);
      console.log("SELECTED ITEM: " + this.selectedLink);
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
