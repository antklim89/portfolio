import * as migration_20250126_161517_init from './20250126_161517_init';
import * as migration_20250212_163718_rename_repository_column from './20250212_163718_rename_repository_column';

export const migrations = [
  {
    up: migration_20250126_161517_init.up,
    down: migration_20250126_161517_init.down,
    name: '20250126_161517_init',
  },
  {
    up: migration_20250212_163718_rename_repository_column.up,
    down: migration_20250212_163718_rename_repository_column.down,
    name: '20250212_163718_rename_repository_column'
  },
];
