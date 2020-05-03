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

    const div = document.createElement('div');

    div.textContent = txt;

    document.body.appendChild(div);

    await sleep(1000);
    console.log(Util.id, globalThis);
    await sleep(1000);
    console.log(Util.id);
    await sleep(1000);
    console.log(Util.id);
    const response = obj?.sdfsdf?.fdsf?.sdfds?.dfdsf ?? 'hello world';
    console.log(response);
}

main();