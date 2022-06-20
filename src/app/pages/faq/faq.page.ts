import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  accordion = [
    {
      section: "I-sabi profile complaints",
      content: [
        {
          id: 11,
          question: "I tried opening an account but it is not working, what do i do?",
          answer: "null"
        },
        {
          id: 12,
          question: "How do I recover my login details?",
          answer: 'null'
        },
        {
          id: 13,
          question: "How do I change my password?",
          answer: "null"
        }
      ]
    },
    
    {
      section: "Funding complaints",
      content: [
        {
          id: 21,
          question: "How do I fund my account?",
          answer: "null"
        },
        {
          id: 22,
          question: "How do I get bonus?",
          answer: 'You get bonus funds through referrals. Your bonus funds can be used to play demo to increase your chances of winning a prize as the live game questions are gotten from the demo. You can also use your bonus funds to play live games.'
        },
        {
          id: 23,
          question: "I made a deposit to my account but no/ wrong amount was added",
          answer: "null"
        }
      ]
    },
    
    {
      section: "Withdrawal complaints",
      content: [
        {
          id: 31,
          question: "Can I withdraw my bonus funds?",
          answer: "No, you can however, use your bonus funds to play demo and live games to win prizes which you can withdraw."
        },
        {
          id: 32,
          question: "How do I withdraw?",
          answer: 'null'
        },
        {
          id: 33,
          question: "How to add/change account details",
          answer: "null"
        },
        {
          id: 34,
          question: "I made a withdrawal but I have not been credited/debited",
          answer: "null"
        },
        {
          id: 35,
          question: "What does it take to withdraw/ what is the withdrawal charge?",
          answer: "In order to withdraw, you must have the amount you’re trying to withdraw in your main account and you must have added your bank account details."
        }
      ]
    },
    
    {
      section: "Earnings complaints",
      content: [
        {
          id: 41,
          question: "How do I earn?",
          answer: "See how to earn"
        },
        {
          id: 42,
          question: "What is compensational earning?",
          answer: 'See how to earn'
        },
        {
          id: 43,
          question: "How do I earn from referrals?",
          answer: "See how to earn"
        },
        {
          id: 44,
          question: "I did not earn the amount I was supposed to earn from referrals",
          answer: "This maybe because you did not meet up with the conditions required to earn at that level for the week. If you did yet did not earn the correct amount, contact customer care."
        },
        {
          id: 45,
          question: "Can I withdraw my earnings?",
          answer: "Every earnings apart from bonus can be withdrawn"
        }
      ]
    },
    
    {
      section: "Live game complaints",
      content: [
        {
          id: 51,
          question: "Why can't I play live games?",
          answer: "You can only play live games when they are on and you have sufficient funds to play."
        },
        {
          id: 52,
          question: "How much does it cost to play live games?",
          answer: 'Live games cost fifty naira per game'
        },
        {
          id: 53,
          question: "Do the live game questions come from the demo games?",
          answer: "Yes, every live game question is gotten from the demo questions so the more you play demo games, the higher your chances of winning during the live games."
        },
        {
          id: 54,
          question: "When can I play live games?",
          answer: "You can only play live games when they are on (ie Saturdays and random pop-up games)"
        },
        {
          id: 55,
          question: "What is leaderboard?",
          answer: "A leaderboard is a least of the players with the best time for the week. The winners for the week are gotten from the leaderboard."
        },
        {
          id: 56,
          question: "Why does my name not appear on the leaderboard?",
          answer: "For your name to appear on the leaderboard, you need to answer the live game questions correctly, in a shorter time than the last person on the leaderboard."
        }
      ]
    },
    
    {
      section: "Ticket complaints",
      content: [
        {
          id: 61,
          question: "Why can't I buy a ticket?",
          answer: "To buy a ticket, the ticket has to be available and you need to have sufficient funds in an account that is not your bonus account. If you meet these criteria yet can’t buy a ticket, contact customer care."
        },
        {
          id: 62,
          question: "I bought a ticket but have not received it in my mail yet",
          answer: 'You have to ensure that you have your correct e-mail address on the account which you used to buy the ticket. You should also exercise patience because the delay could be because of network lag or no data subscription on your '
        },
        {
          id: 63,
          question: "How many tickets can I buy at once?",
          answer: "You can buy as many as you want, provided the tickets are available."
        }
      ]
    },
    
    {
      section: "Voting complaints",
      content: [
        {
          id: 71,
          question: "Help I can't vote",
          answer: "To vote, you must have funded your account with the sufficient amount."
        },
        {
          id: 72,
          question: "My favourite contestant is not listed",
          answer: "If you can't find your favourite contestant on the list of contestants for a voting event, contact customer care."
        }
      ]
    }
    
  ]
}