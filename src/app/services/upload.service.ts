import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadFile(file): any {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAT2QYZCZEQJ74R5DA',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const params = {
          Bucket: 'heroeshackaton',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };

      return new Promise((resolve, reject) => {
        bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              resolve(err);
          }
          resolve(data['Location']);
      });
      })

     
    }
}
