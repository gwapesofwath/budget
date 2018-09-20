import React from "react";
import "./tips.css";

class Tips extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      tipArr: [
        'Build an emergency fund. It can make all the difference. Low-income families with at least $500 in an emergency fund are better off financially than moderate-income families with less saved up.',
      
        'Establish your budget. Are you looking for an easy way to begin? On the first day of a new month, get a receipt for everything you purchase. Stack the receipts into categories like restaurants, groceries, and personal care. At the end of the month you will be able to clearly see where your money is going.',
      
        'Budget with cash and envelopes. If you have trouble with overspending, try the envelope budget system where you use a set amount of cash for most spending. And once the cash is gone, its gone.',
      
        'Do not just save money, save. There’s a difference between saving money and saving money for your future. So don’t just spend less, put the money you save into a savings account to plan for college expenses, retirement, or emergencies that can leave you financially better off.',
      
        'Save automatically. Setting up automatic savings is the easiest and most effective way to save, and it puts extra cash out of sight and out of mind. Every pay period, have your employer deduct a certain amount from your paycheck and transfer it to a retirement or savings account. Ask your HR representative for more details about how to set this up. Or every month, have your bank or credit union transfer a fixed amount from your checking account to a savings or investment account.',
      
        'Aim for short-term savings goals. Make a goal such as setting aside $20 a week or month, rather than a longer term savings goal. People save more successfully when they keep short-term goals in sight.',
      
        'Start saving for your retirement as early as possible. Few people get rich through their wages alone. Its the miracle of compound interest, or earning interest on your interest over many years, that builds wealth. Because time is on their side, the youngest workers are in the best position to save for retirement.',
      
        'Take full advantage of employer matches to your retirement plan. Often as an incentive, employers will match a certain amount of what you save in a retirement plan such as a 401(k). If you dont take full advantage of this match, you are leaving money on the table. ',
      
        'Save your windfalls and tax refunds. Every time you receive a windfall, such a work bonus, inheritance, contest winnings, or tax refund, put a portion into your savings account.',
      
        'Place a savings reminder on your card. Remind yourself to think through every purchase by covering your card with a savings message, such as "Do I really need this?" Write the message on a piece of masking tape or colorful washi tape on your card.',
      
        'Calculate purchases by hours worked instead of cost. Take the amount of the item you are considering purchasing and divide it by your hourly wage. If its a $50 pair of shoes and you make $10 an hour, ask yourself if those shoes are really worth five long hours of work.',
      
        'Unsubscribe. Avoid temptation by unsubscribing from marketing emails to the stores you spend the most money at. By law, each email is required to have an unsubscribe link, usually at the bottom of the email.',
      
        'Participate in a local Investment Development Account (or IDA) program. If your income is low, you may be eligible to participate in an IDA program where your savings are matched. In return for attending financial education sessions and planning to save for a home, education, or business, you typically receive at least $1 for every $1 you save, and sometimes much more. That means $25 saved each month could become several hundred dollars by the end of the year.',
      
        'Use the 24 hour rule. This rules helps avoid purchasing expensive or unnecessary items on impulse. Think over each nonessential purchase for at least 24 hours. This is particularly easy to do while shopping online, because you can add items to your cart or wish list and come back to them a day later.',
      
        'Start with a goal of reducing your credit card debt by just $1,000. That $1,000 debt reduction will probably save you $150-200 a year in interest, and much more if you are paying penalty rates of 20-30 percent.',
      
        'Use only the ATMs of your bank or credit union. Using the ATM of another financial institution once a week might seem like no big deal, but if its costing you $3 for each withdrawal, thats more than $150 over the course of a year.',
      
        'Pay all of your bills on auto-pay. This ensures they are paid on time, in full to avoid late charges. As a bonus, some loan providers offer a small interest rate deduction if you enroll in auto-pay.',
      
        'Start saving for college at the baby shower. Its never too soon to start a college savings account for junior. Ask for contributions to a college fund instead of clothing and toy gifts for your new baby.',
      
        'Dont buy cheap clothes for cheaps sake. It sometimes make sense to prioritize quality over price when purchasing clothes for the family. An inexpensive shirt or coat is a poor bargain for older family members if it wears out in less than a year, but could make sense for quickly growing children. Consider fabric, stitching, washability, and other quality related factors in your selection of clothes.',
      
        'Designate one day a week a "no spend day." Reserve one night a week for free family fun. Cook at home, and plan out free activities such as game night, watching a movie, or going to the park.',
      
        'Brown bag your lunch. The reason you hear this tip so much is that it works! If buying lunch at work costs $5, but making lunch at home costs only $2.50, then in a year, you could afford to create a $500 emergency fund and still have money left over.',
      
        'Commit to eating out one fewer time each month. Save money without sacrificing your lifestyle by taking small steps to reduce your dining budget. Start off with reducing the amount you eat out by just once per month.',
      
        'Plan your meals in advance and stick to a list while grocery shopping. People who do food shopping with a list, and buy little else, spend much less money than those who decide what to buy when they get to the food market. The annual savings could easily be hundreds of dollars.',
      
        'Stick to water. It’s standard in the restaurant industry to mark up the cost of alcohol by three to five times. So an easy way to cut down on your restaurant spending without changing your habits too drastically is to skip the beverages, alcoholic and non-alcoholic.',
      
        'Purchase store brand over-the-counter medications. Store brand medications often cost 20-40 percent less than nationally advertised brands, but are the exact same formula. The premium you are paying on brand names is for nothing but the marketing.',
      
        'Audit your home energy use. Ask your local electric or gas utility for a free or low-cost home energy audit. The audit may reveal inexpensive ways to reduce home heating and cooling costs by hundreds of dollars a year. Keep in mind that a payback period of less than three years, or even five years, usually will save you lots of money in the long-term.',
      
        'Cut laundry detergent and dryer sheet use in half. The laundry detergent sold today is usually highly concentrated and powerful. Use the smallest suggested amount, and often you can use less than what is on the bottle and still get clean clothes. In many cases, using less actually washes more effectively because there is no leftover soap in your clothes. And tearing your dryer sheets in half gives the same result for half the price.',
      
        'Lower the temperature on your water heater to 120 degrees. For every 10 degree reduction in temperature, you can save up to 5 percent on water heating costs.',
      ],
      currentTip: ""
    }
  }
  // function for randomizing, then set state
  shuffleTips = () => {
    let currentTip = this.state.tipArr;
    let spot = Math.floor(Math.random() * this.state.tipArr.length);
    this.setState({currentTip: currentTip[spot]});
  }
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-8 blue offset-2">
            <button onClick={this.shuffleTips}>Get a savings tip</button>
            <div><h5>{this.state.currentTip}</h5></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tips;