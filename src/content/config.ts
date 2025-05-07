import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  dragons: defineCollection({
    loader: cldAssetsLoader({
      folder: 'Dragons',
      limit: 10,
    }),
  }),

  animals: defineCollection({
    loader: cldAssetsLoader({
      folder: 'samples/animals',
      limit: 10,
    }),
  }),

  assets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'Engagement Photos',
      limit: 200,
    }),
  }),
};
