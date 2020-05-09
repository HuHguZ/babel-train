import txt from './test.txt';

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

class Util {
    static get id() {
        return Math.random();
    }
}

const obj = {

};

const main = async () => {

    //@babel/plugin-proposal-do-expressions

    // let x = 100;
    // let y = 20;
    
    // let a = do {
    //   if(x > 10) {
    //     if(y > 20) {
    //       'big x, big y';
    //     } else {
    //       'big x, small y';
    //     }
    //   } else {
    //     if(y > 10) {
    //       'small x, big y';
    //     } else {
    //       'small x, small y';
    //     }
    //   }
    // };

    // console.log(a);

    //@babel/plugin-proposal-function-bind

    // const box = {
    //     weight: 2,
    //     getWeight() { return this.weight; },
    //   };
      
    //   const { getWeight } = box;
      
    //   console.log(box.getWeight()); // prints '2'
      
    //   const bigBox = { weight: 10 };
    //   console.log(bigBox::getWeight()); // prints '10'
      
    //   // Can be chained:
    //   function add(val) { return this + val; }
      
    //   function mul(val) { return this * val; }

    //   console.log(bigBox::getWeight()::add(5)::mul(3)); // prints '15'

    //@babel/plugin-proposal-logical-assignment-operators

    // let a = 0, b = 5;

    // a ??= b;

    // console.log(a);

    //@babel/plugin-proposal-pipeline-operator
    //@babel/plugin-proposal-partial-application

    function div(x, y) { return Math.floor(x / y); }

    function double (x) { return new Promise(resolve => setTimeout(resolve, 1000, x + x)); }
    function add (x, y) { return x + y; }
    
    function boundScore (min, max, score) {
        return Math.max(min, Math.min(max, score));
    }

    const addSeven = add(7, ?);

    const boundScoreCustom = boundScore(0, 100, ?);

    const divCustom = div(?, 2);

    let person = { get score() { return Promise.resolve(25) } };

    (async () => {
        const obj = {};
        console.log(obj?.test ?? 23);
        let newScore = await person.score
            |> await double(#)
            |> await double(#)
            |> await double(#)
            |> addSeven
            |> boundScoreCustom
            |> divCustom;

        console.log(newScore);
    })();

    // const div = document.createElement('div');

    // div.textContent = txt;

    // document.body.appendChild(div);

    // await sleep(1000);
    // console.log(Util.id, globalThis);
    // await sleep(1000);
    // console.log(Util.id);
    // await sleep(1000);
    // console.log(Util.id);
    // const response = obj?.sdfsdf?.fdsf?.sdfds?.dfdsf ?? 'hello world';
    // console.log(response);
}

main();