import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankFilter'
})
export class BankFilterPipe implements PipeTransform {
  transform(banks: any[], search: string): any[] {
    if (!banks) return [];
    if (!search) return banks;
    search = search.toLowerCase();
    return banks.filter(bank => bank.bankName.toLowerCase().includes(search));
  }
}
