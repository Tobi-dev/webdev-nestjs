import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const header = req.headers["content-type"];

    if(header !== "application/json"){
      throw new HttpException("unknown content type", HttpStatus.BAD_REQUEST)
    }

    next();
  }
}
