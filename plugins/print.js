const {
  bot,
} = require('../lib/');

bot(
  {
    pattern: 'print ?(.*)',
    desc: 'Print a message prefixed with [PilaBot]',
    type: 'utility',
  },
  async (message, match) => {
    if (!match) {
      return await message.send('*Usage: .print <message>*');
    }
    const response = `[PilaBot] ${match}`;
    return await message.send(response);
  }
);

