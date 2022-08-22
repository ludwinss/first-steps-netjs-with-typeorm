import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map, Observable } from "rxjs";

interface ClassType<T> {
    new(): T
}

export class MapperInterceptor<T> implements NestInterceptor<Partial<T>, T>{
    constructor(private readonly classType: ClassType<T>) { };
    intercept(context: ExecutionContext, next: CallHandler<Partial<T>>): Observable<T> | Promise<Observable<T>> {
        return next.handle().pipe(map(data => plainToClass(this.classType, data)))
    }
}


export class castToDTO<T>{
    constructor(private readonly classType: ClassType<T>) { }

    public plainToClass(data: any) {
        return plainToClass(this.classType, data, { excludeExtraneousValues: true })
    }

}