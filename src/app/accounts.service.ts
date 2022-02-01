import { EventEmitter, Injectable } from "@angular/core";
import { LogggingService } from "./logging/logging.service";

@Injectable({ providedIn: 'root' })
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LogggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
