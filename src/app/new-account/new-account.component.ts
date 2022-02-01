import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LogggingService } from '../logging/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogggingService, AccountsService]
})
export class NewAccountComponent {

  constructor(private loggingService: LogggingService, private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
