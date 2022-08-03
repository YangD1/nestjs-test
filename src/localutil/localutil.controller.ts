import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpCode,
  Bind,
  Res,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import * as dayjs from 'dayjs';

@Controller('localutil')
export class LocalutilController {
  @Get()
  localutilIndex(): string {
    console.log(process.env.FILEPATH);
    return 'localutil';
  }

  /**
   * 文件上传
   */
  @Post('upload')
  @HttpCode(201)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, process.env.FILEPATH);
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

  /**
   * 文字上传
   */
  @Post('text')
  @Bind(Res(), Body())
  textSave(res: any, body: any): void {
    console.log(body);
    const newName: number = dayjs(new Date()).unix();
    fs.writeFile(
      process.env.FILEPATH + newName + '.txt',
      body.text,
      { flag: 'a' },
      function (err) {
        if (err) {
          throw err;
        }
        // console.log('Hello.');
        // 写入成功后读取测试
        // fs.readFile(
        //   'c:/Users/Administrator/Desktop/localutil/uploadfiles/' +
        //     newName +
        //     '.txt',
        //   function (err, data) {
        //     if (err) {
        //       throw err;
        //     }
        //     console.log(data);
        //   },
        // );
      },
    );
    res.status('201').send({ msg: '创建成功' });
  }
}
