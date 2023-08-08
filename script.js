'use strict';
const adviceQuotes = document.querySelector('.advice-text');
const adviceTitle = document.querySelector('.advice-title')

const quotes = [
 "If you're going through hell, keep going and nothing is impossible", 
 "Life is 10% of what happens to you and 90% how you ract to it", 
 "All our dreams can come true if we have the courage to pursue them.", 
 "What you get by achieving your goals is not as important as whta you become by achieving your goal", 
 "If you cannot do great things do small things in a great way.", 
 "Your alent is God's gift to you. What you do with it is our gift back to God", 
 "By being yourself you put something wonderful in the world that was not there before.",
 "Caring for myself is not self indulgence, it is self-preservation, and that is an act of political walfare",
 "It takes courage to grow up and become who you really are",
 "Talk to yourslef like someone you love",
 "By being yourself you, put something wonderful in the world that was not there before",
 "Be a first-rate version of yourself, instead of a second-rate version of somebody else.",
"“For every minute you are angry you lose sixty seconds of happiness.” ",
"“There is only one happiness in this life: to love and be loved.” ",
"Joy does not simply happen to us. We have to choose joy and keep choosing it every day." ,
"Those who bring sunshine into the lives of others cannot keep it from themselves." ,
"“The greatest discovery of all time is that a person can change his future by merely changing his attitude.” ",
"“Vitality shows not only in the ability to persist but in the ability to start over.” ",
"The only person you are destined to become is the person you decide to be.",
"If you can dream it, you can do it." ,
"To improve is to change; to be perfect is to change often." ,
"If you carry joy in your heart, you can heal any moment." ,
"Be happy for this moment. This moment in your life." ,
"Do something wonderful, people may imitate it." ,
"“Everyone thinks of changing the world, but no one thinks of changing himself.” ",
"“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ",
"“Mistakes are a fact of life. It is the response to the errors that counts.” ",
"You can't cross the sea merely by standing and staring at the water.",
 "Life shrinks or expands in proportion to one’s courage.",
" “Courage doesn’t always roar. Sometimes, courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow’.” ",
"Doubt kills more dreams than failure ever will." ,
"The moment you doubt whether you can fly, you cease forever to be able to do it." ,
"With the new day comes new strength and new thoughts." ,
"You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens." ,
"What we fear of doing most is usually what we most need to do.",
"Success is not final, failure is not fatal: it is the courage to continue that counts",
"“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.” ",
"Above all, be the heroine of your life, not the victim." ,
"Let us always meet each other with a smile, for the smile is the beginning of love. ",
"“When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.” ",
"Things are never quite as scary when you've got a best friend." ,
"Never regret anything that made you smile." ,
"Try to be a rainbow in someone's cloud." ,
"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart." ,
"Love doesn't make the world go 'round. Love is what makes the ride worthwhile." ,
"“When we strive to become better than we are, everything around us becomes better too.” ",
"“Give light and people will find the way.” ",
"It is easy to sit up and take notice, whta's difficult is getting up and taking action."
]



document.querySelector('.btn').addEventListener('click', () => {

 
 const ranQuotes = Math.trunc(Math.random() * quotes.length + 1);


 adviceTitle.textContent = `ADVICE - #${ranQuotes}`;
 adviceQuotes.textContent = quotes[ranQuotes];
})