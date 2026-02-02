/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    category: string,
  ): Promise<string> {
    try {
      const b64 = file.buffer.toString('base64');
      const dataUri = `data:${file.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataUri, {
        folder: `zap_shift/${category}`,
        resource_type: 'image',
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return result.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async deleteImage(imageUrl: string): Promise<void> {
    try {
      const urlParts = imageUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const publicId = fileName.split('.')[0];

      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      throw new InternalServerErrorException('Failed to delete image');
    }
  }
}
