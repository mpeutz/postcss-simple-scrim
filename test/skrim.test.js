import postcss from 'postcss';
import test    from 'ava';

var plugin = require('../index.js');
function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input, {from: undefined})
    .then( result => {
      t.deepEqual(result.css, output);
      t.deepEqual(result.warnings().length, 0);
  });
}

test('handles scrim to bottom', t => {
  return run(t,
    '.shadow { background-image: scrim(to bottom, 100px, 1); }',
    '.shadow { background-image: linear-gradient(to bottom,  rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.95) 7.5px, rgba(0, 0, 0, 0.89) 14.6px, rgba(0, 0, 0, 0.84) 20.8px, rgba(0, 0, 0, 0.79) 26.3px, rgba(0, 0, 0, 0.74) 31.2px, rgba(0, 0, 0, 0.68) 35.7px, rgba(0, 0, 0, 0.63) 39.9px, rgba(0, 0, 0, 0.58) 44px, rgba(0, 0, 0, 0.53) 48px, rgba(0, 0, 0, 0.47) 51.9px, rgba(0, 0, 0, 0.42) 55.8px, rgba(0, 0, 0, 0.37) 59.9px, rgba(0, 0, 0, 0.32) 64.1px, rgba(0, 0, 0, 0.26) 68.6px, rgba(0, 0, 0, 0.21) 73.5px, rgba(0, 0, 0, 0.16) 79px, rgba(0, 0, 0, 0.11) 85.2px, rgba(0, 0, 0, 0.05) 92.3px, rgba(0, 0, 0, 0) ); }'
  );
});

test('handles scrim 45deg', t => {
  return run(t,
    '.shadow { background-image: scrim(45deg, 100%, 1); }',
    '.shadow { background-image: linear-gradient(45deg,  rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.95) 7.5%, rgba(0, 0, 0, 0.89) 14.6%, rgba(0, 0, 0, 0.84) 20.8%, rgba(0, 0, 0, 0.79) 26.3%, rgba(0, 0, 0, 0.74) 31.2%, rgba(0, 0, 0, 0.68) 35.7%, rgba(0, 0, 0, 0.63) 39.9%, rgba(0, 0, 0, 0.58) 44%, rgba(0, 0, 0, 0.53) 48%, rgba(0, 0, 0, 0.47) 51.9%, rgba(0, 0, 0, 0.42) 55.8%, rgba(0, 0, 0, 0.37) 59.9%, rgba(0, 0, 0, 0.32) 64.1%, rgba(0, 0, 0, 0.26) 68.6%, rgba(0, 0, 0, 0.21) 73.5%, rgba(0, 0, 0, 0.16) 79%, rgba(0, 0, 0, 0.11) 85.2%, rgba(0, 0, 0, 0.05) 92.3%, rgba(0, 0, 0, 0) ); }'
  );
});

test('handles multiple backgrounds with scrim to bottom', t => {
  return run(t,
    '.shadow { background: scrim(to bottom, 6em, 1), linear-gradient(to top, #fff, transparent 3em), #f00; }',
    '.shadow { background: linear-gradient(to bottom,  rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.95) 0.4em, rgba(0, 0, 0, 0.89) 0.9em, rgba(0, 0, 0, 0.84) 1.2em, rgba(0, 0, 0, 0.79) 1.6em, rgba(0, 0, 0, 0.74) 1.9em, rgba(0, 0, 0, 0.68) 2.1em, rgba(0, 0, 0, 0.63) 2.4em, rgba(0, 0, 0, 0.58) 2.6em, rgba(0, 0, 0, 0.53) 2.9em, rgba(0, 0, 0, 0.47) 3.1em, rgba(0, 0, 0, 0.42) 3.3em, rgba(0, 0, 0, 0.37) 3.6em, rgba(0, 0, 0, 0.32) 3.8em, rgba(0, 0, 0, 0.26) 4.1em, rgba(0, 0, 0, 0.21) 4.4em, rgba(0, 0, 0, 0.16) 4.7em, rgba(0, 0, 0, 0.11) 5.1em, rgba(0, 0, 0, 0.05) 5.5em, rgba(0, 0, 0, 0) ), linear-gradient(to top, #fff, transparent 3em), #f00; }'
  );
});

test('handles multiple scrims', t => {
  return run(t,
    '.shadow { background-image: scrim(to bottom, 100px, 1), scrim(to top, 100px, 1); }',
    '.shadow { background-image: linear-gradient(to bottom,  rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.95) 7.5px, rgba(0, 0, 0, 0.89) 14.6px, rgba(0, 0, 0, 0.84) 20.8px, rgba(0, 0, 0, 0.79) 26.3px, rgba(0, 0, 0, 0.74) 31.2px, rgba(0, 0, 0, 0.68) 35.7px, rgba(0, 0, 0, 0.63) 39.9px, rgba(0, 0, 0, 0.58) 44px, rgba(0, 0, 0, 0.53) 48px, rgba(0, 0, 0, 0.47) 51.9px, rgba(0, 0, 0, 0.42) 55.8px, rgba(0, 0, 0, 0.37) 59.9px, rgba(0, 0, 0, 0.32) 64.1px, rgba(0, 0, 0, 0.26) 68.6px, rgba(0, 0, 0, 0.21) 73.5px, rgba(0, 0, 0, 0.16) 79px, rgba(0, 0, 0, 0.11) 85.2px, rgba(0, 0, 0, 0.05) 92.3px, rgba(0, 0, 0, 0) ), linear-gradient(to top,  rgba(0, 0, 0, 1) , rgba(0, 0, 0, 0.95) 7.5px, rgba(0, 0, 0, 0.89) 14.6px, rgba(0, 0, 0, 0.84) 20.8px, rgba(0, 0, 0, 0.79) 26.3px, rgba(0, 0, 0, 0.74) 31.2px, rgba(0, 0, 0, 0.68) 35.7px, rgba(0, 0, 0, 0.63) 39.9px, rgba(0, 0, 0, 0.58) 44px, rgba(0, 0, 0, 0.53) 48px, rgba(0, 0, 0, 0.47) 51.9px, rgba(0, 0, 0, 0.42) 55.8px, rgba(0, 0, 0, 0.37) 59.9px, rgba(0, 0, 0, 0.32) 64.1px, rgba(0, 0, 0, 0.26) 68.6px, rgba(0, 0, 0, 0.21) 73.5px, rgba(0, 0, 0, 0.16) 79px, rgba(0, 0, 0, 0.11) 85.2px, rgba(0, 0, 0, 0.05) 92.3px, rgba(0, 0, 0, 0) ); }'
  );
});
