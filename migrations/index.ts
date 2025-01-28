import * as migration_20250126_161517_init from './20250126_161517_init';


export const migrations = [
  {
    up: migration_20250126_161517_init.up,
    down: migration_20250126_161517_init.down,
    name: '20250126_161517_init',
  },
];
