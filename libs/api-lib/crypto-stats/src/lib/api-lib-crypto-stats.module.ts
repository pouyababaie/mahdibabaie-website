import {Module} from '@nestjs/common';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {HttpInterceptor} from "./http-interceptor/http.interceptor";
import {HttpModule} from "@nestjs/axios";

@Module({
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor
    }
  ],
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5
  })],
  exports: [],
})
export class ApiLibCryptoStatsModule {
}
