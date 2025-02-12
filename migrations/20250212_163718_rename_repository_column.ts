import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`projects\` RENAME COLUMN "github" TO "repository";`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_projects_media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`blur_data_u_r_l\` text DEFAULT 'data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk4vpvDAACgQFIuAF96wAAAABJRU5ErkJggg==' NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text DEFAULT '/placeholder.png' NOT NULL,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text DEFAULT 'placeholder.png' NOT NULL,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric DEFAULT 100 NOT NULL,
  	\`height\` numeric DEFAULT 100 NOT NULL,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`INSERT INTO \`__new_projects_media\`("id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y") SELECT "id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y" FROM \`projects_media\`;`)
  await db.run(sql`DROP TABLE \`projects_media\`;`)
  await db.run(sql`ALTER TABLE \`__new_projects_media\` RENAME TO \`projects_media\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`projects_media_updated_at_idx\` ON \`projects_media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_media_created_at_idx\` ON \`projects_media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`projects_media_filename_idx\` ON \`projects_media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`__new_technologies_media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`blur_data_u_r_l\` text DEFAULT 'data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk4vpvDAACgQFIuAF96wAAAABJRU5ErkJggg==' NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text DEFAULT '/placeholder.png' NOT NULL,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text DEFAULT 'placeholder.png' NOT NULL,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric DEFAULT 100 NOT NULL,
  	\`height\` numeric DEFAULT 100 NOT NULL,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`INSERT INTO \`__new_technologies_media\`("id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y") SELECT "id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y" FROM \`technologies_media\`;`)
  await db.run(sql`DROP TABLE \`technologies_media\`;`)
  await db.run(sql`ALTER TABLE \`__new_technologies_media\` RENAME TO \`technologies_media\`;`)
  await db.run(sql`CREATE INDEX \`technologies_media_updated_at_idx\` ON \`technologies_media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`technologies_media_created_at_idx\` ON \`technologies_media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`technologies_media_filename_idx\` ON \`technologies_media\` (\`filename\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`projects\` RENAME COLUMN "repository" TO "github";`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_projects_media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`blur_data_u_r_l\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`INSERT INTO \`__new_projects_media\`("id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y") SELECT "id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y" FROM \`projects_media\`;`)
  await db.run(sql`DROP TABLE \`projects_media\`;`)
  await db.run(sql`ALTER TABLE \`__new_projects_media\` RENAME TO \`projects_media\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`projects_media_updated_at_idx\` ON \`projects_media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_media_created_at_idx\` ON \`projects_media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`projects_media_filename_idx\` ON \`projects_media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`__new_technologies_media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`blur_data_u_r_l\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`INSERT INTO \`__new_technologies_media\`("id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y") SELECT "id", "blur_data_u_r_l", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y" FROM \`technologies_media\`;`)
  await db.run(sql`DROP TABLE \`technologies_media\`;`)
  await db.run(sql`ALTER TABLE \`__new_technologies_media\` RENAME TO \`technologies_media\`;`)
  await db.run(sql`CREATE INDEX \`technologies_media_updated_at_idx\` ON \`technologies_media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`technologies_media_created_at_idx\` ON \`technologies_media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`technologies_media_filename_idx\` ON \`technologies_media\` (\`filename\`);`)
}
