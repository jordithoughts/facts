import parse from 'yargs-parser';

export function execute(cmd) {
  log(parser(cmd));
}
