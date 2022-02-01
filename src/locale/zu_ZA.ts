/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '..';
import zu_ZA from '../locales/zu_ZA';
import en from '../locales/en';

const faker = new Faker({
  locale: 'zu_ZA',
  localeFallback: 'en',
  locales: {
    zu_ZA,
    en,
  },
});

export = faker;