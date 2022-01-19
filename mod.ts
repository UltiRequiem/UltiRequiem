/*
 * I have an action that I need to keep running,
 * but GitHub disables it because this repository
 * has more than 60 days of inactivity.
 *
 * So this is file is just to commit something occasionally.
 */

import xkcd from "https://deno.land/x/xkcd/mod.ts";
import randomNumber from "https://deno.land/x/random_number/mod.ts";

const latestComic = await xkcd();

const comicMetadata = await xkcd(
  randomNumber({ integer: true, max: latestComic.num }),
);

console.log(comicMetadata);
