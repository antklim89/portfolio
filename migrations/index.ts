import * as migration_20250126_161517_init from './20250126_161517_init';
import * as migration_20250212_163718_rename_repository_column from './20250212_163718_rename_repository_column';
import * as migration_20250727_103559_add_is_published_field from './20250727_103559_add_is_published_field';

export const migrations = [
  {
    up: migration_20250126_161517_init.up,
    down: migration_20250126_161517_init.down,
    name: '20250126_161517_init',
  },
  {
    up: migration_20250212_163718_rename_repository_column.up,
    down: migration_20250212_163718_rename_repository_column.down,
    name: '20250212_163718_rename_repository_column',
  },
  {
    up: migration_20250727_103559_add_is_published_field.up,
    down: migration_20250727_103559_add_is_published_field.down,
    name: '20250727_103559_add_is_published_field'
  },
];
