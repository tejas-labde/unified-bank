import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  bankAccounts = [
  {
    id:1,
    bank: 'Kotak Bank',
    accountNumber: 'XXXXXX1234',
    balance: 25000,
    currency: 'INR',
    transactions: [
      {
        id: 1,
        date: '2024-07-01',
        description: 'Salary Credit',
        amount: 50000,
        type: 'Credit'
      },
      {
        id: 2,
        date: '2024-07-05',
        description: 'Grocery Shopping',
        amount: -5000,
        type: 'Debit'
      },
      {
        id: 3,
        date: '2024-07-10',
        description: 'Electricity Bill',
        amount: -3000,
        type: 'Debit'
      },
      {
        id: 4,
        date: '2024-07-15',
        description: 'Dining Out',
        amount: -2000,
        type: 'Debit'
      },
      {
        id: 5,
        date: '2024-07-20',
        description: 'Internet Bill',
        amount: -1000,
        type: 'Debit'
      }
    ]
  },
  {
    id:2,
    bank: 'ICICI Bank',
    accountNumber: 'XXXXXX5678',
    balance: 35000,
    currency: 'INR',
    transactions: [
      {
        id: 1,
        date: '2024-07-03',
        description: 'Freelance Payment',
        amount: 20000,
        type: 'Credit'
      },
      {
        id: 2,
        date: '2024-07-07',
        description: 'Restaurant Bill',
        amount: -4000,
        type: 'Debit'
      },
      {
        id: 3,
        date: '2024-07-10',
        description: 'Travel Expense',
        amount: -5000,
        type: 'Debit'
      },
      {
        id: 4,
        date: '2024-07-15',
        description: 'Mobile Recharge',
        amount: -1000,
        type: 'Debit'
      },
      {
        id: 5,
        date: '2024-07-18',
        description: 'Online Shopping',
        amount: -6000,
        type: 'Debit'
      }
    ]
  },
  {
    id:3,
    bank: 'HDFC Bank',
    accountNumber: 'XXXXXX9101',
    balance: 45000,
    currency: 'INR',
    transactions: [
      {
        id: 1,
        date: '2024-07-02',
        description: 'Stock Dividend',
        amount: 10000,
        type: 'Credit'
      },
      {
        id: 2,
        date: '2024-07-08',
        description: 'Fuel Expense',
        amount: -2000,
        type: 'Debit'
      },
      {
        id: 3,
        date: '2024-07-12',
        description: 'Online Shopping',
        amount: -7000,
        type: 'Debit'
      },
      {
        id: 4,
        date: '2024-07-16',
        description: 'Gym Membership',
        amount: -3000,
        type: 'Debit'
      },
      {
        id: 5,
        date: '2024-07-22',
        description: 'Dining Out',
        amount: -1500,
        type: 'Debit'
      }
    ]
  }
]

itemClicked: boolean = false;
clickedItem={
  bank:'',
  accountNumber: '',
    balance: 0,
    currency: '',
    transactions: [
      {
        id:0,
        date:'',
        description:'',
        amount:0,
        type:''
      }
    ]
};

constructor(private router:Router) { }

ngOnInit(): void {
}

onItemClick(element: any){
  console.log(element);
    this.itemClicked = true;
    this.clickedItem=element;
}

onLogoutClick(){
  this.router.navigate(['']);
}
}
