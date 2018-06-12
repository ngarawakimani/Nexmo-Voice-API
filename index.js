const privateKey = require('fs').readFileSync('private.key');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: 'e50a26cd',
    apiSecret: '02417db8805a9d4b',
    applicationId: '1bc393f3-c9ce-4735-b1fb-6a44ee8295a1',
    privateKey: privateKey
});

nexmo.calls.create({
    to: [
            {
                type: 'phone',
                number: process.argv[2] // take a phone number from command line argument
            }
        ],
    from: {
        type: 'phone',
        number: '254724088765' // your virtual number
    },
    answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
}, (err, res) =>{
    if(err) {
        console.error(err);
    }
    else {
        console.log(res);
    }
}
);
    