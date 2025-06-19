import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  vids: defineCollection({
    loader: cldAssetsLoader({
      folder: 'Wedding Video',
      limit: 10,
      resourceType: 'video',
    }),
  }),

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
