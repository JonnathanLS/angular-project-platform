import { TestBed, async } from '@angular/core/testing'
import { LoaderService } from './loader.service'
import { LoaderInterceptor } from './loader.interceptor'
import { LoaderModule } from './loader.module'
import { HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

describe('LoaderInterceptor', ()=>{
   let loaderService:  LoaderService;
   let loaderInterceptor: LoaderInterceptor;

   beforeEach(()=>{
      const spy = jasmine.createSpyObj('LoaderService', ['start', 'stop', 'end']);
      TestBed.configureTestingModule({
         imports: [ LoaderModule ],
         providers:  [
               { provide: LoaderService, useValue: spy }
         ]
      })
      loaderService = TestBed.get(LoaderService);
      loaderInterceptor = TestBed.get(LoaderInterceptor);
   })
   it('should be built', () => {  
      expect(loaderInterceptor).toBeTruthy();
   });
   it('should call the start() and end() method of the loader service', async(()=>{
      const next: any = {
         handle: () => {
            return Observable.create(subscriber => {
               subscriber.next();
               subscriber.complete();
            });
         }
      };
      const request = new HttpRequest<any>('GET', 'https://jsonplaceholder.typicode.com/posts');
      loaderInterceptor.intercept(request, next).subscribe(() => {
         expect(loaderService.start).toHaveBeenCalled();
      }, ()=>{
         expect(loaderService.end).toHaveBeenCalled();
      });   
   }))
   it("should throw an exception and call the loader service's end () method", async(()=>{
      const next: any = {
         handle: () => {
               return Observable.create(subscriber => {
                  subscriber.error();
               });
         }
      };
      const request = new HttpRequest<any>('GET', '');
      loaderInterceptor.intercept(request, next).subscribe(() => {}, error => {
         expect(error).toBeTruthy();
      }, ()=>{
         expect(loaderService.end).toHaveBeenCalled();
      });    
   }))
})