/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '..';
import uk from '../locales/uk';
import en from '../locales/en';

const faker = new Faker({
  locale: 'uk',
  localeFallback: 'en',
  locales: {
    uk,
    en,
  },
});

export = faker;