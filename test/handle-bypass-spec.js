

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;

const SerialPort = require('serialport/test');

const MockBinding = SerialPort.Binding;
const handleBypass = require('../lib/handle-bypass.js');

function afterPortCalls(test, callback) {
  const port = test();
  setTimeout(() => {
    callback(port);
  }, 1000);
}

describe('Handle Bypass module', () => {
  it('resolves', (done) => {
    afterPortCalls(
      () => ({
      // Create a port and enable the echo and recording.
        const device = '/dev/test';
        MockBinding.createPort(device, {
          echo: true,
          record: true,
        });

        const program = {
          device,
        };
        return handleBypass(program);
      }),
      (port) => { // callback
        console.log(JSON.stringify(port.binding.recording));
        expect(JSON.stringify(port.binding.recording)).to.be.true;
        done();
      }
    );
  });
});
