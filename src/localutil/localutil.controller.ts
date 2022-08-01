import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

@Controller('localutil')
export class LocalutilController {
  @Get()
  localutilIndex(): string {
    return 'localutil';
  }
  @Post('upload')
  @HttpCode(201)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'c:/Users/Administrator/Desktop/localutil/uploadfiles/');
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return '上传成功';
  }
}
