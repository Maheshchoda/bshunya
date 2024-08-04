import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getPlaiceholder } from 'plaiceholder';

const readFile = promisify(fs.readFile);

export default async function getBase64(imageId: string) {
  try {
    // Construct the absolute path to the image
    const imagePath = path.resolve('public', 'BshunyaImages', `${imageId}.webp`);

    // Read the image file as a buffer
    const buffer = await readFile(imagePath);

    // Use Plaiceholder to get the base64 string
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error reading the file:', error.stack);
    }
  }
}
