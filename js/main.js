var allquote = [
    {
        'author': 'Marilyn Monroe',
        'quote': 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best'
    }
    ,
    {
        'author': ' J.M. Barrie, Peter Pan',
        'quote':'All the world is made of faith, and trust,and pixie dust'
    },
    {
        'author': 'J.R.R. Tolkien',
        'quote': 'Faithless is he that says farewell when the road darkens.'
    },
    {
        'author': ' Edgar Allan Poe',
        'quote': 'I have great faith in fools - self-confidence my friends will call it.'
    },
    {
        'author': ' Ralph Waldo Emerson',
        'quote': 'For every minute you are angry you lose sixty seconds of happiness.'
    },
    {
        'author': 'Ernest Hemingway',
        'quote': 'Happiness in intelligent people is the rarest thing I know.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': ' Anthony G. Oettinger',
        'quote': 'Time flies like an arrow; fruit flies like a banana..'
    }
  
]
function getQuote()
{
     var random = Math.floor( Math.random()*allquote.length + 1);
    document.getElementById('quote').innerHTML = `\"${allquote[random].quote}\"`;
    document.getElementById('author').innerHTML = `--${allquote[random].author}`;
}
