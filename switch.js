/* Swich statements take a single expression/value as an input,
and then look through a number of choices until
they find one that matches the stated value, and then run the corresponding code.
A pseudocode is hereunder written.


swich (expression) {
    case choice1:
        run this code 
        break;
    case choice2:
        run this code 
        break;
    case choice3:
        run this code 
        break;
    // include as many cases as you like.

    actually, just run this code.
}*/

const select = document.querySelector('select');
const comment = document.querySelector('.weatherreport');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;
 
  switch (choice) {
         case 'sunny':
          comment.innerHTML = 'The day is sunny. Let\'s go have some fun in the park.';
          break;
         case 'rainy':
            comment.innerHTML = 'It is raining; we can\'t go out today.';
            break;
         case 'snowing':
            comment.innerHTML = 'The snow is so chilling. You had better stay indoor.';
            break;
         case 'overcast':
          comment.innerHTML = 'The sky isn\'t clear enough for safe driving. We can wait till tomorrow';
          break;
          default:
            comment.innerHTML = '';
        }
  }


//   Tenary Operator

/* This is conditional test that test whether an expression is true or false.
It is most useful in the instance of YES/NO. Its pseudocode is written as follows:

(condition) ? run this code : run this code instead */

let studentName = (Taofeek) ? 'Yes, he\'s my student.' : 'No, he isn\'t my student.'



const select = document.querySelector('.bgcolor');
const html = document.querySelector('html');
document.body.style.padding = '20px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'green' ) ? update('green', 'blue') : update('blue','green');
};