# Construct Atlas

A small public atlas for 16 x 16 pixel constructs. The app uses Vite, React, TypeScript, and Supabase, and deploys cleanly to Vercel.

## Run locally

1. Install Node.js 18+ and npm.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev`.

Without Supabase environment variables, the app uses three local demo constructs, so the interface can be reviewed immediately.

## Supabase setup

1. Create a project at Supabase.
2. Open the SQL Editor and run [supabase/schema.sql](supabase/schema.sql).
3. Copy the project URL and anon key into `.env.local` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. In Vercel, add the same variables under Project Settings > Environment Variables, then redeploy.

The current public insert policy intentionally allows anonymous submissions. For production, put inserts behind a Supabase Edge Function with an IP or fingerprint rate limiter, CAPTCHA, and payload validation. The browser only loads on page arrival; it does not subscribe to realtime changes.

## Storage note

The editor uses eight states, so each cell fits in 3 bits. 256 cells require 768 bits, or 96 bytes, before transport encoding. `encodeCells` packs eight 3-bit cells into a word and provides a compact base-36 representation for a future `encoded_cells text` column. The initial schema keeps `smallint[]` for transparent Supabase reconstruction and easy querying; converting to the packed field is a straightforward storage optimization once traffic justifies it.

## Assumptions

- “Organic” gallery navigation is represented by a bounded orbit with selectable construct nodes, loaded in one request rather than realtime.
- Timestamp ISO strings are used as construct IDs, which preserves ordering and is collision-resistant for this low-volume public flow.
- Rating is displayed but not yet interactive because no rating workflow was specified.
- The requested base and secondary colors define the UI; green, black, white, beige, and clear are added only as editor tones.# another-assignment-slop
